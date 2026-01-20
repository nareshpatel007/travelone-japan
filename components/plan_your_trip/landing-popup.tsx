"use client"

import { useState } from "react";
import { CheckCircle2, Loader2, MoveLeft, MoveRight, X } from "lucide-react";
import StepLeadForm from "./landing/StepLeadForm";
import StepFirstVisit from "./landing/StepFirstVisit";
import StepTravelTime from "./landing/StepTravelTime";
import StepTripDesign from "./landing/StepTripDesign";
import StepThemes from "./landing/StepThemes";
import StepThemes1 from "./landing/StepThemes1";
import StepThemes2 from "./landing/StepThemes2";
import StepRegions from "./landing/StepRegions";
import StepDays from "./landing/StepDays";
import StepBudget from "./landing/StepBudget";
import StepTravelers from "./landing/StepTravelers";
import StepAccommodation from "./landing/StepAccommodation";
import StepMeals from "./landing/StepMeals";
import StepTransfer from "./landing/StepTransfer";
import StepGuide from "./landing/StepGuide";
import StepSummary from "./landing/StepSummary";
import { getClientIp } from "@/lib/getClientIp";
import { useRouter } from "next/navigation";

interface PlanTripModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

// Define form data
const defaultFormData = {
    country_id: 109,
    country_name: "Japan",
    first_time_visit: "",
    season_name: "",
    travel_month: "",
    trip_design: "",
    themes_priority_1: [],
    themes_priority_2: [],
    cities_options: [],
    day_option: "",
    budget: "",
    prefer_travel_type: "family",
    family_friends: {
        adults: 2,
        child_8_12: 0,
        child_3_7: 0,
        infant: 0,
        is_women_only: false
    },
    groups: {
        adults: 2,
        child_8_12: 0,
        child_3_7: 0,
        infant: 0,
        is_women_only: false
    },
    solo: {
        is_women_only: false
    },
    accommodation: "",
    meal_preferences: "",
    transportation: "",
    guide: "",
    full_name: "",
    email: "",
    mobile: "",
    privacy_policy_accepted: false,
    ip_address: "",
};

