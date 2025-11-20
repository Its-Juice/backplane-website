import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "Backplane | Cybersecurity & Managed Services",
    description: "Trusted Greek cybersecurity business providing managed services, cloud solutions, and infrastructure.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { MobileOptimizations } from "@/components/layout/MobileOptimizations";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} ${inter.variable} bg-black text-white min-h-screen flex flex-col`}>
                <MobileOptimizations />
                <Navbar />
                <main className="flex-grow pt-20 relative">
                    {/* Global Background Elements */}
                    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
                        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
                    </div>

                    <div className="relative z-10">
                        {children}
                    </div>
                </main>
                <Footer />
            </body>
        </html>
    );
}
