'use client';

import Link from 'next/link';
import { ArrowUpRight, Search } from 'lucide-react';
import { BlogPost } from '@/lib/blog';
import { useState, useMemo } from 'react';

interface BlogListProps {
    posts: BlogPost[];
    categories: string[];
}

export function BlogList({ posts, categories }: BlogListProps) {
    const [query, setQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = useMemo(() => {
        return posts.filter(post => {
            const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
            const q = query.toLowerCase();
            const matchesQuery = !q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q);
            return matchesCategory && matchesQuery;
        });
    }, [posts, query, activeCategory]);

    return (
        <>
            {/* Search + filter */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-2">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium placeholder:text-white/20 outline-none focus:border-primary/50 transition-all"
                    />
                </div>
                <div className="flex flex-wrap gap-2">
                    {['All', ...categories].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                                activeCategory === cat
                                    ? 'bg-primary text-white'
                                    : 'border border-white/10 text-white/40 hover:border-white/30 hover:text-white/70'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
                <div className="py-24 text-center opacity-30">
                    <p className="text-sm font-bold uppercase tracking-widest">No articles found</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {filtered.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="glass-card p-0 group hover:bg-white/5 transition-all overflow-hidden flex flex-col">
                            <div className="h-48 w-full relative overflow-hidden">
                                <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary">{post.category}</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#555]">{post.readTime}</span>
                                </div>
                                <h2 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
                                <p className="text-white/60 font-medium mb-8 line-clamp-3 leading-relaxed flex-grow">{post.excerpt}</p>
                                <div className="flex items-center gap-2 font-bold text-sm mt-auto">
                                    Read Article <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}
