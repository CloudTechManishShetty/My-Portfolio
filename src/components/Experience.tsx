"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, ChevronRight } from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  date: string;
  team: string;
  bullets: string[];
  skills: string[];
  badge?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "cognizant-analyst-trainee",
    role: "Azure Data Engineer",
    company: "Cognizant Technology Solutions",
    location: "Pune, India",
    date: "2024 — Present",
    team: "Artificial Intelligence & Analytics (AIA) — Microsoft Data Domain / Source Team",
    badge: "Source Team",
    bullets: [
      "Developed and optimized enterprise data engineering pipelines within the Artificial Intelligence & Analytics (AIA) Microsoft Data domain.",
      "Implemented robust API data extraction workflows, handling complex JSON response flattening and API pagination.",
      "Architected data ingestion solutions for seamless Snowflake data loading and managed Unity Catalog permissions.",
    ],
    skills: [
      "Azure Data Factory",
      "Databricks",
      "PySpark",
      "Snowflake",
      "Unity Catalog",
      "REST APIs",
      "JSON Parsing",
    ],
  },
  {
    id: "humancloud-intern",
    role: "Software Engineer Intern",
    company: "Humancloud Technologies",
    location: "Pune, India",
    date: "Nov 2025 – Feb 2026",
    team: "Development & DevOps",
    badge: "Internship",
    bullets: [
      "Acted as a Java Full Stack Developer, contributing to the development and maintenance of internal web applications.",
      "Acquired hands-on exposure to DevOps methodologies, assisting with infrastructure configurations and deployment pipelines.",
    ],
    skills: [
      "Java",
      "Full Stack Development",
      "DevOps",
      "CI/CD",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-3 mb-16 text-center"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366F1] text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-[#6366F1] rounded-full mt-1" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-8 space-y-12">
          {experiences.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative group"
            >
              {/* Royal Violet Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6366F1] opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-[#6366F1] border-4 border-white shadow-md"></span>
                </span>
              </div>

              {/* Date badge on desktop side */}
              <div className="md:absolute md:-left-44 md:top-1.5 md:w-36 md:text-right mb-2 md:mb-0">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#6366F1] bg-indigo-50 px-3 py-1 rounded-md border border-indigo-100">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </span>
              </div>

              {/* Experience Card */}
              <div className="bg-white border border-slate-200/90 hover:border-[#A5B4FC] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300">

                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] group-hover:text-[#6366F1] transition-colors flex items-center gap-2">
                      <span>{item.role}</span>
                      {item.badge && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                          {item.badge}
                        </span>
                      )}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-slate-600 mt-1">
                      <span className="flex items-center gap-1.5 text-[#6366F1]">
                        <Building2 className="w-4 h-4" />
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Team domain subtitle */}
                <p className="text-xs sm:text-sm font-medium text-slate-500 mb-4 flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-[#6366F1]" />
                  <span>{item.team}</span>
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-6">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-[#6366F1] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {item.skills.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-semibold text-[#0F172A] bg-slate-100 hover:bg-indigo-50 hover:text-[#6366F1] rounded-md transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
