"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap, Target, Cpu } from "lucide-react";

const timelineEvents = [
  {
    duration: "Aug 2022 - June 2026",
    role: "B.Tech in Computer Science (Data Science)",
    company: "UPES Dehradun, India",
    description: "Built a strong foundation in data analytics, business intelligence, AI, machine learning, and database systems. Applied analytical thinking and data-driven problem solving across academic, consulting, and AI-focused projects while maintaining a CGPA of 8.2/10.0.",
    icon: GraduationCap,
    color: "#00E5FF",
  },
  {
    duration: "June 2023 - July 2023",
    role: "Social Internship - Social Media Campaign Analyst",
    company: "Aarohi Blood Centre",
    description: "Combined data analysis with campaign strategy to evaluate audience engagement, identify outreach opportunities, and support informed decision-making. Contributed to improving campaign performance through insights-driven planning and execution.",
    icon: Target,
    color: "#7B61FF",
  },
  {
    duration: "April 2024 - Sept 2024",
    role: "Marketing Analyst Intern",
    company: "IPM Management Services",
    description: "Applied data analytics and business intelligence techniques to evaluate marketing performance and customer behavior. Leveraged Excel and Power BI to transform data into actionable insights that informed strategic marketing decisions.",
    icon: Briefcase,
    color: "#00FFB3",
  },
  {
    duration: "June 2025 - July 2025",
    role: "Data Science Intern",
    company: "DRDO - ISSA Lab, Ministry of Defence",
    description: "Led the development of Bodhak AI, an AI-powered natural language query system designed to simplify database interaction. Leveraged LangChain and LLM technologies to translate user queries into accurate SQL statements, enabling faster data access and informed decision-making.",
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
    duration: "2022 - 2026",
    role: "Business & Technology Consultant",
    company: "Aspiria",
    description: "Partnered with 10+ small businesses to drive digital transformation, operational efficiency, and brand growth. Delivered strategic recommendations across technology adoption, business processes, and digital presence, enabling measurable business impact and modernization.",
    icon: Target,
    color: "#7B61FF",
  },
  {
    duration: "April 2026 - July 2026",
    role: "AI/ML Intern",
    company: "CheckExplore Technologies",
    description: "Worked on real-world AI and data-driven projects. Contributed to AI and data analytics solutions for Yokohama Tyre, supporting machine learning workflows, insurance claim analysis, and business decision-making through data-driven insights.",
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
                I work at the intersection of data, business, and artificial intelligence, transforming complex information into actionable insights and strategic decisions. My experience spans data analytics, business consulting, dashboard development, and AI-driven solutions, enabling organizations to make informed decisions and unlock growth opportunities.
              </p>
              <p className="text-[#A0A0A0] leading-relaxed mb-4">
                From developing analytics dashboards that streamline business operations to consulting businesses on digital transformation and building AI-powered systems, I focus on bridging technical capabilities with real-world business impact. My approach combines analytical thinking, stakeholder understanding, and emerging AI technologies to solve problems that matter.
              </p>
              <p className="text-[#A0A0A0] leading-relaxed">
                Whether it's uncovering trends through data, optimizing business processes, or leveraging machine learning and natural language processing to create intelligent solutions, I am passionate about turning data into measurable value and helping organizations make smarter decisions.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border-white/5 shadow-inset">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-[#00FFB3]" /> Core Philosophy
              </h4>
              <ul className="space-y-4 text-sm text-[#A0A0A0]">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#00E5FF] mt-1.5 flex-shrink-0" />
                  <span><strong>Actionable Intelligence:</strong> Raw data has limited value without context. I focus on transforming complex datasets into actionable insights that drive informed decisions, operational efficiency, and measurable business outcomes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#7B61FF] mt-1.5 flex-shrink-0" />
                  <span><strong>AI Integration:</strong> Infusing artificial intelligence and Large Language Models (LLMs) to simplify workflows, enhance accessibility to information, and create intelligent systems that solve real-world business challenges.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#06B6D4] mt-1.5 flex-shrink-0" />
                  <span><strong>Agile Problem Solving:</strong> Approach challenges with a solution-oriented mindset, rapidly identifying bottlenecks, evaluating alternatives, and designing scalable systems that adapt to evolving business needs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#EC4899] mt-1.5 flex-shrink-0" />
                  <span><strong>Data-Informed Decision Making:</strong> Combine analytical rigor with business understanding to uncover patterns, measure performance, and support strategic decisions through evidence rather than assumptions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] mt-1.5 flex-shrink-0" />
                  <span><strong>Bridging Business & Technology:</strong> Act as a bridge between technical capabilities and business objectives, ensuring that data, analytics, and AI initiatives create meaningful organizational value.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#7B61FF] mt-1.5 flex-shrink-0" />
                  <span><strong>Continuous Learning & Innovation: </strong> Technology evolves rapidly, and so do I. I embrace continuous learning, experimentation, and emerging technologies to remain adaptable and deliver forward-thinking solutions.</span>
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
