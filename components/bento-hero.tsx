'use client';

import * as React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface BentoHeroProps {
    latestPost?: BlogPost;
}

export function BentoHero({ latestPost }: BentoHeroProps) {
    return (
        <section className="relative px-6 pt-24 pb-12 md:px-12 lg:px-24">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full glow-indigo pointer-events-none" />

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary text-white font-black text-xs">
                            FD
                        </div>
                        <span className="text-xl font-black tracking-tighter uppercase">FadidevStudio</span>
                    </div>

                    <nav className="flex items-center gap-6">
                        <a href="/blog" className="text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                            Blog
                        </a>
                        <a href="mailto:fadidevstudio@gmail.com" className="text-sm font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors">
                            Contact
                        </a>
                    </nav>
                </div>

                <div className="bento-grid">

                    {/* Main ID Card */}
                    <div className="glass-card col-span-12 lg:col-span-8 p-6 md:p-12 flex flex-col justify-center min-h-[300px] md:min-h-[400px]">
                        <div className="mb-8">
                            <span className="text-secondary font-bold uppercase tracking-widest text-xs opacity-50 block mb-4">Available for products</span>
                            <h1 className="editorial-heading">
                                Abdul Fadiga. <br />
                                <span className="opacity-40">UI/UX Engineer.</span>
                            </h1>
                        </div>
                        <p className="max-w-xl text-xl font-medium text-white/60 leading-relaxed">
                            I bridge the gap between world-class design and robust engineering.
                            Currently leading frontend strategy at <span className="text-white">SEED</span> and community efforts at <span className="text-white">GDG</span>.
                        </p>
                    </div>

                    {/* Social / Contact Box */}
                    <div className="glass-card col-span-12 md:col-span-6 lg:col-span-4 p-6 md:p-8 flex flex-col justify-between">
                        <div className="relative">
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-30 mb-8">Network</h3>
                            <div className="absolute top-0 right-0">
                                {/* Optional: Status indicator or similar if needed, else empty */}
                            </div>
                        </div>

                        <div className="flex justify-center mb-8">
                            <div className="relative group cursor-pointer">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
                                <img
                                    src="/profile.jpg"
                                    alt="Abdul Fadiga"
                                    className="relative h-40 w-40 aspect-square rounded-2xl border-2 border-white/10 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <a href="https://www.linkedin.com/in/abdul-fadiga-775a5a284/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="font-bold">LinkedIn</span>
                                </div>
                                <ArrowUpRight className="h-4 w-4 opacity-30 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a href="https://github.com/fadigatardzenyuy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <Github className="h-5 w-5" />
                                    <span className="font-bold">GitHub</span>
                                </div>
                                <ArrowUpRight className="h-4 w-4 opacity-30 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a href="mailto:fadidevstudio@gmail.com" className="flex items-center justify-between group p-4 rounded-2xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                                <div className="flex items-center gap-4">
                                    <Mail className="h-5 w-5" />
                                    <span className="font-bold">Send Message</span>
                                </div>
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Leadership Roles */}
                    <div className="glass-card col-span-12 md:col-span-6 lg:col-span-4 p-8">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-30 mb-8">Leadership</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-lg font-black leading-none mb-1">Web Dev Lead</h4>
                                <p className="text-sm font-bold text-primary">SEED</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-black leading-none mb-1">Co-Lead Frontend</h4>
                                <p className="text-sm font-bold text-primary">GDG Bambili</p>
                            </div>
                        </div>
                    </div>

                    {/* Latest Blog Post Card */}
                    {latestPost ? (
                        <Link href={`/blog/${latestPost.slug}`} className="glass-card col-span-12 lg:col-span-8 p-0 flex flex-col justify-end group relative overflow-hidden min-h-[300px]">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={latestPost.coverImage}
                                    alt={latestPost.title}
                                    className="h-full w-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                            </div>

                            <div className="relative z-10 p-8 md:p-12">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-primary font-bold tracking-widest text-xs uppercase">{latestPost.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                    <span className="text-white/40 font-medium text-xs uppercase tracking-widest">{latestPost.date}</span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-black mb-3 group-hover:translate-x-2 transition-transform duration-300 line-clamp-2">
                                    {latestPost.title}
                                </h3>

                                <p className="text-white/60 max-w-2xl text-base mb-6 line-clamp-2">
                                    {latestPost.excerpt}
                                </p>

                                <div className="flex items-center gap-2 font-bold text-white group-hover:gap-4 transition-all text-sm uppercase tracking-widest">
                                    Read Latest Article <ArrowRight className="h-4 w-4" />
                                </div>
                            </div>
                        </Link>
                    ) : (
                        /* Fallback or Visual Hook if no posts */
                        <div className="glass-card col-span-12 lg:col-span-8 p-1 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="h-full w-full bg-[#080808] rounded-[1.8rem] flex items-center justify-center p-8 md:p-20">
                                <div className="w-full aspect-video border border-white/10 rounded-xl relative overflow-hidden backdrop-blur-3xl bg-white/2 shadow-2xl">
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <div className="h-2 w-2 rounded-full bg-white/20" />
                                        <div className="h-2 w-2 rounded-full bg-white/20" />
                                    </div>
                                    <div className="absolute inset-x-8 top-16 h-2 w-1/3 bg-white/10 rounded-full" />
                                    <div className="absolute inset-x-8 top-24 space-y-2">
                                        <div className="h-1 w-full bg-white/5 rounded-full" />
                                        <div className="h-1 w-2/3 bg-white/5 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}
