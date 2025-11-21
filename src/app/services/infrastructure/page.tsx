import { Server, HardDrive, Layers, Box, Database, Activity, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InfrastructureService() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        IT <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">Infrastructure</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive enterprise infrastructure solutions including server management, storage, and network infrastructure.
                    </p>
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg relative overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-white">Enterprise Infrastructure Solutions</h2>
                                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                    Build and maintain a robust IT infrastructure that serves as the foundation for your business operations. Our comprehensive infrastructure services ensure optimal performance, reliability, and scalability.
                                </p>
                                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                    From on-premises data centers to hybrid cloud environments, we design, implement, and manage infrastructure solutions that meet your specific business requirements.
                                </p>
                                <Link href="/contact">
                                    <Button size="lg" className="px-8">Get Started Today</Button>
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-[80px] rounded-full pointer-events-none"></div>
                                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 relative z-10 backdrop-blur-md">
                                    <div className="space-y-4">
                                        {[
                                            { label: 'Uptime Guarantee', value: '99.99%' },
                                            { label: 'Response Time', value: '< 15min' },
                                            { label: 'Global Locations', value: '24+' },
                                            { label: 'Support', value: '24/7/365' }
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
                            Complete IT infrastructure solutions designed to support your business operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Server className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Server Management</h3>
                            <p className="text-gray-400">
                                Comprehensive server administration including provisioning, monitoring, maintenance, and optimization for optimal performance.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <HardDrive className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Storage Solutions</h3>
                            <p className="text-gray-400">
                                Enterprise-grade storage solutions including SAN, NAS, and cloud storage with high availability and data protection.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Layers className="w-8 h-8 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Virtualization</h3>
                            <p className="text-gray-400">
                                Advanced virtualization solutions including VMware, Hyper-V, and container technologies for maximum resource efficiency.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Box className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Data Center Operations</h3>
                            <p className="text-gray-400">
                                Full-service data center management including power, cooling, physical security, and environmental monitoring.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Database className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Backup & Recovery</h3>
                            <p className="text-gray-400">
                                Comprehensive backup strategies and disaster recovery planning to protect your critical business data and ensure continuity.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Activity className="w-8 h-8 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">High Availability</h3>
                            <p className="text-gray-400">
                                Design and implement redundant systems with failover capabilities to ensure maximum uptime for critical applications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 relative overflow-hidden px-6">
                <div className="container mx-auto relative z-10">
                    <div className="p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center max-w-4xl mx-auto backdrop-blur-xl">
                        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Infrastructure?</h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Schedule a consultation with our infrastructure experts to discuss your requirements and develop a customized solution.
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
                            <p className="text-xl font-bold text-white">+30 210 6969 420</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
