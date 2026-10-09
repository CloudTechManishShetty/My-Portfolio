"use client";

import { motion } from "framer-motion";
import { User, GraduationCap, Briefcase, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-slate-100 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-3 mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[#6366F1] text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#6366F1] rounded-full mt-1" />
        </motion.div>

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-50/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-sm text-slate-700 hover:shadow-md transition-all duration-300"
        >
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-normal text-left sm:text-center">
            I am a developer who thrives at the intersection of application engineering and data architecture. Currently pursuing my Master of Computer Applications (MCA) at JSPM College, I also work as an Azure Data Engineer at Cognizant within the AI &amp; Analytics (Microsoft Data) domain. I specialize in designing microservices and building scalable data pipelines that transform raw data into structured enterprise solutions.
          </p>

          {/* Highlighted Feature Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200/80">
            <div className="flex flex-col items-center p-4 rounded-xl bg-white border border-slate-200/60 shadow-xs hover:border-[#A5B4FC] transition-colors">
              <GraduationCap className="w-6 h-6 text-[#6366F1] mb-2" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Education</span>
              <span className="text-sm font-bold text-[#0F172A] mt-0.5">MCA @ JSPM College</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-white border border-slate-200/60 shadow-xs hover:border-[#A5B4FC] transition-colors">
              <Briefcase className="w-6 h-6 text-[#6366F1] mb-2" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Current Role</span>
              <span className="text-sm font-bold text-[#0F172A] mt-0.5">Data Engineer @ Cognizant</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-white border border-slate-200/60 shadow-xs hover:border-[#A5B4FC] transition-colors">
              <Code className="w-6 h-6 text-[#6366F1] mb-2" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Domain</span>
              <span className="text-sm font-bold text-[#0F172A] mt-0.5">AI &amp; Analytics (Microsoft Data)</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
