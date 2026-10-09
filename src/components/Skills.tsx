"use client";

import { motion } from "framer-motion";
import { Database, Server, Cpu, Layers, Sparkles } from "lucide-react";

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  badgeBg: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Data Engineering",
    description: "Cloud data platforms, distributed ETL/ELT pipelines, and modern lakehouse architecture.",
    icon: <Database className="w-6 h-6 text-[#6366F1]" />,
    badgeBg: "bg-indigo-50 text-indigo-950 border border-indigo-100 hover:bg-indigo-100",
    skills: [
      "Azure Data Factory",
      "Azure Databricks",
      "PySpark",
      "Snowflake",
      "Unity Catalog",
    ],
  },
  {
    title: "Backend & APIs",
    description: "Robust microservices, event-driven streaming, and high-performance RESTful APIs.",
    icon: <Server className="w-6 h-6 text-[#6366F1]" />,
    badgeBg: "bg-indigo-50 text-indigo-950 border border-indigo-100 hover:bg-indigo-100",
    skills: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Kafka",
      "PostgreSQL",
    ],
  },
  {
    title: "DevOps & Infrastructure",
    description: "Containerization, cloud orchestration, GitOps automation, and CI/CD pipelines.",
    icon: <Cpu className="w-6 h-6 text-[#6366F1]" />,
    badgeBg: "bg-indigo-50 text-indigo-950 border border-indigo-100 hover:bg-indigo-100",
    skills: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "ArgoCD",
      "GitHub CI/CD",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-3 mb-16 text-center"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366F1] text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Skills &amp; Capabilities
          </h2>
          <div className="w-16 h-1 bg-[#6366F1] rounded-full mt-1" />
          <p className="text-slate-600 max-w-xl text-sm sm:text-base pt-1">
            Core technologies and toolchains I leverage to engineer high-throughput data platforms and backend services.
          </p>
        </motion.div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative flex flex-col justify-between bg-white/90 backdrop-blur-md rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 hover:border-[#A5B4FC] transition-all duration-300"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-xl bg-indigo-50/80 border border-indigo-100 group-hover:bg-[#6366F1] group-hover:text-white transition-colors duration-300">
                    <div className="group-hover:text-white transition-colors">
                      {category.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#6366F1] transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Category Description */}
                <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges Tag Grid */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-950 border border-indigo-100/80 hover:bg-indigo-100 hover:border-indigo-200 transition-colors shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer Accent */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{category.skills.length} core technologies</span>
                <span className="text-[#6366F1] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Active
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
