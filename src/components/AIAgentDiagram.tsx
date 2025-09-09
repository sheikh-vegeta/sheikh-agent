"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Zap,
  Target,
  Database,
  Globe,
  Users,
  TrendingUp,
  ArrowRight,
  Cpu,
  Network,
  Eye,
  Settings,
  Chrome,
  MousePointer,
  Code,
  GitBranch,
  RotateCcw,
  Workflow,
  Container,
  Server,
  Layers,
  Clock,
} from "lucide-react"

interface AgentNode {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  position: { x: number; y: number }
  connections: string[]
}

const agentNodes: AgentNode[] = [
  {
    id: "core",
    title: "Core AI Engine",
    description: "Gemini-powered central processing unit with strategic planning capabilities",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-purple-500",
    position: { x: 50, y: 10 },
    connections: ["planning", "decision", "learning"],
  },
  {
    id: "planning",
    title: "Strategic Planning",
    description: "Task decomposition and workflow orchestration",
    icon: <Target className="w-6 h-6" />,
    color: "bg-blue-500",
    position: { x: 20, y: 25 },
    connections: ["execution", "monitoring"],
  },
  {
    id: "decision",
    title: "Real-time Decision Making",
    description: "Dynamic adaptation and intelligent routing",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-yellow-600",
    position: { x: 80, y: 25 },
    connections: ["execution", "learning"],
  },
  {
    id: "learning",
    title: "Adaptive Learning",
    description: "Continuous improvement and personalization",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "bg-green-500",
    position: { x: 50, y: 40 },
    connections: ["memory", "optimization"],
  },
  {
    id: "execution",
    title: "Task Execution",
    description: "Multi-domain task processing and automation",
    icon: <Settings className="w-6 h-6" />,
    color: "bg-red-500",
    position: { x: 50, y: 55 },
    connections: ["adk", "browser"],
  },
  {
    id: "adk",
    title: "ADK Framework",
    description: "Agent Development Kit for multi-agent orchestration and deployment",
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-slate-600",
    position: { x: 50, y: 70 },
    connections: ["sequential", "parallel", "loop", "llm"],
  },
  {
    id: "sequential",
    title: "Sequential Agent",
    description: "Executes sub-agents in strict order - perfect for code pipelines",
    icon: <ArrowRight className="w-6 h-6" />,
    color: "bg-blue-600",
    position: { x: 20, y: 85 },
    connections: ["codewriter", "reviewer", "refactorer"],
  },
  {
    id: "parallel",
    title: "Parallel Agent",
    description: "Concurrent execution for independent tasks - ideal for research",
    icon: <GitBranch className="w-6 h-6" />,
    color: "bg-green-600",
    position: { x: 50, y: 85 },
    connections: ["researcher1", "researcher2", "researcher3"],
  },
  {
    id: "loop",
    title: "Loop Agent",
    description: "Iterative refinement until termination condition - document improvement",
    icon: <RotateCcw className="w-6 h-6" />,
    color: "bg-orange-600",
    position: { x: 80, y: 85 },
    connections: ["critic", "refiner"],
  },
  {
    id: "llm",
    title: "LLM Agent",
    description: "Intelligent reasoning with tools and dynamic decision-making",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-purple-600",
    position: { x: 35, y: 70 },
    connections: ["financial", "screening", "realestate"],
  },
  {
    id: "codewriter",
    title: "Code Writer",
    description: "Generates initial code from specifications",
    icon: <Code className="w-5 h-5" />,
    color: "bg-blue-400",
    position: { x: 10, y: 100 },
    connections: [],
  },
  {
    id: "reviewer",
    title: "Code Reviewer",
    description: "Reviews code for errors and best practices",
    icon: <Eye className="w-5 h-5" />,
    color: "bg-blue-400",
    position: { x: 20, y: 100 },
    connections: [],
  },
  {
    id: "refactorer",
    title: "Code Refactorer",
    description: "Improves code based on review feedback",
    icon: <Settings className="w-5 h-5" />,
    color: "bg-blue-400",
    position: { x: 30, y: 100 },
    connections: [],
  },
  {
    id: "researcher1",
    title: "Energy Researcher",
    description: "Renewable energy sources research",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-green-400",
    position: { x: 40, y: 100 },
    connections: [],
  },
  {
    id: "researcher2",
    title: "EV Researcher",
    description: "Electric vehicle technology research",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "bg-green-400",
    position: { x: 50, y: 100 },
    connections: [],
  },
  {
    id: "researcher3",
    title: "Carbon Researcher",
    description: "Carbon capture methods research",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-green-400",
    position: { x: 60, y: 100 },
    connections: [],
  },
  {
    id: "critic",
    title: "Document Critic",
    description: "Evaluates document quality and suggests improvements",
    icon: <Eye className="w-5 h-5" />,
    color: "bg-orange-400",
    position: { x: 75, y: 100 },
    connections: [],
  },
  {
    id: "refiner",
    title: "Document Refiner",
    description: "Applies improvements based on critique",
    icon: <Settings className="w-5 h-5" />,
    color: "bg-orange-400",
    position: { x: 85, y: 100 },
    connections: [],
  },
  {
    id: "browser",
    title: "Browser Automation Engine",
    description: "Advanced web automation using Chrome DevTools Protocol and browser-use",
    icon: <Chrome className="w-6 h-6" />,
    color: "bg-violet-500",
    position: { x: 15, y: 115 },
    connections: ["webinteraction", "cdp", "webagent", "docker"],
  },
  {
    id: "webinteraction",
    title: "Web Interaction Agent",
    description: "Intelligent web navigation, form filling, and data extraction",
    icon: <MousePointer className="w-6 h-6" />,
    color: "bg-teal-500",
    position: { x: 5, y: 130 },
    connections: [],
  },
  {
    id: "cdp",
    title: "CDP Integration",
    description: "Chrome DevTools Protocol for deep browser control and debugging",
    icon: <Code className="w-6 h-6" />,
    color: "bg-amber-500",
    position: { x: 15, y: 130 },
    connections: [],
  },
  {
    id: "webagent",
    title: "Parallel Web Agent",
    description: "Multi-instance browser automation for scalable web tasks",
    icon: <Network className="w-6 h-6" />,
    color: "bg-cyan-600",
    position: { x: 25, y: 130 },
    connections: [],
  },
  {
    id: "docker",
    title: "Docker Orchestration",
    description: "Containerized deployment with optimized build system (<30s builds)",
    icon: <Container className="w-6 h-6" />,
    color: "bg-sky-600",
    position: { x: 35, y: 130 },
    connections: ["baseimages", "fastbuild", "deployment"],
  },
  {
    id: "baseimages",
    title: "Base Images",
    description: "Layered container architecture: System → Chromium → Python deps",
    icon: <Layers className="w-6 h-6" />,
    color: "bg-slate-700",
    position: { x: 45, y: 145 },
    connections: [],
  },
  {
    id: "fastbuild",
    title: "Fast Build System",
    description: "Optimized builds: 30s with base images, 16s for code changes",
    icon: <Clock className="w-6 h-6" />,
    color: "bg-emerald-700",
    position: { x: 35, y: 145 },
    connections: [],
  },
  {
    id: "deployment",
    title: "Production Deployment",
    description: "Scalable container orchestration with performance monitoring",
    icon: <Server className="w-6 h-6" />,
    color: "bg-red-700",
    position: { x: 25, y: 145 },
    connections: ["services", "session", "auth"],
  },
  {
    id: "services",
    title: "Multi-Service Architecture",
    description: "Backend API, Frontend UI, Sandbox, MockServer, and Documentation services",
    icon: <Workflow className="w-6 h-6" />,
    color: "bg-indigo-700",
    position: { x: 15, y: 160 },
    connections: ["backend", "frontend", "sandbox"],
  },
  {
    id: "backend",
    title: "Backend API (8000)",
    description: "FastAPI service with DDD architecture, SSE conversations, tool invocation",
    icon: <Server className="w-5 h-5" />,
    color: "bg-blue-700",
    position: { x: 5, y: 175 },
    connections: [],
  },
  {
    id: "frontend",
    title: "Frontend UI (5173)",
    description: "Vue 3 + TypeScript + Vite chatbot interface with real-time updates",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-green-700",
    position: { x: 15, y: 175 },
    connections: [],
  },
  {
    id: "sandbox",
    title: "Sandbox Environment (8080)",
    description: "Docker isolation: Shell execution, file ops, browser automation, VNC",
    icon: <Container className="w-5 h-5" />,
    color: "bg-orange-700",
    position: { x: 25, y: 175 },
    connections: ["vnc", "tools"],
  },
  {
    id: "session",
    title: "Session Management",
    description: "MongoDB/Redis for task history, background processing, conversation state",
    icon: <Database className="w-6 h-6" />,
    color: "bg-purple-700",
    position: { x: 35, y: 160 },
    connections: [],
  },
  {
    id: "auth",
    title: "Authentication System",
    description: "User login, session management, multilingual support (Chinese/English)",
    icon: <Users className="w-6 h-6" />,
    color: "bg-rose-700",
    position: { x: 45, y: 160 },
    connections: [],
  },
  {
    id: "vnc",
    title: "VNC Visualization (5900)",
    description: "Remote desktop access via WebSocket for sandbox environment monitoring",
    icon: <Eye className="w-5 h-5" />,
    color: "bg-cyan-700",
    position: { x: 35, y: 175 },
    connections: [],
  },
  {
    id:.tool_code
create_file_with_block
src/components/AIAgentDiagram.tsx
"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Zap,
  Target,
  Database,
  Globe,
  Users,
  TrendingUp,
  ArrowRight,
  Cpu,
  Network,
  Eye,
  Settings,
  Chrome,
  MousePointer,
  Code,
  GitBranch,
  RotateCcw,
  Workflow,
  Container,
  Server,
  Layers,
  Clock,
} from "lucide-react"

interface AgentNode {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  position: { x: number; y: number }
  connections: string[]
}

const agentNodes: AgentNode[] = [
  {
    id: "core",
    title: "Core AI Engine",
    description: "Gemini-powered central processing unit with strategic planning capabilities",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-purple-500",
    position: { x: 50, y: 10 },
    connections: ["planning", "decision", "learning"],
  },
  {
    id: "planning",
    title: "Strategic Planning",
    description: "Task decomposition and workflow orchestration",
    icon: <Target className="w-6 h-6" />,
    color: "bg-blue-500",
    position: { x: 20, y: 25 },
    connections: ["execution", "monitoring"],
  },
  {
    id: "decision",
    title: "Real-time Decision Making",
    description: "Dynamic adaptation and intelligent routing",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-yellow-600",
    position: { x: 80, y: 25 },
    connections: ["execution", "learning"],
  },
  {
    id: "learning",
    title: "Adaptive Learning",
    description: "Continuous improvement and personalization",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "bg-green-500",
    position: { x: 50, y: 40 },
    connections: ["memory", "optimization"],
  },
  {
    id: "execution",
    title: "Task Execution",
    description: "Multi-domain task processing and automation",
    icon: <Settings className="w-6 h-6" />,
    color: "bg-red-500",
    position: { x: 50, y: 55 },
    connections: ["adk", "browser"],
  },
  {
    id: "adk",
    title: "ADK Framework",
    description: "Agent Development Kit for multi-agent orchestration and deployment",
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-slate-600",
    position: { x: 50, y: 70 },
    connections: ["sequential", "parallel", "loop", "llm"],
  },
  {
    id: "sequential",
    title: "Sequential Agent",
    description: "Executes sub-agents in strict order - perfect for code pipelines",
    icon: <ArrowRight className="w-6 h-6" />,
    color: "bg-blue-600",
    position: { x: 20, y: 85 },
    connections: ["codewriter", "reviewer", "refactorer"],
  },
  {
    id: "parallel",
    title: "Parallel Agent",
    description: "Concurrent execution for independent tasks - ideal for research",
    icon: <GitBranch className="w-6 h-6" />,
    color: "bg-green-600",
    position: { x: 50, y: 85 },
    connections: ["researcher1", "researcher2", "researcher3"],
  },
  {
    id: "loop",
    title: "Loop Agent",
    description: "Iterative refinement until termination condition - document improvement",
    icon: <RotateCcw className="w-6 h-6" />,
    color: "bg-orange-600",
    position: { x: 80, y: 85 },
    connections: ["critic", "refiner"],
  },
  {
    id: "llm",
    title: "LLM Agent",
    description: "Intelligent reasoning with tools and dynamic decision-making",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-purple-600",
    position: { x: 35, y: 70 },
    connections: ["financial", "screening", "realestate"],
  },
  {
    id: "codewriter",
    title: "Code Writer",
    description: "Generates initial code from specifications",
    icon: <Code className="w-5 h-5" />,
    color: "bg-blue-400",
    position: { x: 10, y: 100 },
    connections: [],
  },
  {
    id: "reviewer",
    title: "Code Reviewer",
    description: "Reviews code for errors and best practices",
    icon: <Eye className="w-5 h-5" />,
    color: "bg-blue-400",
    position: { x: 20, y: 100 },
    connections: [],
  },
  {
    id: "refactorer",
    title: "Code Refactorer",
    description: "Improves code based on review feedback",
    icon: <Settings className="w-5 h-5" />,
    color: "bg-blue-400",
    position: { x: 30, y: 100 },
    connections: [],
  },
  {
    id: "researcher1",
    title: "Energy Researcher",
    description: "Renewable energy sources research",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-green-400",
    position: { x: 40, y: 100 },
    connections: [],
  },
  {
    id: "researcher2",
    title: "EV Researcher",
    description: "Electric vehicle technology research",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "bg-green-400",
    position: { x: 50, y: 100 },
    connections: [],
  },
  {
    id: "researcher3",
    title: "Carbon Researcher",
    description: "Carbon capture methods research",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-green-400",
    position: { x: 60, y: 100 },
    connections: [],
  },
  {
    id: "critic",
    title: "Document Critic",
    description: "Evaluates document quality and suggests improvements",
    icon: <Eye className="w-5 h-5" />,
    color: "bg-orange-400",
    position: { x: 75, y: 100 },
    connections: [],
  },
  {
    id: "refiner",
    title: "Document Refiner",
    description: "Applies improvements based on critique",
    icon: <Settings className="w-5 h-5" />,
    color: "bg-orange-400",
    position: { x: 85, y: 100 },
    connections: [],
  },
  {
    id: "browser",
    title: "Browser Automation Engine",
    description: "Advanced web automation using Chrome DevTools Protocol and browser-use",
    icon: <Chrome className="w-6 h-6" />,
    color: "bg-violet-500",
    position: { x: 15, y: 115 },
    connections: ["webinteraction", "cdp", "webagent", "docker"],
  },
  {
    id: "webinteraction",
    title: "Web Interaction Agent",
    description: "Intelligent web navigation, form filling, and data extraction",
    icon: <MousePointer className="w-6 h-6" />,
    color: "bg-teal-500",
    position: { x: 5, y: 130 },
    connections: [],
  },
  {
    id: "cdp",
    title: "CDP Integration",
    description: "Chrome DevTools Protocol for deep browser control and debugging",
    icon: <Code className="w-6 h-6" />,
    color: "bg-amber-500",
    position: { x: 15, y: 130 },
    connections: [],
  },
  {
    id: "webagent",
    title: "Parallel Web Agent",
    description: "Multi-instance browser automation for scalable web tasks",
    icon: <Network className="w-6 h-6" />,
    color: "bg-cyan-600",
    position: { x: 25, y: 130 },
    connections: [],
  },
  {
    id: "docker",
    title: "Docker Orchestration",
    description: "Containerized deployment with optimized build system (<30s builds)",
    icon: <Container className="w-6 h-6" />,
    color: "bg-sky-600",
    position: { x: 35, y: 130 },
    connections: ["baseimages", "fastbuild", "deployment"],
  },
  {
    id: "baseimages",
    title: "Base Images",
    description: "Layered container architecture: System → Chromium → Python deps",
    icon: <Layers className="w-6 h-6" />,
    color: "bg-slate-700",
    position: { x: 45, y: 145 },
    connections: [],
  },
  {
    id: "fastbuild",
    title: "Fast Build System",
    description: "Optimized builds: 30s with base images, 16s for code changes",
    icon: <Clock className="w-6 h-6" />,
    color: "bg-emerald-700",
    position: { x: 35, y: 145 },
    connections: [],
  },
  {
    id: "deployment",
    title: "Production Deployment",
    description: "Scalable container orchestration with performance monitoring",
    icon: <Server className="w-6 h-6" />,
    color: "bg-red-700",
    position: { x: 25, y: 145 },
    connections: ["services", "session", "auth"],
  },
  {
    id: "services",
    title: "Multi-Service Architecture",
    description: "Backend API, Frontend UI, Sandbox, MockServer, and Documentation services",
    icon: <Workflow className="w-6 h-6" />,
    color: "bg-indigo-700",
    position: { x: 15, y: 160 },
    connections: ["backend", "frontend", "sandbox"],
  },
  {
    id: "backend",
    title: "Backend API (8000)",
    description: "FastAPI service with DDD architecture, SSE conversations, tool invocation",
    icon: <Server className="w-5 h-5" />,
    color: "bg-blue-700",
    position: { x: 5, y: 175 },
    connections: [],
  },
  {
    id: "frontend",
    title: "Frontend UI (5173)",
    description: "Vue 3 + TypeScript + Vite chatbot interface with real-time updates",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-green-700",
    position: { x: 15, y: 175 },
    connections: [],
  },
  {
    id: "sandbox",
    title: "Sandbox Environment (8080)",
    description: "Docker isolation: Shell execution, file ops, browser automation, VNC",
    icon: <Container className="w-5 h-5" />,
    color: "bg-orange-700",
    position: { x: 25, y: 175 },
    connections: ["vnc", "tools"],
  },
  {
    id: "session",
    title: "Session Management",
    description: "MongoDB/Redis for task history, background processing, conversation state",
    icon: <Database className="w-6 h-6" />,
    color: "bg-purple-700",
    position: { x: 35, y: 160 },
    connections: [],
  },
  {
    id: "auth",
    title: "Authentication System",
    description: "User login, session management, multilingual support (Chinese/English)",
    icon: <Users className="w-6 h-6" />,
    color: "bg-rose-700",
    position: { x: 45, y: 160 },
    connections: [],
  },
  {
    id: "vnc",
    title: "VNC Visualization (5900)",
    description: "Remote desktop access via WebSocket for sandbox environment monitoring",
    icon: <Eye className="w-5 h-5" />,
    color: "bg-cyan-700",
    position: { x: 35, y: 175 },
    connections: [],
  },
  {
    id: "tools",
    title: "Tool Integration Layer",
    description: "Terminal, Browser, File, Web Search, messaging with real-time takeover",
    icon: <Settings className="w-5 h-5" />,
    color: "bg-amber-700",
    position: { x: 45, y: 175 },
    connections: [],
  },
  {
    id: "memory",
    title: "Knowledge Base",
    description: "Persistent memory and context management",
    icon: <Database className="w-6 h-6" />,
    color: "bg-slate-500",
    position: { x: 20, y: 55 },
    connections: [],
  },
  {
    id: "monitoring",
    title: "Performance Monitor",
    description: "Real-time system monitoring and optimization",
    icon: <Eye className="w-6 h-6" />,
    color: "bg-cyan-500",
    position: { x: 80, y: 55 },
    connections: [],
  },
  {
    id: "optimization",
    title: "Process Optimization",
    description: "Workflow refinement and efficiency improvements",
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-pink-500",
    position: { x: 50, y: 25 },
    connections: [],
  },
]

const features = [
  {
    title: "Multi-Language Support",
    description: "Global accessibility with multilingual interactions",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "Autonomous Operation",
    description: "Minimal human input required for complex tasks",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Adaptive Intelligence",
    description: "Continuous learning and personalized outcomes",
    icon: <Brain className="w-5 h-5" />,
  },
  {
    title: "Multi-Agent Architecture",
    description: "Distributed processing with specialized agents",
    icon: <Network className="w-5 h-5" />,
  },
  {
    title: "Workflow Orchestration",
    description: "Sequential, parallel, and loop execution patterns",
    icon: <Workflow className="w-5 h-5" />,
  },
  {
    title: "Containerized Deployment",
    description: "Docker-based scalable production deployment",
    icon: <Container className="w-5 h-5" />,
  },
]

export function AIAgentDiagram() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [showConnections, setShowConnections] = useState(true)

  const selectedNodeData = agentNodes.find((node) => node.id === selectedNode)

  return (
    <div className="space-y-8">
      {/* Control Panel */}
      <div className="flex justify-center gap-4">
        <Button
          variant={showConnections ? "default" : "outline"}
          onClick={() => setShowConnections(!showConnections)}
          className="flex items-center gap-2"
        >
          <Network className="w-4 h-4" />
          {showConnections ? "Hide" : "Show"} Connections
        </Button>
        <Button variant="outline" onClick={() => setSelectedNode(null)} className="flex items-center gap-2">
          <Eye className="w-4 h-4" />
          Clear Selection
        </Button>
      </div>

      {/* Main Diagram */}
      <Card className="relative overflow-hidden">
        <CardContent className="p-8">
          <div className="relative w-full h-[800px] bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg border-2 border-dashed border-slate-200">
            {/* Connection Lines */}
            {showConnections && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {agentNodes.map((node) =>
                  node.connections.map((connectionId) => {
                    const targetNode = agentNodes.find((n) => n.id === connectionId)
                    if (!targetNode) return null

                    const startX = (node.position.x / 100) * 100 + "%"
                    const startY = (node.position.y / 100) * 100 + "%"
                    const endX = (targetNode.position.x / 100) * 100 + "%"
                    const endY = (targetNode.position.y / 100) * 100 + "%"

                    return (
                      <line
                        key={`${node.id}-${connectionId}`}
                        x1={startX}
                        y1={startY}
                        x2={endX}
                        y2={endY}
                        stroke="#94a3b8"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        opacity={selectedNode && (selectedNode === node.id || selectedNode === connectionId) ? 1 : 0.3}
                      />
                    )
                  }),
                )}
              </svg>
            )}

            {/* Agent Nodes */}
            {agentNodes.map((node) => (
              <div
                key={node.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                  selectedNode === node.id ? "scale-110 z-10" : "hover:scale-105"
                }`}
                style={{
                  left: `${node.position.x}%`,
                  top: `${node.position.y}%`,
                }}
                onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
              >
                <div
                  className={`${node.color} text-white p-4 rounded-xl shadow-lg border-2 border-white min-w-[120px] text-center`}
                >
                  <div className="flex justify-center mb-2">{node.icon}</div>
                  <h3 className="font-semibold text-sm leading-tight">{node.title}</h3>
                </div>
              </div>
            ))}

            {/* Legend */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h4 className="font-semibold text-sm mb-2">Agent Types</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded"></div>
                  <span>Core Engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span>Planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span>Execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-violet-500 rounded"></div>
                  <span>Browser</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-600 rounded"></div>
                  <span>Parallel Web Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-600 rounded"></div>
                  <span>ADK Framework</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-600 rounded"></div>
                  <span>RAG Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-rose-500 rounded"></div>
                  <span>ML Engineering Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-600 rounded"></div>
                  <span>Academic Research Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded"></div>
                  <span>Sequential Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-600 rounded"></div>
                  <span>Parallel Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-600 rounded"></div>
                  <span>Loop Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-600 rounded"></div>
                  <span>LLM Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-sky-600 rounded"></div>
                  <span>Docker Orchestration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-700 rounded"></div>
                  <span>Base Images</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-700 rounded"></div>
                  <span>Fast Build</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-700 rounded"></div>
                  <span>Production Deploy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-700 rounded"></div>
                  <span>Multi-Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-700 rounded"></div>
                  <span>Session Mgmt</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-rose-700 rounded"></div>
                  <span>Authentication</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-700 rounded"></div>
                  <span>VNC Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-700 rounded"></div>
                  <span>Tool Integration</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Node Details */}
      {selectedNodeData && (
        <Card className="border-2 border-blue-200 bg-blue-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className={`${selectedNodeData.color} text-white p-2 rounded-lg`}>{selectedNodeData.icon}</div>
              {selectedNodeData.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">{selectedNodeData.description}</p>
            {selectedNodeData.connections.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Connected Components:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedNodeData.connections.map((connectionId) => {
                    const connectedNode = agentNodes.find((n) => n.id === connectionId)
                    return connectedNode ? (
                      <Badge key={connectionId} variant="secondary" className="flex items-center gap-1">
                        <ArrowRight className="w-3 h-3" />
                        {connectedNode.title}
                      </Badge>
                    ) : null
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-3">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full">{feature.icon}</div>
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Capabilities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            System Capabilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-600">ADK Workflow Agents</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Sequential execution pipelines</li>
                <li>• Parallel task processing</li>
                <li>• Iterative refinement loops</li>
                <li>• LLM-powered reasoning</li>
                <li>• Custom agent development</li>
                <li>• Multi-agent orchestration</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-emerald-600">Financial Analysis</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Market trend analysis</li>
                <li>• Risk assessment</li>
                <li>• Portfolio optimization</li>
                <li>• Investment recommendations</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-indigo-600">Candidate Screening</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Resume parsing & analysis</li>
                <li>• Skill matching algorithms</li>
                <li>• Interview automation</li>
                <li>• Cultural fit assessment</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-orange-600">Real Estate Search</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Property valuation</li>
                <li>• Market analysis</li>
                <li>• Investment opportunities</li>
                <li>• Location intelligence</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-violet-600">Browser Automation</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Chrome DevTools Protocol</li>
                <li>• Parallel web task execution</li>
                <li>• Form filling & navigation</li>
                <li>• Data extraction & monitoring</li>
                <li>• Anti-bot detection avoidance</li>
                <li>• Session persistence</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-600">Code Development Pipeline</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Automated code generation</li>
                <li>• Code review & analysis</li>
                <li>• Refactoring & optimization</li>
                <li>• Sequential workflow execution</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sky-600">Containerized Deployment</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Docker orchestration</li>
                <li>• Optimized build system (&lt;30s)</li>
                <li>• Layered base images</li>
                <li>• Production scalability</li>
                <li>• Performance monitoring</li>
                <li>• Fast iteration cycles (16s)</li>
              </ul>
            </div>
            <.tool_code
create_file_with_block
src/components/AIAgentDiagram.tsx
"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Zap,
  Target,
  Database,
  Globe,
  Users,
  TrendingUp,
  ArrowRight,
  Cpu,
  Network,
  Eye,
  Settings,
  Chrome,
  MousePointer,
  Code,
  GitBranch,
  RotateCcw,
  Workflow,
  Container,
  Server,
  Layers,
  Clock,
} from "lucide-react"

interface AgentNode {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  position: { x: number; y: number }
  connections: string[]
}

const agentNodes: AgentNode[] = [
  {
    id: "core",
    title: "Core AI Engine",
    description: "Gemini-powered central processing unit with strategic planning capabilities",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-purple-500",
    position: { x: 50, y: 10 },
    connections: ["planning", "decision", "learning"],
  },
  {
    id: "planning",
    title: "Strategic Planning",
    description: "Task decomposition and workflow orchestration",
    icon: <Target className="w-6 h-6" />,
    color: "bg-blue-500",
    position: { x: 20, y: 25 },
    connections: ["execution", "monitoring"],
  },
  {
    id: "decision",
    title: "Real-time Decision Making",
    description: "Dynamic adaptation and intelligent routing",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-yellow-600",
    position: { x: 80, y: 25 },
    connections: ["execution", "learning"],
  },
  {
    id: "learning",
    title: "Adaptive Learning",
    description: "Continuous improvement and personalization",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "bg-green-500",
    position: { x: 50, y: 40 },
    connections: ["memory", "optimization"],
  },
  {
    id: "execution",
    title: "Task Execution",
    description: "Multi-domain task processing and automation",
    icon: <Settings className="w-6 h-6" />,
    color: "bg-red-500",
    position: { x: 50, y: 55 },
    connections: ["adk", "browser"],
  },
  {
    id: "adk",
    title: "ADK Framework",
    description: "Agent Development Kit for multi-agent orchestration and deployment",
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-slate-600",
    position: { x: 50, y: 70 },
    connections: ["sequential", "parallel", "loop", "llm"],
  },
  {
    id: "sequential",
    title: "Sequential Agent",
    description: "Executes sub-agents in strict order - perfect for code pipelines",
    icon: <ArrowRight className="w-6 h-6" />,
    color: "bg-blue-600",
    position: { x: 20, y: 85 },
    connections: ["codewriter", "reviewer", "refactorer"],
  },
  {
    id: "parallel",
    title: "Parallel Agent",
    description: "Concurrent execution for independent tasks - ideal for research",
    icon: <GitBranch className="w-6 h-6" />,
    color: "bg-green-600",
    position: { x: 50, y: 85 },
    connections: ["researcher1", "researcher2", "researcher3"],
  },
  {
    id: "loop",
    title: "Loop Agent",
    description: "Iterative refinement until termination condition - document improvement",
    icon: <RotateCcw className="w-6 h-6" />,
    color: "bg-orange-600",
    position: { x: 80, y: 85 },
    connections: ["critic", "refiner"],
  },
  {
    id: "llm",
    title: "LLM Agent",
    description: "Intelligent reasoning with tools and dynamic decision-making",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-purple-600",
    position: { x: 35, y: 70 },
    connections: ["financial", "screening", "realestate"],
  },
  {
    id: "codewriter",
    title: "Code Writer",
    description: "Generates initial code from specifications",
    icon: <Code className="w-5 h-5" />,
    color: "bg-blue-400",
    position: { x: 10, y: 100 },
    connections: [],
  },
  {
    id: "reviewer",
    title: "Code Reviewer",
    description: "Reviews code for errors and best practices",
    icon: <Eye className="w-5 h-5" />,
    color: "bg-blue-400",
    position: { x: 20, y: 100 },
    connections: [],
  },
  {
    id: "refactorer",
    title: "Code Refactorer",
    description: "Improves code based on review feedback",
    icon: <Settings className="w-5 h-5" />,
    color: "bg-blue-400",
    position: { x: 30, y: 100 },
    connections: [],
  },
  {
    id: "researcher1",
    title: "Energy Researcher",
    description: "Renewable energy sources research",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-green-400",
    position: { x: 40, y: 100 },
    connections: [],
  },
  {
    id: "researcher2",
    title: "EV Researcher",
    description: "Electric vehicle technology research",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "bg-green-400",
    position: { x: 50, y: 100 },
    connections: [],
  },
  {
    id: "researcher3",
    title: "Carbon Researcher",
    description: "Carbon capture methods research",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-green-400",
    position: { x: 60, y: 100 },
    connections: [],
  },
  {
    id: "critic",
    title: "Document Critic",
    description: "Evaluates document quality and suggests improvements",
    icon: <Eye className="w-5 h-5" />,
    color: "bg-orange-400",
    position: { x: 75, y: 100 },
    connections: [],
  },
  {
    id: "refiner",
    title: "Document Refiner",
    description: "Applies improvements based on critique",
    icon: <Settings className="w-5 h-5" />,
    color: "bg-orange-400",
    position: { x: 85, y: 100 },
    connections: [],
  },
  {
    id: "browser",
    title: "Browser Automation Engine",
    description: "Advanced web automation using Chrome DevTools Protocol and browser-use",
    icon: <Chrome className="w-6 h-6" />,
    color: "bg-violet-500",
    position: { x: 15, y: 115 },
    connections: ["webinteraction", "cdp", "webagent", "docker"],
  },
  {
    id: "webinteraction",
    title: "Web Interaction Agent",
    description: "Intelligent web navigation, form filling, and data extraction",
    icon: <MousePointer className="w-6 h-6" />,
    color: "bg-teal-500",
    position: { x: 5, y: 130 },
    connections: [],
  },
  {
    id: "cdp",
    title: "CDP Integration",
    description: "Chrome DevTools Protocol for deep browser control and debugging",
    icon: <Code className="w-6 h-6" />,
    color: "bg-amber-500",
    position: { x: 15, y: 130 },
    connections: [],
  },
  {
    id: "webagent",
    title: "Parallel Web Agent",
    description: "Multi-instance browser automation for scalable web tasks",
    icon: <Network className="w-6 h-6" />,
    color: "bg-cyan-600",
    position: { x: 25, y: 130 },
    connections: [],
  },
  {
    id: "docker",
    title: "Docker Orchestration",
    description: "Containerized deployment with optimized build system (<30s builds)",
    icon: <Container className="w-6 h-6" />,
    color: "bg-sky-600",
    position: { x: 35, y: 130 },
    connections: ["baseimages", "fastbuild", "deployment"],
  },
  {
    id: "baseimages",
    title: "Base Images",
    description: "Layered container architecture: System → Chromium → Python deps",
    icon: <Layers className="w-6 h-6" />,
    color: "bg-slate-700",
    position: { x: 45, y: 145 },
    connections: [],
  },
  {
    id: "fastbuild",
    title: "Fast Build System",
    description: "Optimized builds: 30s with base images, 16s for code changes",
    icon: <Clock className="w-6 h-6" />,
    color: "bg-emerald-700",
    position: { x: 35, y: 145 },
    connections: [],
  },
  {
    id: "deployment",
    title: "Production Deployment",
    description: "Scalable container orchestration with performance monitoring",
    icon: <Server className="w-6 h-6" />,
    color: "bg-red-700",
    position: { x: 25, y: 145 },
    connections: ["services", "session", "auth"],
  },
  {
    id: "services",
    title: "Multi-Service Architecture",
    description: "Backend API, Frontend UI, Sandbox, MockServer, and Documentation services",
    icon: <Workflow className="w-6 h-6" />,
    color: "bg-indigo-700",
    position: { x: 15, y: 160 },
    connections: ["backend", "frontend", "sandbox"],
  },
  {
    id: "backend",
    title: "Backend API (8000)",
    description: "FastAPI service with DDD architecture, SSE conversations, tool invocation",
    icon: <Server className="w-5 h-5" />,
    color: "bg-blue-700",
    position: { x: 5, y: 175 },
    connections: [],
  },
  {
    id: "frontend",
    title: "Frontend UI (5173)",
    description: "Vue 3 + TypeScript + Vite chatbot interface with real-time updates",
    icon: <Globe className="w-5 h-5" />,
    color: "bg-green-700",
    position: { x: 15, y: 175 },
    connections: [],
  },
  {
    id: "sandbox",
    title: "Sandbox Environment (8080)",
    description: "Docker isolation: Shell execution, file ops, browser automation, VNC",
    icon: <Container className="w-5 h-5" />,
    color: "bg-orange-700",
    position: { x: 25, y: 175 },
    connections: ["vnc", "tools"],
  },
  {
    id: "session",
    title: "Session Management",
    description: "MongoDB/Redis for task history, background processing, conversation state",
    icon: <Database className="w-6 h-6" />,
    color: "bg-purple-700",
    position: { x: 35, y: 160 },
    connections: [],
  },
  {
    id: "auth",
    title: "Authentication System",
    description: "User login, session management, multilingual support (Chinese/English)",
    icon: <Users className="w-6 h-6" />,
    color: "bg-rose-700",
    position: { x: 45, y: 160 },
    connections: [],
  },
  {
    id: "vnc",
    title: "VNC Visualization (5900)",
    description: "Remote desktop access via WebSocket for sandbox environment monitoring",
    icon: <Eye className="w-5 h-5" />,
    color: "bg-cyan-700",
    position: { x: 35, y: 175 },
    connections: [],
  },
  {
    id: "tools",
    title: "Tool Integration Layer",
    description: "Terminal, Browser, File, Web Search, messaging with real-time takeover",
    icon: <Settings className="w-5 h-5" />,
    color: "bg-amber-700",
    position: { x: 45, y: 175 },
    connections: [],
  },
  {
    id: "memory",
    title: "Knowledge Base",
    description: "Persistent memory and context management",
    icon: <Database className="w-6 h-6" />,
    color: "bg-slate-500",
    position: { x: 20, y: 55 },
    connections: [],
  },
  {
    id: "monitoring",
    title: "Performance Monitor",
    description: "Real-time system monitoring and optimization",
    icon: <Eye className="w-6 h-6" />,
    color: "bg-cyan-500",
    position: { x: 80, y: 55 },
    connections: [],
  },
  {
    id: "optimization",
    title: "Process Optimization",
    description: "Workflow refinement and efficiency improvements",
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-pink-500",
    position: { x: 50, y: 25 },
    connections: [],
  },
]

const features = [
  {
    title: "Multi-Language Support",
    description: "Global accessibility with multilingual interactions",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "Autonomous Operation",
    description: "Minimal human input required for complex tasks",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Adaptive Intelligence",
    description: "Continuous learning and personalized outcomes",
    icon: <Brain className="w-5 h-5" />,
  },
  {
    title: "Multi-Agent Architecture",
    description: "Distributed processing with specialized agents",
    icon: <Network className="w-5 h-5" />,
  },
  {
    title: "Workflow Orchestration",
    description: "Sequential, parallel, and loop execution patterns",
    icon: <Workflow className="w-5 h-5" />,
  },
  {
    title: "Containerized Deployment",
    description: "Docker-based scalable production deployment",
    icon: <Container className="w-5 h-5" />,
  },
]

export function AIAgentDiagram() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [showConnections, setShowConnections] = useState(true)

  const selectedNodeData = agentNodes.find((node) => node.id === selectedNode)

  return (
    <div className="space-y-8">
      {/* Control Panel */}
      <div className="flex justify-center gap-4">
        <Button
          variant={showConnections ? "default" : "outline"}
          onClick={() => setShowConnections(!showConnections)}
          className="flex items-center gap-2"
        >
          <Network className="w-4 h-4" />
          {showConnections ? "Hide" : "Show"} Connections
        </Button>
        <Button variant="outline" onClick={() => setSelectedNode(null)} className="flex items-center gap-2">
          <Eye className="w-4 h-4" />
          Clear Selection
        </Button>
      </div>

      {/* Main Diagram */}
      <Card className="relative overflow-hidden">
        <CardContent className="p-8">
          <div className="relative w-full h-[800px] bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg border-2 border-dashed border-slate-200">
            {/* Connection Lines */}
            {showConnections && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {agentNodes.map((node) =>
                  node.connections.map((connectionId) => {
                    const targetNode = agentNodes.find((n) => n.id === connectionId)
                    if (!targetNode) return null

                    const startX = (node.position.x / 100) * 100 + "%"
                    const startY = (node.position.y / 100) * 100 + "%"
                    const endX = (targetNode.position.x / 100) * 100 + "%"
                    const endY = (targetNode.position.y / 100) * 100 + "%"

                    return (
                      <line
                        key={`${node.id}-${connectionId}`}
                        x1={startX}
                        y1={startY}
                        x2={endX}
                        y2={endY}
                        stroke="#94a3b8"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        opacity={selectedNode && (selectedNode === node.id || selectedNode === connectionId) ? 1 : 0.3}
                      />
                    )
                  }),
                )}
              </svg>
            )}

            {/* Agent Nodes */}
            {agentNodes.map((node) => (
              <div
                key={node.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                  selectedNode === node.id ? "scale-110 z-10" : "hover:scale-105"
                }`}
                style={{
                  left: `${node.position.x}%`,
                  top: `${node.position.y}%`,
                }}
                onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
              >
                <div
                  className={`${node.color} text-white p-4 rounded-xl shadow-lg border-2 border-white min-w-[120px] text-center`}
                >
                  <div className="flex justify-center mb-2">{node.icon}</div>
                  <h3 className="font-semibold text-sm leading-tight">{node.title}</h3>
                </div>
              </div>
            ))}

            {/* Legend */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h4 className="font-semibold text-sm mb-2">Agent Types</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded"></div>
                  <span>Core Engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span>Planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span>Execution</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-violet-500 rounded"></div>
                  <span>Browser</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-600 rounded"></div>
                  <span>Parallel Web Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-600 rounded"></div>
                  <span>ADK Framework</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-600 rounded"></div>
                  <span>RAG Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-rose-500 rounded"></div>
                  <span>ML Engineering Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-600 rounded"></div>
                  <span>Academic Research Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded"></div>
                  <span>Sequential Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-600 rounded"></div>
                  <span>Parallel Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-600 rounded"></div>
                  <span>Loop Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-600 rounded"></div>
                  <span>LLM Agent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-sky-600 rounded"></div>
                  <span>Docker Orchestration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-slate-700 rounded"></div>
                  <span>Base Images</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-700 rounded"></div>
                  <span>Fast Build</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-700 rounded"></div>
                  <span>Production Deploy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-indigo-700 rounded"></div>
                  <span>Multi-Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-700 rounded"></div>
                  <span>Session Mgmt</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-rose-700 rounded"></div>
                  <span>Authentication</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-700 rounded"></div>
                  <span>VNC Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-700 rounded"></div>
                  <span>Tool Integration</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Node Details */}
      {selectedNodeData && (
        <Card className="border-2 border-blue-200 bg-blue-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className={`${selectedNodeData.color} text-white p-2 rounded-lg`}>{selectedNodeData.icon}</div>
              {selectedNodeData.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">{selectedNodeData.description}</p>
            {selectedNodeData.connections.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Connected Components:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedNodeData.connections.map((connectionId) => {
                    const connectedNode = agentNodes.find((n) => n.id === connectionId)
                    return connectedNode ? (
                      <Badge key={connectionId} variant="secondary" className="flex items-center gap-1">
                        <ArrowRight className="w-3 h-3" />
                        {connectedNode.title}
                      </Badge>
                    ) : null
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {features.map((feature, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-6">
              <div className="flex justify-center mb-3">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full">{feature.icon}</div>
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Capabilities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            System Capabilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-600">ADK Workflow Agents</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Sequential execution pipelines</li>
                <li>• Parallel task processing</li>
                <li>• Iterative refinement loops</li>
                <li>• LLM-powered reasoning</li>
                <li>• Custom agent development</li>
                <li>• Multi-agent orchestration</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-emerald-600">Financial Analysis</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Market trend analysis</li>
                <li>• Risk assessment</li>
                <li>• Portfolio optimization</li>
                <li>• Investment recommendations</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-indigo-600">Candidate Screening</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Resume parsing & analysis</li>
                <li>• Skill matching algorithms</li>
                <li>• Interview automation</li>
                <li>• Cultural fit assessment</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-orange-600">Real Estate Search</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Property valuation</li>
                <li>• Market analysis</li>
                <li>• Investment opportunities</li>
                <li>• Location intelligence</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-violet-600">Browser Automation</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Chrome DevTools Protocol</li>
                <li>• Parallel web task execution</li>
                <li>• Form filling & navigation</li>
                <li>• Data extraction & monitoring</li>
                <li>• Anti-bot detection avoidance</li>
                <li>• Session persistence</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-600">Code Development Pipeline</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Automated code generation</li>
                <li>• Code review & analysis</li>
                <li>• Refactoring & optimization</li>
                <li>• Sequential workflow execution</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-sky-600">Containerized Deployment</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Docker orchestration</li>
                <li>• Optimized build system (&lt;30s)</li>
                <li>• Layered base images</li>
                <li>• Production scalability</li>
                <li>• Performance monitoring</li>
                <li>• Fast iteration cycles (16s)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-slate-700">Infrastructure</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Python 3.12 runtime</li>
                <li>• Chromium browser integration</li>
                <li>• System dependency management</li>
                <li>• Container registry support</li>
                <li>• Environment configuration</li>
                <li>• Resource optimization</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-indigo-700">Service Architecture</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Multi-service deployment (Backend/Frontend/Sandbox)</li>
                <li>• Port management (5173/8000/8080/5900/9222)</li>
                <li>• Domain-Driven Design (DDD) backend</li>
                <li>• Vue 3 + TypeScript frontend</li>
                <li>• Docker sandbox isolation</li>
                <li>• Real-time reload in debug mode</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-purple-700">Session & State Management</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• MongoDB/Redis task history</li>
                <li>• Background task processing</li>
                <li>• Conversation state persistence</li>
                <li>• Session instance management</li>
                <li>• Real-time SSE communication</li>
                <li>• File upload/download support</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-cyan-700">Visualization & Monitoring</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• VNC remote desktop (5900)</li>
                <li>• WebSocket VNC interface (5901)</li>
                <li>• Chrome CDP debugging (9222)</li>
                <li>• Real-time environment viewing</li>
                <li>• Process management via Supervisor</li>
                <li>• Remote takeover capabilities</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-amber-700">Tool Integration</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Terminal command execution</li>
                <li>• Browser automation (Playwright)</li>
                <li>• File system operations</li>
                <li>• Web search integration</li>
                <li>• Messaging tools</li>
                <li>• External MCP tool support</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
