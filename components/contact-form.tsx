'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
    const [status, setStatus] = useState<Status>('idle');
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error();
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    const inputClass = "w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 font-medium outline-none focus:border-primary/50 focus:bg-white/8 transition-all";

    return (
        <AnimatePresence mode="wait">
            {status === 'success' ? (
                <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                >
                    <CheckCircle className="h-10 w-10 text-emerald-400" />
                    <h3 className="text-xl font-black">Message sent!</h3>
                    <p className="text-white/50 text-sm max-w-xs">I&apos;ll get back to you within 24 hours.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-4 text-xs font-bold uppercase tracking-widest text-primary hover:underline"
                    >
                        Send another
                    </button>
                </motion.div>
            ) : (
                <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-white/30 block mb-2">Name</label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                                className={inputClass}
                            />
                        </div>
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-white/30 block mb-2">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="your@email.com"
                                className={inputClass}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-white/30 block mb-2">Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Tell me about your project..."
                            className={`${inputClass} resize-none`}
                        />
                    </div>

                    {status === 'error' && (
                        <div className="flex items-center gap-2 text-red-400 text-sm font-medium">
                            <AlertCircle className="h-4 w-4" />
                            Something went wrong. Try emailing directly: fadidevstudio@gmail.com
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-black hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? (
                            <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                        ) : (
                            <><Send className="h-4 w-4" /> Send Message</>
                        )}
                    </button>
                </motion.form>
            )}
        </AnimatePresence>
    );
}
