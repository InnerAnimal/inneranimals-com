export const metadata = {
    title: 'Privacy Policy - InnerAnimals',
    description: 'Privacy Policy for InnerAnimals.',
};

export default function PrivacyPage() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
                    Privacy Policy
                </h1>
                <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                        <p>
                            We collect information that you provide directly to us, such as when you create an account,
                            make a purchase, or contact us for support.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                        <p>
                            We use the information we collect to provide, maintain, and improve our services,
                            process transactions, and communicate with you.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect your personal information against
                            unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy, please contact us at privacy@inneranimals.com.
                        </p>
                    </section>
                    <p className="text-sm text-gray-500 mt-8">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
}

