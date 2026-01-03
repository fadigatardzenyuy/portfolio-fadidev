'use client';

import * as React from 'react';
import { ArrowDownRight } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="relative px-6 pt-32 pb-24 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                {/* Credibility Line */}
                <div className="mb-12 flex flex-wrap gap-x-4 gap-y-2">
                    <span className="section-subheading">Web Developer Lead @ SEED</span>
                    <span className="text-[#888]">•</span>
                    <span className="section-subheading">Co-Lead GDG On Campus Bambili</span>
                </div>

                {/* Headline */}
                <h1 className="editorial-heading mb-12 text-balance">
                    UI/UX-Focused <br />
                    Full-Stack Web Developer.
                </h1>

                {/* Subheadline & CTAs */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
                    <p className="max-w-xl text-xl font-medium leading-relaxed text-[#555] dark:text-[#aaa] text-balance">
                        I design intuitive user experiences and build scalable web applications,
                        with a strong focus on frontend quality, usability, and performance.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <a
                            href="#work"
                            className="group flex items-center gap-2 text-xl font-black tracking-tight"
                        >
                            Selected Work
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-all group-hover:bg-black group-hover:text-white dark:border-white/10 dark:group-hover:bg-white dark:group-hover:text-black">
                                <ArrowDownRight className="h-5 w-5" />
                            </div>
                        </a>
                        <a
                            href="#contact"
                            className="text-xl font-medium text-[#888] transition-colors hover:text-black dark:hover:text-white"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>

                {/* Abstract geometric element mock */}
                <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />
            </div>
        </section>
    );
}
