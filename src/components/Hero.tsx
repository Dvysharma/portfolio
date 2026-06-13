"use client";

import { motion } from "framer-motion";
import { HeroNetworkCanvas } from "./ThreeCanvas";
import { FileText, ArrowRight, Mail } from "lucide-react";

const stats = [
  { value: "5+", label: "Industry Internships" },
  { value: "10+", label: "Consulting Clients" },
  { value: "15+", label: "Analytics Projects" },
  { value: "1", label: "DRDO AI Project" },
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 18 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] pt-16">
      {/* Three.js Interactive Background */}
      <HeroNetworkCanvas />

      {/* Decorative Gradient Overlays */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-b from-transparent via-[#050816]/40 to-[#050816]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center"
        >
          {/* Badge spacer to maintain visual alignment layout */}
          <div className="h-6 mb-6" />

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl leading-tight"
          >
            Transforming Data Into{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] via-[#7B61FF] to-[#00FFB3] bg-clip-text text-transparent text-glow-primary">
              Business Intelligence
            </span>
          </motion.h1>

          {/* Subheading with nowrap spans to ensure title words stay together */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-[#A0A0A0] max-w-4xl mb-10 font-light leading-relaxed"
          >
            <span className="whitespace-nowrap">Data Analyst</span> <span className="text-[#7B61FF]">|</span>{" "}
            <span className="whitespace-nowrap">Business Analyst</span> <span className="text-[#00E5FF]">|</span>{" "}
            <span className="whitespace-nowrap">AI Enthusiast</span> <span className="text-[#00FFB3]">|</span>{" "}
            <span className="whitespace-nowrap">Technology Consultant</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-16 z-20"
          >
            <a
              href="#projects"
              className="interactive inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#7B61FF] text-white font-medium shadow-[0_4px_20px_rgba(0,229,255,0.25)] hover:shadow-[0_4px_30px_rgba(0,229,255,0.4)] transition-all duration-300 hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            
            <a
              href="#contact"
              className="interactive inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 hover:border-[#00E5FF]/40 bg-white/5 hover:bg-[#00E5FF]/5 text-white font-medium backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              Contact Me
              <Mail className="h-4 w-4 text-[#00FFB3]" />
            </a>

            <a
              href="/DivyanshuSharma_Resume_PA.pdf"
              download
              className="interactive inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-white/10 hover:border-[#7B61FF]/40 bg-white/5 hover:bg-[#7B61FF]/5 text-[#A0A0A0] hover:text-white font-medium backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              Resume
              <FileText className="h-4 w-4 text-[#7B61FF]" />
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col items-center justify-center border-white/5 shadow-inset"
              >
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white to-[#A0A0A0] bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#A0A0A0] font-medium uppercase tracking-wider text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Interactive Mouse Scroll Prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-xs uppercase tracking-widest text-[#A0A0A0] font-light">Scroll</span>
        <div className="w-[18px] h-[30px] rounded-full border border-white/30 flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
