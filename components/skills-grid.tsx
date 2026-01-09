'use client';

import { motion, Variants } from 'framer-motion';

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

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

export function SkillsGrid() {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="bento-grid">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card col-span-12 lg:col-span-4 p-6 md:p-8 flex flex-col justify-between"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-30">Expertise</h3>
            <p className="text-xl font-bold leading-tight mt-12">
              Specialized in <span className="text-primary italic">Product-Driven</span> Front-end Engineering.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="glass-card col-span-12 lg:col-span-8 p-6 md:p-8"
          >
            <div className="flex flex-wrap gap-3 md:gap-4">
              {SKILLS.map(skill => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(99,102,241,0.3)' }}
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-lg font-bold transition-all cursor-default group"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${skill.icon}/ffffff`}
                    alt={skill.name}
                    className="h-6 w-6 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  />
                  <span className="group-hover:text-white transition-colors duration-500">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
