'use client';

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export function LenisProvider({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={{
            lerp: 0.1,
            duration: 1.2,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
            // Only enable on desktop
            autoRaf: true,
            syncTouch: false, // Ensure native feel on mobile
        }}>
            {children}
        </ReactLenis>
    );
}
