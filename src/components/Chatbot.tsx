"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Sparkles, Loader2, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_QUESTIONS = [
  { text: "DRDO & IBM Internships?", query: "How did you manage the DRDO and IBM internships at the same time in 2025?" },
  { text: "B.Tech Details?", query: "When and where did you complete your B.Tech, and what was your CGPA?" },
  { text: "Key Projects?", query: "What are your key technical projects and what tech stack did you use?" },
  { text: "CheckExplore Intern?", query: "What did you work on during your CheckExplore Technologies internship?" }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I am Divyanshu's AI assistant. 🤖\n\nAsk me anything about my internships, education, projects, or technical skills! Or click one of the suggestions below."
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowNotification(false);
    }
  }, [messages, isOpen]);

  // Hide notification bubble automatically after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        })
      });

      if (!response.ok) {
        let errorMessage = "Failed to fetch answer";
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorData.message || errorMessage;
        } catch {
          // ignore parse error
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const botResponse = data.parts?.[0]?.text || "I apologize, but I encountered an issue retrieving the answer. Please try again.";
      
      setMessages((prev) => [...prev, { role: "assistant", content: botResponse }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      const errorText = error instanceof Error ? error.message : "I'm sorry, I seem to have trouble connecting to the server. Please check your internet or try again later.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: errorText }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  return (
    <>
      {/* Floating Chat Bubble Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Notification Tooltip */}
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mb-3 mr-1 bg-[#0b0f24] border border-[#00E5FF]/20 px-4 py-2.5 rounded-2xl shadow-xl text-xs text-white max-w-[200px] text-center backdrop-blur-md relative"
            >
              <div className="absolute right-6 -bottom-1.5 w-3 h-3 bg-[#0b0f24] border-r border-b border-[#00E5FF]/20 rotate-45" />
              <span>Ask me anything about my background! ⚡</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`h-14 w-14 rounded-full bg-gradient-to-tr from-[#00E5FF] to-[#7B61FF] text-white flex items-center justify-center shadow-lg cursor-pointer ${
            isOpen ? "shadow-[#7B61FF]/40" : "shadow-[#00E5FF]/40"
          } transition-shadow duration-300 z-50`}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <div className="relative">
              <MessageSquare className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFB3] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FFB3]"></span>
              </span>
            </div>
          )}
        </motion.button>
      </div>

      {/* Chat Window Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] h-[520px] max-h-[75vh] rounded-3xl overflow-hidden glass-card flex flex-col border border-white/10 shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-[#0b0f24]/90 p-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#00E5FF]/10 to-[#7B61FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                  <Bot className="h-5 w-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">Divyanshu's AI Agent</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00FFB3] animate-pulse" />
                    <span className="text-[10px] text-[#A0A0A0] font-normal uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#A0A0A0] hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Body (Messages) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-gradient-to-tr from-[#00E5FF]/15 to-[#7B61FF]/15 border border-[#00E5FF]/30 text-white rounded-br-none shadow-md"
                        : "bg-white/5 border border-white/5 text-[#d0d0d0] rounded-bl-none shadow-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {/* AI Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 text-[#A0A0A0] rounded-2xl rounded-bl-none p-3 flex items-center gap-2 text-xs">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-[#00E5FF]" />
                    <span>Analyzing qualifications...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <p className="text-[10px] text-[#A0A0A0] uppercase tracking-wider mb-2 font-medium">Suggested Topics</p>
                <div className="flex flex-col gap-1.5 max-h-[130px] overflow-y-auto pr-1">
                  {QUICK_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(q.query)}
                      className="text-left text-[11px] text-[#00E5FF] hover:text-white bg-[#00E5FF]/5 border border-[#00E5FF]/10 hover:border-[#00E5FF]/30 px-3 py-1.5 rounded-xl transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Sparkles className="h-3 w-3 flex-shrink-0" />
                      <span className="truncate">{q.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Input Form */}
            <form
              onSubmit={handleFormSubmit}
              className="p-4 bg-[#0b0f24]/90 border-t border-white/5 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me a question..."
                disabled={isLoading}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder-[#A0A0A0] focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#00E5FF] to-[#7B61FF] text-white flex items-center justify-center hover:opacity-90 disabled:opacity-40 transition-opacity cursor-pointer flex-shrink-0"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
