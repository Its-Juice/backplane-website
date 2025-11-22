import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Book, Code, Server, Shield, Search } from "lucide-react";

export default function DocsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Documentation Hub
                    </h1>
                    <div className="max-w-xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search documentation..."
                            className="w-full pl-12 pr-4 py-4 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                    </div>
                </div>

                {/* Doc Categories */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {[
                        {
                            title: "Getting Started",
                            icon: <Book className="w-6 h-6 text-indigo-400" />,
                            links: ["Platform Overview", "Quick Start Guide", "Account Management"]
                        },
                        {
                            title: "API Reference",
                            icon: <Code className="w-6 h-6 text-pink-400" />,
                            links: ["Authentication", "Endpoints", "Rate Limits", "SDKs"]
                        },
                        {
                            title: "Agent Configuration",
                            icon: <Server className="w-6 h-6 text-blue-400" />,
                            links: ["Linux Installation", "Windows Installation", "Troubleshooting"]
                        },
                        {
                            title: "Security Policies",
                            icon: <Shield className="w-6 h-6 text-green-400" />,
                            links: ["Data Retention", "Encryption Standards", "Compliance"]
                        }
                    ].map((cat, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                {cat.icon}
                                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {cat.links.map((link, j) => (
                                    <li key={j}>
                                        <Link href="#" className="text-gray-400 hover:text-indigo-300 text-sm transition-colors block py-1">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
