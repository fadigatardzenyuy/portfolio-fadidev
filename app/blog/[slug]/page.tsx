import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    const title = `${post.title}`;
    const description = post.excerpt;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            url: `https://fadidev-studio.vercel.app/blog/${post.slug}`,
            images: [
                {
                    url: post.coverImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
            publishedTime: post.date,
            authors: ['Abdul Fadiga'],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [post.coverImage],
        },
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
    };
}

import { ReadingProgress } from "@/components/reading-progress";

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-primary selection:text-white pb-24">
            <ReadingProgress />

            {/* Hero / Header */}
            <header className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-end pt-24 pb-12 md:pb-24 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={post.coverImage}
                        alt={post.title}
                        className="h-full w-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent" />
                    <div className="absolute inset-0 bg-[#030303]/30" />
                </div>

                <div className="px-6 md:px-12 lg:px-24 w-full relative z-10">
                    <div className="mx-auto max-w-4xl">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-all mb-12 md:mb-20 font-black text-[10px] md:text-xs tracking-[0.3em] uppercase group"
                        >
                            <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Writing</span>
                        </Link>

                        <div className="flex items-center gap-4 mb-6 md:mb-10">
                            <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/20 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary">
                                {post.category}
                            </span>
                            <div className="h-px w-8 bg-white/20" />
                            <span className="text-white/40 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                                {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 md:mb-12">
                            {post.title}
                        </h1>

                        <p className="text-lg md:text-2xl text-white/50 font-medium leading-relaxed max-w-3xl border-l border-white/10 pl-6 md:pl-10 ml-1">
                            {post.excerpt}
                        </p>
                    </div>
                </div>
            </header>

            {/* Content */}
            <article className="px-6 md:px-12 lg:px-24 py-12 md:py-24">
                <div className="mx-auto max-w-3xl prose prose-invert prose-lg md:prose-xl prose-headings:font-black prose-p:text-white/70 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-li:text-white/70 prose-strong:text-white prose-img:rounded-2xl">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </article>

        </main>
    );
}
