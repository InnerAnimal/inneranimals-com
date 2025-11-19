import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

export const metadata = {
    title: 'Blog - InnerAnimals',
    description: 'Latest insights, news, and updates from InnerAnimals.',
};

export default function BlogPage() {
    const posts = [
        {
            slug: 'getting-started-with-nextjs',
            title: 'Getting Started with Next.js 14',
            description: 'A comprehensive guide to building modern web applications with Next.js.',
            date: '2024-01-15',
            category: 'Development',
        },
        {
            slug: 'cloud-migration-best-practices',
            title: 'Cloud Migration Best Practices',
            description: 'Essential strategies for a successful cloud migration.',
            date: '2024-01-10',
            category: 'Cloud',
        },
        {
            slug: 'ui-ux-design-trends-2024',
            title: 'UI/UX Design Trends for 2024',
            description: 'Exploring the latest design trends shaping user experiences.',
            date: '2024-01-05',
            category: 'Design',
        },
    ];

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Our Blog
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Latest insights, news, and updates from our team.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <Card key={post.slug} className="h-full flex flex-col">
                            <CardHeader>
                                <CardDescription>{post.category}</CardDescription>
                                <CardTitle>{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <p className="text-gray-600 mb-4">{post.description}</p>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {new Date(post.date).toLocaleDateString()}
                                </div>
                                <Button asChild variant="outline" className="mt-auto">
                                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

