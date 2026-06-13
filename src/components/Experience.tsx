"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import type { ElementType } from "react";
import { Cpu, ShieldCheck, TrendingUp, ChevronRight, Target } from "lucide-react";

function Logo({ src, Icon, alt, color }: { src?: string; Icon?: ElementType | any; alt?: string; color?: string }) {
  const [errored, setErrored] = useState(false);

  if (src && !errored) {
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain"
        onError={() => setErrored(true)}
      />
    );
  }

  if (Icon) {
    return <Icon className="h-7 w-7" style={{ color }} />;
  }

  return null;
}

const experiences = [
  {
    company: "DRDO - ISSA Lab",
    companyFull: "Defense Research and Development Organization",
    location: "Delhi, India (On-site)",
    role: "Data Science Intern",
    duration: "June 2025 - July 2025",
    iconSrc: "/drdo_icon.png",
    color: "#00E5FF",
    bgLight: "rgba(0, 229, 255, 0.05)",
    borderLight: "rgba(0, 229, 255, 0.2)",
    achievements: [
      "Worked on the system 'Bodhak AI' translating natural language questions into executable database queries.",
      "Integrated LangChain models to establish a robust text-to-SQL pipeline for rapid structured data access.",
      "Established connectivity between local SQL databases and Python apps to process queries and validate output accuracy.",
      "Assisted in refining model prompting and parser functions to minimize syntax failures in database environments."
    ],
    skills: ["LangChain", "Python", "SQL", "NLP", "LLM Connectivity", "Prompt Engineering"]
  },
  {
    company: "IBM",
    companyFull: "International Business Machines",
    location: "Remote",
    role: "Data Science Intern",
    duration: "June 2025 - July 2025",
    iconSrc: "/ibm_icon.png",
    color: "#7B61FF",
    bgLight: "rgba(123, 97, 255, 0.05)",
    borderLight: "rgba(123, 97, 255, 0.2)",
    achievements: [
      "Constructed a machine learning classifier to predict Titanic passenger survival using Python and scikit-learn.",
      "Cleaned, transformed, and handled missing parameters in the Titanic dataset, extracting core indicators like cabin levels.",
      "Evaluated and compared multiple classifier frameworks (Logistic Regression, Random Forests, Decision Trees).",
      "Conducted exploratory data analysis (EDA) using Matplotlib and Seaborn, and delivered structured analytical reports."
    ],
    skills: ["Scikit-Learn", "Machine Learning", "Data Preprocessing", "Exploratory Data Analysis", "Matplotlib", "Seaborn"]
  },
  {
    company: "Aspiria",
    companyFull: "Aspiria Business Consulting",
    location: "Remote",
    role: "Business & Technology Consultant",
    duration: "2022 - 2025",
    iconSrc: "/aspiria_icon.png",
    icon: Target,
    color: "#00FFB3",
    bgLight: "rgba(0, 255, 179, 0.05)",
    borderLight: "rgba(0, 255, 179, 0.2)",
    achievements: [
      "Advised 10+ small business clients on digital adoption, local search visibility, and software tooling setups.",
      "Designed cohesive branding materials, logo assets, and social media content strategies to improve client engagement.",
      "Assisted local companies in implementing modern point-of-sale systems and online customer booking platforms.",
      "Gathered client requirements to deliver custom business growth blueprints, expanding their regional digital outreach."
    ],
    skills: ["Business Consulting", "Digital Strategy", "Requirement Gathering", "Client Relations", "Branding & Design"]
  },
  {
    company: "CheckExplore",
    companyFull: "CheckExplore Technologies",
    location: "Navi Mumbai, India (On-site)",
    role: "AI / ML Intern",
    duration: "April 2026 - July 2026",
    iconSrc: "/checkexplore_icon_new.png",
    color: "#7B61FF",
    bgLight: "rgba(123, 97, 255, 0.05)",
    borderLight: "rgba(123, 97, 255, 0.2)",
    achievements: [
      "Worked on real-world AI and data-driven projects to automate analysis workflows.",
      "Supported machine learning workflows, preprocessing, and analysis for key client Yokohama Tyre.",
      "Assisted in solving complex insurance-related business problems using AI and ML methodologies.",
      "Collaborated with cross-functional technical teams to support decision-making frameworks."
    ],
    skills: ["AI", "Machine Learning", "Data Analysis", "Predictive Workflows", "Team Collaboration"]
  },
  {
    company: "IPM Management Services",
    companyFull: "IPM Management Services",
    location: "Dehradun, India (Hybrid)",
    role: "Marketing Analyst Intern",
    duration: "April 2024 - Sept 2024",
    iconSrc: "/ipm_icon.jpeg",
    color: "#00E5FF",
    bgLight: "rgba(0, 229, 255, 0.05)",
    borderLight: "rgba(0, 229, 255, 0.2)",

    achievements: [
      "Utilized Power BI and Excel to analyze and cross-reference performance parameters for ad campaigns.",
      "Monitored customer acquisitions, clicks, and conversion ratios, highlighting patterns for improved demographic matching.",
      "Compiled detailed visual reports and summaries to guide operational decisions and marketing budget allocations."
    ],
    skills: ["Power BI", "Excel (Advanced)", "Marketing Analytics", "Data Analysis", "Reporting & Dashboards"]
  },
  {
    company: "Aarohi Blood Centre",
    companyFull: "Aarohi Blood Centre",
    location: "June 2023 - July 2023",
    role: "Campaign Analyst & Awareness Lead",
    duration: "June 2023 - July 2023",
    iconSrc: "/aarohi_icon.png",
    color: "#7B61FF",
    bgLight: "rgba(123, 97, 255, 0.05)",
    borderLight: "rgba(123, 97, 255, 0.2)",
    achievements: [
      "Led digital awareness campaigns and engagement initiatives to improve community participation and blood donation rates.",
      "Analyzed campaign outreach metrics, audience responsiveness, and location-based trends to drive decision-making.",
      "Collaborated with marketing and field teams to optimize outreach strategies and boost event turnout."
    ],
    skills: ["Campaign Analytics", "Community Engagement", "Audience Response Analysis", "Data-Driven Planning"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#050816] relative overflow-hidden border-t border-white/5">
      {/* Visual lighting accents */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#7B61FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-widest text-[#7B61FF] font-semibold mb-2">Professional Experience</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Where I've Worked & <span className="bg-gradient-to-r from-[#7B61FF] to-[#00E5FF] bg-clip-text text-transparent">Contributed</span>
          </h3>
        </div>

        {/* Experience Cards Container */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon as any;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 sm:p-8 rounded-3xl border-white/5 shadow-inset relative group overflow-hidden"
              >
                {/* Glow backdrops */}
                <div
                  className="absolute -right-20 -top-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: exp.color + "15" }}
                />

                <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                  
                  {/* Left Side: Role details */}
                  <div className="flex gap-4 items-start">
                    <div
                      className="h-14 w-14 rounded-3xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 flex-shrink-0 overflow-hidden bg-white"
                      style={{
                        backgroundColor: exp.bgLight,
                        borderColor: exp.borderLight,
                      }}
                    >
                      <Logo src={exp.iconSrc} Icon={Icon} alt={`${exp.company} logo`} color={exp.color} />
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white transition-colors">
                        {exp.role}
                      </h4>
                      <div className="text-sm font-semibold text-white/70 mt-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span>{exp.company}</span>
                        <span className="text-[#A0A0A0]">•</span>
                        <span className="text-[#A0A0A0] font-normal">{exp.location}</span>
                      </div>
                      <p className="text-xs text-[#A0A0A0] font-normal mt-0.5">{exp.companyFull}</p>
                    </div>
                  </div>

                  {/* Right Side: Duration badge */}
                  <div
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border backdrop-blur-md"
                    style={{
                      borderColor: exp.borderLight,
                      color: exp.color,
                      backgroundColor: exp.bgLight,
                    }}
                  >
                    {exp.duration}
                  </div>

                </div>

                {/* Achievements List */}
                <div className="mt-8 space-y-3">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-sm text-[#A0A0A0] group-hover:text-white/95 transition-colors">
                      <ChevronRight className="h-4.5 w-4.5 mt-0.5 flex-shrink-0" style={{ color: exp.color }} />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-xl bg-white/5 border border-white/5 text-xs text-[#A0A0A0] hover:text-white hover:border-white/20 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
