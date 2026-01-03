import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function BentoFooter() {
    return (
        <footer className="px-6 py-24 md:px-12 lg:px-24 border-t border-white/5">
            <div className="mx-auto max-w-7xl">
                <div className="bento-grid">

                    <div className="glass-card col-span-12 md:col-span-8 p-12 flex flex-col justify-between">
                        <h2 className="text-5xl font-black tracking-tighter mb-12">
                            Let&apos;s build the <br />
                            <span className="text-primary">next big thing</span>.
                        </h2>
                        <div className="flex gap-4">
                            <a href="mailto:fadidevstudio@gmail.com" className="px-10 py-4 bg-white text-black rounded-full font-black hover:scale-105 transition-transform flex items-center justify-center">
                                Hire Abdul
                            </a>
                            <a href="/resume" className="px-10 py-4 border border-white/10 rounded-full font-black hover:bg-white/5 transition-all flex items-center justify-center">
                                Resume
                            </a>
                        </div>
                    </div>

                    <div className="glass-card col-span-12 md:col-span-4 p-8 flex flex-col justify-between">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-30">Connect</h3>
                        <div className="grid grid-cols-2 gap-4 mt-12">
                            <a href="mailto:fadidevstudio@gmail.com" className="aspect-square glass-card bg-white/2 flex items-center justify-center hover:bg-primary/20 transition-colors">
                                <Mail className="h-6 w-6" />
                            </a>
                            <a href="https://github.com/fadigatardzenyuy" target="_blank" rel="noopener noreferrer" className="aspect-square glass-card bg-white/2 flex items-center justify-center hover:bg-primary/20 transition-colors">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/abdul-fadiga-775a5a284/" target="_blank" rel="noopener noreferrer" className="aspect-square glass-card bg-white/2 flex items-center justify-center hover:bg-primary/20 transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="#" className="aspect-square glass-card bg-white/2 flex items-center justify-center hover:bg-primary/20 transition-colors">
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-20 flex justify-between items-center opacity-30 text-xs font-bold uppercase tracking-widest">
                    <span>© 2026 FADIDEVSTUDIO</span>
                    <span>BUILT WITH PRECISION</span>
                </div>
            </div>
        </footer>
    );
}
