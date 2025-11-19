import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export const metadata = {
    title: 'Portfolio - InnerAnimals',
    description: 'Explore our portfolio of successful projects.',
};

export default function PortfolioPage() {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Scalable e-commerce solution with advanced features.',
            category: 'Web Development',
            link: '/case-studies/ecommerce-platform',
        },
        {
            title: 'Mobile Banking App',
            description: 'Secure mobile banking application for financial services.',
            category: 'Mobile Development',
            link: '/case-studies/mobile-banking',
        },
        {
            title: 'Cloud Migration',
            description: 'Enterprise cloud infrastructure migration project.',
            category: 'Cloud Solutions',
            link: '/case-studies/cloud-migration',
        },
        {
            title: 'Analytics Dashboard',
            description: 'Real-time analytics and reporting platform.',
            category: 'Data Analytics',
            link: '/case-studies/analytics-dashboard',
        },
        {
            title: 'Design System',
            description: 'Comprehensive design system for brand consistency.',
            category: 'UI/UX Design',
            link: '/case-studies/design-system',
        },
        {
            title: 'Security Audit',
            description: 'Comprehensive security assessment and improvements.',
            category: 'Security',
            link: '/case-studies/security-audit',
        },
    ];

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Our Portfolio
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Explore our successful projects and see how we've helped businesses grow.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {projects.map((project) => (
                        <Card key={project.title} className="h-full flex flex-col">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.category}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <Button asChild className="mt-auto">
                                    <Link href={project.link}>View Case Study</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

