import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Shield, Lock, Activity, Server, Cloud, Database, Network } from "lucide-react";

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        Our Services
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive cybersecurity and IT solutions designed to protect, optimize, and empower your business infrastructure.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {[
                        {
                            title: "Penetration Testing",
                            desc: "Identify vulnerabilities before attackers do with our advanced ethical hacking simulations.",
                            icon: <Shield className="w-8 h-8 text-indigo-400" />,
                            href: "/services/penetration-testing"
                        },
                        {
                            title: "SOC Monitoring",
                            desc: "24/7 real-time threat detection and response from our dedicated Security Operations Center.",
                            icon: <Activity className="w-8 h-8 text-blue-400" />,
                            href: "/services/soc-monitoring"
                        },
                        {
                            title: "Incident Response",
                            desc: "Rapid containment and recovery services to minimize impact during security breaches.",
                            icon: <Lock className="w-8 h-8 text-red-400" />,
                            href: "/services/incident-response"
                        },
                        {
                            title: "Cloud Infrastructure",
                            desc: "Scalable, secure, and optimized cloud solutions tailored to your enterprise needs.",
                            icon: <Cloud className="w-8 h-8 text-sky-400" />,
                            href: "/services/cloud"
                        },
                        {
                            title: "Network Solutions",
                            desc: "Robust network architecture design, implementation, and management.",
                            icon: <Network className="w-8 h-8 text-emerald-400" />,
                            href: "/services/network"
                        },
                        {
                            title: "Data Management",
                            desc: "Secure data storage, backup, and recovery solutions ensuring business continuity.",
                            icon: <Database className="w-8 h-8 text-purple-400" />,
                            href: "/services/data"
                        }
                    ].map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-black/50 w-fit border border-white/5 group-hover:border-white/20 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {service.desc}
                            </p>
                            <div className="flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                                Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="relative rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-blue-900/50 backdrop-blur-xl"></div>
                    <div className="relative p-12 md:p-20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Ready to secure your infrastructure?
                        </h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Get in touch with our experts today for a comprehensive assessment of your security posture.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-gray-200">
                                Get Started Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
