import Image from 'next/image';

export function AboutSection() {
    return (
        <section id="about" className="bg-gray-50 py-16 dark:bg-gray-900 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <span className="rounded-xl bg-gray-200 px-5 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        About me
                    </span>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-12 lg:flex-row">
                    <div className="relative lg:w-1/2">
                        <div className="relative mx-auto h-[360px] w-full max-w-[400px] md:h-[480px]">
                            {/* Background shadow box */}
                            <div className="absolute -bottom-4 -left-4 h-full w-full bg-gray-200 dark:bg-gray-800" />
                            {/* Image container */}
                            <div className="relative h-full w-full border-8 border-white dark:border-gray-950 overflow-hidden bg-gray-100">
                                <Image
                                    src="/uploaded_image_2_1767432711878.png"
                                    alt="Sagar standing"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 md:text-4xl">
                            Curious about me? Here you have it:
                        </h2>
                        <div className="mt-8 space-y-4 text-base text-gray-600 dark:text-gray-400">
                            <p>
                                I&apos;m a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                            </p>
                            <p>
                                I began my journey as a web developer in 2015, and since then, I&apos;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I&apos;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Tailwindcss, Supabase and much more.
                            </p>
                            <p>
                                I am an optimistic person who believes that we can achieve anything if we have a positive mindset and a willingness to work hard. I am also a very detail-oriented person and I like to make sure that everything I do is high quality.
                            </p>
                            <p>
                                One last thing, I&apos;m available for freelance work, so feel free to reach out and say hello! I promise I don&apos;t bite 😉
                            </p>
                        </div>

                        <div className="mt-10">
                            <p className="font-medium text-gray-900 dark:text-gray-50">Finally, some quick bits about me:</p>
                            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                {[
                                    'B.E. in Computer Engineering',
                                    'Full-time freelancer',
                                    'Avid learner',
                                    'Aspiring indie hacker',
                                ].map((item) => (
                                    <li key={item} className="flex items-center space-x-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-gray-600 dark:bg-gray-400" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="mt-10 text-gray-600 dark:text-gray-400">
                            One last thing, I&apos;m available for freelance work, so feel free to reach out and say hello! I promise I don&apos;t bite 😉
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
