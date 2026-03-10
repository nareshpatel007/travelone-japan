'use client'

import { useState } from "react";

interface Props {
    faqs: any[];
    token: string;
}

export default function FeedbackForm({ faqs, token }: Props) {
    // Define state
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState<Record<number, { question: string; answer: string }>>({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Define total questions
    const total = faqs.length;

    // Handle select
    const handleSelect = (answer: string) => {
        const question = faqs[current].question;

        setAnswers({
            ...answers,
            [current]: {
                question,
                answer
            }
        });
    };

    // Handle next
    const handleNext = () => {
        if (!answers[current]) return;

        if (current < total - 1) {
            setCurrent(current + 1);
        }
    };

    // Handle submit
    const handleSubmit = async () => {
        // Update state
        setLoading(true);

        try {
            // API call
            await fetch("/api/plan_your_trip/persona-result/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token,
                    ratings: answers
                }),
            });

            // Update state
            setSubmitted(true);
        } finally {
            // Update state
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="max-w-7xl mx-auto bg-[#FFF9EE] rounded-xl text-center p-4 md:p-16 py-10 space-y-8">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Thank you for your feedback 🙌
                </h2>
                <p className="text-base text-black">
                    Your response helps us improve the Traveler DNA experience.
                </p>
            </div>
        );
    }

    // Get current question
    const faq = faqs[current];

    return (
        <div className="max-w-7xl mx-auto bg-[#FFF9EE] rounded-xl p-4 md:p-16 py-10 space-y-6 md:space-y-10">
            {/* Title */}
            <h1 className="text-center text-black text-xl md:text-5xl leading-tight">
                Persona Experience Feedback
            </h1>

            {/* Progress Dots */}
            <div className="flex justify-center gap-3">
                {faqs.map((_: any, index: number) => (
                    <div
                        key={index}
                        className={`h-3 w-3 rounded-full transition-all duration-300
                        ${index === current
                                ? "bg-black scale-125"
                                : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>

            {/* Question */}
            <div className="text-center text-lg md:text-2xl font-medium leading-snug">
                {faq.question}
            </div>

            {/* Answers */}
            <div className="grid gap-4">
                {faq.answers.map((ans: string, index: number) => {
                    const selected = answers[current]?.answer === ans;
                    return (
                        <button
                            key={index}
                            onClick={() => handleSelect(ans)}
                            className={`bg-white text-left px-5 py-4 rounded-lg text-base border transition-all duration-200 cursor-pointer ${selected ? "border-black shadow-md" : "border-gray-300 hover:border-black hover:bg-white"}`}
                        >
                            {ans}
                        </button>
                    );
                })}
            </div>

            {/* Buttons */}
            <div className="flex justify-center">
                {current < total - 1 && (
                    <button
                        onClick={handleNext}
                        disabled={!answers[current]}
                        className="px-8 py-2 rounded bg-black text-white disabled:opacity-40 hover:bg-black/80 cursor-pointer"
                    >
                        Next →
                    </button>
                )}

                {current === total - 1 && (
                    <button
                        onClick={handleSubmit}
                        disabled={!answers[current] || loading}
                        className="px-8 py-2 rounded bg-black text-white disabled:opacity-40 hover:bg-black/80 cursor-pointer"
                    >
                        {loading ? "Submitting..." : "Submit Feedback"}
                    </button>
                )}
            </div>
        </div>
    );
}