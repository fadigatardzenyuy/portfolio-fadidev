'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Clock } from 'lucide-react';

export function PresenceCard() {
    const [time, setTime] = useState<string>('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            // Cameroon is GMT+1
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'Africa/Douala',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            };
            setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col h-full justify-between">
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-30 mb-1">Local Time</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black tabular-nums tracking-tighter">{time}</span>
                        <span className="text-[10px] font-black opacity-20 uppercase tracking-tighter">GMT+1</span>
                    </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center">
                    <Clock className="h-5 w-5 opacity-40" />
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                    <div>
                        <p className="text-sm font-bold uppercase tracking-widest leading-none mb-1">Available for work</p>
                        <div className="flex items-center gap-1 opacity-30 font-bold uppercase tracking-tighter text-[10px]">
                            <Globe className="h-2.5 w-2.5" />
                            <span>Bambili, Cameroon</span>
                        </div>
                    </div>
                </div>

                {/* Activity Pulse Visualization */}
                <div className="h-16 w-full flex items-end gap-[3px] opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                    {[...Array(24)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                height: [
                                    Math.random() * 40 + 10 + '%',
                                    Math.random() * 80 + 20 + '%',
                                    Math.random() * 40 + 10 + '%'
                                ]
                            }}
                            transition={{
                                duration: Math.random() * 1.5 + 0.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="flex-1 bg-primary rounded-t-[2px]"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
