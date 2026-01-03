import { User } from 'lucide-react';

const TESTIMONIALS = [
    {
        name: 'John Doe',
        role: 'Founder - abc.com',
        comment:
            '“Job well done! I am really impressed. He is very professional and delivers on time. I will surely hire him again for my next project.”',
    },
    {
        name: 'John Doe',
        role: 'Founder - abc.com',
        comment:
            '“Job well done! I am really impressed. He is very professional and delivers on time. I will surely hire him again for my next project.”',
    },
    {
        name: 'John Doe',
        role: 'Founder - abc.com',
        comment:
            '“Job well done! I am really impressed. He is very professional and delivers on time. I will surely hire him again for my next project.”',
    },
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="bg-gray-50 py-16 dark:bg-gray-900 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <span className="rounded-xl bg-gray-200 px-5 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                        Testimonials
                    </span>
                    <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-400">
                        Nice things people have said about me:
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center rounded-xl bg-white p-8 shadow-md dark:bg-gray-950"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                                <User className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                            </div>
                            <p className="mt-6 text-center text-gray-600 dark:text-gray-400">{testimonial.comment}</p>
                            <h4 className="mt-6 text-lg font-bold text-gray-900 dark:text-gray-50">{testimonial.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
