'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { ContactForm } from './contact-form';

export function BentoFooter() {
    return (
        <footer className="px-6 py-24 md:px-12 lg:px-24 border-t border-white/5">
            <div className="mx-auto max-w-7xl">
                <div className="bento-grid">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="glass-card col-span-12 md:col-span-8 p-8 md:p-12 flex flex-col gap-10"
                    >
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-3">
                                Let&apos;s build the <br />
                                <span className="text-primary italic">next big thing</span>.
                            </h2>
                            <p className="text-white/40 text-sm font-medium">Available for freelance projects and full-time opportunities.</p>
                        </div>
                        <ContactForm />
                        <div className="flex flex-col sm:flex-row gap-4 pt-2 border-t border-white/5">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="/resume"
                                className="px-8 py-3 border border-white/10 rounded-full font-black transition-all flex items-center justify-center text-sm hover:bg-white/5"
                            >
                                View Resume
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="glass-card col-span-12 md:col-span-4 p-8 flex flex-col justify-between"
                    >
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-30">Connect</h3>
                        <div className="grid grid-cols-2 gap-4 mt-12 text-white">
                            <motion.a
                                whileHover={{ y: -5, backgroundColor: 'rgba(99,102,241,0.2)' }}
                                href="mailto:fadidevstudio@gmail.com"
                                className="aspect-square glass-card bg-white/2 flex items-center justify-center transition-all duration-500"
                            >
                                <Mail className="h-6 w-6" />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5, backgroundColor: 'rgba(99,102,241,0.2)' }}
                                href="https://github.com/fadigatardzenyuy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="aspect-square glass-card bg-white/2 flex items-center justify-center transition-all duration-500"
                            >
                                <Github className="h-6 w-6" />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5, backgroundColor: 'rgba(99,102,241,0.2)' }}
                                href="https://www.linkedin.com/in/abdul-fadiga-775a5a284/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="aspect-square glass-card bg-white/2 flex items-center justify-center transition-all duration-500"
                            >
                                <Linkedin className="h-6 w-6" />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -5, backgroundColor: 'rgba(99,102,241,0.2)' }}
                                href="https://x.com/fadidev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="aspect-square glass-card bg-white/2 flex items-center justify-center transition-all duration-500"
                            >
                                <Twitter className="h-6 w-6" />
                            </motion.a>
                        </div>
                    </motion.div>

                </div>

                <div className="mt-20 flex justify-between items-center opacity-30 text-xs font-bold uppercase tracking-widest">
                    <span>© 2026 FADIDEVSTUDIO</span>
                    <span>BUILT WITH PRECISION</span>
                </div>
            </div>
        </footer>
    );
}
