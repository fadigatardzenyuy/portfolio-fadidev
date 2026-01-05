import { BentoHero } from '@/components/bento-hero';
import { BentoProjects } from '@/components/bento-projects';
import { SkillsGrid } from '@/components/skills-grid';
import { BentoProcess } from '@/components/bento-process';
import { BentoFooter } from '@/components/bento-footer';
import { getAllPosts } from '@/lib/blog';

export default function Home() {
  const posts = getAllPosts();
  const latestPost = posts[0];

  return (
    <main className="flex min-h-screen flex-col bg-[#030303] selection:bg-primary selection:text-white">
      <BentoHero latestPost={latestPost} />
      <BentoProjects />
      <BentoProcess />
      <SkillsGrid />
      <BentoFooter />
    </main>
  );
}
