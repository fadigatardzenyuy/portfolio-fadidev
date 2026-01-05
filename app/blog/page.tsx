import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Writing',
    description: 'Thoughts on engineering, design systems, and the evolving web landscape by Abdul Fadiga.',
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogListingPage() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-primary selection:text-white pb-24">

            {/* Header */}
            <header className="px-6 py-12 md:px-12 lg:px-24 pt-24">
                <div className="mx-auto max-w-7xl">
                    <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 font-bold text-sm tracking-widest uppercase">
                        <ArrowLeft className="h-4 w-4" /> Back to Portfolio
                    </Link>
                    <h1 className="editorial-heading mb-6">Writing.</h1>
                    <p className="text-xl text-white/60 max-w-2xl">
                        Thoughts on engineering, design systems, and the evolving web landscape.
                    </p>
                </div>
            </header>

            {/* Blog Grid */}
            <section className="px-6 md:px-12 lg:px-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card p-0 group hover:bg-white/5 transition-all overflow-hidden flex flex-col">
                                <div className="h-48 w-full relative overflow-hidden">
                                    <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary">{post.category}</span>
                                        <span className="text-xs font-bold uppercase tracking-widest text-[#555]">{post.date}</span>
                                    </div>
                                    <h2 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
                                    <p className="text-white/60 font-medium mb-8 line-clamp-3 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 font-bold text-sm mt-auto">
                                        Read Article <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
