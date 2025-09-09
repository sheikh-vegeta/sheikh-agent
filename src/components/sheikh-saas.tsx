"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Brain,
  Code,
  Globe,
  Users,
  Play,
  X,
  Menu,
  Star,
  ArrowRight,
  Monitor,
  Zap,
  Database,
  Shield,
  Camera,
  MousePointer,
} from "lucide-react"

// WebContainer simulation (would be actual WebContainer in production)
const simulateWebContainer = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("WebContainer initialized successfully!")
    }, 2000)
  })
}

export default function SheikhSaaS() {
  const [activeTab, setActiveTab] = useState("overview")
  const [language, setLanguage] = useState<"en" | "bn">("en")
  const [isCodeEditorOpen, setIsCodeEditorOpen] = useState(false)
  const [webContainerStatus, setWebContainerStatus] = useState<"idle" | "loading" | "ready">("idle")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [slideOverOpen, setSlideOverOpen] = useState(false)
  const [codeOutput, setCodeOutput] = useState("")
  const [browserAutomationOpen, setBrowserAutomationOpen] = useState(false)
  const [playwrightStatus, setPlaywrightStatus] = useState<"idle" | "connecting" | "ready">("idle")
  const [automationResults, setAutomationResults] = useState<string[]>([])
  const editorRef = useRef<HTMLTextAreaElement>(null)

  const text = {
    en: {
      title: "Sheikh AI Agent",
      subtitle: "Bangladesh AGI Community Platform",
      description: "Advanced AI agent powered by Likhon Sheikh language model for the Bangladesh AGI community",
      features: "Features",
      demo: "Live Demo",
      community: "Community",
      docs: "Documentation",
      getStarted: "Get Started",
      learnMore: "Learn More",
      webContainer: "WebContainer Ready",
      codeEditor: "Code Editor",
      runCode: "Run Code",
      processing: "Processing...",
      ready: "Ready",
      browserAutomation: "Browser Automation",
      playwrightIntegration: "Playwright Integration",
      multiAgent: "Multi-Agent Workflows",
      mcpCompatible: "MCP Compatible",
      geminiModels: "Gemini Models",
      webScraping: "Web Scraping",
      sessionManagement: "Session Management",
      proxyRotation: "Proxy Rotation",
      startAutomation: "Start Automation",
      stopAutomation: "Stop Automation",
      captureScreenshot: "Capture Screenshot",
      fillForm: "Fill Form",
      extractData: "Extract Data",
      automationActive: "Automation Active",
      browsersReady: "Browsers Ready",
      cdpConnected: "CDP Connected",
    },
    bn: {
      title: "শেখ এআই এজেন্ট",
      subtitle: "বাংলাদেশ এজিআই কমিউনিটি প্ল্যাটফর্ম",
      description: "বাংলাদেশ এজিআই কমিউনিটির জন্য লিখন শেখ ভাষা মডেল দ্বারা চালিত উন্নত এআই এজেন্ট",
      features: "বৈশিষ্ট্য",
      demo: "লাইভ ডেমো",
      community: "কমিউনিটি",
      docs: "ডকুমেন্টেশন",
      getStarted: "শুরু করুন",
      learnMore: "আরও জানুন",
      webContainer: "ওয়েবকন্টেইনার প্রস্তুত",
      codeEditor: "কোড এডিটর",
      runCode: "কোড চালান",
      processing: "প্রক্রিয়াকরণ...",
      ready: "প্রস্তুত",
      browserAutomation: "ব্রাউজার অটোমেশন",
      playwrightIntegration: "প্লেরাইট ইন্টিগ্রেশন",
      multiAgent: "মাল্টি-এজেন্ট ওয়ার্কফ্লো",
      mcpCompatible: "এমসিপি সামঞ্জস্যপূর্ণ",
      geminiModels: "জেমিনি মডেল",
      webScraping: "ওয়েব স্ক্র্যাপিং",
      sessionManagement: "সেশন ম্যানেজমেন্ট",
      proxyRotation: "প্রক্সি রোটেশন",
      startAutomation: "অটোমেশন শুরু করুন",
      stopAutomation: "অটোমেশন বন্ধ করুন",
      captureScreenshot: "স্ক্রিনশট ক্যাপচার",
      fillForm: "ফর্ম পূরণ করুন",
      extractData: "ডেটা এক্সট্র্যাক্ট করুন",
      automationActive: "অটোমেশন সক্রিয়",
      browsersReady: "ব্রাউজার প্রস্তুত",
      cdpConnected: "সিডিপি সংযুক্ত",
    },
  }

  const currentLanguage = language || "en"
  const currentText = text[currentLanguage] || text.en

  const initializeWebContainer = async () => {
    setWebContainerStatus("loading")
    try {
      await simulateWebContainer()
      setWebContainerStatus("ready")
    } catch (error) {
      console.error("WebContainer initialization failed:", error)
      setWebContainerStatus("idle")
    }
  }

  const runCode = async () => {
    if (!editorRef.current) return

    const code = editorRef.current.value || ""
    setCodeOutput("Running code...")

    // Simulate code execution
    setTimeout(() => {
      setCodeOutput(`Output: Hello from Sheikh AI!\nCode executed: ${code.slice(0, 50)}...`)
    }, 1500)
  }

  const initializePlaywright = async () => {
    setPlaywrightStatus("connecting")
    setAutomationResults(["Initializing Playwright..."])

    setTimeout(() => {
      setAutomationResults((prev) => [...prev, "✓ Chromium browser launched"])
    }, 1000)

    setTimeout(() => {
      setAutomationResults((prev) => [...prev, "✓ CDP session established"])
    }, 1500)

    setTimeout(() => {
      setAutomationResults((prev) => [...prev, "✓ WebSocket connection ready"])
      setPlaywrightStatus("ready")
    }, 2000)
  }

  const runBrowserAutomation = async (action: string) => {
    if (playwrightStatus !== "ready") return

    setAutomationResults((prev) => [...prev, `Running ${action}...`])

    setTimeout(() => {
      switch (action) {
        case "screenshot":
          setAutomationResults((prev) => [...prev, "✓ Screenshot captured: example.com"])
          break
        case "form":
          setAutomationResults((prev) => [...prev, "✓ Form filled successfully"])
          break
        case "extract":
          setAutomationResults((prev) => [...prev, "✓ Data extracted: 25 items"])
          break
      }
    }, 1500)
  }

  const companyLogos = ["slack", "framer", "netflix", "google", "linkedin", "instagram", "facebook"]

  const handleLanguageSwitch = () => {
    const newLanguage = currentLanguage === "en" ? "bn" : "en"
    setLanguage(newLanguage)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 md:py-4 shadow max-w-7xl rounded-full mx-auto w-full bg-white/80 backdrop-blur-sm border border-green-200/50 mt-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-gray-900">{currentText.title}</span>
        </div>

        <nav
          className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full transition-all duration-300 bg-white/90 backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-medium ${mobileMenuOpen ? "max-md:w-full" : "max-md:w-0"}`}
        >
          <button onClick={() => setActiveTab("overview")} className="hover:text-green-600 transition-colors">
            {currentText.features}
          </button>
          <button onClick={() => setActiveTab("demo")} className="hover:text-green-600 transition-colors">
            {currentText.demo}
          </button>
          <button onClick={() => setSlideOverOpen(true)} className="hover:text-green-600 transition-colors">
            {currentText.community}
          </button>
          <button onClick={() => setActiveTab("docs")} className="hover:text-green-600 transition-colors">
            {currentText.docs}
          </button>
          <button onClick={() => setBrowserAutomationOpen(true)} className="hover:text-green-600 transition-colors">
            {currentText.browserAutomation}
          </button>
          <button onClick={() => setMobileMenuOpen(false)} className="md:hidden text-gray-600 absolute top-4 right-4">
            <X className="w-6 h-6" />
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleLanguageSwitch}
            className="px-3 py-1 text-sm border border-green-300 rounded-full hover:bg-green-50 transition-colors"
          >
            {currentLanguage === "en" ? "বাং" : "EN"}
          </button>
          <button className="hidden md:flex bg-gradient-to-r from-green-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all">
            {currentText.getStarted}
          </button>
          <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex -space-x-3 pr-3">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="user"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="user"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                alt="user"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
              ))}
              <span className="text-sm text-gray-600 ml-2">Used by 12k+ developers</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-gray-900 to-red-600 text-transparent bg-clip-text">
            {currentText.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">{currentText.subtitle}</p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">{currentText.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={initializeWebContainer}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-red-600 text-white rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              {currentText.getStarted}
            </button>
            <button
              onClick={() => setIsCodeEditorOpen(true)}
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              <Code className="w-5 h-5" />
              {currentText.codeEditor}
            </button>
          </div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 bg-white/50">
        <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div
            className="flex"
            style={{
              animation: "marqueeScroll 15s linear infinite",
              minWidth: "200%",
            }}
          >
            {[...companyLogos, ...companyLogos].map((company, index) => (
              <img
                key={`${company}-${index}`}
                src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                alt={company || "Company logo"}
                className="h-12 mx-8 opacity-60 hover:opacity-100 transition-opacity"
                draggable={false}
              />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Features Grid */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Agentic AI</h3>
              <p className="text-gray-600">Advanced autonomous AI with reasoning capabilities and decision-making</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WebContainer</h3>
              <p className="text-gray-600">Run Node.js directly in the browser with full package manager support</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Monaco Editor</h3>
              <p className="text-gray-600">VS Code-powered editor with IntelliSense and syntax highlighting</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Connect with Bangladesh AGI community and share knowledge</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Playwright Integration</h3>
              <p className="text-gray-600">
                Cross-browser automation with CDP/CDP+ protocols and WebSocket communication
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Agent Workflows</h3>
              <p className="text-gray-600">Orchestrate multiple AI agents for complex automation tasks</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">MCP Compatible</h3>
              <p className="text-gray-600">Model Context Protocol support for enhanced AI agent capabilities</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Session Management</h3>
              <p className="text-gray-600">
                Persistent browser sessions with proxy rotation and bot detection avoidance
              </p>
            </motion.div>
          </div>

          {/* Status Panel */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">System Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">WebContainer</span>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${webContainerStatus === "ready" ? "bg-green-500" : webContainerStatus === "loading" ? "bg-yellow-500" : "bg-gray-300"}`}
                  />
                  <span className="text-sm">
                    {webContainerStatus === "ready"
                      ? currentText.ready
                      : webContainerStatus === "loading"
                        ? currentText.processing
                        : "Idle"}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">AI Agent</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm">{currentText.ready}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Community</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm">12k+ users</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Playwright</span>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${playwrightStatus === "ready" ? "bg-green-500" : playwrightStatus === "connecting" ? "bg-yellow-500" : "bg-gray-300"}`}
                  />
                  <span className="text-sm">
                    {playwrightStatus === "ready"
                      ? currentText.browsersReady
                      : playwrightStatus === "connecting"
                        ? "Connecting..."
                        : "Idle"}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">CDP Session</span>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${playwrightStatus === "ready" ? "bg-green-500" : "bg-gray-300"}`}
                  />
                  <span className="text-sm">
                    {playwrightStatus === "ready" ? currentText.cdpConnected : "Disconnected"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <h4 className="font-semibold mb-3">Gemini Models</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">2.5 Pro</span>
                  <span className="text-green-600">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">2.5 Flash</span>
                  <span className="text-green-600">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">2.5 Flash-Lite</span>
                  <span className="text-green-600">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Code Editor Slide Over */}
      <AnimatePresence>
        {isCodeEditorOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsCodeEditorOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="ml-auto bg-white w-full max-w-2xl h-full shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-semibold">{currentText.codeEditor}</h2>
                <button
                  onClick={() => setIsCodeEditorOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 flex flex-col p-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">JavaScript Code</label>
                  <textarea
                    ref={editorRef}
                    className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="// Write your JavaScript code here&#10;console.log('Hello from Sheikh AI!');&#10;&#10;function greet(name) {&#10;  return `Welcome to Bangladesh AGI Community, ${name}!`;&#10;}&#10;&#10;greet('Developer');"
                    defaultValue="console.log('Hello from Sheikh AI!');"
                  />
                </div>

                <button
                  onClick={runCode}
                  className="mb-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  {currentText.runCode}
                </button>

                {codeOutput && (
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    <pre>{codeOutput}</pre>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Community Slide Over */}
      <AnimatePresence>
        {slideOverOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSlideOverOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="ml-auto bg-white w-full max-w-md h-full shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-semibold">{currentText.community || "Community"}</h2>
                <button
                  onClick={() => setSlideOverOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-6 space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Bangladesh AGI Community</h3>
                  <p className="text-gray-600">Join thousands of AI enthusiasts and researchers</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2">Active Members</h4>
                    <p className="text-2xl font-bold text-green-600">12,847</p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2">Projects Shared</h4>
                    <p className="text-2xl font-bold text-blue-600">3,421</p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-2">Research Papers</h4>
                    <p className="text-2xl font-bold text-purple-600">856</p>
                  </div>
                </div>

                <button className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-red-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  Join Community
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Browser Automation Slide Over */}
      <AnimatePresence>
        {browserAutomationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex"
          >
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setBrowserAutomationOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="ml-auto bg-white w-full max-w-2xl h-full shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-xl font-semibold">{currentText.browserAutomation || "Browser Automation"}</h2>
                <button
                  onClick={() => setBrowserAutomationOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 flex flex-col p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={initializePlaywright}
                      disabled={playwrightStatus === "connecting"}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center gap-2"
                    >
                      <Monitor className="w-4 h-4" />
                      Initialize Playwright
                    </button>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${playwrightStatus === "ready" ? "bg-green-500" : playwrightStatus === "connecting" ? "bg-yellow-500 animate-pulse" : "bg-gray-300"}`}
                      />
                      <span className="text-sm text-gray-600">
                        {playwrightStatus === "ready"
                          ? "Ready"
                          : playwrightStatus === "connecting"
                            ? "Connecting..."
                            : "Idle"}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <button
                      onClick={() => runBrowserAutomation("screenshot")}
                      disabled={playwrightStatus !== "ready"}
                      className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center gap-2 text-sm"
                    >
                      <Camera className="w-4 h-4" />
                      Screenshot
                    </button>
                    <button
                      onClick={() => runBrowserAutomation("form")}
                      disabled={playwrightStatus !== "ready"}
                      className="px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-colors flex items-center gap-2 text-sm"
                    >
                      <MousePointer className="w-4 h-4" />
                      Fill Form
                    </button>
                    <button
                      onClick={() => runBrowserAutomation("extract")}
                      disabled={playwright_status !== "ready"}
                      className="px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 transition-colors flex items-center gap-2 text-sm"
                    >
                      <Database className="w-4 h-4" />
                      Extract Data
                    </button>
                  </div>
                </div>

                <div className="flex-1 bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-y-auto">
                  <div className="mb-2 text-gray-400">Browser Automation Console:</div>
                  {automationResults.length === 0 ? (
                    <div className="text-gray-500">Initialize Playwright to start browser automation...</div>
                  ) : (
                    automationResults.map((result, index) => (
                      <div key={index} className="mb-1">
                        {result}
                      </div>
                    ))
                  )}
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Browser Automation Features</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Cross-browser support (Chromium, Firefox, WebKit)</li>
                    <li>• CDP/CDP+ protocol integration</li>
                    <li>• WebSocket communication for real-time control</li>
                    <li>• Persistent session management</li>
                    <li>• Proxy rotation and bot detection avoidance</li>
                    <li>• Multi-agent workflow orchestration</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
