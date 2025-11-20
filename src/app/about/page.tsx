import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">Backplane</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Learn about our mission to provide enterprise infrastructure solutions that transform businesses worldwide.
                    </p>
                </div>
            </section>

            {/* About Content */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                                <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    Backplane exists to bridge the gap between complex enterprise infrastructure needs and practical, scalable solutions. We believe that every business deserves access to enterprise-grade technology infrastructure without the complexity and overhead traditionally associated with it.
                                </p>
                            </div>

                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                                <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    To be the world's most trusted partner in enterprise infrastructure, enabling businesses of all sizes to achieve their full technological potential through reliable, secure, and innovative solutions.
                                </p>
                            </div>

                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                                <h2 className="text-2xl font-bold mb-6 text-white">Our Values</h2>
                                <ul className="space-y-4">
                                    {[
                                        { title: 'Reliability', desc: 'We build infrastructure that businesses can depend on' },
                                        { title: 'Innovation', desc: 'We continuously evolve to meet emerging challenges' },
                                        { title: 'Partnership', desc: 'We succeed when our clients succeed' },
                                        { title: 'Transparency', desc: 'We believe in honest, clear communication' },
                                        { title: 'Security', desc: 'We protect what matters most to our clients' }
                                    ].map((value, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Star className="w-5 h-5 text-indigo-400 mt-1 shrink-0" />
                                            <div>
                                                <strong className="text-white block">{value.title}</strong>
                                                <span className="text-gray-400 text-sm">{value.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="lg:sticky lg:top-32 space-y-8">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                                <h2 className="text-2xl font-bold mb-8 text-center text-white">Company Statistics</h2>
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { number: '2015', label: 'Founded' },
                                        { number: '500+', label: 'Enterprise Clients' },
                                        { number: '99.9%', label: 'Uptime SLA' },
                                        { number: '24/7', label: 'Support Available' }
                                    ].map((stat, index) => (
                                        <div key={index} className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                            <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                                            <div className="text-sm text-gray-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 border border-white/10 text-center backdrop-blur-lg">
                                <h3 className="text-xl font-bold mb-4 text-white">Join Our Team</h3>
                                <p className="text-gray-300 mb-6 text-sm">
                                    We're always looking for talented individuals to help us build the future of infrastructure.
                                </p>
                                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white">
                                    View Careers
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
