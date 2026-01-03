const SKILLS = [
    'React', 'Next.js', 'Tailwind', 'TypeScript', 'Supabase',
    'Framer Motion', 'UI Design', 'UX Research', 'Node.js',
    'PostgreSQL', 'Leadership', 'Mentorship'
];

export function SkillsGrid() {
    return (
        <section className="px-6 py-12 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <div className="bento-grid">

                    <div className="glass-card col-span-12 lg:col-span-4 p-8 flex flex-col justify-between">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-30">Expertise</h3>
                        <p className="text-xl font-bold leading-tight mt-12">
                            Specialized in <span className="text-primary italic">Product-Driven</span> Front-end Engineering.
                        </p>
                    </div>

                    <div className="glass-card col-span-12 lg:col-span-8 p-8">
                        <div className="flex flex-wrap gap-4">
                            {SKILLS.map(skill => (
                                <div key={skill} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/5 text-lg font-bold hover:bg-white/10 hover:border-primary/30 transition-all cursor-default">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
