import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export async function generateStaticParams() {
    return [
        { slug: 'getting-started-with-nextjs' },
        { slug: 'cloud-migration-best-practices' },
        { slug: 'ui-ux-design-trends-2024' },
    ];
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const posts: Record<string, any> = {
        'getting-started-with-nextjs': {
            title: 'Getting Started with Next.js 14',
            date: '2024-01-15',
            category: 'Development',
            content: 'This is a comprehensive guide to building modern web applications with Next.js 14...',
        },
        'cloud-migration-best-practices': {
            title: 'Cloud Migration Best Practices',
            date: '2024-01-10',
            category: 'Cloud',
            content: 'Essential strategies for a successful cloud migration...',
        },
        'ui-ux-design-trends-2024': {
            title: 'UI/UX Design Trends for 2024',
            date: '2024-01-05',
            category: 'Design',
            content: 'Exploring the latest design trends shaping user experiences...',
        },
    };

    const post = posts[params.slug];
    if (!post) notFound();

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <Button asChild variant="ghost" className="mb-8">
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                    </Link>
                </Button>
                <article>
                    <div className="mb-8">
                        <span className="text-sm font-semibold text-[#1E40AF]">{post.category}</span>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            {post.title}
                        </h1>
                        <div className="mt-4 flex items-center text-sm text-gray-500">
                            <Calendar className="mr-2 h-4 w-4" />
                            {new Date(post.date).toLocaleDateString()}
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg leading-8 text-gray-700">{post.content}</p>
                        <p className="mt-6 text-lg leading-8 text-gray-700">
                            This is a sample blog post. In a real application, you would fetch the content from
                            a CMS or markdown files. The content would be much longer and include proper formatting,
                            images, code blocks, and more.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
}

