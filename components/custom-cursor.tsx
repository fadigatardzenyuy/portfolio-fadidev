'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        if (window.innerWidth < 1024) {
            return () => window.removeEventListener('resize', checkMobile);
        }

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('button, a, .cursor-pointer');
            setIsHovering(!!isInteractive);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY, isVisible]);

    if (isMobile) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            <AnimatePresence>
                {isVisible && (
                    <>
                        {/* Outer Ring */}
                        <motion.div
                            style={{
                                left: springX,
                                top: springY,
                                translateX: '-50%',
                                translateY: '-50%',
                            }}
                            animate={{
                                scale: isHovering ? 2.5 : 1,
                                backgroundColor: isHovering ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                                borderColor: isHovering ? 'rgba(99, 102, 241, 0.3)' : 'rgba(255, 255, 255, 0.3)',
                            }}
                            className="fixed h-8 w-8 rounded-full border border-white/30 backdrop-blur-[2px]"
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
                                scale: isHovering ? 0 : 1,
                                opacity: isHovering ? 0 : 1,
                            }}
                            className="fixed h-1 w-1 bg-white rounded-full"
                        />
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
