import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HelpCircle, MessageCircle, FileQuestion, Search } from "lucide-react";

export default function KnowledgeBasePage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        Knowledge Base
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
                        Find answers to your questions and learn how to get the most out of Backplane services.
                    </p>
                    <div className="max-w-xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="How can we help you?"
                            className="w-full pl-12 pr-4 py-4 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                    </div>
                </div>

                {/* Popular Articles */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8">Popular Articles</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "How to configure 2FA for the client portal",
                            "Understanding your monthly security report",
                            "Whitelisting Backplane IP addresses",
                            "Integrating Slack with SOC alerts",
                            "Resetting your API keys",
                            "Billing and invoice explanations"
                        ].map((article, i) => (
                            <Link key={i} href="#" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-start gap-3 group">
                                <FileQuestion className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                                <span className="text-gray-300 group-hover:text-white transition-colors">{article}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Support Options */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl bg-indigo-900/20 border border-indigo-500/20 text-center">
                        <MessageCircle className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Live Chat</h3>
                        <p className="text-gray-400 mb-6">Chat with our support team in real-time.</p>
                        <Button className="rounded-full bg-indigo-600 hover:bg-indigo-700">Start Chat</Button>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                        <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Submit a Ticket</h3>
                        <p className="text-gray-400 mb-6">For complex technical issues, open a support ticket.</p>
                        <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">Open Ticket</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
