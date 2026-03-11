'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';
import { TechStack } from './tech-stack-card';
import { HeaderPresence } from './header-presence';
import { Magnetic } from './magnetic';

interface BentoHeroProps {
    latestPost?: BlogPost;
}

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

export function BentoHero({ latestPost }: BentoHeroProps) {
    return (
        <section className="relative px-6 pt-24 pb-12 md:px-12 lg:px-24">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full glow-indigo pointer-events-none" />

            <div className="mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-between mb-12"
                >
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary text-white font-black text-xs">
                            FD
                        </div>
                        <span className="text-xl font-black tracking-tighter uppercase">FadidevStudio</span>
                    </div>

                    <div className="flex items-center gap-12">
                        <HeaderPresence />
                        <nav className="flex items-center gap-6">
                            <Magnetic strength={0.2}>
                                <a href="/blog" className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors p-2">
                                    Blog
                                </a>
                            </Magnetic>
                            <Magnetic strength={0.2}>
                                <a href="mailto:fadidevstudio@gmail.com" className="text-sm font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors p-2">
                                    Contact
                                </a>
                            </Magnetic>
                        </nav>
                    </div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="bento-grid"
                >

                    {/* Main ID Card */}
                    <motion.div
                        variants={item}
                        className="glass-card col-span-12 lg:col-span-8 p-6 md:p-12 flex flex-col justify-center min-h-[300px] md:min-h-[400px] group"
                    >
                        <div className="mb-8">
                            <span className="text-secondary font-bold uppercase tracking-widest text-xs opacity-50 block mb-4">Available for products</span>
                            <h1 className="editorial-heading group-hover:tracking-tight transition-all duration-700">
                                Abdul Fadiga. <br />
                                <span className="opacity-40">UI/UX Engineer.</span>
                            </h1>
                        </div>
                        <p className="max-w-xl text-xl font-medium text-white/60 leading-relaxed">
                            I bridge the gap between world-class design and robust engineering.
                            Currently leading frontend strategy at <span className="text-white">SEED</span> and community efforts at <span className="text-white">GDG</span>.
                        </p>
                    </motion.div>

                    {/* Social / Contact Box */}
                    <motion.div
                        variants={item}
                        className="glass-card col-span-12 md:col-span-6 lg:col-span-4 p-6 md:p-8 flex flex-col justify-between"
                    >
                        <div className="relative">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-30 mb-8">Network</h3>
                        </div>

                        <div className="flex justify-center mb-8">
                            <div className="relative group cursor-pointer">
                                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-700"></div>
                                <img
                                    src="/profile.jpg"
                                    alt="Abdul Fadiga"
                                    className="relative h-44 w-44 aspect-square rounded-2xl border-2 border-white/10 object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.05] group-hover:-rotate-2"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Magnetic>
                                <a href="https://www.linkedin.com/in/abdul-fadiga-775a5a284/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-500 w-full">
                                    <div className="flex items-center gap-4">
                                        <Linkedin className="h-5 w-5" />
                                        <span className="font-bold">LinkedIn</span>
                                    </div>
                                    <ArrowUpRight className="h-4 w-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </a>
                            </Magnetic>
                            <Magnetic>
                                <a href="https://github.com/fadigatardzenyuy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-500 w-full">
                                    <div className="flex items-center gap-4">
                                        <Github className="h-5 w-5" />
                                        <span className="font-bold">GitHub</span>
                                    </div>
                                    <ArrowUpRight className="h-4 w-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </a>
                            </Magnetic>
                            <Magnetic>
                                <a href="mailto:fadidevstudio@gmail.com" className="flex items-center justify-between group p-4 rounded-2xl bg-primary text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-500 w-full">
                                    <div className="flex items-center gap-4">
                                        <Mail className="h-5 w-5" />
                                        <span className="font-bold">Send Message</span>
                                    </div>
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            </Magnetic>
                        </div>
                    </motion.div>

                    {/* Leadership Roles Card */}
                    <motion.div
                        variants={item}
                        className="glass-card col-span-12 md:col-span-6 lg:col-span-6 p-8 group flex flex-col justify-between"
                    >
                        <div className="relative">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-30 mb-8">Leadership</h3>
                            <div className="space-y-6">
                                <div className="group-hover:translate-x-2 transition-transform duration-500">
                                    <h4 className="text-2xl font-black leading-none mb-1">Web Dev Lead</h4>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary">SEED</p>
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-500 delay-75">
                                    <h4 className="text-2xl font-black leading-none mb-1">Web Dev Instructor</h4>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary">Internship Program</p>
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-500 delay-150">
                                    <h4 className="text-2xl font-black leading-none mb-1">Co-Lead Frontend</h4>
                                    <p className="text-sm font-bold uppercase tracking-widest text-primary">GDG Bambili</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tech Stack Card */}
                    <motion.div
                        variants={item}
                        className="col-span-12 md:col-span-6 lg:col-span-6 flex"
                    >
                        <TechStack />
                    </motion.div>

                    {/* Latest Blog Post Card - Full Width */}
                    <motion.div
                        variants={item}
                        className="glass-card col-span-12 p-0 group flex flex-col relative overflow-hidden min-h-[400px]"
                    >
                        {latestPost ? (
                            <Link href={`/blog/${latestPost.slug}`} className="p-8 md:p-12 h-full flex flex-col justify-end block relative z-10">
                                <div className="absolute inset-0 transition-opacity duration-1000 -z-10">
                                    <img
                                        src={latestPost.coverImage}
                                        alt={latestPost.title}
                                        className="h-full w-full object-cover opacity-30 group-hover:opacity-10 group-hover:scale-105 transition-all duration-[2000ms]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                </div>

                                <div className="max-w-3xl">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-xs font-bold font-mono uppercase tracking-[0.3em] text-primary">{latestPost.category || 'Career'}</span>
                                        <span className="h-1 w-1 rounded-full bg-white/20" />
                                        <span className="text-xs font-bold font-mono opacity-40 uppercase tracking-[0.3em]">{latestPost.date}</span>
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-black leading-[1.1] mb-6 group-hover:tracking-tight transition-all duration-700">
                                        {latestPost.title}
                                    </h2>

                                    <p className="text-lg text-white/50 font-medium mb-8 line-clamp-2 max-w-2xl group-hover:text-white/80 transition-colors">
                                        {latestPost.excerpt}
                                    </p>

                                    <div className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.3em] group-hover:gap-6 transition-all duration-500">
                                        <span>Read Latest Article</span>
                                        <ArrowRight className="h-4 w-4 text-primary" />
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div className="p-8 h-full flex flex-col justify-center items-center opacity-20 text-center">
                                <p className="text-xs font-bold uppercase tracking-widest">No articles yet</p>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
