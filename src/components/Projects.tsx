"use client";

import { motion } from "framer-motion";
import { ExternalLink, BarChart3, Database, Users } from "lucide-react";

// Inline Github SVG Icon component to avoid library import inconsistencies
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

const projects = [
  {
    title: "Bodhak AI Text-to-SQL Engine",
    category: "AI & Data intelligence",
    overview: "An AI-powered conversational data platform that converts natural language questions into SQL queries, enabling users to retrieve real-time insights from structured databases without SQL expertise.",
    problem: "Accessing data from relational databases often requires technical SQL knowledge, creating dependency on database specialists and slowing down analytical decision-making processes.",
    solution: "Developed a Flask-based application integrating LangChain, Ollama, and MySQL to translate user queries into executable SQL, display structured results, and support CSV export functionality.",
    impact: "Simplified database interaction for non-technical users, reduced query complexity, and demonstrated practical AI-driven analytics suitable for secure enterprise and research environments.",
    learnings: "Gained hands-on experience in LLM integration, prompt engineering, backend development, database connectivity, and building end-to-end AI-powered applications.",
    tech: ["LangChain", "Ollama", "Python", "SQL", "NLP", "Flask"],
    icon: Database,
    github: "https://github.com/Dvysharma/Text-to-SQL-System",
    link: "https://drive.google.com/drive/folders/187UHSlzJ5odGgZgR7xs1dxqJnBvkadD5?usp=sharing",
    color: "#00E5FF",
    glowColor: "rgba(0, 229, 255, 0.15)"
  },
  {
    title: "Blinkit Sales & Operations Analysis",
    category: "Business Intelligence & Analytics",
    overview: "A comprehensive data visualization and business intelligence dashboard analyzing sales, order distributions, and operational indicators for a quick-commerce network.",
    problem: "Analyzing complex delivery structures and inventory fluctuations across numerous retail hubs was challenging, resulting in product stockouts and suboptimal marketing placement.",
    solution: "Processed datasets using SQL and Excel to extract trends, then created interactive dashboards in Power BI utilizing DAX for advanced calculated columns and KPI measurements.",
    impact: "Provided executive stakeholders with clear visual reports tracking revenue trends, order distribution, and product performance, optimizing replenishment cycles.",
    learnings: "Mastered data cleaning in Excel/SQL, advanced DAX modeling in Power BI, and the fundamentals of retail analytical visualizations.",
    tech: ["Power BI", "DAX", "SQL", "Excel", "Data Modeling", "Business Intelligence"],
    icon: BarChart3,
    github: "https://github.com/Dvysharma/Blinkit-Power-BI",
    link: "https://drive.google.com/drive/folders/1kHvEl-XYNvPvrCNdB7Osq8YRCT86NFgr?usp=sharing",
    color: "#7B61FF",
    glowColor: "rgba(123, 97, 255, 0.15)"
  },
  {
    title: "Aspiria – Business Consulting Project",
    category: "Technology Consulting",
    overview: "A business growth initiative providing digital transformations, local branding, and technical operations support to small-scale enterprises.",
    problem: "Small, local brick-and-mortar retailers lacked basic technology integration (e.g. online listings, simple digital booking, social visibility), resulting in lost competitiveness.",
    solution: "Advised 10+ small businesses on digital setups, social media branding, search engine listings, and local advertising parameters, creating custom growth blueprints.",
    impact: "Boosted visibility, customer outreach, and modern service adoption for all 10+ client operations, enabling them to compete in the regional digital market.",
    learnings: "Acquired client communication, stakeholder management, requirement gathering, and technical coaching skills.",
    tech: ["Business Strategy", "Market Research", "Digital Branding", "Requirement Gathering", "Client Consultation"],
    icon: Users,
    github: "https://github.com/Dvysharma",
    link: "https://drive.google.com/drive/folders/1DEkr54ubzC6tmJGZwvI5s57-S6Wuq9kB?usp=sharing",
    color: "#00FFB3",
    glowColor: "rgba(0, 255, 179, 0.15)"
  },
  {
    title: "TITANIC SURVIVAL PREDICTION",
    category: "MACHINE LEARNING & DATA ANALYTICS",
    overview: "Developed a predictive machine learning model to analyze passenger demographics and travel attributes from the Titanic dataset, determining the likelihood of survival based on historical patterns and statistical insights.",
    problem: "Passenger survival depended on multiple interconnected factors such as age, gender, ticket class, fare, and family size, making accurate outcome prediction challenging through manual analysis.",
    solution: "Performed data cleaning, feature engineering, and exploratory data analysis using Python libraries such as Pandas and NumPy. Built and evaluated classification models including Logistic Regression and Random Forest to predict survival probabilities.",
    impact: "Achieved strong prediction accuracy while identifying key survival indicators, demonstrating how data-driven models can uncover hidden patterns and support informed decision-making.",
    learnings: "Gained hands-on experience in data preprocessing, feature selection, model evaluation, classification algorithms, and visualization techniques using Python, Scikit-learn, and Matplotlib.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Logistic Regression", "Random Forest", "Matplotlib"],
    icon: BarChart3,
    github: "https://github.com/Dvysharma/Titanic-Survival-Prediction-Machine-Learning-Project",
    link: "https://drive.google.com/drive/folders/1ODVqgQIwVwpvDR65s1grvMQYGAocwHjF?usp=sharing",
    color: "#7B61FF",
    glowColor: "rgba(123, 97, 255, 0.15)"
  },
  {
    title: "CampusConnect - Smart Campus Networking Platform",
    category: "Campus Engagement & Full-Stack Development",
    overview: "A centralized web platform designed to connect students, clubs, and college communities by providing seamless communication, event management, and campus engagement features.",
    problem: "Campus information was scattered across multiple channels, making it difficult for students to stay updated on events, announcements, opportunities, and club activities.",
    solution: "Developed a full-stack web application using Flask, HTML, CSS, and JavaScript to provide a unified platform for campus communication. Integrated CAI (Campus Connect Artificial Intelligence) for smart user assistance and navigation.",
    impact: "Improved accessibility to campus information, streamlined communication between students and organizations, and enhanced overall campus engagement through a single digital ecosystem.",
    learnings: "Gained hands-on experience in full-stack web development, Flask backend integration, database management, UI/UX design, and AI assistant implementation within a real-world application.",
    tech: ["Flask", "Python", "HTML", "CSS", "JavaScript", "MySQL", "AI Integration (CAI)"],
    icon: Users,
    github: "https://github.com/Dvysharma/Campus-Connect-Main",
    link: "https://drive.google.com/drive/folders/1mnBnk7HkNANJTtFutAShwGwEgzk9ROrD?usp=sharing",
    color: "#00E5FF",
    glowColor: "rgba(0, 229, 255, 0.15)"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#050816] relative overflow-hidden border-t border-white/5">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00FFB3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#7B61FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-widest text-[#00E5FF] font-semibold mb-2">My Case Studies</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Key Projects & <span className="bg-gradient-to-r from-[#00E5FF] via-[#7B61FF] to-[#00FFB3] bg-clip-text text-transparent">Solutions</span>
          </h3>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 rounded-3xl border-white/5 shadow-inset flex flex-col justify-between group relative transition-all duration-300"
              >
                {/* Floating ambient glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                  style={{
                    background: `radial-gradient(350px circle at 50% 50%, ${proj.color}08, transparent 70%)`,
                    border: `1px solid ${proj.color}25`
                  }}
                />

                <div>
                  {/* Category & Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#A0A0A0] bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg">
                      {proj.category}
                    </span>
                    <div
                      className="h-10 w-10 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: proj.color + "10",
                        borderColor: proj.color + "30",
                        color: proj.color
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-glow-primary transition-all">
                    {proj.title}
                  </h4>

                  {/* Details */}
                  <div className="space-y-4 text-xs sm:text-sm text-[#A0A0A0] mb-8">
                    <p className="leading-relaxed">
                      <strong className="text-white">Overview: </strong> {proj.overview}
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-white">Problem: </strong> {proj.problem}
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-white">Solution: </strong> {proj.solution}
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-white">Impact: </strong> {proj.impact}
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-white">Learning: </strong> {proj.learnings}
                    </p>
                  </div>
                </div>

                {/* Tech & Links */}
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] text-[#A0A0A0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-white/5 z-20 relative">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive flex items-center gap-1.5 text-xs text-[#A0A0A0] hover:text-white transition-colors"
                    >
                      <GithubIcon className="h-4 w-4" /> Code
                    </a>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive flex items-center gap-1.5 text-xs text-[#A0A0A0] hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" /> Preview
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
