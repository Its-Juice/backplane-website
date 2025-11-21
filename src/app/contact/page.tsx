import { Mail, MapPin, Phone, Clock, MessageSquare, Globe, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                        Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Have questions about our enterprise solutions? Our team is ready to help you build the future of your infrastructure.
                    </p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                            <h2 className="text-3xl font-bold mb-8 text-white">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">First Name</label>
                                        <input type="text" className="w-full px-6 py-4 rounded-2xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-300 ml-1">Last Name</label>
                                        <input type="text" className="w-full px-6 py-4 rounded-2xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                                    <input type="email" className="w-full px-6 py-4 rounded-2xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="placeholder@backplane.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Subject</label>
                                    <select className="w-full px-6 py-4 rounded-2xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors appearance-none">
                                        <option>Sales Inquiry</option>
                                        <option>Technical Support</option>
                                        <option>Partnership Opportunity</option>
                                        <option>General Question</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                                    <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="How can we help you?"></textarea>
                                </div>
                                <Button size="lg" className="w-full rounded-2xl py-6 text-lg">Send Message</Button>
                            </form>
                        </div>

                        {/* Contact Info & Departments */}
                        <div className="space-y-12">
                            {/* Quick Info */}
                            <div className="grid gap-8">
                                <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Headquarters</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            123 Tech Plaza, Suite 400<br />
                                            San Francisco, CA 94107<br />
                                            United States
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
                                        <p className="text-gray-400 mb-1">+30 210 6969 420</p>
                                        <p className="text-sm text-gray-500">Mon-Fri, 9am - 6pm PST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">General Inquiries</h3>
                                        <p className="text-gray-400">placeholder@backplane.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Department Contacts */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">Direct Departments</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { name: "Sales Team", email: "placeholder@backplane.com" },
                                        { name: "Technical Support", email: "placeholder@backplane.com" },
                                        { name: "Press & Media", email: "placeholder@backplane.com" },
                                        { name: "Careers", email: "placeholder@backplane.com" }
                                    ].map((dept, i) => (
                                        <a key={i} href={`mailto:${dept.email}`} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                            <span className="text-gray-300 font-medium">{dept.name}</span>
                                            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="py-20 px-6 bg-white/[0.02]">
                <div className="container mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
                        <Globe className="w-4 h-4 text-indigo-400" />
                        <span className="text-sm text-indigo-300 font-medium">Global Network</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">We Are Everywhere You Need Us</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                        With data centers in 15+ regions and edge locations in 100+ cities, we ensure your data is always close to your users.
                    </p>

                    {/* Abstract Map Representation */}
                    <div className="relative max-w-5xl mx-auto aspect-[2/1] rounded-3xl bg-[#050505] border border-white/10 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        {/* Dots representing locations */}
                        {[
                            { top: '30%', left: '20%' }, // NA West
                            { top: '35%', left: '28%' }, // NA East
                            { top: '25%', left: '48%' }, // Europe
                            { top: '40%', left: '75%' }, // Asia
                            { top: '65%', left: '85%' }, // Australia
                            { top: '60%', left: '30%' }, // SA
                        ].map((pos, i) => (
                            <div key={i} className="absolute w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(99,102,241,0.8)]" style={pos}>
                                <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-75"></div>
                            </div>
                        ))}
                        <div className="absolute bottom-6 left-6 text-xs text-gray-500 font-mono">
                            STATUS: ALL SYSTEMS OPERATIONAL
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "What is your typical response time?", a: "For enterprise clients with SLA, we guarantee a response within 15 minutes. For standard inquiries, we typically respond within 2-4 hours during business hours." },
                            { q: "Do you offer 24/7 support?", a: "Yes, our dedicated support team is available 24/7/365 for all critical issues and enterprise customers." },
                            { q: "Where are your data centers located?", a: "We have primary data centers in North America, Europe, and Asia-Pacific regions, with edge locations globally." },
                            { q: "Can I schedule a demo?", a: "Absolutely! Use the contact form above to request a personalized demo of our platform tailored to your needs." }
                        ].map((faq, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 text-indigo-400 mt-1 shrink-0" />
                                    {faq.q}
                                </h3>
                                <p className="text-gray-400 leading-relaxed pl-8">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
