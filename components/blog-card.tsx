import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { format } from 'date-fns';

type Props = {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    coverImage?: string;
};

export function BlogCard({ title, excerpt, date, slug, coverImage }: Props) {
    return (
        <Link
            href={`/blog/${slug}`}
            className="group relative flex flex-col glass-card overflow-hidden hover:bg-white/5 transition-all duration-300"
        >
            {coverImage && (
                <div className="relative w-full h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={coverImage}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-sm font-medium text-white/40 font-mono">
                        {format(new Date(date), 'MMM dd, yyyy')}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-white/60 mb-6 line-clamp-2 leading-relaxed">
                    {excerpt}
                </p>

                <div className="mt-auto">
                    <span className="text-sm font-bold text-primary group-hover:translate-x-1 transition-transform inline-block">
                        Read Article
                    </span>
                </div>
            </div>
        </Link>
    );
}
