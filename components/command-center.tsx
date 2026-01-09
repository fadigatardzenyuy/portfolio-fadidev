'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, X, ArrowRight, FileText, Layout, Mail, Github, Linkedin } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function CommandCenter() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const actions = [
        { id: 'blog', name: 'Go to Blog', icon: FileText, shortcut: 'G B', url: '/blog' },
        { id: 'home', name: 'Go Home', icon: Layout, shortcut: 'G H', url: '/' },
        { id: 'github', name: 'GitHub Profile', icon: Github, shortcut: 'S G', url: 'https://github.com/fadigatardzenyuy' },
        { id: 'linkedin', name: 'LinkedIn Connect', icon: Linkedin, shortcut: 'S L', url: 'https://www.linkedin.com/in/abdul-fadiga-775a5a284/' },
        { id: 'contact', name: 'Send Email', icon: Mail, shortcut: 'S E', url: 'mailto:fadidevstudio@gmail.com' },
    ];

    const filteredActions = query === ''
        ? actions
        : actions.filter((action) =>
            action.name.toLowerCase().includes(query.toLowerCase())
        );

    const handleSelect = (url: string) => {
        if (url.startsWith('http') || url.startsWith('mailto')) {
            window.open(url, '_blank');
        } else {
            router.push(url);
        }
        setIsOpen(false);
        setQuery('');
    };

    return (
        <>
            <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full flex items-center gap-3 group hover:bg-white/10 transition-all cursor-pointer shadow-2xl"
            >
                <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-black opacity-40 uppercase tracking-tighter">
                    <Command className="h-2.5 w-2.5" /> K
                </div>
                <span className="text-[11px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-80 transition-opacity">Command Center</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-[#030303]/80 backdrop-blur-sm pointer-events-auto"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative w-full max-w-2xl glass-card !rounded-2xl border border-white/15 shadow-[0_32px_128px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto"
                        >
                            <div className="flex items-center px-6 py-4 border-b border-white/10">
                                <Search className="h-5 w-5 opacity-30" />
                                <input
                                    autoFocus
                                    placeholder="Search commands..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="flex-1 bg-transparent border-none outline-none px-4 py-2 text-lg font-medium placeholder:opacity-20"
                                />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    <X className="h-4 w-4 opacity-30" />
                                </button>
                            </div>

                            <div className="p-2 max-h-[60vh] overflow-y-auto hide-scrollbar">
                                {filteredActions.length > 0 ? (
                                    filteredActions.map((action) => (
                                        <button
                                            key={action.id}
                                            onClick={() => handleSelect(action.url)}
                                            className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-white/5 group transition-all text-left"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/20 group-hover:text-primary transition-all">
                                                    <action.icon className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="font-bold">{action.name}</p>
                                                    <p className="text-xs font-medium opacity-30 uppercase tracking-widest">{action.url}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-[10px] font-black opacity-20 uppercase tracking-tighter decoration-slice">Navigate</span>
                                                <ArrowRight className="h-4 w-4 text-primary" />
                                            </div>
                                        </button>
                                    ))
                                ) : (
                                    <div className="p-12 text-center opacity-30">
                                        <p className="text-sm font-bold uppercase tracking-widest">No commands found</p>
                                    </div>
                                )}
                            </div>

                            <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02] flex items-center justify-between opacity-30">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Select an action to continue</p>
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-1.5 uppercase tracking-tighter text-[10px] font-black">
                                        <Command className="h-3 w-3" /> <span className="underline decoration-primary">K</span> to toggle
                                    </div>
                                    <div className="flex items-center gap-1.5 uppercase tracking-tighter text-[10px] font-black">
                                        ESC to Close
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
