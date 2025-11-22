import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Shield, Users, Target, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-24">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        About Backplane
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We are a premier Greek cybersecurity firm dedicated to protecting businesses from the evolving landscape of digital threats.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
                        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
                            <Target className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            To empower organizations with robust security infrastructure and expert guidance, enabling them to operate confidently in a digital-first world.
                        </p>
                    </div>
                    <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            To be the most trusted cybersecurity partner in Southeastern Europe, known for our technical excellence, integrity, and proactive approach.
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-white/10 py-12">
                    {[
                        { label: "Years Experience", value: "10+" },
                        { label: "Clients Protected", value: "200+" },
                        { label: "Team Members", value: "45" },
                        { label: "Threats Blocked", value: "1M+" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Team Section */}
                <div className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Leadership Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Alexandros P.", role: "CEO & Founder", bio: "Former CISO with 15 years of experience in banking security." },
                            { name: "Maria K.", role: "Head of SOC", bio: "Expert in threat intelligence and incident response coordination." },
                            { name: "Dimitris L.", role: "Lead Penetration Tester", bio: "OSCP & OSEE certified, specializing in red team operations." }
                        ].map((member, i) => (
                            <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center">
                                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gray-700 to-gray-900 mb-6 overflow-hidden relative">
                                    {/* Placeholder for headshot */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                        <Users className="w-12 h-12" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <div className="text-indigo-400 text-sm font-medium mb-4">{member.role}</div>
                                <p className="text-gray-400 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Join our journey</h2>
                    <div className="flex justify-center gap-4">
                        <Link href="/careers">
                            <Button className="rounded-full px-8 bg-white text-black hover:bg-gray-200">
                                View Careers
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
