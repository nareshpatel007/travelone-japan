"use client"

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle, X } from "lucide-react";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

interface Props {
    tour: any;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function BookingCart({ tour, open, onOpenChange }: Props) {
    // Define state
    const [currentStep, setCurrentStep] = useState(1)
    const [selectedDestination, setSelectedDestination] = useState<string | null>(null)
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
    const [selectedDate, setSelectedDate] = useState<string>("")
    const [selectedAttractions, setSelectedAttractions] = useState<string[]>([])
    const [showResults, setShowResults] = useState(false)

    // Handle reset
    const handleReset = () => {
        setCurrentStep(1);
        setSelectedDestination(null);
        setSelectedCountry(null);
        setSelectedDate("");
        setSelectedAttractions([]);
        setShowResults(false);
    }

    // Handle close
    const handleClose = () => {
        onOpenChange(false);
        handleReset();
    }

    // Handle next step
    const handleNext = () => {
        if (currentStep == 0) {
            setCurrentStep(currentStep + 1)
        } else {
            setShowResults(true);
        }
    }

    // Handle previous step
    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const canProceed = () => {
        switch (currentStep) {
            case 1:
                return selectedDestination !== null
            case 2:
                return selectedCountry !== null
            case 3:
                return selectedDate !== ""
            case 4:
                return selectedAttractions.length > 0
            default:
                return false
        }
    }

    // Check if date is in the future
    const isFutureDate = (dateString: string) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // remove time

        const date = new Date(dateString);
        return date > today;
    };

    if (!open) return null

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center">
            <div className="absolute inset-0 !bg-black/40" onClick={handleClose} />
            <div className="relative w-full h-full !bg-[#fef4e4] overflow-auto">
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 z-10 p-2 rounded-full bg-[#FFC765] hover:bg-black hover:text-white cursor-pointer transition"
                >
                    <X className="h-5 w-5" />
                </button>
                <div className="!absolute !top-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    {[1, 2].map((step) => (
                        <div
                            key={step}
                            className={`w-3 h-3 rounded-full transition-colors ${step === currentStep ? "!bg-[#ffc765]" : step < currentStep ? "!bg-[#ffc765]" : "!bg-gray-300"}`}
                        />
                    ))}
                </div>
                <div className="min-h-full flex flex-col !items-center !justify-center !px-8 !py-20">
                    <div className="w-full max-w-5xl !text-center">
                        <span className="text-3xl md:text-4xl font-bold !text-black !text-center !block !mb-10">
                            When Would You Like to Book Your Trip?
                        </span>

                        {/* Step 1 */}
                        {currentStep === 1 && (
                            <div className="w-full max-w-3xl mx-auto space-y-5">
                                <div className="text-center space-y-3">
                                    <p className="text-md font-medium text-gray-900">
                                        Choose Your Travel Date
                                    </p>
                                    {tour?.tour_type === "Group Tour" ? (
                                        <select
                                            value={selectedDate ?? ""}
                                            onChange={(e) => setSelectedDate(e.target.value)}
                                            className="w-full max-w-md px-4 py-3 border border-[#2F5D50] rounded-md bg-white outline-none"
                                        >
                                            <option value="">Select travel date</option>

                                            {tour?.group_dates
                                                ?.filter((d: any) => isFutureDate(d.group_date))
                                                .map((date: any, index: number) => (
                                                    <option key={index} value={date.group_date}>
                                                        {formatDate(date.group_date)}
                                                    </option>
                                                ))}
                                        </select>
                                    ) : (
                                        <input
                                            type="date"
                                            value={selectedDate}
                                            onChange={(e) => setSelectedDate(e.target.value)}
                                            min={new Date().toISOString().split("T")[0]}
                                            className="w-full max-w-md px-4 py-3 border border-[#2F5D50] rounded-md bg-white outline-none"
                                        />
                                    )}
                                </div>

                                <div className="text-center space-y-3">
                                    <p className="text-md font-medium text-gray-900">
                                        Select Your Nationality
                                    </p>
                                    <select
                                        value={selectedCountry ?? ""}
                                        onChange={(e) => setSelectedCountry(e.target.value)}
                                        className="w-full max-w-md px-4 py-3 border border-[#2F5D50] rounded-md bg-white outline-none"
                                    >
                                        <option value="">Select nationality</option>
                                        <option value="USA">United States of America</option>
                                        <option value="India">India</option>
                                        <option value="UK">United Kingdom</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {/* Step 2 */}
                        {currentStep === 2 && (
                            <div className="w-full max-w-4xl mx-auto space-y-6">

                                {/* Header */}
                                <div className="text-center space-y-1">
                                    <h2 className="text-2xl font-semibold text-[#0F172A]">
                                        Choose Traveler Details
                                    </h2>
                                    <p className="text-sm text-[#004B63]">
                                        15 Seats are available in this tour
                                    </p>
                                </div>

                                {/* Rooms */}
                                <div className="border border-[#2F5D50] rounded-md px-6 py-4 flex justify-between items-center">
                                    <span className="font-medium">Rooms</span>
                                    <div className="flex items-center gap-4">
                                        <button className="w-8 h-8 rounded-full border border-[#004B63]">-</button>
                                        <span>1</span>
                                        <button className="w-8 h-8 rounded-full border border-[#004B63]">+</button>
                                    </div>
                                </div>

                                {/* Room Card */}
                                <div className="border border-[#2F5D50] rounded-md p-6 space-y-6">
                                    <span className="text-red-500 font-medium">Room 1</span>

                                    {/* Bedding */}
                                    <div>
                                        <p className="text-center font-medium mb-4">Bedding Preference</p>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {["Double", "Twin", "Single", "Two Queen Bed"].map((bed) => (
                                                <button
                                                    key={bed}
                                                    className="border border-[#2F5D50] rounded-md p-4 text-sm hover:border-red-500 hover:shadow"
                                                >
                                                    {bed}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Pax */}
                                    {[
                                        { label: "Adults", age: "Ages 12 or above" },
                                        { label: "Child", age: "Ages 8-12" },
                                        { label: "Child", age: "Ages 3-7" },
                                        { label: "Infant", age: "Ages 0-2" },
                                    ].map((item) => (
                                        <div key={item.age} className="flex justify-between items-center">
                                            <div>
                                                <p className="font-medium">{item.label}</p>
                                                <p className="text-sm text-gray-600">{item.age}</p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <button className="w-8 h-8 rounded-full border border-[#004B63]">-</button>
                                                <span>0</span>
                                                <button className="w-8 h-8 rounded-full border border-[#004B63]">+</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-3 !mt-12">
                        {currentStep > 1 && (
                            <button
                                onClick={handlePrevious}
                                className="flex items-center gap-2 px-8 py-3 bg-white text-[#1a2b49] rounded-lg font-medium border border-[#1a2b49] hover:bg-[#333] hover:border-[#333] transition-colors hover:text-white cursor-pointer"
                            >
                                <ArrowLeft className="h-5 w-5" /> Previous
                            </button>
                        )}
                        <button
                            onClick={handleNext}
                            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-colors border cursor-pointer bg-[#ffc765] text-[#333] hover:border-[#333] hover:text-white hover:bg-[#333]`}
                        >
                            {currentStep === 2 ? (
                                <>
                                    <CheckCircle className="h-5 w-5" /> Submit
                                </>
                            ) : (
                                <>
                                    Next <ArrowRight className="h-5 w-5" />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
