import { BentoHero } from '@/components/bento-hero';
import { BentoProjects } from '@/components/bento-projects';
import { SkillsGrid } from '@/components/skills-grid';
import { BentoProcess } from '@/components/bento-process';
import { BentoFooter } from '@/components/bento-footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#030303] selection:bg-primary selection:text-white">
      <BentoHero />
      <BentoProjects />
      <BentoProcess />
      <SkillsGrid />
      <BentoFooter />
    </main>
  );
}
