'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        setIsMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('button, a, .cursor-pointer, input, textarea');
            setIsHovering(!!isInteractive);
        };

        window.addEventListener('mousemove', moveCursor, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (!isMounted || isMobile) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[10000] mix-blend-difference">
            {/* Outer Ring */}
            <motion.div
                style={{
                    left: springX,
                    top: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    width: isHovering ? 60 : 32,
                    height: isHovering ? 60 : 32,
                    opacity: 1,
                }}
                className="fixed rounded-full border-2 border-white bg-white/5"
            />

            {/* Inner Dot */}
            <motion.div
                style={{
                    left: cursorX,
                    top: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovering ? 0.5 : 1,
                    opacity: 1,
                }}
                className="fixed h-2 w-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
        </div>
    );
}
