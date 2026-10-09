"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl: string;
  badgeCode: string;
  featured?: boolean;
}

const certifications: CertificationItem[] = [
  {
    id: "dp-700",
    title: "Microsoft Certified: Fabric Data Engineer Associate",
    issuer: "Microsoft",
    date: "May 2026",
    badgeCode: "DP-700",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/ManishShetty-7239/F78746EA6D40CAA6?sharingId=ADA7C1664D0E1A01",
    featured: true,
  },
  {
    id: "gh-300",
    title: "Microsoft Certified: Github Copilot",
    issuer: "Microsoft",
    date: "Certified",
    badgeCode: "GH-300",
    verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/ManishShetty-7239/3338226D0A62C373?sharingId=ADA7C1664D0E1A01",
    featured: false,
  },
  {
    id: "databrick",
    title: "Databricks Certified: Genrative AI Associate",
    issuer: "Databricks",
    date: "Certified",
    badgeCode: "DB-GAI-02",
    verifyUrl: "https://credentials.databricks.com/8b1865c9-765a-4daa-85a6-4e1bd4dc7bb9",
    featured: false,
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-[#1E1B4B] text-white relative overflow-hidden">
      {/* Glow effect overlays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-r from-[#6366F1]/20 to-[#A5B4FC]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-3 mb-16 text-center"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-900/60 border border-indigo-700/60 text-[#A5B4FC] text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-[#6366F1] rounded-full mt-1" />
          <p className="text-slate-300 max-w-lg text-sm sm:text-base pt-1">
            Official cloud and data engineering accreditations validating technical proficiency.
          </p>
        </motion.div>

        {/* Featured Badge Card (DP-700 Primary Spotlight) */}
        <div className="grid grid-cols-1 gap-8">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ${cert.featured
                ? "bg-gradient-to-r from-[#0F172A]/90 via-[#1E1B4B]/95 to-[#0F172A]/90 border-2 border-[#6366F1] shadow-[0_0_40px_-5px_rgba(99,102,241,0.35)] hover:shadow-[0_0_60px_-5px_rgba(99,102,241,0.5)]"
                : "bg-slate-900/60 border border-indigo-900/60 hover:border-[#6366F1]/60"
                }`}
            >
              {/* Featured Badge Ribbon */}
              {cert.featured && (
                <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#6366F1] text-white text-xs font-bold shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Credential</span>
                </div>
              )}

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                {/* Left Side: Icon & Title */}
                <div className="flex items-start space-x-4">
                  <div className="p-3.5 rounded-2xl bg-[#6366F1]/20 border border-[#6366F1]/50 text-[#A5B4FC] shrink-0 mt-1 sm:mt-0">
                    <ShieldCheck className="w-8 h-8 text-[#6366F1]" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#6366F1]/20 text-[#A5B4FC] border border-[#6366F1]/40 text-xs font-mono font-bold">
                        {cert.badgeCode}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        Issued by {cert.issuer}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Issue Date: <strong className="text-white">{cert.date}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Action Button */}
                <div className="w-full md:w-auto shrink-0 pt-2 md:pt-0">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold text-sm shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
