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
                            <a href="https://fadidev-studio.vercel.app" className="hover:underline">fadidev-studio.vercel.app</a>
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
                        Full-stack developer specialized in Next.js, React, TypeScript, and Node.js, with hands-on experience building payment-integrated web platforms using Supabase and PostgreSQL. Known for shipping on deadline, learning fast, and mentoring peers — eager to contribute to a product-focused engineering team.
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
                                    <h3 className="text-xl font-bold">Web Department Lead</h3>
                                    <span className="text-sm font-bold text-gray-500">Aug 2024 – Present</span>
                                </div>
                                <div className="text-primary font-bold mb-3">SEED — Skills Enhancement and Empowerment through Digitalization</div>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700">
                                    <li>Delivered 5+ production web applications on schedule by managing sprint planning and end-to-end development in React, Next.js, and TypeScript.</li>
                                    <li>Cut development time by 20% as measured by sprint velocity, by building a standardized component library and CI/CD pipelines with Git and Vercel.</li>
                                    <li>Raised code quality by introducing code review standards and mentoring a team of 8 developers on TypeScript and Node.js best practices.</li>
                                    <li>Translated stakeholder requirements into scalable REST API architectures by collaborating with product and design teams in an agile workflow.</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-xl font-bold">Web Lead</h3>
                                    <span className="text-sm font-bold text-gray-500">Oct 2025 – Present</span>
                                </div>
                                <div className="text-primary font-bold mb-3">GDG On Campus Bamenda</div>
                                <ul className="list-disc list-outside ml-4 space-y-1 text-gray-700">
                                    <li>Achieved a 90% project completion rate across community-led builds by training and mentoring 30+ developers in modern web development with Next.js and Node.js.</li>
                                    <li>Grew active community participation 40% as measured by workshop attendance, by organizing and delivering 5+ hands-on technical workshops on React, TypeScript, and REST API development.</li>
                                    <li>Shipped 2 community-focused web projects from concept to deployment by coordinating cross-functional student teams and enforcing delivery timelines.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-widest border-b border-gray-200 pb-2 mb-6">Key Projects</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold">
                                        <a href="https://www.zigexconnect.com/" className="hover:underline">Zigex</a> <span className="text-sm font-normal text-gray-500">2025–2026</span>
                                    </h3>
                                    <p className="text-sm text-primary font-bold mb-1">AI-Enabled Career Matching Engine</p>
                                    <p className="text-gray-700 text-sm">Constructed an AI-powered internship-matching platform for students with a Next.js frontend built on REST APIs.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">CamLand</h3>
                                    <p className="text-sm text-primary font-bold mb-1">Geospatial Land Registry · Rinork Inc</p>
                                    <p className="text-gray-700 text-sm">Built a digital land registry for Cameroon, now in internal testing, by integrating PostGIS geospatial data with PostgreSQL and a Django REST API consumed by a Next.js frontend.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold"><a href="https://roxypuppyclub.com/" className="hover:underline">Roxy Puppy Club</a></h3>
                                    <p className="text-sm text-primary font-bold mb-1">Live E-commerce Storefront · Client Project</p>
                                    <p className="text-gray-700 text-sm">Built and deployed a production Next.js e-commerce site with product catalog, category-filtered browsing, cart and inquiry flow, dynamic pricing and availability states, and WhatsApp commerce integration.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold"><a href="https://getglobaltrack.com/" className="hover:underline">GlobalTrack</a></h3>
                                    <p className="text-sm text-primary font-bold mb-1">Real-Time Logistics Tracking Platform</p>
                                    <p className="text-gray-700 text-sm">Built a shipment tracking system with a Next.js frontend, Express REST API, and Supabase backend, rendering live locations on a Leaflet map and cutting support call volume 60% in the first month.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">PredictIQ</h3>
                                    <p className="text-sm text-primary font-bold mb-1">Subscription E-commerce & Payments Platform</p>
                                    <p className="text-gray-700 text-sm">Engineered a subscription commerce platform with MTN/Orange Mobile Money payment integration, automated recurring billing, a Telegram bot, and a Next.js dashboard; currently in pre-launch testing.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">CaisseTrack</h3>
                                    <p className="text-sm text-primary font-bold mb-1">Community Financial Management</p>
                                    <p className="text-gray-700 text-sm">Developed a React financial tracker with 4-tier role-based access (President, Secretary, Treasurer, Member), session-based contribution recording, and automated PDF report generation.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Career Assessment Platform</h3>
                                    <p className="text-sm text-primary font-bold mb-1">Academic Orientation Tool</p>
                                    <p className="text-gray-700 text-sm">Built a Next.js guidance tool helping Advanced Level students in Cameroon identify career paths through data-driven assessments.</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">Rinork Auto Repair</h3>
                                    <p className="text-sm text-primary font-bold mb-1">Shop Operations System</p>
                                    <p className="text-gray-700 text-sm">Produced a complete software specification and 15-screen interactive HTML prototype for an automotive repair management system, structured for Figma integration.</p>
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
                                        {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Tailwind CSS', 'HTML5', 'CSS3'].map(s => (
                                            <span key={s} className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-gray-400 uppercase mb-2">Backend & APIs</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['REST API Design', 'Express.js', 'Django REST Framework', 'MTN/Orange Mobile Money'].map(s => (
                                            <span key={s} className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">{s}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm text-gray-400 uppercase mb-2">Tools & Databases</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['PostgreSQL', 'Supabase', 'Git', 'VS Code', 'Figma', 'Postman', 'Vercel', 'CI/CD'].map(s => (
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
                            </ul>
                        </section>

                        {/* Languages */}
                        <section>
                            <h2 className="text-lg font-black uppercase tracking-widest border-b border-gray-200 pb-2 mb-4">Languages</h2>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li><span className="font-bold">English</span> — Fluent</li>
                                <li><span className="font-bold">French</span> — Intermediate</li>
                            </ul>
                        </section>

                    </div>
                </div>

            </div>
        </main>
    );
}
