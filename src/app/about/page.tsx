import { Star, Award, Shield, Users, Globe, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">Backplane</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We are on a mission to democratize enterprise-grade infrastructure.
                        Founded by engineers, built for engineers, and trusted by businesses worldwide.
                    </p>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-12">
                            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                                <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    Backplane exists to bridge the gap between complex enterprise infrastructure needs and practical, scalable solutions. We believe that every business deserves access to enterprise-grade technology infrastructure without the complexity and overhead traditionally associated with it.
                                </p>
                                <p className="text-gray-400 leading-relaxed text-lg mt-4">
                                    We strive to build tools that empower developers and businesses to focus on what they do best—building great products—while we handle the heavy lifting of infrastructure management.
                                </p>
                            </div>

                            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                                <h2 className="text-3xl font-bold mb-6 text-white">Our Vision</h2>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    To be the world's most trusted partner in enterprise infrastructure, enabling businesses of all sizes to achieve their full technological potential through reliable, secure, and innovative solutions.
                                </p>
                            </div>

                            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                                <h2 className="text-3xl font-bold mb-8 text-white">Core Values</h2>
                                <ul className="space-y-6">
                                    {[
                                        { title: 'Reliability First', desc: 'We build infrastructure that businesses can depend on, with zero compromise on uptime.' },
                                        { title: 'Continuous Innovation', desc: 'We never settle. We continuously evolve our stack to meet emerging challenges.' },
                                        { title: 'Customer Obsession', desc: 'We succeed only when our clients succeed. Your growth is our growth.' },
                                        { title: 'Radical Transparency', desc: 'We believe in honest, clear communication, especially when things go wrong.' },
                                        { title: 'Security by Design', desc: 'We protect what matters most. Security is baked into every layer of our platform.' }
                                    ].map((value, index) => (
                                        <li key={index} className="flex items-start gap-4 group">
                                            <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/40 transition-colors">
                                                <Star className="w-5 h-5 text-indigo-400" />
                                            </div>
                                            <div>
                                                <strong className="text-white block text-lg mb-1">{value.title}</strong>
                                                <span className="text-gray-400">{value.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-8 lg:sticky lg:top-32">
                            {/* Stats Card */}
                            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                                <h2 className="text-2xl font-bold mb-8 text-center text-white">Company Impact</h2>
                                <div className="grid grid-cols-2 gap-8">
                                    {[
                                        { number: '2015', label: 'Founded' },
                                        { number: '500+', label: 'Enterprise Clients' },
                                        { number: '99.99%', label: 'Uptime SLA' },
                                        { number: '24/7', label: 'Global Support' },
                                        { number: '15+', label: 'Data Centers' },
                                        { number: '50M+', label: 'Requests/Day' }
                                    ].map((stat, index) => (
                                        <div key={index} className="text-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                                            <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                                            <div className="text-sm text-gray-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Certifications */}
                            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                                <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                    <Shield className="w-6 h-6 text-green-400" />
                                    Security & Compliance
                                </h2>
                                <p className="text-gray-400 mb-6">
                                    We adhere to the strictest industry standards to ensure your data is always protected.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant', 'HIPAA Ready', 'PCI DSS'].map((cert, i) => (
                                        <span key={i} className="px-4 py-2 rounded-full bg-white/10 text-sm text-white border border-white/10 flex items-center gap-2">
                                            <Award className="w-4 h-4 text-indigo-400" />
                                            {cert}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Join Team CTA */}
                            <div className="p-10 rounded-3xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 border border-white/10 text-center backdrop-blur-lg relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                                <h3 className="text-2xl font-bold mb-4 text-white relative z-10">Join Our Team</h3>
                                <p className="text-gray-300 mb-8 relative z-10">
                                    We're always looking for talented individuals to help us build the future of infrastructure.
                                </p>
                                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white relative z-10">
                                    View Open Positions
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 px-6 bg-white/[0.02]">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-white">Our Leadership</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Guided by industry veterans with decades of experience in cloud computing and infrastructure.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Alex V.", role: "Chief Executive Officer", bio: "Former VP of Engineering at CloudScale. 15+ years in distributed systems." },
                            { name: "Sarah K.", role: "Chief Technology Officer", bio: "PhD in Computer Science. Pioneer in edge computing architectures." },
                            { name: "David R.", role: "VP of Operations", bio: "Expert in scaling global infrastructure teams and 24/7 support operations." }
                        ].map((member, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg text-center group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-indigo-500/20">
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-indigo-400 font-medium mb-4">{member.role}</p>
                                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History Timeline */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-bold mb-16 text-center text-white">Our Journey</h2>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                        {[
                            { year: "2015", title: "The Beginning", desc: "Backplane was founded with a simple mission: make cloud infrastructure accessible." },
                            { year: "2017", title: "Global Expansion", desc: "Opened our first international data centers in London and Singapore." },
                            { year: "2019", title: "Enterprise Launch", desc: "Launched our dedicated enterprise platform, securing our first Fortune 500 client." },
                            { year: "2022", title: "Edge Network", desc: "Rolled out our global edge network, reducing latency by 60% for end users." },
                            { year: "2025", title: "The Future", desc: "Continuing to innovate with AI-driven infrastructure management." }
                        ].map((event, i) => (
                            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-[#0A0A0A] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                                    <div className="flex items-center justify-between space-x-2 mb-1">
                                        <div className="font-bold text-white">{event.title}</div>
                                        <time className="font-mono text-indigo-400 text-sm">{event.year}</time>
                                    </div>
                                    <div className="text-gray-400 text-sm">{event.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-white">Ready to work with us?</h2>
                    <Link href="/contact">
                        <Button size="lg" className="rounded-full px-8">Contact Our Team</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
