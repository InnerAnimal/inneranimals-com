import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';

export const metadata = {
    title: 'Case Studies - InnerAnimals',
    description: 'Detailed case studies of our successful projects.',
};

export default function CaseStudiesPage() {
    const caseStudies = [
        {
            title: 'E-Commerce Platform Transformation',
            client: 'Retail Company',
            challenge: 'Legacy system unable to handle growth',
            solution: 'Built scalable Next.js platform with cloud infrastructure',
            results: '300% increase in performance, 50% reduction in costs',
            metrics: [
                { label: 'Performance', value: '+300%' },
                { label: 'Cost Reduction', value: '-50%' },
                { label: 'User Satisfaction', value: '95%' },
            ],
        },
        {
            title: 'Mobile Banking App',
            client: 'Financial Services',
            challenge: 'Outdated mobile experience',
            solution: 'Modern React Native app with biometric security',
            results: '2M+ downloads, 4.8 star rating',
            metrics: [
                { label: 'Downloads', value: '2M+' },
                { label: 'Rating', value: '4.8★' },
                { label: 'Active Users', value: '500K+' },
            ],
        },
    ];

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Case Studies
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Explore detailed stories of how we've helped businesses succeed.
                    </p>
                </div>
                <div className="mx-auto mt-16 space-y-16">
                    {caseStudies.map((study) => (
                        <Card key={study.title} className="overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-[#1E40AF] to-blue-600 text-white">
                                <CardTitle className="text-2xl">{study.title}</CardTitle>
                                <CardDescription className="text-blue-100">{study.client}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-8">
                                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Challenge</h3>
                                        <p className="text-gray-600 mb-6">{study.challenge}</p>
                                        <h3 className="font-semibold text-lg mb-2">Solution</h3>
                                        <p className="text-gray-600">{study.solution}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-4">Results</h3>
                                        <p className="text-gray-600 mb-6">{study.results}</p>
                                        <div className="grid grid-cols-3 gap-4">
                                            {study.metrics.map((metric) => (
                                                <div key={metric.label} className="text-center">
                                                    <div className="text-2xl font-bold text-[#1E40AF]">{metric.value}</div>
                                                    <div className="text-sm text-gray-600">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

