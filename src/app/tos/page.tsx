import { Scale, FileText, ShieldAlert, UserCheck, Gavel, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6 bg-white/[0.02] border-b border-white/5">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        Terms of <span className="text-indigo-400">Service</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Please read these terms carefully before using our services.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">Last Updated: November 1, 2025</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="space-y-16">
                        {/* Introduction */}
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                These Terms of Service ("Terms") govern your access to and use of Backplane's website, products, and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
                            </p>
                        </div>

                        {/* User Accounts */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                                    <UserCheck className="w-6 h-6 text-indigo-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">1. User Accounts</h2>
                            </div>
                            <div className="space-y-6 text-gray-300">
                                <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
                                <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
                            </div>
                        </div>

                        {/* Acceptable Use */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-blue-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">2. Acceptable Use</h2>
                            </div>
                            <div className="space-y-6 text-gray-300">
                                <p>You agree not to use the Service:</p>
                                <ul className="grid gap-3">
                                    {[
                                        "In any way that violates any applicable national or international law or regulation.",
                                        "For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.",
                                        "To transmit, or procure the sending of, any advertising or promotional material, including any 'junk mail', 'chain letter,' 'spam,' or any other similar solicitation.",
                                        "To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.",
                                        "To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Termination */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                                    <ShieldAlert className="w-6 h-6 text-red-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">3. Termination</h2>
                            </div>
                            <div className="space-y-6 text-gray-300">
                                <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                                <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>
                            </div>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                                    <AlertTriangle className="w-6 h-6 text-orange-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">4. Limitation of Liability</h2>
                            </div>
                            <div className="space-y-6 text-gray-300">
                                <p>In no event shall Backplane, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
                            </div>
                        </div>

                        {/* Governing Law */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                    <Gavel className="w-6 h-6 text-purple-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white">5. Governing Law</h2>
                            </div>
                            <div className="space-y-6 text-gray-300">
                                <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
                                <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="border-t border-white/10 pt-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                            <p className="text-gray-300 mb-4">If you have any questions about these Terms, please contact us at:</p>
                            <address className="not-italic text-gray-400">
                                <strong className="text-white">Backplane Inc.</strong><br />
                                123 Tech Plaza, Suite 400<br />
                                San Francisco, CA 94107<br />
                                <a href="mailto:legal@backplane.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">legal@backplane.com</a>
                            </address>
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
