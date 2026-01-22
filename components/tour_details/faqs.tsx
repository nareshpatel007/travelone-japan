"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react";
// Define props
interface Props {
    data: any;
}

export default function FAQsList({ data }: Props) {
    // Define state
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <div className="bg-[#FFF9EE] py-10 md:py-16 px-5 md:px-0">
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="text-center space-y-1">
                    <h3 className="text-black text-3xl md:text-5xl leading-tight font-normal">
                        Frequently Asked Questions
                    </h3>
                    <span className="text-sm md:text-lg text-black">
                        We're here to help you with any questions you may have.
                    </span>
                </div>
                <div className="space-y-0">
                    {data?.faqs && data?.faqs.map((item: any, index: number) => (
                        <div key={index}>
                            <button
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                className="w-full py-6 px-0 flex items-center justify-between border-b border-gray-300 hover:bg-amber-50/50 transition-colors duration-200 text-left group cursor-pointer"
                            >
                                <span className="text-md md:text-lg font-normal text-black pr-4 flex-1 block">
                                    {item[0]}
                                </span>
                                <ChevronDown
                                    size={24}
                                    className={`text-black flex-shrink-0 transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {expandedIndex === index && (
                                <div className="py-6 px-0 bg-amber-50/30 border-b border-gray-300 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <p className="text-black leading-relaxed text-base">{item[1]}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
