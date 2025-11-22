import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Shield, CheckCircle2, AlertTriangle, FileText } from "lucide-react";

export default function PenetrationTestingPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                            <Shield className="w-4 h-4" /> Offensive Security
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                            Penetration Testing
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Identify and remediate vulnerabilities before malicious actors can exploit them. Our ethical hackers simulate real-world attacks to test your defenses.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full px-8 h-12 bg-white text-black hover:bg-gray-200">
                                    Schedule a Test
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-white/20 text-white hover:bg-white/10">
                                    View All Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full"></div>
                        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                            <div className="space-y-4">
                                {[
                                    "Network Penetration Testing",
                                    "Web Application Security",
                                    "Mobile App Security",
                                    "Social Engineering Simulations",
                                    "Cloud Security Assessment",
                                    "IoT Security Testing"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                        <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                                        <span className="text-lg font-medium text-gray-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Section */}
                <div className="mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Methodology</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                step: "01",
                                title: "Reconnaissance",
                                desc: "Gathering intelligence about target systems to identify potential entry points."
                            },
                            {
                                step: "02",
                                title: "Scanning",
                                desc: "Using automated and manual tools to discover vulnerabilities and weaknesses."
                            },
                            {
                                step: "03",
                                title: "Exploitation",
                                desc: "Attempting to exploit found vulnerabilities to determine impact and risk."
                            },
                            {
                                step: "04",
                                title: "Reporting",
                                desc: "Detailed documentation of findings with actionable remediation steps."
                            }
                        ].map((phase, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="text-4xl font-bold text-indigo-500/30 mb-4">{phase.step}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                                <p className="text-gray-400">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="grid md:grid-cols-2 gap-12 items-center bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Backplane?</h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Our team consists of certified experts (OSCP, CISSP, CEH) who stay ahead of the latest threat vectors. We don't just find bugs; we help you build a stronger security posture.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <FileText className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                                <span>Comprehensive executive and technical reports</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <AlertTriangle className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                                <span>Risk-based prioritization of vulnerabilities</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                                <span>Post-remediation verification testing</span>
                            </li>
                        </ul>
                    </div>
                    <div className="h-full min-h-[300px] rounded-2xl bg-gradient-to-br from-indigo-900/20 to-black border border-white/10 flex items-center justify-center">
                        {/* Placeholder for an image or graphic */}
                        <div className="text-center p-8">
                            <Shield className="w-24 h-24 text-indigo-500/50 mx-auto mb-4" />
                            <div className="text-2xl font-bold text-white">Certified Experts</div>
                            <div className="text-gray-500">OSCP • CISSP • CEH</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
