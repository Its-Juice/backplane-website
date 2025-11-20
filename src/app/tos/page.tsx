import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsOfService() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Terms of <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">Service</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Legal terms and conditions governing the use of Backplane's enterprise infrastructure platform and services.
                    </p>
                </div>
            </section>

            {/* Terms of Service Content */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg max-w-4xl mx-auto">

                        {/* Last Updated */}
                        <div className="bg-white/5 p-6 rounded-xl mb-12 border-l-4 border-indigo-500">
                            <p className="text-sm text-gray-400 m-0">
                                <strong className="text-white block mb-1">Last Updated:</strong> November 1, 2025<br />
                                <strong className="text-white block mb-1 mt-2">Effective Date:</strong> November 1, 2025<br />
                                <strong className="text-white block mb-1 mt-2">Version:</strong> 1.0
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-white">Acceptance of Terms</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    Welcome to Backplane. These Terms of Service ("Terms") govern your access to and use of Backplane's enterprise infrastructure platform, website, and related services (collectively, the "Service") operated by Backplane ("us", "we", or "our").
                                </p>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
                                </p>
                                <p className="text-gray-400 leading-relaxed">
                                    These Terms apply to all visitors, users, and others who access or use the Service, including but not limited to customers, partners, and authorized representatives of enterprise organizations.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-white">Use of Service</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    You agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-white">Intellectual Property</h2>
                                <p className="text-gray-400 leading-relaxed mb-4">
                                    The Service and its original content, features, and functionality are and will remain the exclusive property of Backplane and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 bg-white/5 p-6 rounded-xl">
                            <p className="text-gray-400 leading-relaxed">
                                For questions about these Terms of Service, please contact us at <a href="mailto:legal@backplane.com" className="text-indigo-400 hover:text-white transition-colors">legal@backplane.com</a>
                            </p>
                        </div>

                        {/* Footer CTA */}
                        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 text-center">
                            <h3 className="text-xl font-bold mb-4 text-white">Questions About Our Terms?</h3>
                            <p className="text-gray-400 mb-6">Our legal team is here to help clarify any questions you may have about these Terms of Service.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/contact">
                                    <Button>Contact Support</Button>
                                </Link>
                                <a href="mailto:legal@backplane.com">
                                    <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white">Email Legal Team</Button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
