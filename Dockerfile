# Multi-stage build for Sheikh Agent
FROM node:18-alpine AS frontend-builder

WORKDIR /app/frontend
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Python backend stage
FROM python:3.11-slim AS backend-builder

WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Final production image
FROM python:3.11-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    ca-certificates \
    chromium \
    && rm -rf /var/lib/apt/lists/*

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV PLAYWRIGHT_BROWSERS_PATH=/opt/playwright
ENV CHROMIUM_PATH=/usr/bin/chromium

WORKDIR /app

# Copy Python dependencies
COPY --from=backend-builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --from=backend-builder /usr/local/bin /usr/local/bin

# Copy frontend build
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

# Copy application code
COPY . .

# Create non-root user
RUN useradd -m -u 1000 sheikh && chown -R sheikh:sheikh /app
USER sheikh

# Expose ports
EXPOSE 5173 8000 8080 5900 9222

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1

# Start command
CMD ["python", "main.py"]
