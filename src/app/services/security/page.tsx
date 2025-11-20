import { ShieldAlert, Lock, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SecurityService() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Security <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500">Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Advanced security solutions to protect your infrastructure and data from evolving cyber threats.
                    </p>
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6 text-white">Enterprise Security Solutions</h2>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-4xl">
                                Comprehensive cybersecurity solutions that protect your business from emerging threats. Our security-first approach ensures your infrastructure is fortified with enterprise-grade protection while maintaining operational efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Features */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-white">Key Capabilities</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <ShieldAlert className="w-8 h-8 text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Threat Detection</h3>
                            <p className="text-gray-400">
                                Advanced threat detection with real-time monitoring and automated response to security incidents.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Lock className="w-8 h-8 text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Zero-Trust Architecture</h3>
                            <p className="text-gray-400">
                                Implement zero-trust security models that verify every user and device before granting access.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Eye className="w-8 h-8 text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">24/7 Monitoring</h3>
                            <p className="text-gray-400">
                                Round-the-clock security monitoring with expert analysts ready to respond to threats immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 relative overflow-hidden px-6">
                <div className="container mx-auto relative z-10">
                    <div className="p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center max-w-4xl mx-auto backdrop-blur-xl">
                        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Secure Your Infrastructure?</h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Let our security experts conduct a comprehensive assessment and implement a robust security strategy for your organization.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="px-8">Get Security Assessment</Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" size="lg" className="px-8 border-white/20 hover:bg-white/10 text-white">View All Services</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
