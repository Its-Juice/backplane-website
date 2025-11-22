import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Terminal, Download, Github, Code } from "lucide-react";

export default function ToolsPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        Tools & Downloads
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Open-source tools, scripts, and utilities developed by the Backplane research team to help the community.
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {[
                        {
                            title: "PortScanner Pro",
                            desc: "A lightweight, fast asynchronous port scanner written in Rust.",
                            lang: "Rust",
                            stars: "1.2k"
                        },
                        {
                            title: "LogAnalyzer",
                            desc: "Python script to parse and visualize Apache/Nginx access logs for anomalies.",
                            lang: "Python",
                            stars: "850"
                        },
                        {
                            title: "SubdomainEnum",
                            desc: "Automated subdomain enumeration tool integrating multiple data sources.",
                            lang: "Go",
                            stars: "2.1k"
                        },
                        {
                            title: "ConfigHardener",
                            desc: "Bash scripts to automatically harden Linux server configurations based on CIS benchmarks.",
                            lang: "Bash",
                            stars: "500"
                        },
                        {
                            title: "PhishDetector",
                            desc: "Browser extension to analyze URLs and detect potential phishing attempts in real-time.",
                            lang: "JavaScript",
                            stars: "300"
                        },
                        {
                            title: "AD-Audit",
                            desc: "PowerShell module for auditing Active Directory environments for common misconfigurations.",
                            lang: "PowerShell",
                            stars: "1.5k"
                        }
                    ].map((tool, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-xl bg-black/50 border border-white/5 text-indigo-400">
                                    <Terminal className="w-6 h-6" />
                                </div>
                                <div className="flex items-center gap-1 text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full">
                                    <Github className="w-3 h-3" /> {tool.stars}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{tool.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 h-12">
                                {tool.desc}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <span className="text-xs font-mono text-gray-500">{tool.lang}</span>
                                <Button variant="ghost" size="sm" className="text-white hover:text-indigo-300 p-0 h-auto">
                                    View on GitHub <ArrowRight className="w-3 h-3 ml-1" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
