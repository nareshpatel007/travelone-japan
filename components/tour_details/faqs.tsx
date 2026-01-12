"use client"

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Will I get an account manager / contact person?",
        answer:
            "Donec vel quam vitae nisl posuere efficitur. Suspendisse eget lectus est. Pellentesque vitae maximus turpis. Morbi sodales vestibulum lorem a ultricies. Pellentesque id dignissim leo. Quisque porta eros nunc, non sodales tellus. Quisque sed pulvinar nulla.",
    },
    {
        question: "How To Create A Free Account",
        answer:
            "Creating a free account is simple and straightforward. Visit our website and click on the 'Sign Up' button. Fill in your email address and create a password. Verify your email by clicking the link sent to your inbox. Once verified, your account is ready to use and you can start booking tours immediately.",
    },
    {
        question: "Book Entire Business Trip With One Click",
        answer:
            "Our one-click booking feature allows you to reserve multiple tours and accommodations in a single transaction. Simply add all desired trips to your cart, review the details, and proceed to checkout. You'll receive confirmation for all bookings simultaneously, making business travel planning effortless and efficient.",
    },
    {
        question: "Economy & Business Class Reservations",
        answer:
            "We offer flexible booking options for different travel classes. Whether you prefer economy for budget-friendly options or business class for premium comfort, our platform allows you to compare prices and features. Select your preferred class during the booking process and receive tailored recommendations based on your choice.",
    },
    {
        question: "Finding a Perfect Tour Guide",
        answer:
            "Our comprehensive guide selection system helps you find the perfect match for your tour experience. Filter guides by language, expertise, experience level, and customer ratings. Read detailed profiles and reviews from previous travelers. Our matching algorithm ensures you're paired with guides who share your travel interests and communication style.",
    },
    {
        question: "What Does A Tour Agent Do For You?",
        answer:
            "A dedicated tour agent acts as your personal travel consultant, handling all aspects of your journey planning. They provide personalized itinerary suggestions, manage bookings, resolve any issues that arise during travel, and offer 24/7 support. Tour agents have extensive local knowledge and can customize experiences to match your preferences and budget.",
    },
    {
        question: "Can I modify my booking after confirmation?",
        answer:
            "Yes, you can modify most bookings after confirmation. Log into your account and navigate to 'My Bookings' to make changes. You can adjust dates, add activities, or change accommodation preferences depending on availability. Some modifications may incur fees, which will be clearly displayed before you confirm the changes.",
    },
    {
        question: "What is your cancellation policy?",
        answer:
            "Our cancellation policy varies by tour and accommodation. Most tours offer free cancellation up to 30 days before departure. Closer cancellations may incur partial or full charges. Travel insurance is available at booking to protect against unexpected cancellations. Contact our support team for specific details about your booking's cancellation terms.",
    },
];

export default function FAQsList() {
    // Define state
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    return (
        <div className="!bg-amber-50 !px-8 !py-20">
            <div className="!max-w-7xl !mx-auto">
                <span className="text-2xl md:text-4xl font-bold text-center !block !mb-3 text-[#1E1E1E]">Frequently Asked Questions</span>
                <p className="text-center text-[#C46A3A] !mb-12 font-semibold">
                    We're here to help you with any questions you may have.
                </p>
                <div className="space-y-0">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <button
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                className="w-full py-6 px-0 flex items-center justify-between border-b border-gray-300 hover:bg-amber-50/50 transition-colors duration-200 text-left group cursor-pointer"
                            >
                                <span className="text-md md:text-xl font-normal md:font-bold text-black pr-4 flex-1 group-hover:text-[#1E1E1E] !block">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    size={24}
                                    className={`text-[#1E1E1E] flex-shrink-0 transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {expandedIndex === index && (
                                <div className="!py-6 !px-0 !bg-amber-50/30 !border-b !border-gray-300 !animate-in !fade-in !slide-in-from-top-2 !duration-300">
                                    <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
