import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

export default function BlogPage() {
    const posts = [
        {
            title: "The Evolution of Ransomware in 2025",
            excerpt: "As ransomware tactics evolve, so must our defenses. Explore the latest trends in double-extortion and supply chain attacks.",
            date: "Nov 15, 2025",
            author: "Alex K.",
            category: "Threat Intelligence",
            readTime: "5 min read"
        },
        {
            title: "Zero Trust: More Than Just a Buzzword",
            excerpt: "Implementing a true Zero Trust architecture requires a cultural shift, not just new technology. Here is how to get started.",
            date: "Nov 02, 2025",
            author: "Maria S.",
            category: "Architecture",
            readTime: "8 min read"
        },
        {
            title: "Securing Cloud Native Applications",
            excerpt: "Best practices for securing containers, Kubernetes clusters, and serverless functions in a production environment.",
            date: "Oct 28, 2025",
            author: "Dimitris P.",
            category: "Cloud Security",
            readTime: "6 min read"
        },
        {
            title: "The Human Element: Phishing Trends",
            excerpt: "Social engineering remains the top entry point for attackers. Learn about the newest psychological triggers used in phishing.",
            date: "Oct 10, 2025",
            author: "Elena G.",
            category: "Awareness",
            readTime: "4 min read"
        },
        {
            title: "NIS2 Directive: What Greek Businesses Need to Know",
            excerpt: "A comprehensive guide to the new EU cybersecurity directive and how it impacts compliance requirements in Greece.",
            date: "Sep 22, 2025",
            author: "Yiannis L.",
            category: "Compliance",
            readTime: "10 min read"
        },
        {
            title: "AI in Cybersecurity: Friend or Foe?",
            excerpt: "Analyzing how Artificial Intelligence is being used both to defend networks and to craft more sophisticated attacks.",
            date: "Sep 05, 2025",
            author: "Alex K.",
            category: "Technology",
            readTime: "7 min read"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        Insights & News
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Expert analysis, industry trends, and security updates from the Backplane team.
                    </p>
                </div>

                {/* Featured Post */}
                <div className="mb-20">
                    <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="h-64 md:h-auto bg-gradient-to-br from-indigo-900 to-black relative overflow-hidden">
                                <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay"></div>
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-4xl">Featured</div>
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-sm text-indigo-400 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">Threat Intelligence</span>
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Nov 15, 2025</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                                    The Evolution of Ransomware in 2025
                                </h2>
                                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                                    As ransomware tactics evolve, so must our defenses. Explore the latest trends in double-extortion and supply chain attacks, and learn how to prepare your organization.
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-300">
                                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs">AK</div>
                                        Alex K.
                                    </div>
                                    <span className="text-gray-600">•</span>
                                    <span className="text-sm text-gray-400">5 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.slice(1).map((post, index) => (
                        <article key={index} className="flex flex-col h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                            <div className="mb-4 flex items-center justify-between text-sm">
                                <span className="text-indigo-400 font-medium">{post.category}</span>
                                <span className="text-gray-500">{post.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <User className="w-4 h-4" /> {post.author}
                                </div>
                                <span className="text-xs text-gray-500">{post.readTime}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
