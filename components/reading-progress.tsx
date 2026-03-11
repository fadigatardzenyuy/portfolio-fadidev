'use client';

import React, { useEffect, useState } from 'react';

export function ReadingProgress() {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScroll = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setCompletion(
                    Number((currentProgress / scrollHeight).toFixed(2)) * 100
                );
            }
        };

        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-white/10 pointer-events-none">
            <div
                className="h-full bg-primary transition-all duration-150 ease-out"
                style={{ width: `${completion}%` }}
            />
        </div>
    );
}
