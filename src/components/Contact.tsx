"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Copy, Check } from "lucide-react";

// Inline Github & Linkedin SVGs to avoid modular export resolution issues
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sharmadivyanshu.ds@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setStatus("sending");
    
    // Retrieve Web3Forms access key from env file or fall back to code block
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey || accessKey.includes("YOUR_WEB3FORMS")) {
      console.warn("Web3Forms Access Key is not configured in env variables.");
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey || "YOUR_ACCESS_KEY_HERE",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: "New Portfolio Enquiry - Divyanshu Sharma",
          from_name: "Portfolio Contact System",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        console.error("Web3Forms failed to submit:", result);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050816] relative overflow-hidden border-t border-white/5 bg-mesh">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7B61FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-widest text-[#00FFB3] font-semibold mb-2">Get In Touch</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Data Speaks I <span className="bg-gradient-to-r from-[#00FFB3] to-[#00E5FF] bg-clip-text text-transparent">Listen</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Details & Holographic Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Direct details info */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Contact Information</h4>
              <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed mb-8">
                Whether it's data analytics, business strategy, AI innovation, or technology-driven decision making, I'm always open to meaningful conversations and new opportunities.
              </p>

              <div className="space-y-4">
                {/* Email row */}
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#00E5FF] group-hover:border-[#00E5FF]/40 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-[#A0A0A0] block">Email Me</span>
                    <a href="mailto:sharmadivyanshu.ds@gmail.com" className="text-sm sm:text-base font-bold text-white hover:text-[#00E5FF] transition-colors truncate block">
                      sharmadivyanshu.ds@gmail.com
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#A0A0A0] hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="h-4 w-4 text-[#00FFB3]" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Phone row */}
                <div className="flex items-center gap-4 group">
                  <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#7B61FF] group-hover:border-[#7B61FF]/40 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A0A0A0] block">Call Me</span>
                    <a href="tel:+917984573238" className="text-sm sm:text-base font-bold text-white hover:text-[#7B61FF] transition-colors">
                      +91 7984573238
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Holographic 3D Contact Card */}
            <motion.div
              whileHover={{ rotateY: 10, rotateX: -5 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-card p-6 rounded-3xl border-white/5 relative overflow-hidden bg-gradient-to-br from-white/[0.03] to-[#7B61FF]/5 shadow-inset h-48 sm:h-52 flex flex-col justify-between cursor-default transition-all duration-300"
            >
              {/* Circuit board lines overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(1px_circle_at_50px_50px,#ffffff10,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              
              <div className="flex justify-between items-start">
                <div>
                  <h5 className="text-lg font-extrabold tracking-wide text-white uppercase">Divyanshu Sharma</h5>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#00E5FF]">DATA & AI PROFESSIONAL</span>
                </div>
                {/* Micro chip visualization */}
                <div className="h-7 w-9 rounded-md bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 border border-yellow-500/40 relative">
                  <div className="absolute inset-x-1.5 inset-y-1 border-r border-yellow-500/20" />
                  <div className="absolute inset-y-1.5 inset-x-2.5 border-b border-yellow-500/20" />
                </div>
              </div>

              <div className="space-y-1 font-mono text-[10px] text-[#A0A0A0]">
                <div>MISSION: TURNING_DATA_INTO_DECISIONS</div>
                <div>TOOLKIT: SQL // POWER_BI // PYTHON // AI // Tableau // Excel</div>
                <div>SPECIALIZATION: DATA_ANALYTICS // BUSINESS_ANALYTICS // AI // TECH_CONSULTANT</div>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-white/5">
                <span className="text-[9px] uppercase tracking-widest text-[#A0A0A0] font-bold">DATA SPEAKS I LISTEN</span>
                <div className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/divyanshu-sharma-02591726a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-6 w-6 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://github.com/Dvysharma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-6 w-6 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border-white/5 shadow-inset h-full">
              <h4 className="text-xl font-bold text-white mb-6">Send Message</h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-[#A0A0A0] font-semibold block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 focus:border-[#00E5FF]/50 focus:bg-white/10 text-white placeholder-white/20 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-[#A0A0A0] font-semibold block mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 focus:border-[#00E5FF]/50 focus:bg-white/10 text-white placeholder-white/20 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-[#A0A0A0] font-semibold block mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="How can I help you?"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 focus:border-[#00E5FF]/50 focus:bg-white/10 text-white placeholder-white/20 text-sm outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="interactive w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#7B61FF] text-white font-semibold transition-all hover:opacity-95 disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <>Sending...</>
                  ) : status === "success" ? (
                    <>Message Sent Successfully!</>
                  ) : status === "error" ? (
                    <>Error. Please try again.</>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
