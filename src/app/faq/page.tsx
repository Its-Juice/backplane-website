import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

export default function FAQPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 mb-6 tracking-tight">
                        FAQ
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Common questions about our services, pricing, and security methodologies.
                    </p>
                </div>

                {/* FAQ Items - Using details/summary for simplicity without client state for now, or I could make it a client component. 
           Since I'm writing a full file, I'll make it a client component to have nice animations if I wanted, 
           but standard details/summary is robust. Let's stick to standard HTML for simplicity and robustness in this batch.
        */}
                <div className="space-y-4">
                    {[
                        {
                            q: "What industries do you specialize in?",
                            a: "We have extensive experience in Fintech, Healthcare, Shipping/Maritime, and Government sectors. However, our security principles are industry-agnostic."
                        },
                        {
                            q: "Do you offer 24/7 monitoring?",
                            a: "Yes, our SOC operates 24/7/365. We have analysts working in shifts to ensure your infrastructure is never left unguarded."
                        },
                        {
                            q: "How long does a penetration test take?",
                            a: "The duration depends on the scope (number of IPs, complexity of apps). A typical web app test takes 1-2 weeks, while a full red team operation can take 1-3 months."
                        },
                        {
                            q: "Are you GDPR compliant?",
                            a: "Absolutely. We are a Greek company and fully adhere to EU GDPR regulations. We also help our clients achieve and maintain compliance."
                        },
                        {
                            q: "What is your pricing model?",
                            a: "We offer both project-based pricing (e.g., for penetration tests) and subscription-based models for managed services (SOC, MDR). Contact us for a custom quote."
                        },
                        {
                            q: "Can you help with incident response if we are not a current client?",
                            a: "Yes, we offer emergency incident response services. However, existing retainer clients receive priority handling and guaranteed response times."
                        }
                    ].map((item, i) => (
                        <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden open:bg-white/10 transition-colors">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-medium text-white">{item.q}</span>
                                <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-open:bg-indigo-500 transition-colors">
                                    <Plus className="w-4 h-4 absolute group-open:opacity-0 transition-opacity" />
                                    <Minus className="w-4 h-4 absolute opacity-0 group-open:opacity-100 transition-opacity" />
                                </span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-400 mb-6">Still have questions?</p>
                    <Link href="/contact">
                        <Button className="rounded-full px-8 bg-white text-black hover:bg-gray-200">
                            Contact Support
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
