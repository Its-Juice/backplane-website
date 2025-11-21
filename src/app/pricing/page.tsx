import { Check, X, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Pricing() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                        Simple, Transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">Pricing</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Choose the plan that fits your needs. No hidden fees, no surprises. Scale as you grow.
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Starter Plan */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 flex flex-col relative group hover:-translate-y-2">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                                <p className="text-gray-400 text-sm mb-6">Perfect for small projects and startups.</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">$49</span>
                                    <span className="text-gray-400">/month</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    "2 vCPU Cores",
                                    "4GB RAM",
                                    "80GB SSD Storage",
                                    "2TB Bandwidth",
                                    "Standard Support",
                                    "99.9% Uptime SLA"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white">Get Started</Button>
                        </div>

                        {/* Pro Plan */}
                        <div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-900/40 to-black/40 border border-indigo-500/30 backdrop-blur-lg relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-indigo-500/20 group hover:-translate-y-6 transition-all duration-300">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">Professional</h3>
                                <p className="text-indigo-200 text-sm mb-6">For growing businesses with higher demands.</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-white">$149</span>
                                    <span className="text-gray-400">/month</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    "8 vCPU Cores",
                                    "16GB RAM",
                                    "320GB NVMe Storage",
                                    "10TB Bandwidth",
                                    "Priority Support",
                                    "99.99% Uptime SLA",
                                    "Advanced Security",
                                    "Daily Backups"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-white">
                                        <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white border-none shadow-lg shadow-indigo-500/25">Get Started</Button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 flex flex-col group hover:-translate-y-2">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                                <p className="text-gray-400 text-sm mb-6">For mission-critical large scale applications.</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">Custom</span>
                                </div>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    "Custom vCPU & RAM",
                                    "Dedicated Hardware",
                                    "Unlimited Bandwidth",
                                    "24/7 Dedicated Support",
                                    "99.999% Uptime SLA",
                                    "Custom Security Rules",
                                    "Disaster Recovery",
                                    "Account Manager"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact">
                                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white">Contact Sales</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Comparison Table */}
            <section className="py-20 px-6 bg-white/[0.02]">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl font-bold mb-12 text-center text-white">Compare Features</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-4 px-6 text-gray-400 font-medium">Features</th>
                                    <th className="py-4 px-6 text-white font-bold text-center">Starter</th>
                                    <th className="py-4 px-6 text-indigo-400 font-bold text-center">Professional</th>
                                    <th className="py-4 px-6 text-white font-bold text-center">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {[
                                    { feature: "vCPU Cores", starter: "2", pro: "8", ent: "Custom" },
                                    { feature: "RAM", starter: "4GB", pro: "16GB", ent: "Custom" },
                                    { feature: "Storage", starter: "80GB SSD", pro: "320GB NVMe", ent: "Custom NVMe" },
                                    { feature: "Bandwidth", starter: "2TB", pro: "10TB", ent: "Unlimited" },
                                    { feature: "DDoS Protection", starter: "Standard", pro: "Advanced", ent: "Custom Rules" },
                                    { feature: "Support", starter: "Email", pro: "Priority Email & Chat", ent: "24/7 Dedicated Phone" },
                                    { feature: "SLA", starter: "99.9%", pro: "99.99%", ent: "99.999%" },
                                    { feature: "Backups", starter: "Weekly", pro: "Daily", ent: "Real-time / Hourly" },
                                    { feature: "API Access", starter: true, pro: true, ent: true },
                                    { feature: "SSO Integration", starter: false, pro: false, ent: true },
                                    { feature: "Audit Logs", starter: false, pro: true, ent: true },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6 text-gray-300">{row.feature}</td>
                                        <td className="py-4 px-6 text-center text-gray-400">
                                            {typeof row.starter === 'boolean' ? (row.starter ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />) : row.starter}
                                        </td>
                                        <td className="py-4 px-6 text-center text-white font-medium bg-indigo-500/5">
                                            {typeof row.pro === 'boolean' ? (row.pro ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />) : row.pro}
                                        </td>
                                        <td className="py-4 px-6 text-center text-gray-400">
                                            {typeof row.ent === 'boolean' ? (row.ent ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <X className="w-5 h-5 text-gray-600 mx-auto" />) : row.ent}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Enterprise Customization */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="rounded-3xl bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-white/10 p-10 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Need a Custom Solution?</h2>
                            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                                We understand that one size doesn't fit all. Our solution architects can design a bespoke infrastructure environment tailored exactly to your unique requirements, compliance needs, and budget.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <Link href="/contact">
                                    <Button size="lg" className="rounded-full px-10 py-6 text-lg">Talk to an Architect</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guarantee */}
            <section className="py-12 px-6 border-t border-white/5">
                <div className="container mx-auto text-center">
                    <div className="inline-flex items-center gap-3 text-gray-400">
                        <ShieldCheck className="w-6 h-6 text-green-400" />
                        <span className="text-lg">30-Day Money-Back Guarantee on all standard plans. No questions asked.</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
