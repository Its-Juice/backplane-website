import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function PortfolioPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        Our Portfolio
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A showcase of our diverse projects, ranging from secure infrastructure deployments to custom security software development.
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "SecureCloud Migration",
                            category: "Infrastructure",
                            image: "bg-gradient-to-br from-blue-900 to-slate-900",
                            desc: "Complete migration of a legacy on-premise data center to a hardened AWS environment for a logistics company."
                        },
                        {
                            title: "Sentinel Dashboard",
                            category: "Software Development",
                            image: "bg-gradient-to-br from-indigo-900 to-purple-900",
                            desc: "Custom-built real-time threat monitoring dashboard for a government agency, integrating multiple data sources."
                        },
                        {
                            title: "Global Corp Audit",
                            category: "Compliance",
                            image: "bg-gradient-to-br from-emerald-900 to-teal-900",
                            desc: "ISO 27001 certification preparation and internal audit for a multinational corporation with offices in 5 countries."
                        },
                        {
                            title: "Red Team Operation: Project Alpha",
                            category: "Offensive Security",
                            image: "bg-gradient-to-br from-red-900 to-orange-900",
                            desc: "A 3-month covert red team engagement to test physical and digital security controls of a high-value facility."
                        }
                    ].map((project, i) => (
                        <div key={i} className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                            <div className={`h-64 ${project.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                {/* Placeholder content for image area */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 text-9xl font-bold text-white mix-blend-overlay">
                                    {i + 1}
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">{project.category}</div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.desc}
                                </p>
                                <div className="flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors cursor-pointer">
                                    View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
