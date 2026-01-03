import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
    {
        title: 'SEED Enterprise',
        category: 'Full-Stack',
        span: 'col-span-12 lg:col-span-12',
        color: 'from-indigo-500/10',
        description: 'A robust workflow optimization platform reducing internal processing time by 40%.'
    },
    {
        title: 'GDG Learning Hub',
        category: 'Community',
        span: 'col-span-12 md:col-span-7',
        color: 'from-purple-500/10',
        description: 'An educational portal serving 500+ local developers with resources and event tracking.'
    },
    {
        title: 'FadidevStudio',
        category: 'Design System',
        span: 'col-span-12 md:col-span-5',
        color: 'from-blue-500/10',
        description: 'The hyper-modern bento portfolio you are looking at right now.'
    }
];

export function BentoProjects() {
    return (
        <section id="work" className="px-6 py-12 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-2xl font-black mb-8 opacity-20 uppercase tracking-widest">Case Studies</h2>
                <div className="bento-grid">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className={`glass-card ${project.span} p-1 relative group cursor-pointer`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                            <div className="h-full w-full bg-[#080808] rounded-[1.8rem] p-10 flex flex-col justify-between overflow-hidden relative">

                                {/* Visual Placeholder (Abstract) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 aspect-[4/3] border border-white/5 rounded-2xl bg-white/2 scale-110 rotate-12 group-hover:rotate-6 transition-transform duration-700 opacity-20" />

                                <div className="relative z-10 flex justify-between items-start">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-[#555] mb-2 block">{project.category}</span>
                                        <h3 className="text-4xl font-black transition-all group-hover:translate-x-2">{project.title}</h3>
                                    </div>
                                    <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:bg-white group-hover:text-black">
                                        <ArrowUpRight className="h-5 w-5" />
                                    </div>
                                </div>

                                <div className="relative z-10 mt-20 opacity-40 group-hover:opacity-100 transition-opacity">
                                    <p className="max-w-md font-medium text-white/60">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
