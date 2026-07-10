import Link from 'next/link';
import { ArrowLeft, Rss } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import { BlogList } from '@/components/blog-list';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Writing',
    description: 'Insights and thoughts on engineering, design systems, and the evolving web landscape by Abdul Fadiga.',
    alternates: { canonical: '/blog' },
};

export default function BlogListingPage() {
    const posts = getAllPosts();
    const categories = Array.from(new Set(posts.map(p => p.category)));

    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-primary selection:text-white pb-24">
            <header className="px-6 py-12 md:px-12 lg:px-24 pt-24">
                <div className="mx-auto max-w-7xl">
                    <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 font-bold text-sm tracking-widest uppercase">
                        <ArrowLeft className="h-4 w-4" /> Back to Portfolio
                    </Link>
                    <div className="flex items-end justify-between flex-wrap gap-4">
                        <div>
                            <h1 className="editorial-heading mb-4">Writing by Abdul Fadiga.</h1>
                            <p className="text-xl text-white/60 max-w-2xl">
                                Thoughts on engineering, design systems, and the evolving web landscape.
                            </p>
                        </div>
                        <a
                            href="/feed.xml"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white/40 hover:text-primary hover:border-primary/30 transition-all"
                        >
                            <Rss className="h-3.5 w-3.5" /> RSS Feed
                        </a>
                    </div>
                </div>
            </header>

            <section className="px-6 md:px-12 lg:px-24">
                <div className="mx-auto max-w-7xl">
                    <BlogList posts={posts} categories={categories} />
                </div>
            </section>
        </main>
    );
}
