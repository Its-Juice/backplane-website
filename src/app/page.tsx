import Link from "next/link";
import { Zap, Globe, ShieldCheck, ArrowRight, Server, Database, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 px-6">
                <div className="container mx-auto text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-sm text-gray-300">Next Generation Infrastructure</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 leading-[1.1]">
                        Enterprise Cloud <br />
                        Reimagined
                    </h1>

                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Transform your business with our cutting-edge infrastructure platform.
                        Scalable, secure, and reliable solutions designed for the modern web.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contact">
                            <Button size="lg" className="rounded-full text-base px-8">
                                Get Started Now
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg" className="rounded-full text-base px-8">
                                Explore Services
                            </Button>
                        </Link>
                    </div>

                    {/* Hero Visual / Grid */}
                    <div className="mt-20 relative mx-auto max-w-5xl">
                        <div className="aspect-video rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden relative shadow-2xl">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                            {/* Abstract UI Representation */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 bg-gradient-to-tr from-indigo-500/30 to-blue-500/30 rounded-full blur-[80px] animate-pulse"></div>
                            </div>
                            <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 opacity-50">
                                <div className="col-span-1 bg-white/5 rounded-xl h-full"></div>
                                <div className="col-span-2 flex flex-col gap-4 h-full">
                                    <div className="h-1/3 bg-white/5 rounded-xl"></div>
                                    <div className="h-2/3 bg-white/5 rounded-xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 relative">
                <div className="container mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Backplane</h2>
                        <p className="text-gray-400 text-lg">Built for performance, designed for scale, and secured for peace of mind.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: "Lightning Fast",
                                desc: "Optimized for speed with edge computing capabilities that put your data closer to your users."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Bank-Grade Security",
                                desc: "Enterprise-level encryption and compliance standards built-in from the ground up."
                            },
                            {
                                icon: Globe,
                                title: "Infinite Scalability",
                                desc: "Grow without limits. Our infrastructure automatically adapts to your traffic demands."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "99.99%", label: "Uptime SLA" },
                            { value: "500+", label: "Enterprise Clients" },
                            { value: "24/7", label: "Expert Support" },
                            { value: "15+", label: "Global Regions" },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                                    {stat.value}
                                </div>
                                <div className="text-indigo-400 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden px-6">
                <div className="container mx-auto relative z-10">
                    <div className="p-12 md:p-20 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center max-w-5xl mx-auto backdrop-blur-xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Infrastructure?</h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            Join thousands of companies that trust Backplane for their mission-critical workloads.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full px-10 py-6 text-lg w-full sm:w-auto">
                                    Start Your Project
                                </Button>
                            </Link>
                            <a href="tel:+1-800-BACKPLANE">
                                <Button variant="outline" size="lg" className="rounded-full px-10 py-6 text-lg w-full sm:w-auto">
                                    Talk to Sales
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
