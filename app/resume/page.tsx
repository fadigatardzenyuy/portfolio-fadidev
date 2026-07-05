import { Metadata } from 'next';
import ResumeClient from '@/components/resume-client';

export const metadata: Metadata = {
    title: 'Resume',
    description: 'Professional experience and technical skills of Abdul Fadiga, a Full-Stack JavaScript Developer specializing in Next.js, React, TypeScript, and Node.js.',
    alternates: {
        canonical: '/resume',
    },
};

export default function ResumePage() {
    return <ResumeClient />;
}
