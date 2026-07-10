import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface Heading {
    id: string;
    text: string;
    level: number;
}

export function parseHeadings(content: string): Heading[] {
    const lines = content.split('\n');
    const headings: Heading[] = [];
    for (const line of lines) {
        const match = line.match(/^(#{2,3})\s+(.+)$/);
        if (match) {
            const level = match[1].length;
            const text = match[2].replace(/[*_`]/g, '');
            const id = text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
            headings.push({ level, text, id });
        }
    }
    return headings;
}
