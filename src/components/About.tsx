"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap, Target, Cpu } from "lucide-react";

const timelineEvents = [
  {
    duration: "Aug 2022 - June 2026",
    role: "B.Tech in Computer Science (Data Science)",
    company: "UPES Dehradun, India",
    description: "Developing deep technical expertise in data structures, database design, and machine learning models. Maintaining a strong academic record with a CGPA of 8.10/10.0.",
    icon: GraduationCap,
    color: "#00E5FF",
  },
  {
    duration: "June 2023 - July 2023",
    role: "Social Awareness & Analytics Lead",
    company: "Aarohi Blood Centre",
    description: "Spearheaded digital campaigns and engagement initiatives. Analyzed location-based trends, audience demographics, and campaign responses to plan and optimize outreach events.",
    icon: Target,
    color: "#7B61FF",
  },
  {
    duration: "April 2024 - Sept 2024",
    role: "Marketing Analyst Intern",
    company: "IPM Management Services",
    description: "Leveraged Excel and Power BI to analyze marketing KPIs. Identified core demographics, measured campaign effectiveness, and formulated recommendations to target audiences.",
    icon: Briefcase,
    color: "#00FFB3",
  },
  {
    duration: "June 2025 - July 2025",
    role: "Data Science Intern",
    company: "DRDO - ISSA Lab, Ministry of Defence",
    description: "Spearheaded the 'Bodhak AI' project, constructing a natural language query system for database interaction. Integrated LangChain models to generate and validate exact SQL queries.",
    icon: Cpu,
    color: "#7B61FF",
  },
  {
    duration: "June 2025 - July 2025",
    role: "Data Science Intern",
    company: "IBM (International Business Machines)",
    description: "Engineered classification models for Titanic survival predictions. Preprocessed datasets, trained scikit-learn models (Logistic Regression, Random Forests), and visualized patterns.",
    icon: Briefcase,
    color: "#00E5FF",
  },
  {
    duration: "2022 - 2025",
    role: "Business & Technology Consultant",
    company: "Aspiria Project",
    description: "Provided branding, digital presence, and technical operations support to 10+ local small businesses, resulting in measurable customer acquisition and service modernization.",
    icon: Target,
    color: "#7B61FF",
  },
  {
    duration: "Oct 2025 - Dec 2025",
    role: "AI/ML Intern",
    company: "CheckExplore Technologies",
    description: "Worked on real-world AI and data-driven projects. Supported machine learning workflows, data analysis, and insurance problem-solving for key client Yokohama Tyre.",
    icon: Cpu,
    color: "#00FFB3",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050816] bg-mesh border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-widest text-[#00E5FF] font-semibold mb-2">About Me</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Decoding Complex Data. <br/>
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#7B61FF] bg-clip-text text-transparent">
              Architecting Business Growth.
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-3xl border-white/5 relative overflow-hidden shadow-inset">
              {/* Glow background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />
              
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#00E5FF]" /> My Narrative
              </h4>
              <p className="text-[#A0A0A0] leading-relaxed mb-4">
                I am a CSE student specializing in Data Science at UPES Dehradun, combining a rigorous analytical foundation with practical business acumen. My journey bridges the gap between deep technical systems—like machine learning pipelines and NLP query converters—and high-impact business decision-making.
              </p>
              <p className="text-[#A0A0A0] leading-relaxed">
                Whether creating advanced analytics dashboards to streamline marketing operations, consulting local companies on digital modernization, or engineering natural language search layers for military databases, I focus on building robust, scalable solutions that unlock the hidden value in data.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border-white/5 shadow-inset">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-[#00FFB3]" /> Core Philosophy
              </h4>
              <ul className="space-y-4 text-sm text-[#A0A0A0]">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#00E5FF] mt-1.5 flex-shrink-0" />
                  <span><strong>Actionable Intelligence:</strong> Raw data is noise; insights must drive operational actions and strategy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#7B61FF] mt-1.5 flex-shrink-0" />
                  <span><strong>AI Integration:</strong> Infusing Large Language Models (LLMs) to make enterprise databases accessible through simple voice and text commands.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#00FFB3] mt-1.5 flex-shrink-0" />
                  <span><strong>Agile Problem Solving:</strong> Diagnosing technological bottlenecks and designing custom workflows from scratch.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Timeline Column */}
          <div className="lg:col-span-7">
            <h4 className="text-xl font-semibold text-white mb-8 px-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-[#7B61FF]" /> Professional Timeline
            </h4>

            <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-12 ml-4">
              {timelineEvents.map((event, idx) => {
                const Icon = event.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative group"
                  >
                    {/* Glowing Node */}
                    <div
                      className="absolute -left-[38px] md:-left-[46px] top-1.5 h-6 w-6 md:h-8 md:w-8 rounded-full flex items-center justify-center border border-white/10 bg-[#050816] z-10 transition-all duration-300 group-hover:scale-110"
                      style={{
                        borderColor: event.color,
                        boxShadow: `0 0 10px ${event.color}30`,
                      }}
                    >
                      <Icon className="h-3 w-3 md:h-4 md:w-4" style={{ color: event.color }} />
                    </div>

                    {/* Timeline card */}
                    <div className="glass-card glass-card-hover p-6 rounded-2xl border-white/5 shadow-inset relative">
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: event.color }}>
                        {event.duration}
                      </span>
                      <h5 className="text-lg font-bold text-white mt-1">{event.role}</h5>
                      <span className="text-sm font-semibold text-white/70 block mb-3">{event.company}</span>
                      <p className="text-sm text-[#A0A0A0] leading-relaxed">{event.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
