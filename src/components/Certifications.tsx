"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Database, FileSpreadsheet, BarChart2, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Microsoft DP-100: Designing and Implementing a Data Science Solution on Azure",
    provider: "Microsoft",
    icon: ShieldCheck,
    color: "#00E5FF",
    link: "https://drive.google.com/file/d/1b3n2wP1kXa-9v9oznEsWdlK2QCqxGECX/view?usp=sharing",
    glowColor: "rgba(0, 229, 255, 0.1)"
  },
  {
    title: "Databases and SQL for Data Science with Python",
    provider: "Coursera",
    icon: Database,
    color: "#7B61FF",
    link: "https://drive.google.com/file/d/1oVvgoWBoRPhVEVCiQzRcxg4VLzJPXUQ8/view?usp=sharing",
    glowColor: "rgba(123, 97, 255, 0.1)"
  },
  {
    title: "Microsoft Excel: A Beginners Guide to Pivot Tables in Excel",
    provider: "Infosys",
    icon: FileSpreadsheet,
    color: "#00FFB3",
    link: "https://drive.google.com/file/d/11KBcNjXy_Xl8QERMLUN0h4zy7A7mQ5cF/view?usp=sharing",
    glowColor: "rgba(0, 255, 179, 0.1)"
  },
  {
    title: "Marketing Analytics Certification",
    provider: "Infosys",
    icon: Award,
    color: "#7B61FF",
    link: "https://drive.google.com/file/d/1WeXIqJd7wAOXtSe4PDsnsobYGvy0fJJG/view?usp=sharing",
    glowColor: "rgba(123, 97, 255, 0.1)"
  },
  {
    title: "Overview of Business Analytics",
    provider: "Infosys",
    icon: BarChart2,
    color: "#00E5FF",
    link: "https://drive.google.com/file/d/1fI7-sp5iILzFp_WoO1ngTr_QHwQ0frIY/view?usp=sharing",
    glowColor: "rgba(0, 229, 255, 0.1)"
  },
  {
    title: "Basics of Business Communication",
    provider: "Infosys",
    icon: Award,
    color: "#7B61FF",
    link: "https://drive.google.com/file/d/18fX6vnCGLeR4rsxHZGJVbFzpP_ujN770/view?usp=sharing",
    glowColor: "rgba(123, 97, 255, 0.1)"
  },
  {
    title: "Python for Data Science, AI & Development",
    provider: "IBM",
    icon: Database,
    color: "#00E5FF",
    link: "https://drive.google.com/file/d/10RXSKD8RykvLjAVQHf6QNVr4Lo4-0tts/view?usp=sharing",
    glowColor: "rgba(0, 229, 255, 0.1)"
  },
  {
    title: "Tools for Data Science",
    provider: "IBM",
    icon: FileSpreadsheet,
    color: "#00FFB3",
    link: "https://drive.google.com/file/d/1zxRBkia7gLjw2ofXgMYTVcSXR5sQL72i/view?usp=sharing",
    glowColor: "rgba(0, 255, 179, 0.1)"
  },
  {
    title: "Data Science Methodology",
    provider: "IBM",
    icon: BarChart2,
    color: "#7B61FF",
    link: "https://drive.google.com/file/d/1koxnL16ABMZDNDGLN2XwGDPS93i8BxIU/view?usp=sharing",
    glowColor: "rgba(123, 97, 255, 0.1)"
  },
  {
    title: "What is Data Science?",
    provider: "IBM",
    icon: ShieldCheck,
    color: "#00E5FF",
    link: "https://drive.google.com/file/d/1SvaVCMzajiI3emD7ZbBKGkzuaAlWWOEa/view?usp=sharing",
    glowColor: "rgba(0, 229, 255, 0.1)"
  },
  {
    title: "Data Analysis Concepts",
    provider: "Infosys",
    icon: FileSpreadsheet,
    color: "#00FFB3",
    link: "https://drive.google.com/file/d/1bfSHE3ul3oL_3LJVJVwqjEcPIVuh8jGp/view?usp=sharing",
    glowColor: "rgba(0, 255, 179, 0.1)"
  },
  {
    title: "Data Management",
    provider: "TCS",
    icon: Database,
    color: "#7B61FF",
    link: "https://drive.google.com/file/d/1j37CIc5U9JqpBYr_liG5u4DDjPJ7W4v8/view?usp=sharing",
    glowColor: "rgba(123, 97, 255, 0.1)"
  },
  {
    title: "TCS iON Career Edge - Young Professional",
    provider: "TCS",
    icon: Award,
    color: "#00E5FF",
    link: "https://drive.google.com/file/d/1Eio1l3x4SW6-CbT0TE1sgJ_LgDZKt48E/view?usp=sharing",
    glowColor: "rgba(0, 229, 255, 0.1)"
  },
  {
    title: "Innovation Through Design: Think, Make, Break, Repeat",
    provider: "University of Sydney",
    icon: BarChart2,
    color: "#00FFB3",
    link: "https://drive.google.com/file/d/1PpNxWzm0UKybGqkG-d2yR_CnZUpjM13L/view?usp=sharing",
    glowColor: "rgba(0, 255, 179, 0.1)"
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="certifications" className="py-24 bg-[#050816] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#7B61FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-widest text-[#00E5FF] font-semibold mb-2">My Qualifications</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Professional <span className="bg-gradient-to-r from-[#00E5FF] to-[#7B61FF] bg-clip-text text-transparent">Certifications</span>
          </h3>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  borderColor: cert.color,
                  boxShadow: `0 10px 25px ${cert.glowColor}`,
                }}
                className="glass-card glass-card-hover p-6 rounded-2xl border-white/5 shadow-inset flex flex-col justify-between transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual badge card */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className="h-12 w-12 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: cert.color + "10",
                        borderColor: cert.color + "30",
                        color: cert.color,
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A0A0A0] bg-white/5 border border-white/5 px-2.5 py-1 rounded-md">
                      {cert.provider}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-glow-primary transition-all">
                    {cert.title}
                  </h4>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-xs text-[#A0A0A0]">Verified Credential</span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive flex items-center gap-1.5 text-xs font-semibold text-[#00E5FF] hover:text-white transition-colors"
                  >
                    Verify <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