export function LandingPlanTripModal({ open, onOpenChange }: PlanTripModalProps) {
    // Define route
    const router = useRouter();

    // Define state
    const [step, setStep] = useState(0);
    const [planYourTripForm, setPlanYourTripForm] = useState<any>(defaultFormData);
    const [errors, setErrors] = useState<string>("");
    const [leadId, setLeadId] = useState<string>("");
    const [formLoader, setFormLoader] = useState(false);

    // Handle reset
    const handleReset = () => {
        setStep(0);
        setErrors("");
        setPlanYourTripForm(defaultFormData);
        onOpenChange(false);
    }

    const updateForm = (key: string, value: any) => {
        setPlanYourTripForm((prev: any) => ({
            ...prev,
            [key]: value,
        }));

        // Clear error once user fixes it
        setErrors("");
    };

    // Validate step
    const validateStep = () => {
        // Define error
        let newErrors = "";

        // Get current step
        const steps = getFormSteps(planYourTripForm, true);
        const activeStep = steps[step];

        switch (activeStep) {
            case "lead_form":
                if (
                    !planYourTripForm.full_name ||
                    !planYourTripForm.email ||
                    !planYourTripForm.mobile
                ) {
                    newErrors = "Please fill all required fields.";
                } else if (!planYourTripForm.privacy_policy_accepted) {
                    newErrors = "Please accept the Terms consent to submit your form.";
                }
                break;

            case "first_visit":
                if (!planYourTripForm.first_time_visit) {
                    newErrors = "Please select an option.";
                }
                break;

            case "travel_time":
                if (!planYourTripForm.season_name) {
                    newErrors = "Please select an option.";
                }
                break;

            case "trip_design":
                if (!planYourTripForm.trip_design) {
                    newErrors = "Please select an option.";
                }
                break;

            case "themes_single":
                if (!Array.isArray(planYourTripForm.themes_priority_1) || planYourTripForm.themes_priority_1.length === 0) {
                    newErrors = "Select at least one theme.";
                }
                break;

            case "themes_priority_1":
                if (!Array.isArray(planYourTripForm.themes_priority_1) || planYourTripForm.themes_priority_1.length === 0) {
                    newErrors = "Select at least one theme for priority 1.";
                }
                break;

            case "themes_priority_2":
                if (!Array.isArray(planYourTripForm.themes_priority_2) || planYourTripForm.themes_priority_2.length === 0) {
                    newErrors = "Select at least one theme for priority 2.";
                }
                break;

            case "regions":
                if (!Array.isArray(planYourTripForm.cities_options) || planYourTripForm.cities_options.length === 0) {
                    newErrors = "Please select a region.";
                }
                break;

            case "days":
                if (!planYourTripForm.day_option) {
                    newErrors = "Please select number of days.";
                }
                break;

            case "budget":
                if (!planYourTripForm.budget) {
                    newErrors = "Please select a budget.";
                }
                break;
        }

        setErrors(newErrors);
        return newErrors === "";
    };

    // Handle submit plan your trip
    const handlSubmitPlanYourTrip = () => {
        setFormLoader(true);
        (async () => {
            try {
                // Add new lead
                const response = await fetch("/api/plan_your_trip", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        lead_id: leadId,
                        data: planYourTripForm
                    })
                });

                // Get json parse
                const json_parse = await response.json();

                // Check status
                if (json_parse.status) {
                    router.push("/thank-you");
                } else {
                    setFormLoader(false);
                    setErrors(json_parse.message);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    };

    // Handle next step
    const handleNextStep = async () => {
        if (!validateStep()) return;

        // STEP 0 → CREATE LEAD
        if (step === 0) {
            try {
                // If already store lead id
                if (leadId) {
                    setStep(step + 1);
                    return;
                }

                // Update state
                setFormLoader(true);

                // Add new lead
                const res = await fetch("/api/plan_your_trip/create_lead", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        full_name: planYourTripForm.full_name,
                        email: planYourTripForm.email,
                        mobile: planYourTripForm.mobile,
                        ip_address: await getClientIp()
                    }),
                });

                // Get json parse
                const data = await res.json();

                // Check response
                if (!data?.success) {
                    setErrors("Unable to process your request.");
                    return;
                }

                // Update state
                setLeadId(data?.data?.lead_id);
                setStep(step + 1);
            } catch (err) {
                setErrors("Something went wrong. Please try again.");
                setStep(0);
                return;
            } finally {
                setFormLoader(false);
            }
            return;
        } else {
            // Update state
            setStep(step + 1);
            return;
        }
    };

    // Get next/prev active steps
    const getFormSteps = (form: any, isReturnKey: boolean = false) => {
        // Get trip design
        const isSimpleDesign = form?.trip_design === "The Focused Vision";

        // If return
        if (isReturnKey) {
            return [
                "lead_form",
                "first_visit",
                "travel_time",
                "trip_design",
                ...(isSimpleDesign ? ["themes_single"] : ["themes_priority_1", "themes_priority_2"]),
                "regions",
                "days",
                "budget",
                "travelers",
                "accommodation",
                "meals",
                "transfer",
                "guide",
                "summary",
            ];
        } else {
            return [
                StepLeadForm,
                StepFirstVisit,
                StepTravelTime,
                StepTripDesign,
                ...(isSimpleDesign ? [StepThemes] : [StepThemes1, StepThemes2]),
                StepRegions,
                StepDays,
                StepBudget,
                StepTravelers,
                StepAccommodation,
                StepMeals,
                StepTransfer,
                StepGuide,
                StepSummary
            ];
        }
    };

    // Handle jump to step
    const jumpToStep = (stepKey: any) => {
        const steps = getFormSteps(planYourTripForm, true);
        const index = steps.indexOf(stepKey);
        if (index !== -1) {
            setStep(index);
        }
    };

    // Get current step
    const stepsValue = getFormSteps(planYourTripForm);
    const stepsKey = getFormSteps(planYourTripForm, true);
    const CurrentStep = stepsValue[step];
    const CurrentStepKey = stepsKey[step];

    // If not open
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 px-4">
            <div
                className="!relative max-w-[370px] bg-[#d9eed8] shadow-xl overflow-visible"
                style={{
                    borderTopLeftRadius: "180px",
                    borderTopRightRadius: "180px",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                }}
            >
                <div className="absolute top-16 right-10 translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer">
                    <svg
                        className="absolute inset-0 w-10 h-10 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 110 110"
                        fill="#a6c5a9"
                    >
                        <path d="M109.2,72.8c-1.9,5.2-11.5,6.4-14.7,10.6c-3.4,4.3-2,13.5-6.5,16.6c-4.6,3.1-13.1-1.3-18.4,0.3c-5.3,1.6-9.7,9.8-15.4,9.7c-5.5-0.1-9.6-8.4-15.1-10.2C33.6,98,25,102.1,20.6,99c-4.5-3.3-2.8-12.4-5.9-16.8c-3.2-4.4-12.8-5.9-14.4-11.1c-1.6-5.1,5.3-11.5,5.4-16.9C5.8,49-1.1,42.4,0.8,37.2s11.5-6.4,14.7-10.6c3.4-4.3,2-13.5,6.5-16.6c4.6-3.1,13.1,1.3,18.4-0.3c5.3-1.6,9.7-9.8,15.4-9.7c5.5,0.1,9.6,8.4,15.1,10.2C76.4,12,85,7.9,89.4,11c4.5,3.3,2.8,12.4,5.9,16.8c3.2,4.4,12.8,5.9,14.4,11.1c1.6,5.1-5.3,11.5-5.4,16.9C104.2,61,111.1,67.6,109.2,72.8z" />
                    </svg>

                    <button
                        aria-label="Close"
                        className="relative w-10 h-10 flex items-center justify-center text-white text-sm font-semibold  cursor-pointer"
                        onClick={handleReset}
                    >
                        ✕
                    </button>
                </div>
                <div className="p-6">
                    {CurrentStep && (
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
                                className="flex items-center gap-2 px-4 py-2 text-sm md:text-md uppercase rounded-sm bg-black text-white cursor-pointer hover:bg-black/90"
                            >
                                <MoveLeft className="h-4 w-4" />
                                Previous
                            </button>
                        )}

                        {CurrentStepKey !== "summary" && (
                            <button
                                disabled={formLoader}
                                onClick={handleNextStep}
                                className="flex items-center gap-2 px-4 py-2 text-sm md:text-md uppercase rounded-sm bg-black text-white cursor-pointer hover:bg-black/90"
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
                                className="flex items-center gap-2 px-4 py-2 text-sm md:text-md uppercase rounded-sm bg-black text-white cursor-pointer hover:bg-black/90"
                            >
                                {formLoader ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <CheckCircle2 className="h-4 w-4" />
                                )}
                                Submit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
