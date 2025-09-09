"use client"

import { useState } from "react"
import { MessageCircle, Globe, Users, Zap, Heart, Brain, Code, Settings, Bot, GitBranch, Play } from "lucide-react"

export function SheikhAgent() {
  const [activeLanguage, setActiveLanguage] = useState<"en" | "bn">("en")
  const [activeTab, setActiveTab] = useState<"features" | "reasoning" | "architecture" | "deployment" | "demo">(
    "features",
  )
  const [isProcessing, setIsProcessing] = useState(false)

  const simulateAIProcessing = async () => {
    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsProcessing(false)
  }

  const features = [
    {
      id: "conversation",
      icon: MessageCircle,
      title: { en: "Autonomous Conversations", bn: "স্বায়ত্তশাসিত কথোপকথন" },
      description: {
        en: "Engage in goal-oriented discussions with autonomous decision-making and adaptive responses",
        bn: "স্বায়ত্তশাসিত সিদ্ধান্ত গ্রহণ এবং অভিযোজিত প্রতিক্রিয়া সহ লক্ষ্য-ভিত্তিক আলোচনায় অংশগ্রহণ করুন",
      },
      color: "bg-blue-500",
      agenticFeatures: ["Goal-oriented dialogue", "Context awareness", "Adaptive learning"],
    },
    {
      id: "reasoning",
      icon: Brain,
      title: { en: "Advanced Reasoning", bn: "উন্নত যুক্তি" },
      description: {
        en: "Multi-modal reasoning with deductive, inductive, and probabilistic inference capabilities",
        bn: "ডিডাক্টিভ, ইন্ডাক্টিভ এবং সম্ভাব্যতাভিত্তিক অনুমান ক্ষমতা সহ বহু-মাত্রিক যুক্তি",
      },
      color: "bg-purple-600",
      agenticFeatures: ["Logical inference", "Pattern recognition", "Uncertainty handling"],
    },
    {
      id: "tools",
      icon: Bot,
      title: { en: "Tool Integration", bn: "টুল ইন্টিগ্রেশন" },
      description: {
        en: "Autonomous tool usage including web search, code execution, and API interactions",
        bn: "ওয়েব সার্চ, কোড এক্সিকিউশন এবং API ইন্টারঅ্যাকশন সহ স্বায়ত্তশাসিত টুল ব্যবহার",
      },
      color: "bg-green-600",
      agenticFeatures: ["API orchestration", "Code generation", "Real-time data access"],
    },
    {
      id: "community",
      icon: Users,
      title: { en: "Multi-Agent Collaboration", bn: "মাল্টি-এজেন্ট সহযোগিতা" },
      description: {
        en: "Coordinate with specialized agents for complex task execution and knowledge sharing",
        bn: "জটিল কাজ সম্পাদন এবং জ্ঞান ভাগাভাগির জন্য বিশেষায়িত এজেন্টদের সাথে সমন্বয় করুন",
      },
      color: "bg-orange-500",
      agenticFeatures: ["Agent orchestration", "Task delegation", "Collaborative learning"],
    },
  ]

  return (
    <div className="relative min-h-screen p-6">
      <div className="space-y-8 pb-32">
        {/* Header */}
        <div className="text-center py-12 bg-gradient-to-br from-green-50 to-red-50 rounded-2xl">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-600 to-red-600 rounded-full flex items-center justify-center mb-4">
              <Bot className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent">
              Sheikh AI Agent
            </h1>
            <p className="text-xl text-slate-600 mt-2">
              {activeLanguage === "en"
                ? "Bangladesh's Advanced Autonomous AI Agent"
                : "বাংলাদেশের সবচেয়ে উন্নত স্বায়ত্তশাসিত AI এজেন্ট"}
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <button
              className="px-6 py-3 bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white rounded-lg font-medium disabled:opacity-50"
              onClick={simulateAIProcessing}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {activeLanguage === "en" ? "Processing..." : "প্রক্রিয়াকরণ..."}
                </div>
              ) : activeLanguage === "en" ? (
                "Start Conversation"
              ) : (
                "কথোপকথন শুরু করুন"
              )}
            </button>
            <button className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 flex items-center gap-2">
              <Code className="w-4 h-4" />
              {activeLanguage === "en" ? "Code Editor" : "কোড এডিটর"}
            </button>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="flex justify-center gap-2">
          <button
            className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
              activeLanguage === "en"
                ? "bg-slate-900 text-white"
                : "border border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
            onClick={() => setActiveLanguage("en")}
          >
            <Globe className="w-4 h-4" />
            English
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
              activeLanguage === "bn"
                ? "bg-slate-900 text-white"
                : "border border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
            onClick={() => setActiveLanguage("bn")}
          >
            <Heart className="w-4 h-4" />
            বাংলা
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center">
          <div className="flex gap-2 p-1 bg-slate-100 rounded-lg">
            {[
              { key: "features", label: { en: "Features", bn: "বৈশিষ্ট্য" }, icon: Zap },
              { key: "reasoning", label: { en: "Reasoning", bn: "যুক্তি" }, icon: Brain },
              { key: "architecture", label: { en: "Architecture", bn: "আর্কিটেকচার" }, icon: Settings },
              { key: "demo", label: { en: "Demo", bn: "ডেমো" }, icon: Play },
              { key: "deployment", label: { en: "Deployment", bn: "স্থাপনা" }, icon: GitBranch },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.key}
                  className={`px-3 py-2 rounded-md font-medium flex items-center gap-2 text-sm ${
                    activeTab === tab.key ? "bg-white text-slate-900 shadow-sm" : "text-slate-600 hover:text-slate-900"
                  }`}
                  onClick={() => setActiveTab(tab.key as any)}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label[activeLanguage]}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Features Tab */}
          {activeTab === "features" && (
            <div className="space-y-6">
              {/* Core Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <div
                      key={feature.id}
                      className="bg-white border border-slate-200 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${feature.color} text-white`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-semibold">{feature.title[activeLanguage]}</h3>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{feature.description[activeLanguage]}</p>
                      <div className="flex flex-wrap gap-1">
                        {feature.agenticFeatures.map((agenticFeature, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs border">
                            {agenticFeature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Capabilities */}
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-6">
                  <Brain className="w-5 h-5" />
                  <h2 className="text-xl font-semibold">
                    {activeLanguage === "en" ? "Agent Capabilities" : "এজেন্ট ক্ষমতা"}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-slate-700 border-b pb-1">
                      {activeLanguage === "en" ? "Agentic Intelligence" : "এজেন্টিক বুদ্ধিমত্তা"}
                    </h4>
                    <div className="space-y-2">
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                        {activeLanguage === "en" ? "Autonomous goal pursuit" : "স্বায়ত্তশাসিত লক্ষ্য অনুসরণ"}
                      </span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                        {activeLanguage === "en" ? "Dynamic adaptation" : "গতিশীল অভিযোজন"}
                      </span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                        {activeLanguage === "en" ? "Multi-step planning" : "বহু-পদক্ষেপ পরিকল্পনা"}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-slate-700 border-b pb-1">
                      {activeLanguage === "en" ? "Reasoning Systems" : "যুক্তি ব্যবস্থা"}
                    </h4>
                    <div className="space-y-2">
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                        {activeLanguage === "en" ? "Logical inference" : "যৌক্তিক অনুমান"}
                      </span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                        {activeLanguage === "en" ? "Probabilistic modeling" : "সম্ভাব্যতা মডেলিং"}
                      </span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                        {activeLanguage === "en" ? "Causal reasoning" : "কার্যকারণ যুক্তি"}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-slate-700 border-b pb-1">
                      {activeLanguage === "en" ? "Production Ready" : "উৎপাদন প্রস্তুত"}
                    </h4>
                    <div className="space-y-2">
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                        {activeLanguage === "en" ? "Docker deployment" : "ডকার স্থাপনা"}
                      </span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                        {activeLanguage === "en" ? "Scalable architecture" : "স্কেলেবল আর্কিটেকচার"}
                      </span>
                      <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                        {activeLanguage === "en" ? "Real-time monitoring" : "রিয়েল-টাইম মনিটরিং"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs content */}
          {activeTab !== "features" && (
            <div className="bg-white border border-slate-200 rounded-lg p-8 text-center">
              <h3 className="text-lg font-semibold mb-2">{activeLanguage === "en" ? "Coming Soon" : "শীঘ্রই আসছে"}</h3>
              <p className="text-slate-600">
                {activeLanguage === "en" ? "This section is under development" : "এই বিভাগটি উন্নয়নাধীন"}
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-600 to-red-600 text-white rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">
            {activeLanguage === "en"
              ? "Ready to Experience Advanced Agentic AI?"
              : "উন্নত এজেন্টিক AI অভিজ্ঞতা নিতে প্রস্তুত?"}
          </h3>
          <p className="mb-4 opacity-90">
            {activeLanguage === "en"
              ? "Start your journey with Sheikh AI - Bangladesh's most advanced autonomous AI agent with multi-modal reasoning and production-ready architecture."
              : "Sheikh AI এর সাথে আপনার যাত্রা শুরু করুন - বাংলাদেশের সবচেয়ে উন্নত স্বায়ত্তশাসিত AI এজেন্ট যা মাল্টি-মোডাল যুক্তি এবং উৎপাদন-প্রস্তুত আর্কিটেকচার সহ।"}
          </p>
          <div className="flex justify-center gap-3">
            <button className="px-6 py-3 bg-white text-green-600 rounded-lg font-medium hover:bg-slate-100">
              {activeLanguage === "en" ? "Start Conversation" : "কথোপকথন শুরু করুন"}
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-green-600">
              {activeLanguage === "en" ? "View Documentation" : "ডকুমেন্টেশন দেখুন"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
