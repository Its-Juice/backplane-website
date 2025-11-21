"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
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
        <>
            <motion.nav
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 ease-in-out",
                    isOpen ? "rounded-3xl bg-black/90 border-white/20" : "rounded-full bg-black/60 border-white/10"
                )}
            >
                <div className={cn(
                    "backdrop-blur-xl border border-transparent transition-all duration-300",
                    isOpen ? "rounded-3xl" : "rounded-full"
                )}>
                    <div className="px-6 h-16 flex items-center justify-between">
                        <Link href="/" className="text-xl font-bold tracking-wide text-white flex items-center gap-2">
                            <Image
                                src="/assets/logo.png"
                                alt="Backplane Logo"
                                width={32}
                                height={32}
                                className="w-8 h-8 object-contain"
                            />
                            backplane.
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                            <Link href="/" className={cn("hover:text-white transition-colors", pathname === "/" && "text-white")}>
                                Home
                            </Link>

                            <div className="relative group">
                                <button
                                    className="flex items-center gap-1 hover:text-white transition-colors py-4"
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={() => setIsServicesOpen(false)}
                                >
                                    Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                </button>

                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#0A0A0A] border border-white/10 rounded-2xl p-2 shadow-2xl shadow-indigo-500/10 overflow-hidden"
                                            onMouseEnter={() => setIsServicesOpen(true)}
                                            onMouseLeave={() => setIsServicesOpen(false)}
                                        >
                                            <div className="flex flex-col gap-1 p-1">
                                                {services.map((service) => (
                                                    <Link
                                                        key={service.href}
                                                        href={service.href}
                                                        className="block px-4 py-2.5 rounded-xl hover:bg-white/10 text-sm text-gray-300 hover:text-white transition-all hover:pl-6"
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
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <Link href="/contact" className="group relative px-6 py-2 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-200 transition-all overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
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
                                className="md:hidden overflow-hidden border-t border-white/10"
                            >
                                <div className="px-6 py-8 flex flex-col gap-6">
                                    <Link href="/" className="text-lg font-medium text-white flex items-center justify-between group">
                                        Home <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </Link>

                                    <div>
                                        <div className="text-lg font-medium text-white mb-4">Services</div>
                                        <div className="pl-4 flex flex-col gap-3 border-l border-white/10">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.href}
                                                    href={service.href}
                                                    className="text-gray-400 hover:text-white py-1 block transition-colors"
                                                >
                                                    {service.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <Link href="/pricing" className="text-lg font-medium text-white flex items-center justify-between group">
                                        Pricing <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                    <Link href="/about" className="text-lg font-medium text-white flex items-center justify-between group">
                                        About <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                    <Link href="/contact" className="w-full py-4 bg-white text-black rounded-xl font-bold text-center mt-4 hover:bg-gray-200 transition-colors">
                                        Get Started
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>

            {/* Spacer to prevent content from being hidden behind fixed navbar */}
            <div className="h-24 md:h-32" />
        </>
    );
}
