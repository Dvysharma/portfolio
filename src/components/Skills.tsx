"use client";

import { motion } from "framer-motion";
import { SkillGalaxyCanvas } from "./ThreeCanvas";
import { Database, BarChart3, TrendingUp, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Data Analytics",
    icon: BarChart3,
    color: "#00E5FF",
    shadow: "rgba(0, 229, 255, 0.15)",
    skills: ["SQL (MySQL/Postgres)", "Power BI", "Excel (Advanced)", "Python", "Tableau", "Data Visualization", "Pandas", "NumPy","Matplotlib", "Data Cleaning", "Exploratory Data Analysis"],
  },
  {
    title: "AI & Machine Learning",
    icon: Cpu,
    color: "#7B61FF",
    shadow: "rgba(123, 97, 255, 0.15)",
    skills: ["Machine Learning", "Generative AI", "NLP", "LangChain Integration", "PyTorch", "Hugging Face Hub", "Scikit-Learn", "RAG Models", "AI Solution Design", "Prompt Engineering", "Model Evaluation"],
  },
  {
    title: "Business Analytics",
    icon: TrendingUp,
    color: "#00FFB3",
    shadow: "rgba(0, 255, 179, 0.15)",
    skills: ["Market Research", "Business Strategy", "Competitive Analysis", "Requirement Gathering", "Solution Design", "KPI Development", "PowerPoint", "Stakeholder Communication", "Operational Efficiency", "Business Intelligence"],
  },
  {
    title: "Data Engineering & Systems",
    icon: Database,
    color: "#00E5FF",
    shadow: "rgba(0, 229, 255, 0.15)",
    skills: ["Flask APIs", "MySQL", "Relational Databases", "Prompt Engineering","ETL Processes","Supabase", "Software Understanding", "Data Architecture", "Database Design", "API Calling"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050816] border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#7B61FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[#00FFB3] font-semibold mb-2">My Competencies</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Skill Galaxy & <span className="bg-gradient-to-r from-[#00FFB3] to-[#00E5FF] bg-clip-text text-transparent">Tech Stack</span>
          </h3>
          <p className="text-[#A0A0A0] text-sm sm:text-base max-w-2xl mx-auto mt-4 font-light">
            A curated view of the analytics, business intelligence, and AI technologies that power my approach to transform data into insights, drive strategic decisions, and build intelligent solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 3D Canvas Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7B61FF]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="h-[320px] w-[320px] sm:h-[360px] sm:w-[360px] md:h-[400px] md:w-[400px] rounded-full border border-white/10 bg-[#0b0f24]/30 backdrop-blur-md overflow-hidden relative flex items-center justify-center shadow-2xl shadow-[#7B61FF]/5 hover:border-[#00E5FF]/20 transition-all duration-500">
              <SkillGalaxyCanvas />
            </div>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {skillCategories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{
                      y: -4,
                      borderColor: category.color,
                      boxShadow: `0 8px 30px ${category.color}15`,
                    }}
                    className="glass-card p-6 rounded-2xl border-white/5 shadow-inset flex flex-col justify-between transition-all duration-300"
                  >
                    <div>
                      {/* Icon & Title */}
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="h-10 w-10 rounded-xl flex items-center justify-center border border-white/10"
                          style={{
                            backgroundColor: `${category.color}10`,
                            borderColor: `${category.color}30`,
                          }}
                        >
                          <Icon className="h-5 w-5" style={{ color: category.color }} />
                        </div>
                        <h4 className="text-lg font-bold text-white">{category.title}</h4>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-xs text-[#A0A0A0] transition-colors hover:border-white/20 hover:text-white"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
