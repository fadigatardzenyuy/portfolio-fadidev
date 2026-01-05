import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';

interface Props {
    params: {
        slug: string;
    };
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

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-primary selection:text-white pb-24">

            {/* Hero / Header */}
            <header className="relative w-full h-[60vh] min-h-[400px] flex items-end">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent" />
                </div>

                <div className="px-6 md:px-12 lg:px-24 w-full relative z-10 pb-12">
                    <div className="mx-auto max-w-3xl">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 font-bold text-sm tracking-widest uppercase">
                            <ArrowLeft className="h-4 w-4" /> Back
                        </Link>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold uppercase tracking-widest text-primary">
                                {post.category}
                            </span>
                            <span className="text-white/60 text-sm font-bold uppercase tracking-widest">
                                {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-4">
                            {post.title}
                        </h1>

                        <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl">
                            {post.excerpt}
                        </p>
                    </div>
                </div>
            </header>

            {/* Content */}
            <article className="px-6 md:px-12 lg:px-24">
                <div className="mx-auto max-w-3xl prose prose-invert prose-lg prose-headings:font-black prose-p:text-white/70 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-li:text-white/70 prose-strong:text-white">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </article>

        </main>
    );
}
