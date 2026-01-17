"use client"

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle, X } from "lucide-react";
import Image from "next/image";

interface Props {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function BookingCart({ open, onOpenChange }: Props) {
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
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1)
        } else {
            setShowResults(true)
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
                    {[1, 2, 3, 4].map((step) => (
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
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {currentStep === 1 && (
                                <>
                                    Step 1 Content
                                </>
                            )}
                            {currentStep === 2 && (
                                <>
                                    Step 2 Content
                                </>
                            )}
                        </div>
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
                            disabled={!canProceed()}
                            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-colors border cursor-pointer ${canProceed()
                                ? "bg-[#ffc765] text-[#333] hover:border-[#333] hover:text-white hover:bg-[#333]"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            {currentStep === 4 ? (
                                <>
                                    <CheckCircle className="h-5 w-5" /> Submit
                                </>
                            ) : (
                                <>
                                    Next <ArrowRight className="h-5 w-5" />
                                </>
                            )}
                        </button>
                        {/* <button
                            onClick={handleReset}
                            className="px-8 py-3 cursor-pointer bg-white text-[#333] border border-[#333] rounded-lg font-medium hover:bg-[#333] hover:text-white transition-colors"
                        >
                            Reset
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
