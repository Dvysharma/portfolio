"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Terminal, Network, ArrowRight } from "lucide-react";

export default function PatentResearch() {
  return (
    <section id="innovation" className="py-24 bg-[#050816] relative overflow-hidden border-t border-white/5 bg-mesh">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B61FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#00FFB3] font-semibold mb-2">Research & Patents</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Innovation & <span className="bg-gradient-to-r from-[#00FFB3] to-[#7B61FF] bg-clip-text text-transparent">AI Research</span>
          </h3>
        </div>

        {/* Highlight Card */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border-white/5 shadow-inset max-w-5xl mx-auto mb-12 relative overflow-hidden">
          {/* Subtle decoration lines */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#7B61FF]/10 to-transparent rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side: system outline */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B61FF]/15 border border-[#7B61FF]/30 text-xs font-semibold text-[#7B61FF] mb-6">
                <Brain className="h-3.5 w-3.5" /> Intelligence Translation Systems
              </span>
              
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Bodhak AI: Text-to-SQL System Architecture
              </h4>
              
              <p className="text-[#A0A0A0] text-sm sm:text-base leading-relaxed mb-6">
                During my tenure at the **DRDO-ISSA Lab**, I contributed to the architecture and implementation of **Bodhak AI**, a system that translates natural language questions into precise, executable SQL statements. This system connects complex large language models (LLMs) to structured enterprise databases, eliminating query writing latency.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-2.5 items-start">
                  <span className="h-5 w-5 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="h-3 w-3 text-[#00E5FF]" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-white block">Schema Security</span>
                    <span className="text-[11px] text-[#A0A0A0]">Protects backend database layouts from prompt injection.</span>
                  </div>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="h-5 w-5 rounded-lg bg-[#00FFB3]/10 border border-[#00FFB3]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Network className="h-3 w-3 text-[#00FFB3]" />
                  </span>
                  <div>
                    <span className="text-xs font-bold text-white block">LangChain Orchestration</span>
                    <span className="text-[11px] text-[#A0A0A0]">Connects semantic models with local database engines.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Mock Terminal / Pipeline viz */}
            <div className="lg:col-span-5 bg-black/40 border border-white/5 rounded-2xl p-6 font-mono text-xs text-[#A0A0A0] relative shadow-inset">
              <div className="flex gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="text-[10px] text-white/40 ml-2">bodhak_pipeline.py</span>
              </div>
              <div className="space-y-2.5">
                <div>
                  <span className="text-[#00FFB3]">&gt; Input:</span> "Show total sales for electronics in Q1 2026"
                </div>
                <div>
                  <span className="text-[#7B61FF]">&gt; Processing:</span> Embedding query and extracting metadata...
                </div>
                <div>
                  <span className="text-[#00E5FF]">&gt; LangChain:</span> Contextual prompt injected. Schema mapped.
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-white/90">
                  <span className="text-yellow-500 font-semibold">SELECT</span> SUM(sales_amount) <span className="text-yellow-500 font-semibold">FROM</span> sales <span className="text-yellow-500 font-semibold">WHERE</span> category = <span className="text-emerald-400">'Electronics'</span> <span className="text-yellow-500 font-semibold">AND</span> sale_date <span className="text-yellow-500 font-semibold">BETWEEN</span> <span className="text-emerald-400">'2026-01-01'</span> <span className="text-yellow-500 font-semibold">AND</span> <span className="text-emerald-400">'2026-03-31'</span>;
                </div>
                <div className="text-emerald-400">
                  <span className="text-white/40">&gt; Query Status:</span> Success. Executing on DB...
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Inner core research cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="glass-card p-6 rounded-2xl border-white/5 shadow-inset flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] mb-4">
                <Brain className="h-5 w-5" />
              </div>
              <h5 className="text-lg font-bold text-white mb-2">Semantic Schema Mapping</h5>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                Innovation in automatically linking conversational nouns (e.g. "employees", "sales") to exact SQL tables and foreign key constraints using semantic embedding vectors.
              </p>
            </div>
            <div className="text-[10px] text-[#00E5FF] font-semibold mt-4 tracking-wider uppercase">DRDO-ISSA Innovation</div>
          </div>

          <div className="glass-card p-6 rounded-2xl border-white/5 shadow-inset flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-[#7B61FF]/10 border border-[#7B61FF]/20 flex items-center justify-center text-[#7B61FF] mb-4">
                <Terminal className="h-5 w-5" />
              </div>
              <h5 className="text-lg font-bold text-white mb-2">Automated Query Parsing</h5>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                Development of prompt heuristics and validator chains that ensure syntax matches database dialects (MySQL, SQLite, SQL Server) without compile failures.
              </p>
            </div>
            <div className="text-[10px] text-[#7B61FF] font-semibold mt-4 tracking-wider uppercase">NLP Translation Architecture</div>
          </div>

          <div className="glass-card p-6 rounded-2xl border-white/5 shadow-inset flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-[#00FFB3]/10 border border-[#00FFB3]/20 flex items-center justify-center text-[#00FFB3] mb-4">
                <Shield className="h-5 w-5" />
              </div>
              <h5 className="text-lg font-bold text-white mb-2">Sandboxed DB Safety</h5>
              <p className="text-xs text-[#A0A0A0] leading-relaxed">
                Ensuring generated queries undergo static parsing before database execution to block destructive actions (e.g. DELETE, DROP) and safeguard server integrity.
              </p>
            </div>
            <div className="text-[10px] text-[#00FFB3] font-semibold mt-4 tracking-wider uppercase">Defense-Grade Safety Protocol</div>
          </div>

        </div>

      </div>
    </section>
  );
}
