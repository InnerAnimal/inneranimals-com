import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Target, Heart, Rocket, Users } from 'lucide-react';

export const metadata = {
    title: 'About Us - InnerAnimals',
    description: 'Learn about InnerAnimals and our mission to deliver innovative solutions.',
};

export default function AboutPage() {
    const values = [
        {
            icon: <Target className="h-8 w-8 text-[#1E40AF]" />,
            title: 'Mission-Driven',
            description: 'We are committed to delivering solutions that make a real impact.',
        },
        {
            icon: <Heart className="h-8 w-8 text-[#1E40AF]" />,
            title: 'Client-Focused',
            description: 'Your success is our success. We prioritize your goals.',
        },
        {
            icon: <Rocket className="h-8 w-8 text-[#1E40AF]" />,
            title: 'Innovation',
            description: 'We stay ahead of the curve with cutting-edge technology.',
        },
        {
            icon: <Users className="h-8 w-8 text-[#1E40AF]" />,
            title: 'Collaboration',
            description: 'We work closely with you every step of the way.',
        },
    ];

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Hero */}
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        About InnerAnimals
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We are a team of passionate professionals dedicated to building innovative solutions
                        that help businesses thrive in the digital age.
                    </p>
                </div>

                {/* Story */}
                <div className="mx-auto mt-16 max-w-2xl lg:max-w-4xl">
                    <div className="space-y-8 text-lg text-gray-700">
                        <p>
                            Founded with a vision to transform how businesses operate, InnerAnimals has grown
                            into a trusted partner for companies worldwide. We combine technical expertise with
                            creative problem-solving to deliver solutions that drive real results.
                        </p>
                        <p>
                            Our team brings together years of experience across various industries, allowing us
                            to understand your unique challenges and provide tailored solutions that fit your
                            specific needs.
                        </p>
                        <p>
                            We believe in building long-term partnerships with our clients, working together
                            to achieve sustainable growth and success.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="mx-auto mt-24 max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">
                        Our Values
                    </h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {values.map((value) => (
                            <Card key={value.title}>
                                <CardHeader>
                                    <div className="mb-4">{value.icon}</div>
                                    <CardTitle>{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">{value.description}</CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-24 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                        Let's Work Together
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Ready to start your next project? Get in touch with us today.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

