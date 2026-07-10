'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const PROJECTS = [
    {
        title: 'Zigex',
        category: 'Next.js • React • Tailwind CSS',
        span: 'col-span-12 lg:col-span-12',
        color: 'from-blue-500/10',
        description: 'AI-powered matching that connects students to internship opportunities — profiles and listings are embedded and ranked by similarity.',
        image: '/projects/zigex/landing.png',
        slug: 'zigex',
        href: 'https://github.com/fadigatardzenyuy',
    },
    {
        title: 'CamLand',
        category: 'Next.js • Django REST Framework • PostGIS',
        span: 'col-span-12 md:col-span-7',
        color: 'from-amber-500/10',
        description: 'A digital land registry for Cameroon — parcels mapped as geospatial polygons with searchable ownership records.',
        image: '/projects/camland/hero.png',
        slug: 'camland',
    },
    {
        title: 'Roxy Puppy Club',
        category: 'Next.js • React • Tailwind CSS',
        span: 'col-span-12 md:col-span-5',
        color: 'from-sky-500/10',
        description: 'A live e-commerce storefront for a pet business — breed catalog, cart-style inquiries, and one-tap WhatsApp handoff.',
        image: '/projects/pet-rental/catalog.png',
        slug: 'pet-rental',
        href: 'https://roxypuppyclub.com',
    }
];

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

export function BentoProjects() {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
    };

    return (
        <section id="work" className="px-6 py-12 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.2 }}
                    transition={{ duration: 1 }}
                    className="text-2xl font-black mb-8 uppercase tracking-widest"
                >
                    Case Studies
                </motion.h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="bento-grid"
                >
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            onMouseMove={handleMouseMove}
                            className={`glass-card ${project.span} p-1 relative group cursor-pointer`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                            <Link
                                href={`/projects/${project.slug}`}
                                className="h-full w-full bg-[#080808] rounded-[2.3rem] p-6 md:p-10 flex flex-col justify-between overflow-hidden relative block"
                            >
                                {/* Project Image */}
                                <div className="absolute inset-x-0 bottom-0 px-10 pt-32 transition-transform duration-700 group-hover:scale-[1.02] hidden md:block">
                                    <div className="h-full w-full rounded-t-[2rem] overflow-hidden relative shadow-2xl border border-white/10 translation-transform duration-1000 group-hover:translate-y-4">
                                        <div className="absolute inset-0 bg-white/5" />
                                        <img src={project.image} alt={project.title} className="h-full w-full object-cover object-top opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                                    </div>
                                </div>

                                {/* Spotlight Overlay */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(99,102,241,0.15),transparent_80%)]" />
                                </div>

                                <div className="relative z-10 flex justify-between items-start">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-[#555] mb-2 block">{project.category}</span>
                                        <h3 className="text-2xl md:text-4xl font-black transition-all group-hover:translate-x-2 duration-500">{project.title}</h3>
                                    </div>
                                    <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:scale-110">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </div>
                                </div>

                                <div className="relative z-10 mt-20 opacity-40 group-hover:opacity-100 transition-all duration-500">
                                    <p className="max-w-md font-medium text-white/60 group-hover:text-white/80">
                                        {project.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-8 flex justify-center">
                    <Link
                        href="/projects"
                        className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                    >
                        View All Projects
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
