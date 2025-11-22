import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase, Heart, Zap, Globe } from "lucide-react";

export default function CareersPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        Join the Mission
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We are looking for passionate problem-solvers to help us build a safer digital future.
                    </p>
                </div>

                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {[
                        {
                            title: "Remote-First Culture",
                            desc: "Work from anywhere in Greece or Europe. We believe in output, not hours in a chair.",
                            icon: <Globe className="w-6 h-6" />
                        },
                        {
                            title: "Continuous Learning",
                            desc: "Annual budget for certifications (OSCP, CISSP, AWS) and conferences.",
                            icon: <Zap className="w-6 h-6" />
                        },
                        {
                            title: "Comprehensive Health",
                            desc: "Top-tier private health insurance for you and your family.",
                            icon: <Heart className="w-6 h-6" />
                        }
                    ].map((benefit, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 mb-6">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                            <p className="text-gray-400">{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Open Positions */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-10">Open Positions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                role: "Senior Penetration Tester",
                                dept: "Offensive Security",
                                loc: "Remote / Athens",
                                type: "Full-time"
                            },
                            {
                                role: "SOC Analyst (L2)",
                                dept: "Security Operations",
                                loc: "Remote",
                                type: "Shift-based"
                            },
                            {
                                role: "Cloud Security Architect",
                                dept: "Infrastructure",
                                loc: "Athens",
                                type: "Full-time"
                            },
                            {
                                role: "Frontend Developer (React/Next.js)",
                                dept: "Engineering",
                                loc: "Remote",
                                type: "Contract"
                            }
                        ].map((job, i) => (
                            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{job.role}</h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                        <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.dept}</span>
                                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.loc}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 group-hover:border-indigo-500/50">
                                        Apply Now
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
