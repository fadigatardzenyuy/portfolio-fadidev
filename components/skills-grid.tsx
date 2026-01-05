/* eslint-disable @next/next/no-img-element */
const SKILLS = [
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextdotjs' },
  { name: 'Tailwind', icon: 'tailwindcss' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'Framer', icon: 'framer' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Node.js', icon: 'nodedotjs' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Git', icon: 'git' },
];

export function SkillsGrid() {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="bento-grid">

          <div className="glass-card col-span-12 lg:col-span-4 p-6 md:p-8 flex flex-col justify-between">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-30">Expertise</h3>
            <p className="text-xl font-bold leading-tight mt-12">
              Specialized in <span className="text-primary italic">Product-Driven</span> Front-end Engineering.
            </p>
          </div>

          <div className="glass-card col-span-12 lg:col-span-8 p-6 md:p-8">
            <div className="flex flex-wrap gap-3 md:gap-4">
              {SKILLS.map(skill => (
                <div key={skill.name} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-lg font-bold hover:bg-white/10 hover:border-primary/30 transition-all cursor-default group">
                  <img
                    src={`https://cdn.simpleicons.org/${skill.icon}/ffffff`}
                    alt={skill.name}
                    className="h-6 w-6 opacity-60 group-hover:opacity-100 transition-all"
                  />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
