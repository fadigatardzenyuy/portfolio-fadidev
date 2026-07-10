'use client';

import { useEffect, useState } from 'react';
import { type Heading } from '@/lib/utils';

export function TableOfContents({ headings }: { headings: Heading[] }) {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                }
            },
            { rootMargin: '0px 0px -70% 0px', threshold: 1 }
        );

        headings.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length < 2) return null;

    return (
        <aside className="hidden xl:block w-64 shrink-0">
            <div className="sticky top-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-4">Contents</p>
                <nav className="space-y-1">
                    {headings.map(({ id, text, level }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`block text-sm font-medium transition-all duration-200 leading-snug py-0.5 border-l-2 ${
                                level === 3 ? 'pl-6' : 'pl-4'
                            } ${
                                activeId === id
                                    ? 'text-primary border-primary'
                                    : 'text-white/30 border-transparent hover:text-white/60 hover:border-white/20'
                            }`}
                        >
                            {text}
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
}

