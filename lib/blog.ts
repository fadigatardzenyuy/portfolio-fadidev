import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    coverImage: string;
    content: string;
}

export function getAllPosts(): BlogPost[] {
    // Ensure directory exists
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title,
                excerpt: data.excerpt,
                date: data.date,
                readTime: data.readTime,
                category: data.category,
                coverImage: data.coverImage,
                content: content,
            };
        })
        .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

    return allPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        if (!fs.existsSync(fullPath)) {
            return undefined;
        }
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            slug,
            title: data.title,
            excerpt: data.excerpt,
            date: data.date,
            readTime: data.readTime,
            category: data.category,
            coverImage: data.coverImage,
            content: content,
        };
    } catch (error) {
        return undefined;
    }
}
