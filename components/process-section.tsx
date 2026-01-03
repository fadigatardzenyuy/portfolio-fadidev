export function ProcessSection() {
    const STEPS = [
        { num: '01', title: 'Understand', desc: 'Deep diving into the problem space and user requirements.' },
        { num: '02', title: 'Design', desc: 'Crafting the interaction model and visual system with precision.' },
        { num: '03', title: 'Build', desc: 'Developing clean, performant, and accessible frontend systems.' },
        { num: '04', title: 'Integrate', desc: 'Connecting the UI to robust full-stack architectures.' },
        { num: '05', title: 'Iterate', desc: 'Continuously refining the product based on real-world data.' },
    ];

    return (
        <section className="px-6 py-32 md:px-12 lg:px-24 bg-black text-white">
            <div className="mx-auto max-w-7xl">
                <span className="section-subheading mb-16 block text-[#555]">My Process</span>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
                    {STEPS.map((step) => (
                        <div key={step.num} className="group relative">
                            <span className="text-xs font-black text-primary opacity-50 block mb-4">{step.num}</span>
                            <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors text-white">
                                {step.title}
                            </h3>
                            <p className="text-[#888] font-medium leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
