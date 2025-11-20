import { Server, TrendingUp, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CloudService() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Cloud <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">Infrastructure</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Scalable cloud platforms that grow with your business. Enterprise-grade reliability and performance with global reach.
                    </p>
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6 text-white">Enterprise Cloud Solutions</h2>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-4xl">
                                Transform your business with our comprehensive cloud infrastructure services. We design, implement, and manage scalable cloud solutions that adapt to your evolving needs while maintaining enterprise-grade security and performance.
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
                            <div className="w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Server className="w-8 h-8 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Multi-Cloud Strategy</h3>
                            <p className="text-gray-400">
                                Deploy across AWS, Azure, Google Cloud, and private clouds with unified management and governance.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <TrendingUp className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Auto-Scaling</h3>
                            <p className="text-gray-400">
                                Automatically scale resources up or down based on demand to optimize performance and costs.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Globe className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Global CDN</h3>
                            <p className="text-gray-400">
                                Accelerate content delivery worldwide with our global network of edge locations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 relative overflow-hidden px-6">
                <div className="container mx-auto relative z-10">
                    <div className="p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center max-w-4xl mx-auto backdrop-blur-xl">
                        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Move to the Cloud?</h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Let our cloud experts help you design and implement a cloud strategy that aligns with your business goals.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="px-8">Start Your Cloud Journey</Button>
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
