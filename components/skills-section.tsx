const SKILLS = {
    'UI / UX': [
        'UX Thinking',
        'Design Systems',
        'Information Architecture',
        'Accessibility',
        'Usability & Clarity',
    ],
    'Frontend (Primary)': [
        'React',
        'Next.js',
        'Tailwind CSS',
        'Component-driven UI',
        'Performance Optimization',
    ],
    'Full-Stack': [
        'Supabase / Firebase',
        'APIs & Authentication',
        'Payments & Integrations',
        'Database Design',
    ],
};

export function SkillsSection() {
    return (
        <section className="px-6 py-32 md:px-12 lg:px-24 bg-white dark:bg-[#050505] border-y border-black/5 dark:border-white/5">
            <div className="mx-auto max-w-7xl">
                <span className="section-subheading mb-16 block">Capabilities</span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
                    {Object.entries(SKILLS).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-2xl font-black mb-8 border-b border-black/5 dark:border-white/5 pb-4 uppercase tracking-tighter">
                                {category}
                            </h3>
                            <ul className="space-y-4">
                                {items.map((item) => (
                                    <li key={item} className="text-xl font-medium text-[#555] dark:text-[#aaa] transition-colors hover:text-black dark:hover:text-white">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
