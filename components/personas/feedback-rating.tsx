'use client'

import { useState } from "react";
import { Check, CheckCircle, Loader2, Star, StarHalf } from "lucide-react";

// Define question
const questions = [
    "How satisfied are you with the overall travel experience?",
    "How accurate was the itinerary recommendation?",
    "How useful was the TravelOne DNA matching?",
    "How easy was the platform to use?",
    "How likely are you to recommend TravelOne?"
];

// Define Props
interface Props {
    token: string;
}

export default function FeedbackForm({ token }: Props) {
    // Define state
    const [ratings, setRatings] = useState<any>({});
    const [formLoader, setFormLoader] = useState<boolean>(false);
    const [isFeedbackSent, setIsFeedbackSent] = useState<boolean>(false);

    // Handle rating
    const handleRating = (qIndex: number, value: number) => {
        setRatings({
            ...ratings,
            [qIndex]: value
        });
    };

    // Render stars
    const renderStars = (qIndex: number) => {
        const rating = ratings[qIndex] || 0;
        return (
            <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => {
                    const full = rating >= star;
                    const half = rating >= star - 0.5 && rating < star;
                    return (
                        <div key={star} className="relative flex">
                            {/* Half Star Click */}
                            <div
                                onClick={() => handleRating(qIndex, star - 0.5)}
                                className="absolute left-0 top-0 w-1/2 h-full z-10 cursor-pointer"
                            />

                            {/* Full Star Click */}
                            <div
                                onClick={() => handleRating(qIndex, star)}
                                className="absolute right-0 top-0 w-1/2 h-full z-10 cursor-pointer"
                            />

                            {/* Star Display */}
                            {full ? (
                                <Star className="fill-yellow-400 text-yellow-400" size={22} />
                            ) : half ? (
                                <StarHalf className="fill-yellow-400 text-yellow-400" size={22} />
                            ) : (
                                <Star className="text-gray-400" size={22} />
                            )}
                        </div>
                    )
                })}
            </div>
        );
    };

    // Handle submit rating
    const handleSubmitRating = async () => {
        // Update state
        setFormLoader(true);

        try {
            // API call
            await fetch("/api/plan_your_trip/persona-result/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token,
                    ratings: {
                        questions,
                        ratings
                    }
                }),
            });

            // Update state
            setIsFeedbackSent(true);
        } finally {
            // Update state
            setFormLoader(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto bg-[#FFF9EE] rounded p-20 space-y-10">
            <h1 className="text-center text-black text-3xl md:text-6xl leading-tight font-normal">
                Persona Experience Feedback
            </h1>
            <div className="divide-y">
                {questions.map((question, qIndex) => (
                    <div
                        key={qIndex}
                        className="flex items-center justify-between py-4 gap-6"
                    >
                        <p className="text-base text-black max-w-xl">
                            {qIndex + 1}. {question}
                        </p>
                        {renderStars(qIndex)}
                    </div>
                ))}
            </div>
            <div className="flex justify-center text-center text-right">
                {isFeedbackSent ? (
                    <span>Your feedback has been submitted.</span>
                ) : (
                    <button
                        disabled={formLoader}
                        onClick={handleSubmitRating}
                        className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded hover:bg-black/90 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {formLoader && <Loader2 className="w-4 h-4 animate-spin" />}
                        {!formLoader && <CheckCircle className="w-4 h-4" />}
                        Submit Feedback
                    </button>
                )}
            </div>
        </div>
    );
}