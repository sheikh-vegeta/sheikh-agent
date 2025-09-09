import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "SaaSKit - The Ultimate Web Development Toolkit | Sheikh AI Agent",
  description:
    "Transform your business with our powerful SaaS platform featuring Sheikh AI Agent - an advanced AI agent for the Bangladesh AGI community. Includes WebContainer integration, Monaco Editor, and live coding capabilities.",
  generator: "v0.app",
  keywords: ["SaaS", "AI Agent", "Bangladesh AGI", "WebContainer", "Monaco Editor", "Sheikh AI", "Likhon Sheikh"],
  authors: [{ name: "Likhon Developer" }],
  openGraph: {
    title: "SaaSKit with Sheikh AI Agent",
    description: "Advanced AI agent platform for the Bangladesh AGI community",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheikh AI Agent - Bangladesh AGI Community",
    description: "Advanced AI agent with WebContainer and live coding capabilities",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
