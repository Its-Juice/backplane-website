import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Handshake, Globe, Shield } from "lucide-react";

export default function PartnersPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        Our Partners
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We collaborate with industry leaders to deliver best-in-class security solutions to our clients.
                    </p>
                </div>

                {/* Technology Partners */}
                <div className="mb-24">
                    <h2 className="text-2xl font-bold text-white mb-12 text-center uppercase tracking-widest opacity-70">Technology Alliances</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {["Microsoft", "AWS", "CrowdStrike", "SentinelOne", "Palo Alto Networks", "Fortinet", "Splunk", "Tenable"].map((partner, i) => (
                            <div key={i} className="h-32 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-colors group">
                                <span className="text-xl font-bold text-gray-500 group-hover:text-white transition-colors">{partner}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partnership Program */}
                <div className="bg-gradient-to-br from-indigo-900/20 to-black rounded-3xl p-12 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Become a Partner</h2>
                            <p className="text-gray-400 mb-8 text-lg">
                                Join our partner program to expand your service portfolio with our managed security services. Ideal for MSPs, VARs, and System Integrators.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Shield className="w-5 h-5 text-indigo-400" /> White-label SOC services
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Handshake className="w-5 h-5 text-indigo-400" /> Attractive revenue sharing
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Globe className="w-5 h-5 text-indigo-400" /> Joint marketing opportunities
                                </li>
                            </ul>
                            <Link href="/contact">
                                <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-gray-200">
                                    Apply for Partnership
                                </Button>
                            </Link>
                        </div>
                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6">Partner Tiers</h3>
                            <div className="space-y-4">
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex justify-between items-center">
                                    <span className="font-bold text-gray-300">Silver</span>
                                    <span className="text-sm text-gray-500">Referral Only</span>
                                </div>
                                <div className="p-4 rounded-xl bg-indigo-900/20 border border-indigo-500/30 flex justify-between items-center">
                                    <span className="font-bold text-indigo-300">Gold</span>
                                    <span className="text-sm text-gray-400">Reseller + Support</span>
                                </div>
                                <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex justify-between items-center">
                                    <span className="font-bold text-yellow-500">Platinum</span>
                                    <span className="text-sm text-gray-500">Strategic Alliance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
