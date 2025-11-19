import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export const metadata = {
    title: 'Our Team - InnerAnimals',
    description: 'Meet the talented team behind InnerAnimals.',
};

export default function TeamPage() {
    const team = [
        {
            name: 'John Doe',
            role: 'CEO & Founder',
            bio: 'Visionary leader with 15+ years of experience.',
            image: '/team/john.jpg',
        },
        {
            name: 'Jane Smith',
            role: 'CTO',
            bio: 'Technical expert specializing in cloud architecture.',
            image: '/team/jane.jpg',
        },
        {
            name: 'Mike Johnson',
            role: 'Lead Designer',
            bio: 'Creative designer focused on user experience.',
            image: '/team/mike.jpg',
        },
        {
            name: 'Sarah Williams',
            role: 'Head of Engineering',
            bio: 'Full-stack developer with a passion for innovation.',
            image: '/team/sarah.jpg',
        },
    ];

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Our Team
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Meet the talented individuals who make InnerAnimals great.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {team.map((member) => (
                        <Card key={member.name}>
                            <CardHeader>
                                <div className="h-48 w-full bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                                    <span className="text-gray-400">Photo</span>
                                </div>
                                <CardTitle>{member.name}</CardTitle>
                                <CardDescription>{member.role}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                                <div className="flex space-x-4">
                                    <Linkedin className="h-5 w-5 text-gray-400 hover:text-[#1E40AF] cursor-pointer" />
                                    <Twitter className="h-5 w-5 text-gray-400 hover:text-[#1E40AF] cursor-pointer" />
                                    <Mail className="h-5 w-5 text-gray-400 hover:text-[#1E40AF] cursor-pointer" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

