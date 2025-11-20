import { MapPin, Phone, Mail, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Page Header */}
            <section className="relative pt-32 pb-20 overflow-hidden px-6">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-500">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Ready to transform your infrastructure? Contact our experts for a free consultation and customized solution proposal.
                    </p>
                </div>
            </section>

            {/* Contact Form and Info */}
            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                                <h2 className="text-2xl font-bold mb-8 text-white">Send us a Message</h2>

                                <form className="space-y-6" action="mailto:contact@backplane.com" method="post" encType="text/plain" noValidate>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-2">First Name <span className="text-indigo-400">*</span></label>
                                            <input type="text" id="firstName" name="firstName" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors" required autoComplete="given-name" />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-2">Last Name <span className="text-indigo-400">*</span></label>
                                            <input type="text" id="lastName" name="lastName" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors" required autoComplete="family-name" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address <span className="text-indigo-400">*</span></label>
                                            <input type="email" id="email" name="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors" required autoComplete="email" />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                                            <input type="tel" id="phone" name="phone" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors" autoComplete="tel" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                                        <input type="text" id="company" name="company" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors" autoComplete="organization" />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">Service Interest</label>
                                            <select id="service" name="service" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors appearance-none">
                                                <option value="" className="bg-gray-900">Select a service</option>
                                                <option value="cloud-infrastructure" className="bg-gray-900">Cloud Infrastructure</option>
                                                <option value="network-security" className="bg-gray-900">Network Security</option>
                                                <option value="data-management" className="bg-gray-900">Data Management</option>
                                                <option value="managed-services" className="bg-gray-900">Managed Services</option>
                                                <option value="consulting" className="bg-gray-900">Consulting Services</option>
                                                <option value="other" className="bg-gray-900">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-2">Project Budget Range</label>
                                            <select id="budget" name="budget" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors appearance-none">
                                                <option value="" className="bg-gray-900">Select budget range</option>
                                                <option value="under-10k" className="bg-gray-900">Under $10,000</option>
                                                <option value="10k-25k" className="bg-gray-900">$10,000 - $25,000</option>
                                                <option value="25k-50k" className="bg-gray-900">$25,000 - $50,000</option>
                                                <option value="50k-100k" className="bg-gray-900">$50,000 - $100,000</option>
                                                <option value="over-100k" className="bg-gray-900">Over $100,000</option>
                                                <option value="not-sure" className="bg-gray-900">Not sure</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message <span className="text-indigo-400">*</span></label>
                                        <textarea id="message" name="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-colors" required placeholder="Tell us about your project requirements, timeline, and any specific challenges you need to address..."></textarea>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <input type="checkbox" name="newsletter" className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-indigo-500 focus:ring-indigo-500" />
                                            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Subscribe to our newsletter for infrastructure insights and company updates</span>
                                        </label>

                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <input type="checkbox" name="privacy" required className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-indigo-500 focus:ring-indigo-500" />
                                            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                                                I agree to the <Link href="/privacy-policy" className="text-indigo-400 hover:text-indigo-300">Privacy Policy</Link> <span className="text-indigo-400">*</span>
                                            </span>
                                        </label>
                                    </div>

                                    <div className="flex gap-4 pt-4">
                                        <Button type="submit" size="lg" className="px-8">Send Message</Button>
                                        <Button type="reset" variant="outline" size="lg" className="px-8">Clear Form</Button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                                <h2 className="text-xl font-bold mb-6 text-white">Contact Information</h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Headquarters</h3>
                                            <p className="text-gray-400 text-sm">
                                                123 Enterprise Plaza<br />
                                                Suite 4500<br />
                                                San Francisco, CA 94105
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Phone</h3>
                                            <p className="text-gray-400 text-sm space-y-1">
                                                <a href="tel:+1-800-BACKPLANE" className="block hover:text-indigo-400 transition-colors">+1 (800) BACKPLANE</a>
                                                <a href="tel:+1-415-555-0123" className="block hover:text-indigo-400 transition-colors">+1 (415) 555-0123</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Email</h3>
                                            <p className="text-gray-400 text-sm space-y-1">
                                                <a href="mailto:contact@backplane.com" className="block hover:text-indigo-400 transition-colors">contact@backplane.com</a>
                                                <a href="mailto:sales@backplane.com" className="block hover:text-indigo-400 transition-colors">sales@backplane.com</a>
                                                <a href="mailto:support@backplane.com" className="block hover:text-indigo-400 transition-colors">support@backplane.com</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white mb-1">Business Hours</h3>
                                            <p className="text-gray-400 text-sm">
                                                Monday - Friday: 8:00 AM - 6:00 PM PST<br />
                                                Saturday: 10:00 AM - 2:00 PM PST<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 backdrop-blur-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertCircle className="w-6 h-6 text-red-500" />
                                    <h3 className="text-xl font-bold text-white">Need Immediate Assistance?</h3>
                                </div>
                                <p className="text-gray-400 mb-6 text-sm">
                                    For urgent infrastructure issues, our emergency support is available 24/7.
                                </p>
                                <a href="tel:+1-800-BACKPLANE">
                                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white border-none">
                                        Call Emergency Support
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
