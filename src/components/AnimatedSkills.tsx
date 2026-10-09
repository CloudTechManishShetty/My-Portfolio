'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User, Database, Cloud, Network, GitCommit,
  Star, Triangle, Settings, RefreshCw, Infinity as InfinityIcon,
  BarChart2, ChevronUp
} from 'lucide-react';
import { SiPython } from 'react-icons/si';

// --- CUSTOM ICONS ---

const ADFValveIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 60" fill="currentColor" className={className}>
    {/* Main pipe */}
    <rect x="10" y="25" width="80" height="10" rx="5" fill="#3b82f6" />
    {/* Valve 1 */}
    <path d="M 30 25 L 20 10 L 40 10 Z" fill="#60a5fa" />
    <circle cx="30" cy="8" r="4" fill="#93c5fd" />
    {/* Valve 2 */}
    <path d="M 70 25 L 60 10 L 80 10 Z" fill="#60a5fa" />
    <circle cx="70" cy="8" r="4" fill="#93c5fd" />
    {/* Connectors */}
    <rect x="0" y="20" width="10" height="20" rx="2" fill="#2563eb" />
    <rect x="90" y="20" width="10" height="20" rx="2" fill="#2563eb" />
  </svg>
);

const NotebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
    <rect x="20" y="10" width="60" height="80" rx="4" fill="#0ea5e9" opacity="0.2" stroke="#0ea5e9" strokeWidth="4" />
    {/* Notebook binding loops */}
    <rect x="10" y="20" width="16" height="6" rx="3" fill="#38bdf8" />
    <rect x="10" y="40" width="16" height="6" rx="3" fill="#38bdf8" />
    <rect x="10" y="60" width="16" height="6" rx="3" fill="#38bdf8" />
    <rect x="10" y="80" width="16" height="6" rx="3" fill="#38bdf8" />
    {/* Lines */}
    <rect x="35" y="30" width="35" height="4" rx="2" fill="#38bdf8" />
    <rect x="35" y="45" width="25" height="4" rx="2" fill="#38bdf8" />
    <rect x="35" y="60" width="35" height="4" rx="2" fill="#38bdf8" />
    {/* Data bricks logo touch */}
    <polygon points="65,75 75,70 85,75 75,80" fill="#38bdf8" />
  </svg>
);

// --- PATH DATA ---

const desktopForkPaths = [
  { id: 1, d: "M 0 200 C 50 200, 50 40, 100 40" },
  { id: 2, d: "M 0 200 C 50 200, 50 120, 100 120" },
  { id: 3, d: "M 0 200 L 100 200" },
  { id: 4, d: "M 0 200 C 50 200, 50 280, 100 280" },
  { id: 5, d: "M 0 200 C 50 200, 50 360, 100 360" },
];

const desktopConvergePaths = [
  { id: 1, d: "M 0 40 C 50 40, 50 200, 100 200" },
  { id: 2, d: "M 0 120 C 50 120, 50 200, 100 200" },
  { id: 3, d: "M 0 200 L 100 200" },
  { id: 4, d: "M 0 280 C 50 280, 50 200, 100 200" },
  { id: 5, d: "M 0 360 C 50 360, 50 200, 100 200" },
];

const desktopStraightPaths = [
  { id: 1, d: "M 0 180 L 100 180" },
  { id: 2, d: "M 0 200 L 100 200" },
  { id: 3, d: "M 0 220 L 100 220" },
];

const desktopOutputForkPaths = [
  { id: 1, d: "M 0 200 C 50 200, 50 40, 100 40" },
  { id: 2, d: "M 0 200 C 50 200, 50 120, 100 120" },
  { id: 3, d: "M 0 200 L 100 200" },
  { id: 4, d: "M 0 200 C 50 200, 50 280, 100 280" },
  { id: 5, d: "M 0 200 C 50 200, 50 360, 100 360" },
];

const desktopOutputConvergePaths = [
  { id: 1, d: "M 0 40 C 50 40, 50 200, 100 200" },
  { id: 2, d: "M 0 120 C 50 120, 50 200, 100 200" },
  { id: 3, d: "M 0 200 L 100 200" },
  { id: 4, d: "M 0 280 C 50 280, 50 200, 100 200" },
  { id: 5, d: "M 0 360 C 50 360, 50 200, 100 200" },
];

// --- SUB-COMPONENTS ---

