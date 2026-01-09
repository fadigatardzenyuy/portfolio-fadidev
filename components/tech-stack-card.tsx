'use client';

import { motion } from 'framer-motion';
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
    SiFigma, SiFramer, SiNodedotjs, SiPostgresql
} from 'react-icons/si';

const techs = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Framer', icon: SiFramer, color: '#0055FF' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Postgres', icon: SiPostgresql, color: '#4169E1' },
];

export function TechStack() {
    return (
        <div className="glass-card p-8 flex flex-col justify-between group w-full">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-30 mb-8">Tech Stack</h3>

            <div className="grid grid-cols-4 gap-6">
                {techs.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="flex flex-col items-center justify-center gap-2 group/icon"
                    >
                        <tech.icon
                            className="h-8 w-8 transition-colors duration-500"
                            style={{ color: 'rgba(255,255,255,0.2)' }}
                        />
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover/icon:opacity-40 transition-opacity">
                            {tech.name}
                        </span>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
                <p className="text-xs font-medium text-white/40 leading-relaxed">
                    Building with the latest industry standards for <span className="text-white/60">performance</span> and <span className="text-white/60">scalability</span>.
                </p>
            </div>
        </div>
    );
}
