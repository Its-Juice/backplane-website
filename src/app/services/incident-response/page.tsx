import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Siren, Clock, Lock, RefreshCw } from "lucide-react";

export default function IncidentResponsePage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                        <Siren className="w-4 h-4" /> Emergency Response
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        Incident Response
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        When seconds count, our Incident Response team is ready. We provide rapid containment, eradication, and recovery services to minimize business impact.
                    </p>
                    <div className="mt-10">
                        <Link href="/contact">
                            <Button size="lg" className="rounded-full px-10 py-7 text-lg bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/20">
                                Report an Incident
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Lifecycle */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {[
                        {
                            step: "Preparation",
                            desc: "Developing IR plans and playbooks tailored to your environment.",
                            icon: <Lock className="w-6 h-6" />
                        },
                        {
                            step: "Detection & Analysis",
                            desc: "Identifying the scope, origin, and nature of the attack.",
                            icon: <Siren className="w-6 h-6" />
                        },
                        {
                            step: "Containment",
                            desc: "Isolating affected systems to prevent further spread.",
                            icon: <Clock className="w-6 h-6" />
                        },
                        {
                            step: "Recovery",
                            desc: "Restoring systems and verifying security before going live.",
                            icon: <RefreshCw className="w-6 h-6" />
                        }
                    ].map((phase, i) => (
                        <div key={i} className="relative p-8 rounded-2xl bg-white/5 border border-white/10 overflow-hidden group hover:bg-white/10 transition-colors">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <div className="text-6xl font-bold">{i + 1}</div>
                            </div>
                            <div className="mb-4 p-3 rounded-xl bg-red-500/20 text-red-400 w-fit">
                                {phase.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{phase.step}</h3>
                            <p className="text-gray-400 text-sm">{phase.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Retainer Info */}
                <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl border border-white/10 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-white mb-4">IR Retainer Services</h2>
                        <p className="text-gray-400 mb-6 text-lg">
                            Don't wait for a breach to find help. Our IR Retainer guarantees a defined SLA for response times, ensuring experts are on your side immediately when a crisis hits.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-2 text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Guaranteed Response Times</li>
                            <li className="flex items-center gap-2 text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Pre-approved Terms & Conditions</li>
                            <li className="flex items-center gap-2 text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Proactive Security Services included</li>
                        </ul>
                        <Link href="/contact">
                            <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
                                Inquire About Retainers
                            </Button>
                        </Link>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                                <span className="text-gray-400">Service Level</span>
                                <span className="text-white font-bold">Enterprise</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Remote Response</span>
                                    <span className="text-green-400 font-mono">&lt; 1 Hour</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">On-site Response</span>
                                    <span className="text-green-400 font-mono">&lt; 4 Hours</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">24/7 Availability</span>
                                    <span className="text-green-400 font-mono">Included</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
