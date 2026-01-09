"use client"

import { useState } from "react";

// Define props
type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function CustomizeTrip({ open, onOpenChange }: Props) {
    // If open is true, render the modal
    if (!open) return null;

    // Define state
    const [step, setStep] = useState(0);
    const [errors, setErrors] = useState<string>("");

    return (
        <div className="!fixed !inset-0 !z-[999] !flex !items-center !justify-center !bg-black/40 !px-4">
            <div
                className="!relative !w-full !max-w-[360px] !md:max-w-xl !bg-[#d9eed8] !shadow-xl !overflow-visible"
                style={{
                    borderTopLeftRadius: "180px",
                    borderTopRightRadius: "180px",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                }}
            >
                <div className="!absolute !top-16 !right-10 !translate-x-1/2 !-translate-y-1/2 !z-50">
                    <svg
                        className="!absolute !inset-0 !w-10 !h-10 !cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 110 110"
                        fill="#a6c5a9"
                    >
                        <path d="M109.2,72.8c-1.9,5.2-11.5,6.4-14.7,10.6c-3.4,4.3-2,13.5-6.5,16.6c-4.6,3.1-13.1-1.3-18.4,0.3c-5.3,1.6-9.7,9.8-15.4,9.7c-5.5-0.1-9.6-8.4-15.1-10.2C33.6,98,25,102.1,20.6,99c-4.5-3.3-2.8-12.4-5.9-16.8c-3.2-4.4-12.8-5.9-14.4-11.1c-1.6-5.1,5.3-11.5,5.4-16.9C5.8,49-1.1,42.4,0.8,37.2s11.5-6.4,14.7-10.6c3.4-4.3,2-13.5,6.5-16.6c4.6-3.1,13.1,1.3,18.4-0.3c5.3-1.6,9.7-9.8,15.4-9.7c5.5,0.1,9.6,8.4,15.1,10.2C76.4,12,85,7.9,89.4,11c4.5,3.3,2.8,12.4,5.9,16.8c3.2,4.4,12.8,5.9,14.4,11.1c1.6,5.1-5.3,11.5-5.4,16.9C104.2,61,111.1,67.6,109.2,72.8z" />
                    </svg>

                    <button
                        aria-label="Close"
                        className="relative w-10 h-10 flex items-center justify-center text-white text-sm font-semibold"
                        onClick={() => {
                            onOpenChange(false);
                        }}
                    >
                        ✕
                    </button>
                </div>
                <div className="!px-6 !md:px-16 !pb-7 !pt-6">
                    111
                    {/* {CurrentStep && (
                        <CurrentStep
                            planYourTripForm={planYourTripForm}
                            setPlanYourTripForm={setPlanYourTripForm}
                            jumpToStep={jumpToStep}
                        />
                    )}

                    {errors && (
                        <p className="!mt-3 !text-red-600 !text-sm">{errors}</p>
                    )}

                    <div className="!mt-8 !flex !gap-3">
                        {step > 0 && !formLoader && (
                            <button
                                onClick={() => setStep(step - 1)}
                                className="flex items-center gap-2 px-4 py-2 text-sm md:text-md uppercase rounded-sm bg-black text-white hover:bg-black/90"
                            >
                                <MoveLeft className="h-4 w-4" />
                                Previous
                            </button>
                        )}

                        {CurrentStepKey !== "summary" && (
                            <button
                                disabled={formLoader}
                                onClick={handleNextStep}
                                className="flex items-center gap-2 px-4 py-2 text-sm md:text-md uppercase rounded-sm bg-black text-white hover:bg-black/90"
                            >
                                Next
                                {formLoader ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <MoveRight className="h-4 w-4" />
                                )}
                            </button>
                        )}

                        {CurrentStepKey === "summary" && (
                            <button
                                disabled={formLoader}
                                onClick={handlSubmitPlanYourTrip}
                                className="flex items-center gap-2 px-4 py-2 text-sm md:text-md uppercase rounded-sm bg-black text-white hover:bg-black/90"
                            >
                                {formLoader ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <CheckCircle2 className="h-4 w-4" />
                                )}
                                Submit
                            </button>
                        )}
                    </div> */}
                </div>
            </div>
        </div>
    )
}
