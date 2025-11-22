import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, X } from "lucide-react";

export default function PricingPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        Transparent Pricing
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Choose the security package that fits your business needs. No hidden fees, just solid protection.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            name: "Starter",
                            price: "€999",
                            period: "/month",
                            desc: "Essential protection for small businesses and startups.",
                            features: [
                                "24/7 SOC Monitoring (Basic)",
                                "Monthly Vulnerability Scan",
                                "Endpoint Protection (up to 20)",
                                "Email Support",
                                "Quarterly Security Report"
                            ],
                            notIncluded: ["Incident Response Retainer", "Penetration Testing", "Compliance Assistance"],
                            cta: "Get Started",
                            popular: false
                        },
                        {
                            name: "Professional",
                            price: "€2,499",
                            period: "/month",
                            desc: "Comprehensive security for growing mid-sized companies.",
                            features: [
                                "24/7 SOC Monitoring (Advanced)",
                                "Weekly Vulnerability Scans",
                                "Endpoint Protection (up to 100)",
                                "Priority Email & Phone Support",
                                "Monthly Security Report",
                                "Incident Response Retainer (Basic)",
                                "Annual Penetration Test (Web)"
                            ],
                            notIncluded: ["Compliance Assistance", "Dedicated CISO"],
                            cta: "Choose Professional",
                            popular: true
                        },
                        {
                            name: "Enterprise",
                            price: "Custom",
                            period: "",
                            desc: "Tailored solutions for large organizations with complex needs.",
                            features: [
                                "24/7 SOC Monitoring (Premium)",
                                "Continuous Vulnerability Management",
                                "Unlimited Endpoint Protection",
                                "24/7 Dedicated Support Channel",
                                "Weekly Executive Reports",
                                "Full Incident Response Retainer",
                                "Bi-Annual Penetration Testing",
                                "Compliance Assistance (ISO/GDPR)",
                                "Virtual CISO Service"
                            ],
                            notIncluded: [],
                            cta: "Contact Sales",
                            popular: false
                        }
                    ].map((plan, i) => (
                        <div key={i} className={`relative p-8 rounded-3xl border flex flex-col ${plan.popular ? 'bg-white/10 border-indigo-500 shadow-2xl shadow-indigo-500/20' : 'bg-white/5 border-white/10'}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-600 text-white text-sm font-bold uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-400">{plan.period}</span>
                                </div>
                                <p className="text-gray-400 text-sm">{plan.desc}</p>
                            </div>

                            <div className="flex-grow space-y-4 mb-8">
                                {plan.features.map((feature, j) => (
                                    <div key={j} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-green-400 shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                                {plan.notIncluded.map((feature, j) => (
                                    <div key={j} className="flex items-start gap-3 text-sm text-gray-600">
                                        <X className="w-5 h-5 shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact" className="w-full">
                                <Button className={`w-full rounded-full py-6 ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-white text-black hover:bg-gray-200'}`}>
                                    {plan.cta}
                                </Button>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* FAQ Link */}
                <div className="text-center">
                    <p className="text-gray-400">
                        Have questions about our pricing? <Link href="/faq" className="text-indigo-400 hover:underline">Check our FAQ</Link> or <Link href="/contact" className="text-indigo-400 hover:underline">contact us</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
