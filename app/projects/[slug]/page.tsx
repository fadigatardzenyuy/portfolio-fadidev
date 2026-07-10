import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllProjects().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return { title: 'Project Not Found' };
    return {
        title: project.title,
        description: project.tagline,
        alternates: { canonical: `/projects/${slug}` },
        openGraph: {
            title: project.title,
            description: project.tagline,
            images: [{ url: project.coverImage, width: 1200, height: 630, alt: project.title }],
        },
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();

    const statusColor = project.status === 'Live'
        ? 'text-emerald-400 border-emerald-400/20 bg-emerald-400/10'
        : project.status === 'In Progress'
            ? 'text-amber-400 border-amber-400/20 bg-amber-400/10'
            : 'text-white/40 border-white/10 bg-white/5';

    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-primary selection:text-white pb-24">

            {/* Hero */}
            <header className="relative w-full min-h-[70vh] flex items-end pt-24 pb-12 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.coverImage}
                        alt={project.title}
                        className="h-full w-full object-cover opacity-30 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent" />
                    <div className="absolute inset-0 bg-[#030303]/30" />
                </div>

                <div className="px-6 md:px-12 lg:px-24 w-full relative z-10">
                    <div className="mx-auto max-w-5xl">
                        <Link
                            href="/#work"
                            className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-all mb-12 md:mb-20 font-black text-[10px] md:text-xs tracking-[0.3em] uppercase group"
                        >
                            <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
                            <span>All Projects</span>
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 mb-8">
                            <span className={`px-3 py-1 rounded-full border text-[10px] md:text-xs font-black uppercase tracking-[0.2em] ${statusColor}`}>
                                {project.status}
                            </span>
                            <span className="text-white/30 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                                {project.category}
                            </span>
                            <span className="text-white/30 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                                {project.year}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/50 font-medium max-w-2xl border-l border-white/10 pl-6 ml-1">
                            {project.tagline}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-10">
                            {project.href && (
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-black text-sm hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all"
                                >
                                    View Live <ArrowUpRight className="h-4 w-4" />
                                </a>
                            )}
                            {project.githubHref && (
                                <a
                                    href={project.githubHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-full font-black text-sm hover:bg-white/5 transition-all"
                                >
                                    <Github className="h-4 w-4" /> GitHub
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Stack */}
            <section className="px-6 md:px-12 lg:px-24 py-8">
                <div className="mx-auto max-w-5xl">
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map(t => (
                            <span key={t} className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10 text-white/40">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
                <section className="px-6 md:px-12 lg:px-24 py-8">
                    <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.screenshots.map((src, i) => (
                            <div
                                key={src}
                                className={`rounded-2xl overflow-hidden border border-white/10 bg-white/5 ${i === 0 ? 'md:col-span-2' : ''}`}
                            >
                                <img
                                    src={src}
                                    alt={`${project.title} screenshot ${i + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Case Study */}
            <article className="px-6 md:px-12 lg:px-24 py-12">
                <div className="mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">

                        <div className="md:col-span-2 space-y-16">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary block mb-4">Overview</span>
                                <p className="text-lg text-white/70 leading-relaxed">{project.description}</p>
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary block mb-4">The Problem</span>
                                <p className="text-lg text-white/70 leading-relaxed">{project.problem}</p>
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary block mb-4">My Approach</span>
                                <p className="text-lg text-white/70 leading-relaxed">{project.approach}</p>
                            </div>
                            {project.keyCapabilities && project.keyCapabilities.length > 0 && (
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary block mb-4">Key Capabilities</span>
                                    <ul className="space-y-3">
                                        {project.keyCapabilities.map(cap => (
                                            <li key={cap} className="text-lg text-white/70 leading-relaxed pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-primary">
                                                {cap}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {project.technicalHighlights && project.technicalHighlights.length > 0 && (
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary block mb-4">Technical Highlights</span>
                                    <ul className="space-y-3">
                                        {project.technicalHighlights.map(h => (
                                            <li key={h} className="text-lg text-white/70 leading-relaxed pl-6 relative before:content-['—'] before:absolute before:left-0 before:text-primary">
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary block mb-4">Outcome</span>
                                <p className="text-lg text-white/70 leading-relaxed">{project.outcome}</p>
                            </div>
                        </div>

                        <aside className="space-y-8">
                            <div className="glass-card p-6 sticky top-8">
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-5">Project Details</h3>
                                <dl className="space-y-4">
                                    {project.client && (
                                        <div>
                                            <dt className="text-xs font-bold uppercase tracking-widest text-[#555] mb-1">Client</dt>
                                            <dd className="font-bold">{project.client}</dd>
                                        </div>
                                    )}
                                    <div>
                                        <dt className="text-xs font-bold uppercase tracking-widest text-[#555] mb-1">Year</dt>
                                        <dd className="font-bold">{project.year}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs font-bold uppercase tracking-widest text-[#555] mb-1">Category</dt>
                                        <dd className="font-bold">{project.category}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs font-bold uppercase tracking-widest text-[#555] mb-1">Status</dt>
                                        <dd className={`font-bold inline-flex px-2.5 py-0.5 rounded-full border text-xs ${statusColor}`}>{project.status}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-xs font-bold uppercase tracking-widest text-[#555] mb-2">Stack</dt>
                                        <dd className="flex flex-wrap gap-1.5">
                                            {project.stack.map(t => (
                                                <span key={t} className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border border-white/10 text-white/40">{t}</span>
                                            ))}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </aside>

                    </div>
                </div>
            </article>

        </main>
    );
}
