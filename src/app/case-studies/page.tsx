import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, TrendingUp } from "lucide-react";

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        Success Stories
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        See how we have helped organizations across Greece and Europe secure their digital assets and achieve compliance.
                    </p>
                </div>

                {/* Case Studies List */}
                <div className="space-y-20">
                    {[
                        {
                            client: "Major Greek Fintech",
                            title: "Securing Digital Payments for Millions",
                            desc: "We implemented a comprehensive Zero Trust architecture and real-time fraud detection system for a leading financial institution, reducing fraud attempts by 94%.",
                            stats: [
                                { label: "Fraud Reduction", value: "94%" },
                                { label: "Compliance", value: "PCI-DSS" },
                                { label: "Uptime", value: "99.99%" }
                            ],
                            tags: ["Fintech", "Zero Trust", "Compliance"]
                        },
                        {
                            client: "Healthcare Provider Network",
                            title: "Protecting Patient Data Against Ransomware",
                            desc: "Following a near-miss incident, we deployed our SOC monitoring and endpoint protection across 15 hospitals, securing over 500,000 patient records.",
                            stats: [
                                { label: "Endpoints Secured", value: "5,000+" },
                                { label: "Response Time", value: "< 15 min" },
                                { label: "Data Loss", value: "0%" }
                            ],
                            tags: ["Healthcare", "Ransomware Protection", "SOC"]
                        },
                        {
                            client: "E-commerce Retailer",
                            title: "Scaling Security for Black Friday",
                            desc: "We conducted rigorous penetration testing and load testing to ensure the client's infrastructure could withstand record-breaking traffic and DDoS attempts.",
                            stats: [
                                { label: "Traffic Handling", value: "10x Peak" },
                                { label: "Vulnerabilities Fixed", value: "45+" },
                                { label: "DDoS Attacks Mitigated", value: "12" }
                            ],
                            tags: ["E-commerce", "Penetration Testing", "DDoS Mitigation"]
                        }
                    ].map((study, i) => (
                        <div key={i} className="grid md:grid-cols-2 gap-12 items-center bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-colors">
                            <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                                <div className="text-indigo-400 font-bold tracking-wider text-sm mb-2 uppercase">{study.client}</div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{study.title}</h2>
                                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                                    {study.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {study.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
                                    Read Full Case Study
                                </Button>
                            </div>

                            <div className={`${i % 2 === 1 ? 'md:order-1' : ''} bg-black/40 rounded-2xl p-8 border border-white/5`}>
                                <div className="grid grid-cols-1 gap-6">
                                    {study.stats.map((stat, j) => (
                                        <div key={j} className="border-l-2 border-indigo-500 pl-6">
                                            <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                                            <div className="text-gray-500 text-sm uppercase tracking-wide">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
