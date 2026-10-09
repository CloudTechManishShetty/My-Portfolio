"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Sparkles, Layers, ArrowUpRight } from "lucide-react";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "taskflow",
    title: "TaskFlow",
    subtitle: "Distributed Microservices Architecture",
    description:
      "A microservices-based task management platform replicating core JIRA functionality. Features event-driven architecture, automated task state transitions, role-based access control, and GitOps deployments.",
    tags: ["Java", "Spring Boot", "Kafka", "Keycloak IAM", "Docker", "ArgoCD"],
    githubUrl: "https://github.com/grpansarehc/task-flow-main.git",
    liveUrl: "https://lnkd.in/p/dqmj_S5d",
    featured: true,
  },
  {
    id: "dataengineering-project",
    title: "Data Engineering Project",
    subtitle: "Azure Data Engineering Capstone Project",
    description:
      "A Data Engineering Project using Azure Data Factory, Azure Synapse, Azure Data Lake Storage, Azure SQL Database.",
    tags: ["Azure Data Factory", "Azure Synapse", "Azure Data Lake Storage", "Azure SQL Database"],
    githubUrl: "https://github.com/manishshetty/Data_Ingeniering_Capstone_Project.git",
    featured: true,
  },
  {
    id: "agrocli",
    title: "AgroCli",
    subtitle: "Hackathon Project",
    description:
      "An AI-assisted smart farming application developed under the Agritech category for the hackathon. Provides crop yield analytics, weather telemetry, and automated pest advisory.",
    tags: ["Python", "AI Integrations", "Web Framework"],
    githubUrl: "https://github.com/CloudTechManishShetty/AgroTech.git",
    featured: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Ambient gradient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-br from-[#6366F1]/10 via-[#A5B4FC]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-3 mb-16 text-center"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366F1] text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-[#6366F1] rounded-full mt-1" />
          <p className="text-slate-600 max-w-xl text-sm sm:text-base pt-1">
            Enterprise backend microservices, automated scheduling tools, and AI-driven agricultural solutions.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative flex flex-col justify-between bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-7 shadow-md hover:shadow-2xl hover:shadow-indigo-500/15 hover:border-[#A5B4FC] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-indigo-50 text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white transition-colors duration-300">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-500 hover:text-[#0F172A] hover:bg-slate-100 transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-500 hover:text-[#6366F1] hover:bg-indigo-50 transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Subtitle */}
                <span className="inline-block text-xs font-semibold text-[#6366F1] uppercase tracking-wide mb-1">
                  {project.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#6366F1] transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/60 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold bg-indigo-50/80 text-indigo-950 border border-indigo-100 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Ghost Action Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-indigo-200 text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white group-hover:border-[#6366F1] font-semibold text-xs sm:text-sm shadow-xs transition-all duration-300"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
