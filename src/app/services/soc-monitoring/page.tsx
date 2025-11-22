import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Activity, Eye, Server, Clock, ShieldCheck } from "lucide-react";

export default function SOCMonitoringPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                        <Activity className="w-4 h-4" /> 24/7 Surveillance
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        SOC Monitoring
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Continuous security monitoring, threat detection, and incident response from our state-of-the-art Security Operations Center. We watch your network so you don't have to.
                    </p>
                </div>

                {/* Key Features */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {[
                        {
                            icon: <Eye className="w-10 h-10 text-blue-400" />,
                            title: "Real-Time Detection",
                            desc: "Advanced SIEM technology correlates events across your entire infrastructure to detect anomalies instantly."
                        },
                        {
                            icon: <Clock className="w-10 h-10 text-blue-400" />,
                            title: "24/7/365 Coverage",
                            desc: "Our analysts are always on duty, ensuring that threats are identified and addressed day or night."
                        },
                        {
                            icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
                            title: "Proactive Hunting",
                            desc: "We don't just wait for alerts; we actively hunt for hidden threats and indicators of compromise."
                        }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                            <div className="mb-6 p-4 rounded-2xl bg-black/50 w-fit border border-white/5">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Dashboard Preview / Tech Stack */}
                <div className="mb-24 p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
                    <div className="bg-black rounded-[22px] p-8 md:p-16 border border-white/5 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Advanced Technology Stack</h2>
                                <p className="text-gray-400 mb-8 text-lg">
                                    We leverage industry-leading SIEM, EDR, and SOAR platforms to provide comprehensive visibility into your security posture.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {["Log Management & Analysis", "Endpoint Detection & Response", "Network Traffic Analysis", "Cloud Security Monitoring"].map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-gray-300">
                                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact">
                                    <Button size="lg" className="rounded-full px-8 bg-blue-600 hover:bg-blue-700 text-white border-none">
                                        Get Protected
                                    </Button>
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Abstract representation of data streams */}
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 animate-pulse">
                                    <div className="h-2 w-1/2 bg-blue-500/30 rounded mb-4"></div>
                                    <div className="h-2 w-3/4 bg-white/10 rounded mb-2"></div>
                                    <div className="h-2 w-full bg-white/10 rounded mb-2"></div>
                                    <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-8">
                                    <div className="h-2 w-1/2 bg-red-500/30 rounded mb-4"></div>
                                    <div className="h-2 w-full bg-white/10 rounded mb-2"></div>
                                    <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                                    <div className="h-2 w-1/2 bg-green-500/30 rounded mb-4"></div>
                                    <div className="h-2 w-full bg-white/10 rounded mb-2"></div>
                                    <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                                </div>
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-8 animate-pulse">
                                    <div className="h-2 w-1/2 bg-purple-500/30 rounded mb-4"></div>
                                    <div className="h-2 w-3/4 bg-white/10 rounded mb-2"></div>
                                    <div className="h-2 w-full bg-white/10 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