const DesktopConnector = ({ paths, activePathId, prefix, color, activeColor, width = 80 }: any) => (
  <div className="hidden xl:block shrink-0 h-[400px]" style={{ width: `${width}px` }}>
    <svg viewBox={`0 0 ${width} 400`} className="w-full h-full overflow-visible">
      <defs>
        <filter id={`glow-${prefix}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      {paths.map((p: any, i: number) => {
        const isActive = activePathId === p.id;
        const currentStroke = isActive ? activeColor : color;
        const strokeWidth = isActive ? 3 : 2;
        const dur = isActive ? "1s" : `${2 + (i % 2) * 0.5}s`;
        const opacity = isActive ? 0.9 : 0.3;

        return (
          <g key={p.id}>
            <path
              id={`path-${prefix}-${p.id}`}
              d={p.d}
              fill="none"
              stroke={currentStroke}
              strokeWidth={strokeWidth}
              strokeOpacity={opacity}
              className="transition-all duration-300"
            />
            <circle r={isActive ? 5 : 4} fill={activeColor} filter={`url(#glow-${prefix})`}>
              <animateMotion dur={dur} repeatCount="indefinite" begin={`${i * 0.3}s`}>
                <mpath href={`#path-${prefix}-${p.id}`} />
              </animateMotion>
            </circle>
          </g>
        )
      })}
    </svg>
  </div>
);

const MobileConnector = () => (
  <div className="flex xl:hidden w-full h-10 justify-center items-center my-2">
    <div className="w-1.5 h-full bg-blue-900/50 relative overflow-hidden rounded-full">
      <div className="w-full h-1/2 bg-blue-400 animate-shimmer-y shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
    </div>
  </div>
);

