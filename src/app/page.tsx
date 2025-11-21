import Link from "next/link";
import { Zap, Globe, ShieldCheck, ArrowRight, Server, Database, Lock, CheckCircle, Cpu, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-10 pb-32 px-6">
                <div className="container mx-auto text-center max-w-5xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span className="text-sm text-gray-300 font-medium">Next Generation Infrastructure</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 leading-[1.1]">
                        Enterprise Cloud <br />
                        <span className="text-indigo-400">Reimagined</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Transform your business with our cutting-edge infrastructure platform.
                        Scalable, secure, and reliable solutions designed for the modern web.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contact">
                            <Button size="lg" className="rounded-full text-base px-10 py-7 h-auto text-lg shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all hover:-translate-y-1">
                                Get Started Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg" className="rounded-full text-base px-10 py-7 h-auto text-lg border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-y-1">
                                Explore Services
                            </Button>
                        </Link>
                    </div>

                    {/* Hero Visual / Grid */}
                    <div className="mt-24 relative mx-auto max-w-6xl perspective-1000">
                        <div className="aspect-[16/9] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden relative shadow-2xl transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700 ease-out">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                            {/* Abstract UI Representation */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
                            </div>

                            <div className="absolute inset-0 p-8 md:p-12 grid grid-cols-12 gap-6 opacity-80">
                                {/* Sidebar */}
                                <div className="hidden md:block col-span-3 bg-white/5 rounded-2xl border border-white/5 h-full p-6 space-y-4">
                                    <div className="h-8 w-32 bg-white/10 rounded-lg mb-8"></div>
                                    <div className="space-y-3">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="h-4 w-full bg-white/5 rounded-md"></div>
                                        ))}
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="col-span-12 md:col-span-9 flex flex-col gap-6 h-full">
                                    {/* Header */}
                                    <div className="h-24 bg-white/5 rounded-2xl border border-white/5 flex items-center px-8 justify-between">
                                        <div className="h-8 w-48 bg-white/10 rounded-lg"></div>
                                        <div className="flex gap-4">
                                            <div className="h-8 w-8 bg-white/10 rounded-full"></div>
                                            <div className="h-8 w-8 bg-white/10 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Dashboard Grid */}
                                    <div className="grid grid-cols-3 gap-6 flex-grow">
                                        <div className="col-span-2 bg-white/5 rounded-2xl border border-white/5 p-6 relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="h-full flex items-end">
                                                <div className="w-full h-3/4 bg-gradient-to-t from-indigo-500/20 to-transparent rounded-lg"></div>
                                            </div>
                                        </div>
                                        <div className="col-span-1 bg-white/5 rounded-2xl border border-white/5 p-6 space-y-4">
                                            <div className="h-1/3 bg-white/5 rounded-lg"></div>
                                            <div className="h-1/3 bg-white/5 rounded-lg"></div>
                                            <div className="h-1/3 bg-white/5 rounded-lg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By Section */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02]">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos - In a real app these would be SVGs */}
                        {['Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Horizon'].map((company, i) => (
                            <div key={i} className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                                <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 px-6 relative">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Why Choose Backplane</h2>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            Built for performance, designed for scale, and secured for peace of mind.
                            We provide the foundation for your digital success.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: "Lightning Fast",
                                desc: "Optimized for speed with edge computing capabilities that put your data closer to your users. Experience sub-millisecond latency."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Bank-Grade Security",
                                desc: "Enterprise-level encryption, DDoS protection, and compliance standards built-in from the ground up. Your data is safe with us."
                            },
                            {
                                icon: Globe,
                                title: "Infinite Scalability",
                                desc: "Grow without limits. Our infrastructure automatically adapts to your traffic demands, handling millions of requests with ease."
                            },
                            {
                                icon: Cpu,
                                title: "Advanced Compute",
                                desc: "Access high-performance computing resources tailored to your specific workloads, from AI training to general purpose processing."
                            },
                            {
                                icon: Database,
                                title: "Global Storage",
                                desc: "Distributed storage solutions ensuring data durability and high availability across multiple geographic regions."
                            },
                            {
                                icon: BarChart,
                                title: "Real-time Analytics",
                                desc: "Gain deep insights into your infrastructure performance with our comprehensive monitoring and analytics dashboard."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-8 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 px-6 relative bg-black/50">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                                Streamlined Process for <br />
                                <span className="text-indigo-400">Maximum Efficiency</span>
                            </h2>
                            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                                We've refined our deployment methodology to ensure seamless integration and rapid time-to-value for your enterprise.
                            </p>

                            <div className="space-y-8">
                                {[
                                    {
                                        step: "01",
                                        title: "Discovery & Strategy",
                                        desc: "We analyze your current infrastructure and business goals to design a tailored roadmap."
                                    },
                                    {
                                        step: "02",
                                        title: "Migration & Deployment",
                                        desc: "Our experts handle the heavy lifting, ensuring a smooth transition with zero downtime."
                                    },
                                    {
                                        step: "03",
                                        title: "Optimization & Scale",
                                        desc: "Continuous monitoring and tuning to maximize performance and cost-efficiency."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="text-5xl font-bold text-white/10">{item.step}</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
                            <div className="relative z-10 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-xl font-bold text-white">Deployment Status</h3>
                                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase">Active</span>
                                    </div>

                                    {[
                                        { label: "System Health", value: 98, color: "bg-green-500" },
                                        { label: "Resource Usage", value: 45, color: "bg-blue-500" },
                                        { label: "Network Traffic", value: 72, color: "bg-indigo-500" },
                                        { label: "Storage Capacity", value: 30, color: "bg-purple-500" }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-gray-300">{stat.label}</span>
                                                <span className="text-white font-bold">{stat.value}%</span>
                                            </div>
                                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                                <div className={`h-full ${stat.color} rounded-full`} style={{ width: `${stat.value}%` }}></div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="pt-6 mt-6 border-t border-white/10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                                <CheckCircle className="w-5 h-5 text-green-400" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">All Systems Operational</div>
                                                <div className="text-xs text-gray-400">Last updated: Just now</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-32 px-6">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center text-white">What Our Clients Say</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "Backplane transformed our infrastructure overnight. The speed and reliability are unmatched in the industry.",
                                author: "Sarah Johnson",
                                role: "CTO, TechFlow",
                                image: "SJ"
                            },
                            {
                                quote: "The level of support and expertise provided by the Backplane team is simply outstanding. They are true partners.",
                                author: "Michael Chen",
                                role: "VP Engineering, DataScale",
                                image: "MC"
                            },
                            {
                                quote: "Moving to Backplane reduced our operational costs by 40% while improving performance. Best decision we made.",
                                author: "Elena Rodriguez",
                                role: "Director of IT, CloudNine",
                                image: "ER"
                            }
                        ].map((testimonial, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg relative">
                                <div className="text-4xl text-indigo-500 absolute top-8 left-8 opacity-50">"</div>
                                <p className="text-gray-300 mb-8 pt-6 relative z-10 leading-relaxed">
                                    {testimonial.quote}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">{testimonial.author}</div>
                                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                                    </div>
                                </div>
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
                            <div key={i} className="group cursor-default">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 group-hover:to-white transition-all">
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
                    <div className="p-12 md:p-24 rounded-[3rem] bg-gradient-to-b from-indigo-900/20 to-transparent border border-white/10 text-center max-w-5xl mx-auto backdrop-blur-xl relative overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white relative z-10">Ready to Transform Your Infrastructure?</h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
                            Join thousands of companies that trust Backplane for their mission-critical workloads.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full px-12 py-8 text-lg w-full sm:w-auto shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all hover:-translate-y-1">
                                    Start Your Project
                                </Button>
                            </Link>
                            <a href="tel:+1-800-BACKPLANE">
                                <Button variant="outline" size="lg" className="rounded-full px-12 py-8 text-lg w-full sm:w-auto border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all hover:-translate-y-1">
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
