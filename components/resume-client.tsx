'use client';

import Link from 'next/link';
import { ArrowLeft, Download, Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

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
                    <div>
                        <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">Abdul Fadiga</h1>
                        <p className="text-xl font-medium text-gray-600">Full-Stack JavaScript Developer</p>
                    </div>
                    <div className="text-sm font-medium space-y-1 text-right">
                        <div className="flex items-center gap-2 justify-end">
                            <a href="mailto:fadidevstudio@gmail.com" className="hover:underline">fadidevstudio@gmail.com</a>
                            <Mail className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 justify-end">
                            <span>681 370 401</span>
                            <Phone className="h-4 w-4" />
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

                {/* Summary */}
                <section className="mb-10">
                    <p className="text-gray-700 leading-relaxed">
                        Full-Stack JavaScript Developer with a track record of building scalable web applications. Expert in Next.js, React, TypeScript, and Node.js, with hands-on experience in database architecture using Supabase and PostgreSQL. Proven ability to lead technical teams, mentor developers, and deliver high-impact software solutions that drive business value.
                    </p>
                </section>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Main Column */}
                    <div className="md:col-span-8 space-y-10">

                        {/* Experience */}
                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-widest border-b border-gray-200 pb-2 mb-6">Professional Experience</h2>

                            <div className="mb-8">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-xl font-bold">Director, Web Department</h3>
                                    <span className="text-sm font-bold text-gray-500">Aug 2024 – Present</span>
                                </div>
                                <div className="text-primary font-bold mb-3">SEED</div>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700">
                                    <li>Direct the end-to-end development, strategy, and maintenance of organizational web applications, ensuring high performance and reliability.</li>
                                    <li>Define technical architecture and standards for React, Next.js, and TypeScript projects, streamlining the development lifecycle.</li>
                                    <li>Mentor development teams on modern coding standards and best practices, enhancing overall code quality and project delivery speed.</li>
                                    <li>Partner with cross-functional product and design teams to translate complex requirements into scalable, user-centric software solutions.</li>
                                    <li>Improved development efficiency by 20% through the implementation of standardized component libraries and CI/CD pipelines.</li>
                                    <li>Managed end-to-end delivery of 5+ production-ready web applications.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-xl font-bold">Web Lead</h3>
                                    <span className="text-sm font-bold text-gray-500">Oct 2025 – Present</span>
                                </div>
                                <div className="text-primary font-bold mb-3">GDG On Campus Bamenda</div>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700">
                                    <li>Spearhead web development initiatives for a community of 100+ developers, setting technical direction for collaborative projects.</li>
                                    <li>Facilitate hands-on training for 30+ developers, successfully guiding the delivery of two community-focused web projects.</li>
                                    <li>Organize and execute technical workshops focused on modern web development practices to accelerate industry readiness for members.</li>
                                    <li>Mentored 30+ developers, achieving a 90% project completion rate for community-led initiatives.</li>
                                    <li>Organized 5+ technical workshops, driving a 40% increase in active community participation.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-widest border-b border-gray-200 pb-2 mb-6">Key Projects</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold">CamLand</h3>
                                    <p className="text-sm text-primary font-bold mb-1">Geospatial Registry Solution · Rinork Inc</p>
                                    <p className="text-gray-700 text-sm">Engineered a digital land registry for Cameroon that integrates geospatial parcel data with a PostgreSQL database and Django REST API.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">PredictIQ</h3>
                                    <p className="text-sm text-primary font-bold mb-1">Sports Analytics & Billing System</p>
                                    <p className="text-gray-700 text-sm">Developed an automated payment and subscription architecture for high-volume sports prediction services, featuring Telegram Bot and Mobile Money (MTN/Orange) connectivity.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">CaisseTrack</h3>
                                    <p className="text-sm text-primary font-bold mb-1">Financial Monitoring for Communities</p>
                                    <p className="text-gray-700 text-sm">Created a React-based financial tracker with role-based access to manage community dues, utilizing local storage and automated PDF report generation.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Zigex <span className="text-sm font-normal text-gray-500">2025–2026</span></h3>
                                    <p className="text-sm text-primary font-bold mb-1">AI-Enabled Career Matching Engine</p>
                                    <p className="text-gray-700 text-sm">Constructed an AI-powered platform using Next.js and REST APIs to facilitate targeted internship and career connections for students.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Career Assessment Platform</h3>
                                    <p className="text-sm text-primary font-bold mb-1">Academic Orientation Tool</p>
                                    <p className="text-gray-700 text-sm">Built a Next.js and React guidance tool designed to assist Advanced Level students in Cameroon in identifying professional paths through data-driven assessments.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Rinork Auto Repair</h3>
                                    <p className="text-sm text-primary font-bold mb-1">Shop Operations Management System</p>
                                    <p className="text-gray-700 text-sm">Produced detailed software specifications and a 15-screen interactive HTML prototype for an automotive repair system, structured for Figma integration.</p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar Column */}
                    <div className="md:col-span-4 space-y-10">

                        {/* Education */}
                        <section>
                            <h2 className="text-lg font-black uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Education</h2>
                            <div>
                                <p className="font-bold text-sm mb-1">University of Bamenda</p>
                                <p className="text-xs text-primary font-bold uppercase mb-1">B.Eng. in Computer Engineering</p>
                                <p className="text-xs text-gray-500">Expected Dec 2026</p>
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <h2 className="text-lg font-black uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Technical Skills</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold text-sm text-gray-400 uppercase mb-2">Languages & Frameworks</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'HTML5', 'CSS3'].map(s => (
                                            <span key={s} className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-gray-400 uppercase mb-2">Tools & Databases</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['PostgreSQL', 'Supabase', 'Git', 'Figma', 'Postman', 'Vercel', 'REST APIs'].map(s => (
                                            <span key={s} className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Awards */}
                        <section>
                            <h2 className="text-lg font-black uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Awards & Honors</h2>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <p className="font-bold">Bamenda Community Challenge / Hackathon 2025</p>
                                    <p className="text-gray-600 text-xs">1st place — Best Technical Architecture</p>
                                </li>
                                <li>
                                    <p className="font-bold">Honor / Distinction 2026</p>
                                    <p className="text-gray-600 text-xs">Excellence in full-stack web development training</p>
                                </li>
                            </ul>
                        </section>

                        {/* Certifications */}
                        <section>
                            <h2 className="text-lg font-black uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Certifications</h2>
                            <div className="text-sm">
                                <p className="font-bold">Certified Web Developer</p>
                                <p className="text-xs text-primary font-bold uppercase mb-1">SEED</p>
                                <p className="text-xs text-gray-500">Jan 2024</p>
                            </div>
                        </section>

                        {/* Languages */}
                        <section>
                            <h2 className="text-lg font-black uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Languages</h2>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li><span className="font-bold">English</span> — Fluent</li>
                                <li><span className="font-bold">French</span> — Beginner</li>
                            </ul>
                        </section>

                    </div>
                </div>

            </div>
        </main>
    );
}
