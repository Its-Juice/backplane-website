import { Cloud, ShieldCheck, Database, Settings, Check, Server, Cpu, Code, Activity, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Services() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
                        <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Cloud className="w-8 h-8 text-indigo-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Cloud Infrastructure</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Scalable cloud platforms that grow with your business. Enterprise-grade reliability and performance with global reach.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-indigo-400" /> Multi-cloud strategy (AWS, Azure, GCP)</li>
                                <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-indigo-400" /> Auto-scaling capabilities</li>
                                <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-indigo-400" /> Global CDN integration</li>
                            </ul>
                            <Link href="/services/cloud">
                                <Button className="w-full group-hover:bg-indigo-600 transition-colors">
                                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>

                        {/* Network Security */}
                        <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Network Security</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Advanced security solutions to protect your infrastructure and data from evolving cyber threats.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-blue-400" /> Threat detection & response</li>
                                <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-blue-400" /> Zero-trust architecture</li>
                                <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-blue-400" /> 24/7 SOC monitoring</li>
                            </ul>
                            <Link href="/services/security">
                                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white">Learn More</Button>
                            </Link>
                        </div>

                        {/* Data Management */}
                        <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Database className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Data Management</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Comprehensive data solutions including backup, recovery, and analytics for informed decision-making.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-purple-400" /> Automated backups & retention</li>
                                <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-purple-400" /> Real-time analytics pipelines</li>
                                <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-purple-400" /> Disaster recovery planning</li>
                            </ul>
                            <Link href="/services/data">
                                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white">Learn More</Button>
                            </Link>
                        </div>

                        {/* Managed Services */}
                        <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Settings className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">Managed Services</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Expert managed services to optimize your operations and reduce technical overhead.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-white" /> Proactive system monitoring</li>
                                <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-white" /> Dedicated support team</li>
                                <li className="flex items-center gap-3 text-sm text-gray-300"><Check className="w-5 h-5 text-white" /> Routine system maintenance</li>
                            </ul>
                            <Link href="/services/managed-services">
                                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white">Learn More</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-20 px-6 bg-white/[0.02]">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-white">Industries We Serve</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Tailored infrastructure solutions for specialized industry requirements.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: Activity, title: "Healthcare", desc: "HIPAA compliant secure storage" },
                            { icon: ShieldCheck, title: "Finance", desc: "High-frequency trading infra" },
                            { icon: Server, title: "SaaS", desc: "Scalable multi-tenant architecture" },
                            { icon: Globe, title: "E-commerce", desc: "High availability during peak loads" }
                        ].map((industry, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                                <industry.icon className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                                <p className="text-sm text-gray-400">{industry.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="py-20 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12 text-white">Powered By Best-in-Class Technology</h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                        {/* Placeholders for Tech Logos */}
                        {['Kubernetes', 'Docker', 'Terraform', 'AWS', 'Azure', 'Google Cloud', 'Cloudflare', 'Redis'].map((tech, i) => (
                            <div key={i} className="flex items-center gap-2 text-xl font-bold text-white/80">
                                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Story */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="rounded-3xl bg-gradient-to-r from-indigo-900/40 to-blue-900/40 border border-white/10 p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/10 to-transparent"></div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-bold mb-6">Success Story</div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Scaling FinTech to Millions</h2>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    How we helped a leading financial services provider migrate from legacy on-premise servers to a hybrid cloud architecture, reducing latency by 60% and operational costs by 40%.
                                </p>
                                <div className="flex gap-8 mb-8">
                                    <div>
                                        <div className="text-3xl font-bold text-white">60%</div>
                                        <div className="text-sm text-gray-400">Faster Latency</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-white">40%</div>
                                        <div className="text-sm text-gray-400">Cost Reduction</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-white">99.99%</div>
                                        <div className="text-sm text-gray-400">Uptime Achieved</div>
                                    </div>
                                </div>
                                <Button className="bg-white text-black hover:bg-gray-200">Read Case Study</Button>
                            </div>
                            <div className="hidden md:block">
                                {/* Abstract visual for case study */}
                                <div className="aspect-square rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Activity className="w-32 h-32 text-indigo-500/50" />
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                <Button size="lg" className="px-8 rounded-full">Schedule Consultation</Button>
                            </Link>
                            <Link href="/pricing">
                                <Button variant="outline" size="lg" className="px-8 border-white/20 hover:bg-white/10 text-white rounded-full">View Pricing</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
