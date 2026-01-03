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
                <h2 className="text-2xl font-black mb-8 opacity-20 uppercase tracking-widest text-white">How I Work</h2>
                <div className="bento-grid">
                    {STEPS.map((step, i) => (
                        <div key={i} className="glass-card col-span-12 md:col-span-6 lg:col-span-4 p-8 group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center font-black text-xs text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    0{i + 1}
                                </div>
                            </div>
                            <h3 className="text-2xl font-black mb-2 text-white">{step.title}</h3>
                            <p className="text-sm font-medium text-white/40 leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}

                    {/* Final Vision Card */}
                    <div className="glass-card col-span-12 lg:col-span-8 p-12 bg-primary/10 flex items-center justify-center">
                        <h4 className="text-3xl font-black text-center text-white italic tracking-tighter">
                            "Producing software that feels like magic through <br /> precise engineering and thoughtful design."
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
}
