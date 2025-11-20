"use client";

import { useEffect, useState } from "react";
import { WifiOff } from "lucide-react";

export function MobileOptimizations() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        // Initial check
        if (typeof window !== "undefined") {
            setIsOnline(navigator.onLine);
        }

        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    if (isOnline) return null;

    return (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-red-500/90 backdrop-blur-md text-white px-6 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2 text-sm font-medium animate-in fade-in slide-in-from-top-4">
                <WifiOff className="w-4 h-4" />
                <span>You are currently offline</span>
            </div>
        </div>
    );
}
