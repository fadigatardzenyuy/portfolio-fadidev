'use client';

import * as React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export function BentoHero() {
    return (
        <section className="relative px-6 pt-24 pb-12 md:px-12 lg:px-24">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full glow-indigo pointer-events-none" />

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="flex items-center gap-2 mb-12">
                    <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary text-white font-black text-xs">
                        FD
                    </div>
                    <span className="text-xl font-black tracking-tighter uppercase">FadidevStudio</span>
                </div>

                <div className="bento-grid">

                    {/* Main ID Card */}
                    <div className="glass-card col-span-12 lg:col-span-8 p-12 flex flex-col justify-end min-h-[400px]">
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
                    <div className="glass-card col-span-12 md:col-span-6 lg:col-span-4 p-8 flex flex-col justify-between">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-30">Network</h3>
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

                    {/* Visual Hook / Profile Abstract */}
                    <div className="glass-card col-span-12 lg:col-span-8 p-1 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="h-full w-full bg-[#080808] rounded-[1.8rem] flex items-center justify-center p-20">
                            {/* Minimal abstract UI shape */}
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

                </div>
            </div>
        </section>
    );
}
