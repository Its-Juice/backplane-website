import { Monitor, Users, Zap, Settings, RefreshCw, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ManagedServices() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Managed <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-500">Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Expert managed services to optimize your operations and reduce technical overhead with comprehensive IT support.
                    </p>
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg relative overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-white">Complete IT Management & Support</h2>
                                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                    Focus on your core business while we handle your complete IT infrastructure management. Our managed services provide comprehensive support, proactive maintenance, and strategic guidance.
                                </p>
                                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                    From help desk support to strategic IT planning, our managed services ensure your technology works seamlessly to support your business objectives.
                                </p>
                                <Link href="/contact">
                                    <Button size="lg" className="px-8">Get Started Today</Button>
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 blur-[80px] rounded-full pointer-events-none"></div>
                                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 relative z-10 backdrop-blur-md">
                                    <div className="space-y-4">
                                        {[
                                            { label: 'Response Time', value: '< 30min' },
                                            { label: 'Resolution Rate', value: '98%' },
                                            { label: 'Client Satisfaction', value: '4.9/5' },
                                            { label: 'Availability', value: '24/7' }
                                        ].map((stat, index) => (
                                            <div key={index} className="flex justify-between items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                                <span className="text-gray-400">{stat.label}</span>
                                                <span className="text-xl font-bold text-white">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Features */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-white">What's Included</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Comprehensive managed services designed to free your team to focus on strategic initiatives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Monitor className="w-8 h-8 text-teal-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Proactive Monitoring</h3>
                            <p className="text-gray-400">
                                24/7 system monitoring with proactive issue detection and resolution to prevent downtime before it affects your business.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Expert Support Team</h3>
                            <p className="text-gray-400">
                                Access to certified IT professionals for help desk support, troubleshooting, and technical guidance when you need it.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Performance Optimization</h3>
                            <p className="text-gray-400">
                                Continuous system optimization and performance tuning to ensure your infrastructure operates at peak efficiency.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-teal-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Settings className="w-8 h-8 text-teal-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">System Maintenance</h3>
                            <p className="text-gray-400">
                                Comprehensive system maintenance including updates, patches, and preventive care to maintain optimal performance and security.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <RefreshCw className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Patch Management</h3>
                            <p className="text-gray-400">
                                Automated patch management and update services to keep your systems secure and current with minimal business disruption.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <AlertTriangle className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Incident Response</h3>
                            <p className="text-gray-400">
                                Rapid incident response procedures with expert escalation paths to minimize impact and restore operations quickly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 relative overflow-hidden px-6">
                <div className="container mx-auto relative z-10">
                    <div className="p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center max-w-4xl mx-auto backdrop-blur-xl">
                        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Focus on Your Business?</h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Let our experts handle your IT infrastructure management while you focus on growing your business. Schedule a consultation to discuss your managed services needs.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="px-8">Schedule Consultation</Button>
                            </Link>
                            <Link href="/pricing">
                                <Button variant="outline" size="lg" className="px-8 border-white/20 hover:bg-white/10 text-white">View Pricing</Button>
                            </Link>
                        </div>
                        <div className="mt-8 text-sm text-gray-400">
                            <p className="mb-1">Or call us directly:</p>
                            <p className="text-xl font-bold text-white">+1 (800) BACKPLANE</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
