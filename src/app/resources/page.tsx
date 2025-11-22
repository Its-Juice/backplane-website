import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, Download, BookOpen, Video } from "lucide-react";

export default function ResourcesPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        Cybersecurity Resources
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Curated guides, whitepapers, and checklists to help you navigate the complex landscape of information security.
                    </p>
                </div>

                {/* Categories */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            title: "Whitepapers",
                            icon: <FileText className="w-8 h-8 text-indigo-400" />,
                            items: ["The State of Greek Cybersecurity 2025", "Zero Trust Implementation Guide", "Cloud Security Best Practices"]
                        },
                        {
                            title: "Checklists",
                            icon: <BookOpen className="w-8 h-8 text-blue-400" />,
                            items: ["Ransomware Readiness Checklist", "ISO 27001 Compliance Checklist", "Remote Work Security Audit"]
                        },
                        {
                            title: "Webinars",
                            icon: <Video className="w-8 h-8 text-purple-400" />,
                            items: ["Incident Response Masterclass", "Securing the Supply Chain", "GDPR & Privacy Updates"]
                        }
                    ].map((category, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                            <div className="mb-6 p-4 rounded-2xl bg-black/50 w-fit border border-white/5">
                                {category.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                            <ul className="space-y-4">
                                {category.items.map((item, j) => (
                                    <li key={j} className="group flex items-start gap-3 cursor-pointer">
                                        <Download className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors shrink-0" />
                                        <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="bg-indigo-900/20 rounded-3xl p-12 border border-indigo-500/20 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Join 5,000+ professionals who receive our weekly cybersecurity digest. No spam, just value.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your work email"
                            className="flex-grow px-6 py-3 rounded-full bg-black/50 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                        <Button className="rounded-full px-8 bg-indigo-600 hover:bg-indigo-700 text-white">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