const SkillTag = ({ icon: Icon, label, color = 'cyan', isHovered = false }: any) => {
  const colorMap: any = {
    cyan: 'border-cyan-500/50 bg-cyan-950/40 text-cyan-200',
    green: 'border-green-500/50 bg-green-950/40 text-green-200',
  };
  const glowMap: any = {
    cyan: 'shadow-[0_0_20px_rgba(34,211,238,0.6)]',
    green: 'shadow-[0_0_20px_rgba(34,197,94,0.6)]',
  };

  return (
    <div className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border ${colorMap[color]} backdrop-blur-sm z-10 w-44 xl:w-40 transition-all duration-300 cursor-default ${isHovered ? `scale-110 ${glowMap[color]}` : `scale-100 shadow-sm`}`}>
      <Icon className={`w-5 h-5 shrink-0 ${isHovered ? 'animate-pulse' : ''}`} />
      <span className="text-xs font-bold tracking-wide truncate">{label}</span>
    </div>
  );
};


// --- MAIN COMPONENT ---

export default function AnimatedSkills() {
  const [hoveredInput, setHoveredInput] = useState<number | null>(null);
  const [hoveredOutput, setHoveredOutput] = useState<number | null>(null);

  const inputSkills = [
    { id: 1, label: 'Python', icon: SiPython },
    { id: 2, label: 'SQL', icon: Database },
    { id: 3, label: 'ETL', icon: GitCommit },
    { id: 4, label: 'Cloud', icon: Cloud },
    { id: 5, label: 'Data Modeling', icon: Network },
  ];

  const outputSkills = [
    { id: 1, label: 'PySpark', icon: Star },
    { id: 2, label: 'Delta Lake', icon: Triangle },
    { id: 3, label: 'Orchestration', icon: RefreshCw },
    { id: 4, label: 'CI/CD', icon: InfinityIcon },
    { id: 5, label: 'Analytics', icon: BarChart2 },
  ];

  // const headers = [
  //   { num: '01', title: 'Extract from Data Engineer' },
  //   { num: '02', title: 'ADF Pipeline' },
  //   { num: '03', title: 'Databricks Clean + Upskill' },
  //   { num: '04', title: 'Load Into Resume' },
  // ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#0B0F19] relative overflow-hidden font-sans">

      {/* CSS For custom animations */}
      <style>{`
        @keyframes shimmer-y {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes shimmer-x {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer-y {
          animation: shimmer-y 2s infinite linear;
        }
        .animate-shimmer-x {
          animation: shimmer-x 2.5s infinite linear;
        }
      `}</style>

      {/* Cosmic background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        {/* <div className="flex flex-col xl:flex-row justify-between w-full mb-16 gap-4">
          {headers.map(h => (
            <div key={h.num} className="flex-1 flex items-center gap-4 bg-[#0F172A]/80 backdrop-blur-md border border-indigo-900/60 p-4 rounded-xl shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent -translate-x-full group-hover:animate-shimmer-x" />
              <div className="w-10 h-10 shrink-0 rounded-full bg-indigo-950 border border-indigo-500/50 flex items-center justify-center text-indigo-400 font-bold shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                {h.num}
              </div>
              <span className="font-semibold text-slate-300 text-sm">{h.title}</span>
            </div>
          ))}
        </div> */}

        {/* Pipeline Main Container */}
        <div className="flex flex-col xl:flex-row items-center justify-between w-full min-h-[500px] relative gap-4 xl:gap-0 mt-10">

          {/* 1. User Node */}
          <div className="flex flex-col items-center justify-center z-10 xl:w-40 shrink-0">
            <div className="relative w-28 h-28 mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-cyan-500/30 animate-ping" />
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.5)] z-10 flex items-center justify-center bg-[#0B0F19] overflow-hidden">
                <User className="w-14 h-14 text-cyan-300" />
              </div>
            </div>
            <div className="bg-cyan-950/40 border border-cyan-800/50 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(8,145,178,0.4)]">
              <span className="text-cyan-200 font-bold text-xs tracking-wide uppercase">Manish Shetty</span>
            </div>
          </div>

          <MobileConnector />
          <DesktopConnector paths={desktopForkPaths} activePathId={hoveredInput} prefix="in-fork" activeColor="#22d3ee" color="#0891b2" width={70} />

          {/* 2. Input Skills */}
          <div className="flex xl:flex-col flex-wrap justify-center xl:justify-around h-auto xl:h-[400px] gap-3 xl:gap-0 z-10 max-w-[350px] xl:max-w-none">
            {inputSkills.map(skill => (
              <div key={skill.id} onMouseEnter={() => setHoveredInput(skill.id)} onMouseLeave={() => setHoveredInput(null)}>
                <SkillTag icon={skill.icon} label={skill.label} color="cyan" isHovered={hoveredInput === skill.id} />
              </div>
            ))}
          </div>

          <MobileConnector />
          <DesktopConnector paths={desktopConvergePaths} activePathId={hoveredInput} prefix="in-conv" activeColor="#22d3ee" color="#0891b2" width={70} />

          {/* 3. ADF Node */}
          <div className="flex flex-col items-center justify-center bg-[#0F172A]/90 border border-blue-500/50 rounded-2xl w-48 h-auto xl:h-64 p-5 z-10 shadow-[0_0_30px_rgba(37,99,235,0.3)] backdrop-blur-md relative overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent -translate-y-full animate-shimmer-y pointer-events-none" />
            <ADFValveIcon className="w-20 h-16 text-blue-400 mb-4 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
            <span className="text-blue-100 font-bold text-center text-sm leading-tight tracking-wide uppercase">ADF<br />Achieved</span>
          </div>

          <MobileConnector />
          <DesktopConnector paths={desktopStraightPaths} activePathId={null} prefix="straight" activeColor="#60a5fa" color="#2563eb" width={40} />

          {/* 4. Databricks Node */}
          <div className="flex flex-col xl:flex-row items-center justify-center bg-[#0F172A]/90 border border-cyan-500/50 rounded-2xl w-48 xl:w-56 h-auto xl:h-64 p-5 z-10 shadow-[0_0_30px_rgba(6,182,212,0.3)] backdrop-blur-md relative overflow-hidden shrink-0 gap-4">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent -translate-y-full animate-shimmer-y pointer-events-none" />
            <NotebookIcon className="w-16 h-16 xl:w-20 xl:h-20 text-cyan-400 shrink-0 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
            <span className="text-cyan-100 font-bold text-center xl:text-left text-sm leading-tight tracking-wide uppercase">Databricks<br />Learning +<br />Upskilling</span>
          </div>

          <MobileConnector />
          <DesktopConnector paths={desktopOutputForkPaths} activePathId={hoveredOutput} prefix="out-fork" activeColor="#34d399" color="#059669" width={70} />

          {/* 5. Output Skills */}
          <div className="flex xl:flex-col flex-wrap justify-center xl:justify-around h-auto xl:h-[400px] gap-3 xl:gap-0 z-10 max-w-[350px] xl:max-w-none">
            {outputSkills.map(skill => (
              <div key={skill.id} onMouseEnter={() => setHoveredOutput(skill.id)} onMouseLeave={() => setHoveredOutput(null)}>
                <SkillTag icon={skill.icon} label={skill.label} color="green" isHovered={hoveredOutput === skill.id} />
              </div>
            ))}
          </div>

          <MobileConnector />
          <DesktopConnector paths={desktopOutputConvergePaths} activePathId={hoveredOutput} prefix="out-conv" activeColor="#34d399" color="#059669" width={70} />

          {/* 6. Resume Node */}
          <div className="flex flex-col items-center z-10 shrink-0 mt-8 xl:mt-0">
            <div className="relative p-2.5 rounded-[2rem] border-4 border-green-500 bg-[#0B0F19] shadow-[0_0_40px_rgba(34,197,94,0.4)] w-52 h-72 flex flex-col items-center justify-start overflow-visible">

              <div className="w-full h-full bg-slate-100 rounded-2xl p-4 flex flex-col relative overflow-hidden">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-300 pb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider leading-tight">Resume Skills</span>
                </div>

                <ul className="space-y-3 font-semibold text-slate-700 text-xs flex-1">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-[10px]">✓</div>
                    Fabric
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-[10px]">✓</div>
                    Agent Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-[10px]">✓</div>
                    AI Aware
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-[10px]">✓</div>
                    CI/CD
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-[10px]">✓</div>
                    API Development
                  </li>
                </ul>
              </div>

              {/* Pulsing Green Arrow Badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60" />
                  <div className="relative w-10 h-10 rounded-full bg-green-500 border-[3px] border-[#0B0F19] shadow-[0_0_15px_rgba(34,197,94,1)] flex items-center justify-center">
                    <ChevronUp className="w-6 h-6 text-[#0B0F19] stroke-[3]" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
