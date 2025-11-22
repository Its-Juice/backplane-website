import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, UserCheck, FileText, Rocket, Headphones } from "lucide-react";

export default function ClientOnboardingPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        Client Onboarding
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Experience a seamless transition to Backplane. Our structured onboarding process ensures your systems are integrated securely and efficiently.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto mb-24">
                    <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent md:left-1/2 md:-translate-x-1/2"></div>

                    {[
                        {
                            title: "Discovery & Assessment",
                            desc: "We begin with a deep dive into your current infrastructure, understanding your business goals and security requirements.",
                            icon: <FileText className="w-6 h-6" />
                        },
                        {
                            title: "Strategy & Planning",
                            desc: "Our architects design a tailored roadmap for service integration, defining timelines and deliverables.",
                            icon: <UserCheck className="w-6 h-6" />
                        },
                        {
                            title: "Integration & Deployment",
                            desc: "We deploy necessary tools, configure monitoring agents, and harden your systems according to best practices.",
                            icon: <Rocket className="w-6 h-6" />
                        },
                        {
                            title: "Validation & Handover",
                            desc: "Rigorous testing ensures everything is working as expected. We then provide documentation and training.",
                            icon: <Headphones className="w-6 h-6" />
                        }
                    ].map((step, i) => (
                        <div key={i} className={`relative flex items-start gap-8 mb-12 md:justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="hidden md:block w-5/12"></div>

                            <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-[#0A0A0A] border-2 border-indigo-500 shrink-0 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                                <div className="text-indigo-400">{step.icon}</div>
                            </div>

                            <div className="w-full md:w-5/12 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to get started?</h2>
                    <Link href="/contact">
                        <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-gray-200">
                            Become a Client
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
