import React from 'react';
import { 
  SiPython, SiDatabricks, SiApachespark, SiSnowflake, SiPostgresql,
  SiSpringboot, SiApachekafka, SiSpring, SiApacheairflow,
  SiDocker, SiKubernetes, SiArgo, SiGithubactions, SiGit, SiLinux, SiDelta
} from 'react-icons/si';
import { FaDatabase, FaJava, FaNetworkWired, FaServer, FaCube, FaSync, FaChartBar } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';

const row1 = [
  { name: 'Python', icon: SiPython },
  { name: 'SQL', icon: FaDatabase },
  { name: 'Azure Data Factory', icon: VscAzure },
  { name: 'Azure Databricks', icon: SiDatabricks },
  { name: 'PySpark', icon: SiApachespark },
  { name: 'Snowflake', icon: SiSnowflake },
  { name: 'Delta Lake', icon: SiDelta },
  { name: 'Unity Catalog', icon: FaCube },
  { name: 'PostgreSQL', icon: SiPostgresql },
];

const row2 = [
  { name: 'Java', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Microservices', icon: FaNetworkWired },
  { name: 'REST APIs', icon: FaServer },
  { name: 'Kafka', icon: SiApachekafka },
  { name: 'Spring Data', icon: SiSpring },
  { name: 'Apache Airflow', icon: SiApacheairflow },
  { name: 'Power BI', icon: FaChartBar },
];

const row3 = [
  { name: 'Docker', icon: SiDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'ArgoCD', icon: SiArgo },
  { name: 'GitHub CI/CD', icon: SiGithubactions },
  { name: 'Git', icon: SiGit },
  { name: 'Azure', icon: VscAzure },
  { name: 'Linux', icon: SiLinux },
  { name: 'Agile/Scrum', icon: FaSync },
];

const SkillCapsule = ({ name, icon: Icon }: { name: string, icon: React.ElementType }) => (
  <div className="bg-[#0F172A]/80 border border-indigo-500/20 backdrop-blur-sm rounded-full py-2.5 px-5 flex items-center gap-3 shrink-0 shadow-sm hover:scale-105 hover:border-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300 group cursor-default">
    <Icon className="text-xl text-indigo-400 group-hover:text-indigo-300" />
    <span className="text-slate-200 font-medium">{name}</span>
  </div>
);

export default function SkillMarquee() {
  return (
    <section className="py-24 bg-[#070913] relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Full Tech Stack</h2>
        <p className="text-indigo-200 max-w-2xl mx-auto">
          An interactive overview of the tools and technologies I use to build scalable pipelines & applications.
        </p>
      </div>

      <div className="relative flex flex-col gap-6 group/marquee w-full max-w-[100vw]">
        {/* Left Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#070913] to-transparent z-10"></div>
        {/* Right Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#070913] to-transparent z-10"></div>

        {/* Row 1 */}
        <div className="flex w-fit overflow-visible">
          <div className="flex animate-marquee-right gap-6 px-3 hover:[animation-play-state:paused]">
            {[...row1, ...row1, ...row1, ...row1].map((skill, index) => (
              <SkillCapsule key={`r1-${index}`} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex w-fit overflow-visible">
          <div className="flex animate-marquee-left gap-6 px-3 hover:[animation-play-state:paused]">
            {[...row2, ...row2, ...row2, ...row2].map((skill, index) => (
              <SkillCapsule key={`r2-${index}`} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex w-fit overflow-visible">
          <div className="flex animate-marquee-right gap-6 px-3 hover:[animation-play-state:paused]">
            {[...row3, ...row3, ...row3, ...row3].map((skill, index) => (
              <SkillCapsule key={`r3-${index}`} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
