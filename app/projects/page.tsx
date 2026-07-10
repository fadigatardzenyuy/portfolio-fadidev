import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getAllProjects } from '@/lib/projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'A collection of products and platforms built by Abdul Fadiga — full-stack web applications, geospatial systems, and e-commerce experiences.',
    alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-primary selection:text-white pb-24">
            <header className="px-6 py-12 md:px-12 lg:px-24 pt-24">
                <div className="mx-auto max-w-7xl">
                    <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 font-bold text-sm tracking-widest uppercase">
                        <ArrowLeft className="h-4 w-4" /> Back to Portfolio
                    </Link>
                    <h1 className="editorial-heading mb-4">All Projects.</h1>
                    <p className="text-xl text-white/60 max-w-2xl">
                        Everything I&apos;ve shipped or am still building, land registries to internship matching to a puppy storefront.
                    </p>
                </div>
            </header>

            <section className="px-6 md:px-12 lg:px-24">
                <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => {
                        const statusColor = project.status === 'Live'
                            ? 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10'
                            : project.status === 'In Progress'
                                ? 'text-amber-400 border-amber-400/20 bg-amber-400/10'
                                : 'text-white/40 border-white/10 bg-white/5';

                        return (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="glass-card group relative flex flex-col overflow-hidden rounded-[2rem] p-1"
                            >
                                <div className="relative h-56 w-full overflow-hidden rounded-t-[1.7rem] rounded-b-lg bg-white/5">
                                    <img
                                        src={project.coverImage}
                                        alt={project.title}
                                        className="h-full w-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className={`px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-[0.2em] ${statusColor}`}>
                                            {project.status}
                                        </span>
                                        <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <h2 className="text-2xl font-black transition-all group-hover:translate-x-1 duration-500">{project.title}</h2>
                                        <div className="h-10 w-10 shrink-0 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:scale-110">
                                            <ArrowUpRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <p className="text-white/60 font-medium leading-relaxed mb-6 flex-1">{project.tagline}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.stack.map(t => (
                                            <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/10 text-white/40">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
