export function PhilosophySection() {
    const VALUES = [
        { title: 'User-first thinking', desc: "Start from what the person needs, not what's easiest to build." },
        { title: 'Design clarity', desc: 'Every screen should make sense without an explanation.' },
        { title: 'Scalable systems', desc: 'Code that still makes sense once the product doubles in size.' },
        { title: 'Knowledge sharing', desc: 'Teaching what I know in the open, instead of sitting on it.' },
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
                                I'm a full-stack developer who thinks about UI/UX first. Sitting close to both the design
                                and the code keeps them honest with each other — it's usually why the frontend ends up
                                feeling the way it should.
                            </p>
                            <p>
                                Leading at SEED and GDG taught me that most of what makes software good has less to do
                                with the code and more to do with the people and process around it.
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
