import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Pricing() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Pricing <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">Plans</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Flexible enterprise infrastructure pricing plans designed to scale with your business needs.
                    </p>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-white">Choose Your Plan</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Transparent pricing with no hidden fees. Scale up or down as your business evolves.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Starter Plan */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors flex flex-col">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2 text-white">Starter</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">$2,499</span>
                                    <span className="text-gray-400">/month</span>
                                </div>
                                <p className="text-gray-400 mt-4 text-sm">
                                    Perfect for growing businesses ready to scale their infrastructure.
                                </p>
                            </div>

                            <div className="flex-grow mb-8">
                                <h4 className="text-sm font-bold mb-4 text-white">What's included:</h4>
                                <ul className="space-y-3">
                                    {[
                                        'Cloud infrastructure setup',
                                        'Basic security monitoring',
                                        '24/7 support',
                                        'Monthly performance reports',
                                        '99.9% uptime SLA'
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                                            <Check className="w-4 h-4 text-indigo-400" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/contact">
                                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white">Get Started</Button>
                            </Link>
                        </div>

                        {/* Professional Plan */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-indigo-500/50 backdrop-blur-lg flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-indigo-500/20">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-blue-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                                Most Popular
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2 text-indigo-400">Professional</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">$7,999</span>
                                    <span className="text-gray-400">/month</span>
                                </div>
                                <p className="text-gray-400 mt-4 text-sm">
                                    Advanced infrastructure solutions for established enterprises.
                                </p>
                            </div>

                            <div className="flex-grow mb-8">
                                <h4 className="text-sm font-bold mb-4 text-white">Everything in Starter, plus:</h4>
                                <ul className="space-y-3">
                                    {[
                                        'Multi-cloud deployment',
                                        'Advanced security suite',
                                        'Dedicated account manager',
                                        'Weekly performance reports',
                                        'Priority support',
                                        'Custom integrations'
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                                            <Check className="w-4 h-4 text-blue-400" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/contact">
                                <Button className="w-full">Get Started</Button>
                            </Link>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors flex flex-col">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2 text-white">Enterprise</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">Custom</span>
                                </div>
                                <p className="text-gray-400 mt-4 text-sm">
                                    Tailored solutions for large-scale enterprise requirements.
                                </p>
                            </div>

                            <div className="flex-grow mb-8">
                                <h4 className="text-sm font-bold mb-4 text-white">Everything in Professional, plus:</h4>
                                <ul className="space-y-3">
                                    {[
                                        'Custom infrastructure design',
                                        'White-glove implementation',
                                        'Dedicated support team',
                                        'Real-time reporting',
                                        '99.99% uptime SLA',
                                        'On-site consulting',
                                        'Custom development'
                                    ].map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                                            <Check className="w-4 h-4 text-purple-400" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/contact">
                                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white">Contact Sales</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
