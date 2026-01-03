import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
    {
        title: 'SEED Web Solutions',
        category: 'Product & Engineering Lead',
        description: 'A scalable enterprise platform focused on performance and accessibility.',
        tags: ['React', 'Next.js', 'PostgreSQL'],
        impact: 'Improved performance by 40% and streamlined the user onboarding flow.',
    },
    {
        title: 'Community Edu Platform',
        category: 'Full-Stack Development',
        description: 'An educational dashboard designed for high usability in low-connectivity environments.',
        tags: ['Next.js', 'Supabase', 'Tailwind'],
        impact: 'Successfully launched across 5 campuses with 1k+ active users.',
    }
];

export function WorkSection() {
    return (
        <section id="work" className="px-6 py-32 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <span className="section-subheading mb-8 block">Selected Work</span>

                <div className="grid grid-cols-1 gap-12">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 border-t border-black/5 dark:border-white/5 pt-12"
                        >
                            {/* Info Column */}
                            <div>
                                <span className="text-sm font-bold text-[#888] uppercase tracking-widest">{project.category}</span>
                                <h3 className="text-4xl md:text-5xl mt-4 mb-8 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-xl text-[#555] dark:text-[#aaa] mb-8 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-xs font-bold text-[#888]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-sm font-medium italic text-[#888]">
                                        Impact: {project.impact}
                                    </p>
                                </div>
                            </div>

                            {/* visuals Column (Mock Case Study Feel) */}
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#eee] dark:bg-[#111]">
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-40">
                                    <div className="h-32 w-32 rounded-full border-2 border-black dark:border-white" />
                                    <div className="absolute h-px w-full bg-black dark:bg-white" />
                                    <div className="absolute w-px h-full bg-black dark:bg-white" />
                                </div>

                                {/* Hover link button */}
                                <div className="absolute bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-2xl transition-all scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white dark:text-black">
                                    <ArrowUpRight className="h-6 w-6" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
