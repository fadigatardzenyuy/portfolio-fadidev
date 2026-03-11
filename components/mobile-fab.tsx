'use client';

import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { haptics } from '@/lib/haptics';

export function MobileFAB() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        const toggleVisibility = () => {
            // Only show after scrolling down a bit
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!hasMounted) return null;

    const handleClick = () => {
        haptics.medium();
        // Dispatch the keydown event that CommandCenter listens for (Cmd+K or Ctrl+K)
        const event = new KeyboardEvent('keydown', {
            key: 'k',
            metaKey: true, // For Mac
            ctrlKey: true, // For others
            bubbles: true
        });
        document.dispatchEvent(event);
    };

    return (
        <button
            onClick={handleClick}
            className={`
                fixed bottom-8 right-8 z-50 
                h-14 w-14 rounded-full 
                bg-primary text-white 
                shadow-[0_8px_32px_rgba(99,102,241,0.4)]
                flex items-center justify-center
                transition-all duration-500 md:hidden
                ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50 group-hover:scale-100'}
            `}
            aria-label="Open Command Center"
        >
            <Search className="h-6 w-6" />
        </button>
    );
}
