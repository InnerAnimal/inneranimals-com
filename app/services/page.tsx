import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Code, Smartphone, Cloud, BarChart, Palette, Shield } from 'lucide-react';

export const metadata = {
    title: 'Services - InnerAnimals',
    description: 'Comprehensive services to help your business succeed.',
};

export default function ServicesPage() {
    const services = [
        {
            icon: <Code className="h-8 w-8 text-[#1E40AF]" />,
            title: 'Web Development',
            description: 'Custom web applications built with modern technologies.',
        },
        {
            icon: <Smartphone className="h-8 w-8 text-[#1E40AF]" />,
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile applications.',
        },
        {
            icon: <Cloud className="h-8 w-8 text-[#1E40AF]" />,
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and deployment.',
        },
        {
            icon: <BarChart className="h-8 w-8 text-[#1E40AF]" />,
            title: 'Analytics & Insights',
            description: 'Data-driven solutions for better decision making.',
        },
        {
            icon: <Palette className="h-8 w-8 text-[#1E40AF]" />,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive user experiences.',
        },
        {
            icon: <Shield className="h-8 w-8 text-[#1E40AF]" />,
            title: 'Security & Compliance',
            description: 'Enterprise-grade security solutions.',
        },
    ];

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Our Services
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Comprehensive solutions tailored to your business needs.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {services.map((service) => (
                        <Card key={service.title} className="h-full">
                            <CardHeader>
                                <div className="mb-4">{service.icon}</div>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

