import { Github, Linkedin, Mail } from 'lucide-react';

export function ContactSection() {
    return (
        <footer id="contact" className="px-6 py-32 md:px-12 lg:px-24 bg-white dark:bg-[#050505]">
            <div className="mx-auto max-w-7xl border-t border-black/5 dark:border-white/5 pt-32 text-center">
                <h2 className="editorial-heading mb-12">
                    Let’s build thoughtful, <br />
                    usable products.
                </h2>

                <div className="flex flex-col items-center gap-12">
                    <div className="flex flex-wrap justify-center gap-12">
                        <a
                            href="mailto:contact@abdulfadiga.dev"
                            className="group flex flex-col items-center gap-4 transition-all hover:scale-105"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10 dark:border-white/10 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                                <Mail className="h-6 w-6" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-[#888]">Email</span>
                        </a>

                        <a
                            href="https://github.com/abdulfadiga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-4 transition-all hover:scale-105"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10 dark:border-white/10 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                                <Github className="h-6 w-6" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-[#888]">GitHub</span>
                        </a>

                        <a
                            href="https://linkedin.com/in/abdulfadiga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-4 transition-all hover:scale-105"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-black/10 dark:border-white/10 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                                <Linkedin className="h-6 w-6" />
                            </div>
                            <span className="text-sm font-bold uppercase tracking-widest text-[#888]">LinkedIn</span>
                        </a>
                    </div>

                    <p className="text-[#888] font-medium mt-12">
                        © {new Date().getFullYear()} Abdul Fadiga. Built with Next.js & UI/UX Intent.
                    </p>
                </div>
            </div>
        </footer>
    );
}
