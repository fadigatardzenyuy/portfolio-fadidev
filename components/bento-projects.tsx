import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
    {
        title: 'Healthcare Appointment Platform',
        category: 'Product • Full-Stack',
        span: 'col-span-12 lg:col-span-12',
        color: 'from-emerald-500/10',
        description: 'A digital healthcare booking platform that reduced patient wait times from hours to minutes through streamlined appointment workflows and real-time hospital coordination.',
        image: '/blog/hello-world.png'
    },
    {
        title: 'Zigex ',
        category: 'Education • Frontend-Focused',
        span: 'col-span-12 md:col-span-7',
        color: 'from-sky-500/10',
        description: 'A structured internship and learning platform designed to onboard, track, and guide aspiring developers through curated frontend training and real-world tasks.',
        image: '/blog/hello-world.png'
    },

    {
        title: 'FadidevStudio',
        category: 'Design System',
        span: 'col-span-12 md:col-span-5',
        color: 'from-blue-500/10',
        description: 'The hyper-modern bento portfolio you are looking at right now.',
        image: '/blog/hello-world.png'
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
                            <div className="h-full w-full bg-[#080808] rounded-[1.8rem] p-6 md:p-10 flex flex-col justify-between overflow-hidden relative">

                                {/* Project Image (Auto-shows if file exists) - Hidden on mobile to remove overlay text */}
                                <div className="absolute inset-0 px-10 pt-32 transition-transform duration-700 group-hover:scale-105 hidden md:block">
                                    <div className="h-full w-full rounded-t-2xl overflow-hidden relative shadow-2xl border border-white/10">
                                        {/* Abstract fallback included in background, but img sits on top */}
                                        <div className="absolute inset-0 bg-white/5" />
                                        <img src={project.image} alt={project.title} className="h-full w-full object-cover object-top opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                                    </div>
                                </div>

                                <div className="relative z-10 flex justify-between items-start">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-[#555] mb-2 block">{project.category}</span>
                                        <h3 className="text-2xl md:text-4xl font-black transition-all group-hover:translate-x-2">{project.title}</h3>
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
