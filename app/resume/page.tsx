import { Metadata } from 'next';
import ResumeClient from '@/components/resume-client';

export const metadata: Metadata = {
    title: 'Resume',
    description: 'Professional experience and technical skills of Abdul Fadiga, a UI/UX-focused Full-Stack Developer specializing in scalable web products.',
    alternates: {
        canonical: '/resume',
    },
};

export default function ResumePage() {
    return <ResumeClient />;
}
