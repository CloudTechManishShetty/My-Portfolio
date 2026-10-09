"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Terminal as TerminalIcon,
  Copy,
  Check,
  Sparkles,
  Database,
  Server,
  Cloud,
} from "lucide-react";

type StackCommand = "stack" | "bio" | "experience";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<StackCommand>("stack");
  const [copied, setCopied] = useState(false);
  const [typedText, setTypedText] = useState("");
  const targetText = "manish.currentStack()";

  // Simulate terminal typing effect
  useEffect(() => {
    let index = 0;
    setTypedText("");
    const interval = setInterval(() => {
      if (index < targetText.length) {
        setTypedText(targetText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [activeTab]);

  const stackJson = {
    cloud: ["Azure Data Factory", "Databricks", "Snowflake"],
    backend: ["Java", "Spring Boot", "Kafka"],
    containers: ["Docker", "Kubernetes", "ArgoCD"],
  };

  const bioJson = {
    role: "Data Engineer & Backend Developer",
    organization: "Cognizant Technology Solutions",
    focus: "Enterprise Data Pipelines & High-Throughput Microservices",
    location: "India",
  };

  const expJson = {
    experience: "Analyst Trainee in AI & Analytics",
    specialities: [
      "ETL / ELT Pipelines",
      "Big Data Analytics",
      "Distributed Backend Systems",
    ],
    certifications: [
      "Microsoft Certified: Azure Data Engineer Associate (DP-203)",
      "Snowflake SnowPro Core",
    ],
  };

  const handleCopy = () => {
    let dataToCopy = stackJson;
    if (activeTab === "bio") dataToCopy = bioJson as any;
    if (activeTab === "experience") dataToCopy = expJson as any;

    navigator.clipboard.writeText(JSON.stringify(dataToCopy, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28 bg-[#F8FAFC]">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#6366F1]/10 via-[#A5B4FC]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-0 w-[400px] h-[400px] bg-[#6366F1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Hero Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
          >
            {/* Status Pill */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs sm:text-sm font-semibold tracking-wide">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Available for Data & Backend Roles</span>
              </div>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-[#0F172A] via-[#4F46E5] to-[#6366F1] bg-clip-text text-transparent">
                  Manish Shetty
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#6366F1] flex items-center gap-2">
                <span>Cloud Data Engineer &amp; Backend Developer</span>
              </h2>
            </div>

            {/* Tagline Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Architecting scalable data pipelines, high-throughput microservices, and enterprise cloud data solutions with Azure, Databricks &amp; PySpark.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50/70 border border-indigo-100 text-xs font-medium text-slate-700">
                <Cloud className="w-3.5 h-3.5 text-[#6366F1]" />
                Cloud Data Engineering
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50/70 border border-indigo-100 text-xs font-medium text-slate-700">
                <Database className="w-3.5 h-3.5 text-[#6366F1]" />
                ETL &amp; PySpark
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50/70 border border-indigo-100 text-xs font-medium text-slate-700">
                <Server className="w-3.5 h-3.5 text-[#6366F1]" />
                Java Microservices
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#6366F1] hover:bg-[#4F46E5] rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://drive.google.com/file/d/1ERv-Tm3DtabpCigVB8N4-nq5KrPokabF/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#0F172A] hover:text-[#6366F1] bg-white hover:bg-indigo-50/50 border border-slate-300 hover:border-[#6366F1] rounded-xl shadow-xs transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-[#6366F1]" />
                <span>View Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 w-full"
          >
            <div className="w-full rounded-2xl overflow-hidden bg-[#0F172A] border border-indigo-900/40 shadow-2xl shadow-slate-900/30">

              {/* Terminal Header Bar */}
              <div className="bg-[#1E1B4B]/90 px-4 py-3 border-b border-indigo-900/50 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-indigo-200/80 font-mono">
                  <TerminalIcon className="w-3.5 h-3.5 text-[#6366F1]" />
                  <span>bash — manish@portfolio:~</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 px-2.5 py-1 rounded transition-colors"
                  title="Copy terminal output"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Interactive Command Selector */}
              <div className="bg-[#0F172A] px-4 py-2 border-b border-indigo-950 flex items-center space-x-2 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => setActiveTab("stack")}
                  className={`px-3 py-1 rounded-md transition-colors ${activeTab === "stack"
                    ? "bg-[#6366F1]/20 text-[#A5B4FC] border border-[#6366F1]/40 font-semibold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                    }`}
                >
                  .currentStack()
                </button>
                <button
                  onClick={() => setActiveTab("bio")}
                  className={`px-3 py-1 rounded-md transition-colors ${activeTab === "bio"
                    ? "bg-[#6366F1]/20 text-[#A5B4FC] border border-[#6366F1]/40 font-semibold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                    }`}
                >
                  .bio()
                </button>
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`px-3 py-1 rounded-md transition-colors ${activeTab === "experience"
                    ? "bg-[#6366F1]/20 text-[#A5B4FC] border border-[#6366F1]/40 font-semibold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                    }`}
                >
                  .experience()
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-sm leading-relaxed overflow-x-auto min-h-[290px] text-slate-200 bg-[#0F172A]">
                {/* Command prompt line */}
                <div className="flex items-center text-slate-300 mb-3">
                  <span className="text-emerald-400 mr-2">manish@dev:~$</span>
                  <span className="text-[#A5B4FC] font-semibold">
                    {activeTab === "stack"
                      ? typedText
                      : activeTab === "bio"
                        ? "manish.bio()"
                        : "manish.experience()"}
                  </span>
                  <span className="w-2 h-4 bg-[#6366F1] ml-1 animate-pulse inline-block" />
                </div>

                {/* Output render */}
                <div className="pl-2 space-y-1 text-xs sm:text-sm">
                  {activeTab === "stack" && (
                    <div className="text-slate-300">
                      <span className="text-slate-500 font-bold">&#123;</span>
                      <div className="pl-4 py-1">
                        <span className="text-[#A5B4FC] font-medium">&quot;cloud&quot;</span>
                        <span className="text-slate-400">: </span>
                        <span className="text-slate-400">[</span>
                        <span className="text-emerald-300">&quot;Azure Data Factory&quot;</span>
                        <span className="text-slate-400">, </span>
                        <span className="text-emerald-300">&quot;Databricks&quot;</span>
                        <span className="text-slate-400">, </span>
                        <span className="text-emerald-300">&quot;Snowflake&quot;</span>
                        <span className="text-slate-400">]</span>
                        <span className="text-slate-500">,</span>
                      </div>
                      <div className="pl-4 py-1">
                        <span className="text-[#A5B4FC] font-medium">&quot;backend&quot;</span>
                        <span className="text-slate-400">: </span>
                        <span className="text-slate-400">[</span>
                        <span className="text-cyan-300">&quot;Java&quot;</span>
                        <span className="text-slate-400">, </span>
                        <span className="text-cyan-300">&quot;Spring Boot&quot;</span>
                        <span className="text-slate-400">, </span>
                        <span className="text-cyan-300">&quot;Kafka&quot;</span>
                        <span className="text-slate-400">]</span>
                        <span className="text-slate-500">,</span>
                      </div>
                      <div className="pl-4 py-1">
                        <span className="text-[#A5B4FC] font-medium">&quot;containers&quot;</span>
                        <span className="text-slate-400">: </span>
                        <span className="text-slate-400">[</span>
                        <span className="text-amber-300">&quot;Docker&quot;</span>
                        <span className="text-slate-400">, </span>
                        <span className="text-amber-300">&quot;Kubernetes&quot;</span>
                        <span className="text-slate-400">, </span>
                        <span className="text-amber-300">&quot;ArgoCD&quot;</span>
                        <span className="text-slate-400">]</span>
                      </div>
                      <span className="text-slate-500 font-bold">&#125;</span>
                    </div>
                  )}

                  {activeTab === "bio" && (
                    <div className="text-slate-300">
                      <span className="text-slate-500 font-bold">&#123;</span>
                      <div className="pl-4 py-1">
                        <span className="text-[#A5B4FC]">&quot;role&quot;</span>: <span className="text-emerald-300">&quot;Data Engineer &amp; Backend Developer&quot;</span>,
                      </div>
                      <div className="pl-4 py-1">
                        <span className="text-[#A5B4FC]">&quot;organization&quot;</span>: <span className="text-emerald-300">&quot;Cognizant Technology Solutions&quot;</span>,
                      </div>
                      <div className="pl-4 py-1">
                        <span className="text-[#A5B4FC]">&quot;focus&quot;</span>: <span className="text-cyan-300">&quot;Enterprise Data Pipelines &amp; High-Throughput Microservices&quot;</span>
                      </div>
                      <span className="text-slate-500 font-bold">&#125;</span>
                    </div>
                  )}

                  {activeTab === "experience" && (
                    <div className="text-slate-300">
                      <span className="text-slate-500 font-bold">&#123;</span>
                      <div className="pl-4 py-1">
                        <span className="text-[#A5B4FC]">&quot;title&quot;</span>: <span className="text-emerald-300">&quot;Analyst Trainee (AI &amp; Analytics)&quot;</span>,
                      </div>
                      <div className="pl-4 py-1">
                        <span className="text-[#A5B4FC]">&quot;certifications&quot;</span>: <span className="text-[#C7D2FE]">[&quot;Azure Data Engineer Associate (DP-203)&quot;, &quot;Snowflake SnowPro Core&quot;]</span>
                      </div>
                      <span className="text-slate-500 font-bold">&#125;</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="bg-[#1E1B4B]/60 px-4 py-2 border-t border-indigo-900/40 text-xs text-slate-400 flex items-center justify-between font-mono">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Status: READY</span>
                </div>
                <span>Session: ACTIVE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
