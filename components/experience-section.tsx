export function ExperienceSection() {
    const EXPERIENCES = [
        {
            company: 'Upwork',
            role: 'Sr. Frontend Developer',
            period: 'Nov 2021 - Present',
            points: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            ],
            logo: 'https://cdn.simpleicons.org/upwork',
        },
        {
            company: 'Upwork',
            role: 'Frontend Developer',
            period: 'Jul 2017 - Oct 2021',
            points: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            ],
            logo: 'https://cdn.simpleicons.org/upwork',
        },
        {
            company: 'Upwork',
            role: 'Full Stack Developer',
            period: 'Dec 2015 - May 2017',
            points: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            ],
            logo: 'https://cdn.simpleicons.org/upwork',
        },
    ];

    return (
        <section id="experience" className="bg-gray-50 py-16 dark:bg-gray-900 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <span className="rounded-xl bg-gray-200 px-5 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        Experience
                    </span>
                    <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-400">
                        Here is a quick summary of my most recent experiences:
                    </p>
                </div>

                <div className="mt-12 flex flex-col items-center gap-12">
                    {EXPERIENCES.map((exp, index) => (
                        <div
                            key={index}
                            className="flex w-full max-w-4xl flex-col gap-4 rounded-xl bg-white p-8 shadow-md dark:bg-gray-950 md:flex-row md:justify-between"
                        >
                            <div className="md:w-1/4">
                                <img src={exp.logo} alt={exp.company} className="h-8 object-contain dark:invert" />
                            </div>
                            <div className="order-last md:order-none md:w-1/2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50">{exp.role}</h3>
                                <ul className="mt-4 list-disc space-y-2 pl-4 text-gray-600 dark:text-gray-400">
                                    {exp.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:w-1/4 md:text-right">
                                <span className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
