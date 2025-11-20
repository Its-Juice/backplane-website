import { Globe, Shield, Activity, Share2, Wifi, Monitor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NetworkService() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Network <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-500">Solutions</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Advanced networking solutions including SD-WAN, network security, and performance optimization for enterprise environments.
                    </p>
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg relative overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-white">Enterprise Network Solutions</h2>
                                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                    Transform your network infrastructure with our comprehensive networking solutions. We design, implement, and manage networks that deliver exceptional performance, security, and reliability.
                                </p>
                                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                    From SD-WAN deployment to network security optimization, our networking experts ensure your enterprise connectivity supports business growth and enables digital transformation.
                                </p>
                                <Link href="/contact">
                                    <Button size="lg" className="px-8">Get Started Today</Button>
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-[80px] rounded-full pointer-events-none"></div>
                                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 relative z-10 backdrop-blur-md">
                                    <div className="space-y-4">
                                        {[
                                            { label: 'Network Uptime', value: '99.999%' },
                                            { label: 'Latency', value: '< 5ms' },
                                            { label: 'Bandwidth', value: '100 Gbps+' },
                                            { label: 'Security', value: 'Zero Trust' }
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
                            Comprehensive networking solutions designed for modern enterprise requirements.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Globe className="w-8 h-8 text-violet-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">SD-WAN Solutions</h3>
                            <p className="text-gray-400">
                                Software-defined WAN solutions for optimized connectivity, improved performance, and reduced costs across multiple sites.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-fuchsia-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Shield className="w-8 h-8 text-fuchsia-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Network Security</h3>
                            <p className="text-gray-400">
                                Advanced network security including firewalls, intrusion detection, and threat prevention for comprehensive protection.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Activity className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Performance Optimization</h3>
                            <p className="text-gray-400">
                                Network optimization services including traffic shaping, bandwidth management, and QoS implementation for optimal performance.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Share2 className="w-8 h-8 text-violet-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Multi-Site Connectivity</h3>
                            <p className="text-gray-400">
                                Seamless connectivity solutions for multi-location enterprises with secure, high-performance networking.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-fuchsia-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Wifi className="w-8 h-8 text-fuchsia-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">High Availability</h3>
                            <p className="text-gray-400">
                                Redundant network architecture with failover capabilities to ensure maximum uptime and business continuity.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Monitor className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Network Monitoring</h3>
                            <p className="text-gray-400">
                                24/7 network monitoring and management with proactive issue detection and resolution for optimal performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 relative overflow-hidden px-6">
                <div className="container mx-auto relative z-10">
                    <div className="p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center max-w-4xl mx-auto backdrop-blur-xl">
                        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Optimize Your Network?</h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Schedule a consultation with our network experts to discuss your connectivity requirements and develop a customized solution.
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
