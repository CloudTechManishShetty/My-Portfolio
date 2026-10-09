"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-[#F8FAFC]/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5"
          : "bg-[#F8FAFC]/60 backdrop-blur-sm py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="group flex items-center gap-1.5 text-xl font-bold tracking-tight text-[#0F172A] hover:text-[#6366F1] transition-colors"
        >
          <span className="font-extrabold text-2xl tracking-tighter text-[#0F172A]">
            Manish<span className="text-[#6366F1]">.dev</span>
          </span>
          <span className="h-2 w-2 rounded-full bg-[#6366F1] group-hover:scale-125 transition-transform" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-[#6366F1] rounded-lg hover:bg-indigo-50/60 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://drive.google.com/file/d/1ERv-Tm3DtabpCigVB8N4-nq5KrPokabF/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-[#6366F1] hover:text-[#4F46E5] bg-indigo-50/80 hover:bg-indigo-100/80 border border-indigo-200/60 rounded-lg transition-all duration-200 shadow-xs"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>
          <a
            href="manishshetty820@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-[#6366F1] hover:bg-[#4F46E5] rounded-lg transition-all duration-200 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-[#6366F1] hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-slate-200/80 bg-[#F8FAFC]/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-slate-700 hover:text-[#6366F1] hover:bg-indigo-50/70 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://drive.google.com/file/d/1ERv-Tm3DtabpCigVB8N4-nq5KrPokabF/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#6366F1] bg-indigo-50 border border-indigo-200/70 rounded-lg"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </a>
              <a
                href="[EMAIL_ADDRESS]"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#6366F1] hover:bg-[#4F46E5] rounded-lg shadow-md"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
