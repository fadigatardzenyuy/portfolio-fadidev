export function PhilosophySection() {
    const VALUES = [
        { title: 'User-first thinking', desc: 'Prioritizing real human needs over technical constraints.' },
        { title: 'Design clarity', desc: 'Simplicity and intentionality in every pixel and interaction.' },
        { title: 'Scalable systems', desc: 'Building robust architectures that grow with the product.' },
        { title: 'Knowledge sharing', desc: 'Empowering communities through mentorship and open-source.' },
    ];

    return (
        <section className="px-6 py-32 md:px-12 lg:px-24 bg-white dark:bg-[#050505]">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                    {/* Left: Copy */}
                    <div>
                        <span className="section-subheading mb-8 block">Design Philosophy</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12">
                            Building products, <br />
                            not just interfaces.
                        </h2>
                        <div className="space-y-6 text-xl text-[#555] dark:text-[#aaa] leading-relaxed">
                            <p>
                                I am a full-stack developer guided by UI/UX principles. By bridging the gap between design and engineering,
                                I create cohesive digital experiences where frontend quality is the strongest edge.
                            </p>
                            <p>
                                My background in leadership at SEED and GDG has taught me that great software is as much about
                                people and processes as it is about code.
                            </p>
                        </div>
                    </div>

                    {/* Right: Values List */}
                    <div className="flex flex-col justify-end">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            {VALUES.map((value) => (
                                <div key={value.title}>
                                    <h3 className="text-xl font-black mb-2 text-black dark:text-white uppercase tracking-tight">
                                        {value.title}
                                    </h3>
                                    <p className="text-[#888] font-medium leading-relaxed">
                                        {value.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
