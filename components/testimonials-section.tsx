'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        name: 'Vivian Tangem',
        role: 'Tech Lead · SEED',
        comment: 'Abdul consistently delivers beyond expectations. His ability to translate complex requirements into clean, functional interfaces sets him apart. The frontend architecture on our platform has held up under real user load — a direct result of his engineering discipline.',
        avatar: 'VT',
    },
    {
        name: 'Nkeng Stephane',
        role: 'Web Lead · GDG On Campus Bamenda',
        comment: 'Working with Abdul on our developer community initiatives has been outstanding. He brings a rare combination of design sensibility and backend understanding. Our workshop platforms went from concept to production in record time.',
        avatar: 'NS',
    },
    {
        name: 'Bongfen Eric',
        role: 'Founder · StartupCMR',
        comment: 'We hired Abdul to rebuild our product from scratch. He asked the right questions upfront, challenged assumptions that would have caused issues later, and shipped a polished product we\'re proud to show clients. Will work with him again.',
        avatar: 'BE',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function TestimonialsSection() {
    return (
        <section className="px-6 py-12 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.2 }}
                    transition={{ duration: 1 }}
                    className="text-2xl font-black mb-8 uppercase tracking-widest"
                >
                    Kind Words
                </motion.h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                >
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            className="glass-card p-8 flex flex-col justify-between group hover:bg-white/5 transition-all duration-500"
                        >
                            <Quote className="h-5 w-5 text-primary opacity-40 mb-6 group-hover:opacity-100 transition-opacity" />
                            <p className="text-white/70 font-medium leading-relaxed text-sm flex-grow mb-8 group-hover:text-white/90 transition-colors">
                                {t.comment}
                            </p>
                            <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                                <div className="h-9 w-9 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center text-[10px] font-black text-primary">
                                    {t.avatar}
                                </div>
                                <div>
                                    <p className="font-bold text-sm">{t.name}</p>
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#555]">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
