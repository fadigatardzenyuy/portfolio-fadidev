'use client';

import Link from 'next/link';
import { ArrowLeft, Download, Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function ResumeClient() {
    return (
        <main className="min-h-screen bg-white text-black p-8 md:p-16 print:p-0">
            <div className="max-w-4xl mx-auto">

                {/* Navigation (Hidden in Print) */}
                <div className="mb-12 flex justify-between items-center print:hidden">
                    <Link href="/" className="flex items-center gap-2 font-bold text-gray-600 hover:text-black">
                        <ArrowLeft className="h-4 w-4" /> Back to Portfolio
                    </Link>
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800"
                    >
                        <Download className="h-4 w-4" /> Save as PDF
                    </button>
                </div>

                {/* Resume Header */}
                <header className="border-b-4 border-black pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="flex items-end gap-6">

                        <div>
                            <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">Abdul Fadiga</h1>
                            <p className="text-xl font-medium text-gray-600">Full-Stack Web Developer • UI/UX Specialist</p>
                        </div>
                    </div>
                    <div className="text-sm font-medium space-y-1 text-right md:text-right">
                        <div className="flex items-center gap-2 justify-end">
                            <a href="mailto:fadidevstudio@gmail.com" className="hover:underline">fadidevstudio@gmail.com</a>
                            <Mail className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <a href="https://github.com/fadigatardzenyuy" className="hover:underline">github.com/fadigatardzenyuy</a>
                            <Github className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <a href="https://www.linkedin.com/in/abdul-fadiga-775a5a284/" className="hover:underline">linkedin.com/in/abdul-fadiga</a>
                            <Linkedin className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 justify-end text-gray-500">
                            <span>Bambili, Cameroon</span>
                            <MapPin className="h-4 w-4" />
                        </div>
                    </div>
                </header>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Main Column */}
                    <div className="md:col-span-8 space-y-10">

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-widest border-b border-gray-200 pb-2 mb-6">Experience</h2>

                            <div className="mb-8">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-bold">Web Development Instructor</h3>
                                    <span className="text-sm font-bold text-gray-500">2025 – Present</span>
                                </div>
                                <div className="text-primary font-bold mb-3">Internship Training Program</div>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700">
                                    <li>Mentored interns in HTML, CSS, JavaScript, React, and frontend best practices.</li>
                                    <li>Guided students from beginner to intermediate developer level.</li>
                                    <li>Designed coding challenges and real-world development tasks.</li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-bold">Frontend Developer</h3>
                                    <span className="text-sm font-bold text-gray-500">2026 (1 Month Contract)</span>
                                </div>
                                <div className="text-primary font-bold mb-3">Real Estate Exchange</div>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700">
                                    <li>Developed responsive user interfaces for a real estate platform.</li>
                                    <li>Built reusable UI components and improved layout responsiveness.</li>
                                    <li>Collaborated with backend developers to integrate APIs.</li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-bold">Frontend Developer</h3>
                                    <span className="text-sm font-bold text-gray-500">2026</span>
                                </div>
                                <div className="text-primary font-bold mb-3">Zigex Internship Platform</div>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700">
                                    <li>Contributed to development of a platform helping students find internships in Cameroon.</li>
                                    <li>Built frontend features using Next.js and React.</li>
                                    <li>Implemented responsive layouts optimized for mobile and desktop.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-bold">Freelance Web Developer</h3>
                                    <span className="text-sm font-bold text-gray-500">2024 – Present</span>
                                </div>
                                <div className="text-primary font-bold mb-3">Self-Employed</div>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700">
                                    <li>Built logistics tracking platforms for shipment tracking.</li>
                                    <li>Developed pet rental and e-commerce platforms.</li>
                                    <li>Created business websites using Next.js, React, and Tailwind CSS.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-widest border-b border-gray-200 pb-2 mb-6">Featured Projects</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold">Zigex Internship Platform</h3>
                                    <p className="text-gray-700">Platform connecting students with internship opportunities. Tech Stack: Next.js, React, Tailwind CSS</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Logistics Tracking Platform</h3>
                                    <p className="text-gray-700">Shipment tracking system allowing users to track packages using tracking codes. Tech Stack: Laravel, JavaScript, HTML, CSS</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Pet Rental & E-Commerce Platform</h3>
                                    <p className="text-gray-700">Online platform for pet rentals and product sales. Tech Stack: Next.js, React, Tailwind CSS</p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar Column */}
                    <div className="md:col-span-4 space-y-10">

                        <section>
                            <h2 className="text-lg font-black uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Skills</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold text-sm text-gray-400 uppercase mb-2">Frontend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map(s => (
                                            <span key={s} className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-gray-400 uppercase mb-2">Backend/Tools</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Node.js', 'Supabase', 'PostgreSQL', 'Git'].map(s => (
                                            <span key={s} className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-gray-400 uppercase mb-2">Design</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Figma', 'UI/UX', 'Prototyping', 'Design Systems'].map(s => (
                                            <span key={s} className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-lg font-black uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Achievements</h2>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-gray-700">
                                <li>Trained interns from beginner to intermediate web developers.</li>
                                <li>Built multiple production web platforms for businesses and clients.</li>
                                <li>Contributed to platforms helping students access internship opportunities.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lg font-black uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Education</h2>
                            <div>
                                <p className="text-sm text-gray-700">Self-Taught Software Developer with continuous learning in Next.js development, modern React architecture, and web application performance.</p>
                            </div>
                        </section>

                    </div>
                </div>

            </div>
        </main>
    );
}
