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
        <div className="bg-amber-50 py-10 md:py-16 px-5 md:px-0">
            <div className="!max-w-7xl !mx-auto">
                <span className="text-xl md:text-4xl lg:text-4xl font-bold text-center !block !mb-3 text-[#1E1E1E]">Frequently Asked Questions</span>
                <p className="text-sm md:text-md lg:text-lg text-center text-[#C46A3A] !mb-12 font-semibold">
                    We're here to help you with any questions you may have.
                </p>
                <div className="space-y-0">
                    {data?.faqs && data?.faqs.map((item: any, index: number) => (
                        <div key={index}>
                            <button
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                className="w-full py-6 px-0 flex items-center justify-between border-b border-gray-300 hover:bg-amber-50/50 transition-colors duration-200 text-left group cursor-pointer"
                            >
                                <span className="text-md md:text-xl font-normal md:font-semibold text-black pr-4 flex-1 group-hover:text-[#1E1E1E] !block">
                                    {item[0]}
                                </span>
                                <ChevronDown
                                    size={24}
                                    className={`text-[#1E1E1E] flex-shrink-0 transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {expandedIndex === index && (
                                <div className="!py-6 !px-0 !bg-amber-50/30 !border-b !border-gray-300 !animate-in !fade-in !slide-in-from-top-2 !duration-300">
                                    <p className="text-gray-700 leading-relaxed text-base">{item[1]}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
