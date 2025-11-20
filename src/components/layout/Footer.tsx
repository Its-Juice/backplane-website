import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-wide text-white mb-4 block">
                            backplane.
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Enterprise Infrastructure Solutions for the modern web. Scalable, secure, and reliable.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li><Link href="/services/cloud" className="text-gray-400 hover:text-white transition-colors text-sm">Cloud Infrastructure</Link></li>
                            <li><Link href="/services/security" className="text-gray-400 hover:text-white transition-colors text-sm">Security Services</Link></li>
                            <li><Link href="/services/data" className="text-gray-400 hover:text-white transition-colors text-sm">Data Management</Link></li>
                            <li><Link href="/services/managed-services" className="text-gray-400 hover:text-white transition-colors text-sm">Managed Services</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Partners</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Resources</h3>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Documentation</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Support</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2025 Backplane. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                        <Link href="/tos" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
