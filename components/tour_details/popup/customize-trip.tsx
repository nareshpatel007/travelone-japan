"use client";

import QuestionHeading from "@/components/plan_your_trip/common/questionHeading";
import { getClientIp } from "@/lib/getClientIp";
import { CheckCircle, Loader, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface Props {
    tour: any;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

// Define initial form data
const initialFormData = {
    name: "",
    email: "",
    phone: "",
    best_day: "",
    best_time: "",
    accept_terms: false,
};

export function CustomizeTrip({ tour, open, onOpenChange }: Props) {
    // Define state
    const [formData, setFormData] = useState(initialFormData);
    const [formLoading, setFormLoading] = useState(false);
    const [errors, setErrors] = useState("");
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleClose = () => {
        onOpenChange(false);
        setErrors("");
        setIsSubmitted(false);
        setFormData(initialFormData);
        setFormLoading(false);
    };

    // Handle form submit
    const handleSubmit = () => {
        // Update state
        setErrors("");
        setFormLoading(true);

        try {
            const submitData = async () => {
                // Validation
                if (!formData.name || !formData.email || !formData.phone || !formData.best_day || !formData.best_time) {
                    setErrors("Please fill in all the required fields.");
                    return;
                } else if (!formData.accept_terms) {
                    setErrors("Please accept the Terms consent to submit your request.");
                    return;
                }

                // Send data to API route
                const response = await fetch("/api/tours/customize_trip", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        tour_id: tour?.id,
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        best_day: formData.best_day,
                        best_time: formData.best_time,
                        ip_address: getClientIp(),
                    }),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the JSON response
                const data = await response.json();

                // Check response
                if (data?.status) {
                    // Update the state
                    setIsSubmitted(true);
                } else {
                    // Set errors
                    setErrors(data?.message || "Failed to submit form. Please try again later.");
                }
            };
            submitData();
        } catch (error: any) {
            if (error.name !== "AbortError") {
                console.error("Failed to submit form data:", error);
            }
        } finally {
            setFormLoading(false);
        }
    }

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={handleClose} />
            <div className="relative w-full h-full bg-[#FFF6E5] overflow-auto">
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 z-10 p-2 rounded-full bg-[#FFC765] hover:bg-black hover:text-white cursor-pointer transition"
                >
                    <X className="h-5 w-5" />
                </button>
                <div className="min-h-full flex flex-col items-center justify-center px-4 md:px-8 py-20 space-y-5">
                    <div className="w-full max-w-4xl space-y-5">
                        <QuestionHeading
                            title="Customization Request"
                        />

                        <div className="border border-[#2F5D50] rounded-sm p-5 space-y-4 bg-white/60">
                            {!isSubmitted ? (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        <div>
                                            <label className="block text-md font-medium text-[#333] mb-1">
                                                Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-2 rounded-sm border border-[#2F5D50] bg-white outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-md font-medium text-[#333] mb-1">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <PhoneInput
                                                defaultCountry="us"
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e })}
                                                className="w-full px-4 py-0.5 text-base rounded-sm border border-[#2F5D50] bg-white outline-none"
                                                inputClassName="w-full !border-0 text-sm md:text-md !border-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-md font-medium text-[#333] mb-1">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                placeholder="Enter your email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-2 rounded-sm border border-[#2F5D50] bg-white outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-md font-medium text-[#333] mb-1">
                                                Best Day to Call You <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                className="w-full px-4 py-2 rounded-sm border border-[#2F5D50] bg-white outline-none"
                                                onChange={(e) => setFormData({ ...formData, best_day: e.target.value })}
                                            >
                                                <option>Select option</option>
                                                <option value="Weekdays">Weekdays</option>
                                                <option value="Weekends">Weekends</option>
                                                <option value="Call me now">Call me now</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-md font-medium text-[#333] mb-1">
                                                Best Time to Call You <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                className="w-full px-4 py-2 rounded-sm border border-[#2F5D50] bg-white outline-none"
                                                onChange={(e) => setFormData({ ...formData, best_time: e.target.value })}
                                            >
                                                <option>Select option</option>
                                                <option value="Morning - 9 am to 12 pm">Morning - 9 am to 12 pm</option>
                                                <option value="Afternoon - 12 pm to 3 pm">Afternoon - 12 pm to 3 pm</option>
                                                <option value="Afternoon - 3 pm to 6 pm">Afternoon - 3 pm to 6 pm</option>
                                                <option value="Evening - 6 pm to 9 pm">Evening - 6 pm to 9 pm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2 pt-2">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            className="mt-1 cursor-pointer"
                                            onChange={(e) => setFormData({ ...formData, accept_terms: e.target.checked })}
                                        />
                                        <label className="text-xs md:text-sm text-gray-700">
                                            I agree to the <Link href="https://travelone.io/terms-conditions" target="_blank" className="underline">T&Cs</Link> and <Link href="https://travelone.io/privacy-policy" target="_blank" className="underline">Privacy Policy</Link>, and consent to receive communications from TravelOne, including follow-up call and text messages for quotes, scheduling, and call reminders, regarding my inquiry. Std msg & data rates apply. Text STOP to cancel, HELP for info.
                                        </label>
                                    </div>
                                </>
                            ) : (
                                <div className="space-y-4 text-center py-4">
                                    <div className="flex justify-center">
                                        <div className="h-16 w-16 rounded-full bg-[#2F5D50]/10 flex items-center justify-center">
                                            <CheckCircle className="h-8 w-8 text-[#2F5D50]" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <span className="text-md md:text-lg font-medium text-black block">We’ve received your request and our travel experts are already reviewing your details to prepare a personalized itinerary for you.</span>
                                        <span className="text-sm md:text-base text-black block">We’ll be in touch very soon to begin planning your trip.</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {errors && (
                        <div className="relative space-x-2 text-red-500" role="alert">
                            <strong className="font-bold">Error!</strong>
                            <span className="block sm:inline">{errors}</span>
                        </div>
                    )}

                    {!isSubmitted && <div className="flex items-center">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="flex items-center gap-2 px-8 py-2.5 rounded-md font-medium transition-colors border border-black cursor-pointer bg-black text-white hover:text-black hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {formLoading && <Loader className="w-4 h-4 mr-2 animate-spin" />}
                            {!formLoading && <CheckCircle className="w-4 h-4" />}
                            Submit Request
                        </button>
                    </div>}
                </div>
            </div>
        </div>
    );
}
