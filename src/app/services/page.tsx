import { Cloud, ShieldCheck, Database, Settings, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Services() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive enterprise infrastructure solutions designed to drive your business forward with cutting-edge technology and expert support.
                    </p>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-white">Infrastructure Solutions</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            From cloud migration to security hardening, we provide end-to-end infrastructure services that scale with your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Cloud Infrastructure */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Cloud className="w-8 h-8 text-indigo-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Cloud Infrastructure</h3>
                            <p className="text-gray-400 mb-6">
                                Scalable cloud platforms that grow with your business. Enterprise-grade reliability and performance with global reach.
                            </p>
                            <ul className="space-y-2 mb-8">
                                <li className="flex items-center gap-2 text-sm text-gray-400"><Check className="w-4 h-4 text-indigo-400" /> Multi-cloud strategy</li>
                                <li className="flex items-center gap-2 text-sm text-gray-400"><Check className="w-4 h-4 text-indigo-400" /> Auto-scaling capabilities</li>
                                <li className="flex items-center gap-2 text-sm text-gray-400"><Check className="w-4 h-4 text-indigo-400" /> Global CDN integration</li>
                            </ul>
                            <Link href="/services/cloud">
                                <Button className="w-full">Get Started</Button>
                            </Link>
                        </div>

                        {/* Network Security */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Network Security</h3>
                            <p className="text-gray-400 mb-6">
                                Advanced security solutions to protect your infrastructure and data from evolving cyber threats.
                            </p>
                            <ul className="space-y-2 mb-8">
                                <li className="flex items-center gap-2 text-sm text-gray-400"><Check className="w-4 h-4 text-blue-400" /> Threat detection & response</li>
                                <li className="flex items-center gap-2 text-sm text-gray-400"><Check className="w-4 h-4 text-blue-400" /> Zero-trust architecture</li>
                                <li className="flex items-center gap-2 text-sm text-gray-400"><Check className="w-4 h-4 text-blue-400" /> 24/7 monitoring</li>
                            </ul>
                            <Link href="/services/security">
                                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white">Learn More</Button>
                            </Link>
                        </div>

                        {/* Data Management */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Database className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Data Management</h3>
                            <p className="text-gray-400 mb-6">
                                Comprehensive data solutions including backup, recovery, and analytics for informed decision-making.
                            </p>
                            <ul className="space-y-2 mb-8">
                                <li className="flex items-center gap-2 text-sm text-gray-400"><Check className="w-4 h-4 text-purple-400" /> Automated backups</li>
                                <li className="flex items-center gap-2 text-sm text-gray-400"><Check className="w-4 h-4 text-purple-400" /> Real-time analytics</li>
                                <li className="flex items-center gap-2 text-sm text-gray-400"><Check className="w-4 h-4 text-purple-400" /> Disaster recovery</li>
                            </ul>
                            <Link href="/services/data">
                                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white">Learn More</Button>
                            </Link>
                        </div>

                        {/* Managed Services */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Settings className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Managed Services</h3>
                            <p className="text-gray-400 mb-6">
                                Expert managed services to optimize your operations and reduce technical overhead.
                            </p>
                            <ul className="space-y-2 mb-8">
                                <li className="flex items-center gap-2 text-sm text-gray-400"><Check className="w-4 h-4 text-white" /> Proactive monitoring</li>
                                <li className="flex items-center gap-2 text-sm text-gray-400"><Check className="w-4 h-4 text-white" /> Expert support team</li>
                                <li className="flex items-center gap-2 text-sm text-gray-400"><Check className="w-4 h-4 text-white" /> System maintenance</li>
                            </ul>
                            <Link href="/services/managed-services">
                                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white">Learn More</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-20 bg-white/[0.02] px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-white">Additional Capabilities</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Specialized services to address your unique infrastructure challenges and requirements.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {['DevOps & Automation', 'Digital Transformation', 'Compliance & Governance', 'Consulting Services'].map((service, index) => (
                            <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center backdrop-blur-sm">
                                <h3 className="font-bold mb-2 text-white">{service}</h3>
                                <p className="text-sm text-gray-400">Specialized solutions tailored to your specific enterprise needs.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-32 relative overflow-hidden px-6">
                <div className="container mx-auto relative z-10">
                    <div className="p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center max-w-4xl mx-auto backdrop-blur-xl">
                        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Infrastructure?</h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Schedule a consultation with our experts to discuss your specific requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="px-8">Schedule Consultation</Button>
                            </Link>
                            <Link href="/pricing">
                                <Button variant="outline" size="lg" className="px-8 border-white/20 hover:bg-white/10 text-white">View Pricing</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
