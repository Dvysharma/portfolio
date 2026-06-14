"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import PatentResearch from "@/components/PatentResearch";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUp } from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Innovation", href: "#innovation" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <CustomCursor />
      
      {/* Header */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050816]/75 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="interactive flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#00E5FF] to-[#7B61FF] p-[1px]">
              <div className="h-full w-full bg-[#050816] rounded-full flex items-center justify-center overflow-hidden group-hover:opacity-90 transition-opacity">
                <img src="/Profile_icon.jpeg" alt="Divyanshu Sharma" className="h-full w-full object-cover" />
              </div>
            </div>
            <span className="text-white font-extrabold text-sm sm:text-base tracking-wider group-hover:text-[#00E5FF] transition-colors">
              DIVYANSHU SHARMA
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="interactive text-xs font-semibold uppercase tracking-wider text-[#A0A0A0] hover:text-[#00E5FF] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="interactive md:hidden p-1.5 rounded-lg border border-white/10 text-[#A0A0A0] hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden absolute top-full inset-x-0 bg-[#050816] border-b border-white/5 flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-[#A0A0A0] hover:text-[#00E5FF] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <PatentResearch />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-[#050816] py-12 border-t border-white/5 text-center text-xs text-[#A0A0A0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-4">
            © {new Date().getFullYear()} Divyanshu Sharma. All Rights Reserved.
          </p>
          <p className="font-mono text-[10px] tracking-widest text-[#7B61FF]">
            TURNING_DATA_INTO_DECISIONS // PORTFOLIO_V1.1
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 h-10 w-10 rounded-xl bg-gradient-to-tr from-[#00E5FF] to-[#7B61FF] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 animate-bounce"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
