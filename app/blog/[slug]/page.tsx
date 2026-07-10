import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { Metadata } from 'next';
import { ReadingProgress } from '@/components/reading-progress';
import { TableOfContents } from '@/components/table-of-contents';
import { parseHeadings } from '@/lib/utils';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            url: `https://fadidev-studio.vercel.app/blog/${post.slug}`,
            images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }],
            publishedTime: post.date,
            authors: ['Abdul Fadiga'],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.coverImage],
        },
        alternates: { canonical: `/blog/${post.slug}` },
    };
}

const codeComponents = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    code({ className, children, ...props }: any) {
        const match = /language-(\w+)/.exec(className || '');
        const isBlock = match || (typeof children === 'string' && children.includes('\n'));
        if (isBlock) {
            return (
                <div className="relative my-6">
                    {match && (
                        <span className="absolute top-3 right-4 text-[10px] font-mono font-bold uppercase tracking-widest text-white/25 select-none">
                            {match[1]}
                        </span>
                    )}
                    <pre className="bg-white/5 border border-white/10 rounded-2xl p-6 overflow-x-auto">
                        <code className={`font-mono text-sm text-white/80 ${className || ''}`} {...props}>
                            {children}
                        </code>
                    </pre>
                </div>
            );
        }
        return (
            <code className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-[0.875em] font-mono" {...props}>
                {children}
            </code>
        );
    },
};

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) notFound();

    const allPosts = getAllPosts();
    const relatedPosts = allPosts
        .filter(p => p.slug !== slug && p.category === post.category)
        .slice(0, 3);
    const fallbackPosts = relatedPosts.length
        ? relatedPosts
        : allPosts.filter(p => p.slug !== slug).slice(0, 3);

    const headings = parseHeadings(post.content);

    return (
        <main className="min-h-screen bg-[#030303] text-white selection:bg-primary selection:text-white pb-24">
            <ReadingProgress />

            {/* Hero */}
            <header className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-end pt-24 pb-12 md:pb-24 overflow-hidden">
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
                            Back to Writing
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

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] md:leading-[1.0] mb-8 md:mb-12">
                            {post.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/50 font-medium leading-relaxed max-w-3xl border-l border-white/10 pl-6 md:pl-10 ml-1">
                            {post.excerpt}
                        </p>
                    </div>
                </div>
            </header>

            {/* Content + TOC */}
            <div className="px-6 md:px-12 lg:px-24 py-12 md:py-24">
                <div className="mx-auto max-w-7xl flex gap-16 items-start">
                    <article className="flex-1 min-w-0">
                        <div className="prose prose-invert prose-lg md:prose-xl max-w-3xl
                            prose-headings:font-black prose-headings:tracking-tight
                            prose-p:text-white/70 prose-p:leading-relaxed
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            prose-li:text-white/70
                            prose-strong:text-white
                            prose-img:rounded-2xl
                            prose-code:text-primary prose-code:before:content-none prose-code:after:content-none
                            prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl
                            [&_[data-rehype-pretty-code-figure]]:my-6
                            [&_pre]:overflow-x-auto
                            [&_[data-language]]:text-xs [&_[data-language]]:font-mono">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeSlug]}
                                components={codeComponents}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </div>
                    </article>

                    <TableOfContents headings={headings} />
                </div>
            </div>

            {/* Related Posts */}
            {fallbackPosts.length > 0 && (
                <section className="px-6 md:px-12 lg:px-24 pt-12 border-t border-white/5">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-8">
                            {relatedPosts.length ? 'More in ' + post.category : 'More Writing'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {fallbackPosts.map(p => (
                                <Link
                                    key={p.slug}
                                    href={`/blog/${p.slug}`}
                                    className="glass-card p-0 group hover:bg-white/5 transition-all overflow-hidden flex flex-col"
                                >
                                    <div className="h-36 w-full relative overflow-hidden">
                                        <img src={p.coverImage} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70" />
                                    </div>
                                    <div className="p-6">
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-3">{p.category}</span>
                                        <h3 className="font-black text-lg mb-2 group-hover:text-primary transition-colors leading-snug">{p.title}</h3>
                                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/30 mt-4">
                                            Read <ArrowUpRight className="h-3 w-3" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
