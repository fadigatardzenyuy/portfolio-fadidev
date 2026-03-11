'use client';

import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

export function HeaderPresence() {
    const [time, setTime] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const update = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'Africa/Douala',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            };
            const dateOptions: Intl.DateTimeFormatOptions = {
                timeZone: 'Africa/Douala',
                day: '2-digit',
                month: 'short'
            };
            setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
            setDate(new Intl.DateTimeFormat('en-GB', dateOptions).format(now));
        };

        update();
        const interval = setInterval(update, 60000); // Update every minute
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <div className="hidden md:flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
            <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                <span>Bambili, CM</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="flex items-center gap-2">
                <span>{time}</span>
                <span className="opacity-50">{date}</span>
            </div>
        </div>
    );
}
