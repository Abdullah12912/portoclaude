import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { NowSection } from "@/components/sections/now-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { NotesSection } from "@/components/sections/notes-section";
import { PulseSection } from "@/components/sections/pulse-section";

export default function HomePage() {
  return (
    <div className="max-w-[680px] mx-auto px-6 pb-20">
      <Nav />
      <Hero />
      <NowSection />
      <ProjectsSection />
      <NotesSection />
      <PulseSection />
      <Footer />
    </div>
  );
}
