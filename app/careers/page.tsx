import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Briefcase } from 'lucide-react';

export const metadata = {
    title: 'Careers - InnerAnimals',
    description: 'Join our team and help build the future.',
};

export default function CareersPage() {
    const jobs = [
        {
            title: 'Senior Full-Stack Developer',
            location: 'Remote',
            type: 'Full-time',
            department: 'Engineering',
        },
        {
            title: 'UI/UX Designer',
            location: 'San Francisco, CA',
            type: 'Full-time',
            department: 'Design',
        },
        {
            title: 'DevOps Engineer',
            location: 'Remote',
            type: 'Full-time',
            department: 'Engineering',
        },
        {
            title: 'Product Manager',
            location: 'New York, NY',
            type: 'Full-time',
            department: 'Product',
        },
    ];

    const benefits = [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work hours',
        'Remote work options',
        'Professional development budget',
        'Unlimited PTO',
    ];

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Join Our Team
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Help us build innovative solutions and shape the future of technology.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
                    <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
                    <div className="space-y-4">
                        {jobs.map((job) => (
                            <Card key={job.title}>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle>{job.title}</CardTitle>
                                            <CardDescription>{job.department}</CardDescription>
                                        </div>
                                        <Button>Apply Now</Button>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-2" />
                                            {job.type}
                                        </div>
                                        <div className="flex items-center">
                                            <Briefcase className="h-4 w-4 mr-2" />
                                            {job.department}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="mx-auto mt-24 max-w-2xl lg:max-w-4xl">
                    <h2 className="text-2xl font-bold mb-8">Benefits & Perks</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center">
                                <span className="text-[#1E40AF] mr-3">✓</span>
                                <span className="text-gray-700">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

