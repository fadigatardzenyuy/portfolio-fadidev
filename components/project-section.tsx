import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const PROJECTS = [
    {
        title: 'Fiskil',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
        image: '/uploaded_image_4_1767432711878.png',
        tags: ['React', 'Next.js', 'Typescript', 'Tailwindcss', 'PostgreSQL', 'Prisma'],
        link: '#',
    },
    {
        title: 'Fiskil',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
        image: '/uploaded_image_4_1767432711878.png',
        tags: ['React', 'Next.js', 'Typescript', 'Tailwindcss', 'PostgreSQL', 'Prisma'],
        link: '#',
        reverse: true,
    },
    {
        title: 'Fiskil',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
        image: '/uploaded_image_4_1767432711878.png',
        tags: ['React', 'Next.js', 'Typescript', 'Tailwindcss', 'PostgreSQL', 'Prisma'],
        link: '#',
    },
];

export function ProjectSection() {
    return (
        <section id="work" className="py-16 dark:bg-gray-950 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <span className="rounded-xl bg-gray-200 px-5 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        Work
                    </span>
                    <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-400">
                        Some of the noteworthy projects I have built:
                    </p>
                </div>

                <div className="mt-12 space-y-12">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className={`flex flex-col overflow-hidden rounded-xl shadow-md dark:bg-gray-900 lg:flex-row ${project.reverse ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Project Image */}
                            <div className="bg-gray-50 p-8 dark:bg-gray-800 lg:w-1/2 lg:p-12">
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="flex flex-col justify-center p-8 dark:bg-gray-900 lg:w-1/2 lg:p-12">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">{project.title}</h3>
                                <p className="mt-6 text-gray-600 dark:text-gray-400">{project.description}</p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-xl bg-gray-200 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    className="mt-8 flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                >
                                    <ExternalLink className="h-5 w-5" />
                                    <span>View Project</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
