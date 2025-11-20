import { Database, BarChart, Archive, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DataService() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Data <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Management</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive data solutions including backup, recovery, and analytics for informed decision-making.
                    </p>
                </div>
            </section>

            {/* Service Overview */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6 text-white">Enterprise Data Solutions</h2>
                            <p className="text-lg text-gray-400 leading-relaxed max-w-4xl">
                                Secure, reliable, and intelligent data management solutions that protect your valuable information while providing insights for strategic decision-making. From automated backups to advanced analytics, we ensure your data works for you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Features */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-white">Key Capabilities</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Archive className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Automated Backups</h3>
                            <p className="text-gray-400">
                                Scheduled, automated backups with cross-region redundancy and point-in-time recovery options.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <BarChart className="w-8 h-8 text-pink-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Real-Time Analytics</h3>
                            <p className="text-gray-400">
                                Process and analyze data in real-time to gain immediate insights and make data-driven decisions.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:bg-white/10 transition-colors group">
                            <div className="w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Database className="w-8 h-8 text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-white">Disaster Recovery</h3>
                            <p className="text-gray-400">
                                Comprehensive disaster recovery planning with tested failovers and business continuity procedures.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 relative overflow-hidden px-6">
                <div className="container mx-auto relative z-10">
                    <div className="p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center max-w-4xl mx-auto backdrop-blur-xl">
                        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Unlock Your Data's Potential?</h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Let our data experts help you implement a comprehensive data management strategy that protects and empowers your business.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="px-8">Get Data Solutions</Button>
                            </Link>
                            <Link href="/services">
                                <Button variant="outline" size="lg" className="px-8 border-white/20 hover:bg-white/10 text-white">View All Services</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
