import { Shield, Lock, Eye, FileText, Server, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6 bg-white/[0.02] border-b border-white/5">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        Privacy <span className="text-indigo-400">Policy</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We are committed to protecting your privacy and ensuring the security of your data.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">Last Updated: October 24, 2023</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="space-y-16">
                        {/* Introduction */}
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                At Backplane, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-indigo-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
                            </div>
                            <div className="space-y-6 text-gray-300">
                                <p>We collect information that you provide directly to us when you register for an account, create or modify your profile, set preferences, sign-up for newsletters, or make purchases.</p>
                                <ul className="list-disc pl-6 space-y-2 marker:text-indigo-500">
                                    <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests.</li>
                                    <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                                    <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
                                </ul>
                            </div>
                        </div>

                        {/* How We Use Your Information */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-blue-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
                            </div>
                            <div className="space-y-6 text-gray-300">
                                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Create and manage your account.",
                                        "Process your payments and refunds.",
                                        "Email you regarding your account or order.",
                                        "Enable user-to-user communications.",
                                        "Generate a personal profile about you.",
                                        "Increase the efficiency and operation of the Site.",
                                        "Monitor and analyze usage and trends.",
                                        "Prevent fraudulent transactions and theft."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Disclosure of Your Information */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-purple-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">3. Disclosure of Your Information</h2>
                            </div>
                            <div className="space-y-6 text-gray-300">
                                <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-white font-bold mb-2">By Law or to Protect Rights</h3>
                                        <p>If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold mb-2">Third-Party Service Providers</h3>
                                        <p>We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Security of Your Information */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                                    <Lock className="w-6 h-6 text-green-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">4. Security of Your Information</h2>
                            </div>
                            <div className="space-y-6 text-gray-300">
                                <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                                    <Shield className="w-5 h-5 text-green-400 shrink-0" />
                                    <p className="text-sm text-green-200">We implement industry-standard encryption (SSL/TLS) for all data in transit and at rest.</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="border-t border-white/10 pt-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <p className="text-gray-300 mb-4">If you have questions or comments about this Privacy Policy, please contact us at:</p>
                            <address className="not-italic text-gray-400">
                                <strong className="text-white">Backplane Inc.</strong><br />
                                123 Tech Plaza, Suite 400<br />
                                San Francisco, CA 94107<br />
                                <a href="mailto:privacy@backplane.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">privacy@backplane.com</a>
                            </address>
                        </div>

                        {/* Footer CTA */}
                        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 text-center">
                            <h3 className="text-xl font-bold mb-4 text-white">Questions About Your Privacy?</h3>
                            <p className="text-gray-400 mb-6">Our privacy team is here to help. Contact us for any privacy-related questions or concerns.</p>
                            <Link href="/contact">
                                <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white">Contact Privacy Team</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
