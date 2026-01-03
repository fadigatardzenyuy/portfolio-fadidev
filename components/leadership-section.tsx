export function LeadershipSection() {
    const ROLES = [
        {
            title: 'Web Developer Lead',
            org: 'SEED',
            desc: 'Leading frontend development, mentoring developers, and building production-ready web solutions with a focus on product strategy.',
        },
        {
            title: 'Co-Lead (Frontend)',
            org: 'GDG On Campus Bambili',
            desc: 'Supporting frontend learning, organizing workshops, and contributing to the regional developer community growth.',
        },
    ];

    return (
        <section className="px-6 py-32 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <span className="section-subheading mb-16 block">Impact & Community</span>

                <div className="space-y-16">
                    {ROLES.map((role, index) => (
                        <div
                            key={index}
                            className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-24 last:border-none border-b border-black/5 dark:border-white/5 pb-16"
                        >
                            <div className="md:w-1/3">
                                <h3 className="text-3xl font-black mb-1">{role.title}</h3>
                                <p className="text-xl font-bold text-primary italic">{role.org}</p>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-xl text-[#555] dark:text-[#aaa] leading-relaxed max-w-2xl">
                                    {role.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
