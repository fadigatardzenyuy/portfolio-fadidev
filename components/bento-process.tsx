'use client';

import { motion, Variants } from 'framer-motion';

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

export function BentoProcess() {
    const STEPS = [
        { title: 'Understand', desc: 'Problem space & requirements.' },
        { title: 'Design', desc: 'System & Visual architecture.' },
        { title: 'Build', desc: 'High-performance engineering.' },
        { title: 'Integrate', desc: 'Full-stack & API connectivity.' },
        { title: 'Iterate', desc: 'Continuous product refinement.' },
    ];

    return (
        <section className="px-6 py-12 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.2 }}
                    transition={{ duration: 1 }}
                    className="text-2xl font-black mb-8 uppercase tracking-widest text-white"
                >
                    How I Work
                </motion.h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="bento-grid"
                >
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            className="glass-card col-span-12 md:col-span-6 lg:col-span-4 p-8 group overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 p-8 text-6xl font-black opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 select-none">
                                0{i + 1}
                            </div>
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center font-black text-xs text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500 scale-100 group-hover:scale-110">
                                    0{i + 1}
                                </div>
                            </div>
                            <h3 className="text-2xl font-black mb-2 text-white relative z-10 group-hover:translate-x-1 transition-transform duration-500">{step.title}</h3>
                            <p className="text-sm font-medium text-white/40 leading-relaxed relative z-10 group-hover:text-white/60 transition-colors duration-500">
                                {step.desc}
                            </p>
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary/20 group-hover:w-full transition-all duration-1000" />
                        </motion.div>
                    ))}

                    {/* Final Vision Card */}
                    <motion.div
                        variants={item}
                        className="glass-card col-span-12 lg:col-span-8 p-12 bg-primary/5 flex items-center justify-center relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <h4 className="text-3xl font-black text-center text-white italic tracking-tighter relative z-10 group-hover:scale-[1.02] transition-transform duration-700">
                            "Producing software that feels like magic through <br /> precise engineering and thoughtful design."
                        </h4>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
