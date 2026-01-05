import Link from 'next/link';
import { ArrowRight, PenTool } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';

export function BentoBlog() {
    const posts = getAllPosts();
    const latestPost = posts[0];

    if (!latestPost) return null;

    return (
        <section className="px-6 py-12 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <div className="bento-grid">

                    {/* Section Title Card */}
                    <div className="glass-card col-span-12 lg:col-span-4 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            <PenTool className="h-8 w-8 text-primary mb-6" />
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-30">Writing</h3>
                        </div>
                        <p className="text-xl font-bold leading-tight mt-12 opacity-60">
                            Thoughts on software architecture, user experience, and the future of web.
                        </p>
                    </div>

                    {/* Latest Post Card */}
                    <Link href={`/blog/${latestPost.slug}`} className="glass-card col-span-12 lg:col-span-8 p-0 flex flex-col justify-end group relative overflow-hidden min-h-[300px]">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img src={latestPost.coverImage} alt={latestPost.title} className="h-full w-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                        </div>

                        <div className="relative z-10 p-8 md:p-12">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase">{latestPost.category}</span>
                                <span className="w-1 h-1 rounded-full bg-white/20" />
                                <span className="text-white/40 font-medium text-xs uppercase tracking-widest">{latestPost.date}</span>
                            </div>

                            <h3 className="text-2xl md:text-4xl font-black mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                {latestPost.title}
                            </h3>

                            <p className="text-white/60 max-w-2xl text-lg mb-8 line-clamp-2">
                                {latestPost.excerpt}
                            </p>

                            <div className="flex items-center gap-2 font-bold text-white group-hover:gap-4 transition-all">
                                Read Article <ArrowRight className="h-4 w-4" />
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
}
