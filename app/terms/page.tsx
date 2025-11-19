export const metadata = {
    title: 'Terms of Service - InnerAnimals',
    description: 'Terms of Service for InnerAnimals.',
};

export default function TermsPage() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
                    Terms of Service
                </h1>
                <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms
                            and provision of this agreement.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials on our website
                            for personal, non-commercial transitory viewing only.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
                        <p>
                            The materials on our website are provided on an 'as is' basis. We make no warranties,
                            expressed or implied, and hereby disclaim all other warranties.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
                        <p>
                            In no event shall InnerAnimals or its suppliers be liable for any damages arising out
                            of the use or inability to use the materials on our website.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p>
                            If you have questions about these Terms, please contact us at legal@inneranimals.com.
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

