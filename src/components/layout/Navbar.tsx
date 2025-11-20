"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    { title: "Cloud Infrastructure", href: "/services/cloud" },
    { title: "IT Infrastructure", href: "/services/infrastructure" },
    { title: "Network Solutions", href: "/services/network" },
    { title: "Security Services", href: "/services/security" },
    { title: "Data Management", href: "/services/data" },
    { title: "IT Management", href: "/services/management" },
    { title: "Managed Services", href: "/services/managed-services" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isServicesOpen, setIsServicesOpen] = React.useState(false);
    const pathname = usePathname();

    // Close mobile menu when route changes
    React.useEffect(() => {
        setIsOpen(false);
        setIsServicesOpen(false);
    }, [pathname]);

    return (
        <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-wide text-white">
                    backplane.
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link href="/" className={cn("hover:text-white transition-colors", pathname === "/" && "text-white")}>
                        Home
                    </Link>

                    <div className="relative group">
                        <button
                            className="flex items-center gap-1 hover:text-white transition-colors"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            Services <ChevronDown className="w-4 h-4" />
                        </button>

                        <AnimatePresence>
                            {isServicesOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-xl"
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                >
                                    <div className="flex flex-col gap-1">
                                        {services.map((service) => (
                                            <Link
                                                key={service.href}
                                                href={service.href}
                                                className="block px-4 py-2 rounded-lg hover:bg-white/10 text-sm text-gray-300 hover:text-white transition-colors"
                                            >
                                                {service.title}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/pricing" className={cn("hover:text-white transition-colors", pathname === "/pricing" && "text-white")}>
                        Pricing
                    </Link>
                    <Link href="/about" className={cn("hover:text-white transition-colors", pathname === "/about" && "text-white")}>
                        About
                    </Link>
                    <Link href="/contact" className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            <Link href="/" className="text-lg font-medium text-white">Home</Link>

                            <div>
                                <div className="text-lg font-medium text-white mb-4">Services</div>
                                <div className="pl-4 flex flex-col gap-3 border-l border-white/10">
                                    {services.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            className="text-gray-400 hover:text-white"
                                        >
                                            {service.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link href="/pricing" className="text-lg font-medium text-white">Pricing</Link>
                            <Link href="/about" className="text-lg font-medium text-white">About</Link>
                            <Link href="/contact" className="px-5 py-3 bg-white text-black rounded-full font-bold text-center">
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
