"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";

export default function NewsletterSubscribe() {
    // Define state
    const [email, setEmail] = useState<string>("");
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [isFormLoading, setIsFormLoading] = useState<boolean>(false);

    // Handle submit
    const handleSubmit = async () => {
        // Validation
        if (email == "") {
            return;
        }

        // Update state
        setIsFormLoading(true);

        try {
            // Call API request
            await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            // Update state
            setEmail("");
            setIsCompleted(true);
        } catch (error: any) {
            console.error("Failed to subscribe to newsletter:", error);
        } finally {
            setIsFormLoading(false);
        }
    };

    return (
        <section className="w-full bg-[#FFF4E3] rounded-tr-4xl rounded-bl-4xl border border-[#d9cec1]/50 px-6 py-6 md:px-12 md:py-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* LEFT CONTENT */}
                <div className="text-center md:text-left">
                    <h3 className="text-black text-lg md:text-xl font-semibold">
                        Subscribe to a Newsletter.
                    </h3>
                    <p className="text-black text-sm md:text-base">
                        Subscribe for trending deals and latest updates.
                    </p>
                </div>

                {/* RIGHT FORM */}
                <div className="w-full md:w-auto max-w-3xl">
                    {/* Input + button row */}
                    <div className="flex gap-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 text-sm md:text-base border border-gray-300 bg-white text-black focus:outline-none focus:ring-1 focus:ring-black rounded-none"
                        />

                        <button
                            onClick={handleSubmit}
                            disabled={isFormLoading || isCompleted}
                            className="flex items-center justify-center gap-2 px-6 md:px-8 py-3 bg-black text-white text-sm md:text-base font-semibold tracking-wide uppercase cursor-pointer hover:bg-black/90 transition disabled:opacity-60"
                        >
                            {isFormLoading && (
                                <Loader2 className="h-5 w-5 animate-spin text-white" />
                            )}
                            {isCompleted ? "Subscribed" : "Subscribe"}
                        </button>
                    </div>

                    {/* Success message */}
                    {isCompleted && (
                        <p className="mt-2 text-sm text-green-600">
                            You have been subscribed.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}