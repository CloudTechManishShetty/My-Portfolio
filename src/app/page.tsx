import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import AnimatedSkills from '@/components/AnimatedSkills';
import SkillMarquee from '@/components/SkillMarquee';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-[#6366F1] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Step 2: Hero Section */}
        <Hero />

        {/* Step 3: About Section */}
        <About />

        {/* Step 3: Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <AnimatedSkills />
          <SkillMarquee />
        </section>

        {/* Step 3: Experience Section */}
        <Experience />

        {/* Step 4: Projects Section */}
        <Projects />

        {/* Step 4: Certifications Section */}
        <Certifications />
      </main>

      {/* Step 4: Footer & Contact Section */}
      <Footer />
    </div>
  );
}
