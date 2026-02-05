"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getClientIp } from "@/lib/getClientIp";
import StepLeadForm from "./common/StepLeadForm";
import StepFirstVisit from "./common/StepFirstVisit";
import StepTravelTime from "./common/StepTravelTime";
import StepTripDesign from "./common/StepTripDesign";
import StepThemes from "./common/StepThemes";
import StepThemes1 from "./common/StepThemes1";
import StepThemes2 from "./common/StepThemes2";
import StepRegions from "./common/StepRegions";
import StepDays from "./common/StepDays";
import StepBudget from "./common/StepBudget";
import StepTravelers from "./common/StepTravelers";
import StepAccommodation from "./common/StepAccommodation";
import StepMeals from "./common/StepMeals";
import StepTransfer from "./common/StepTransfer";
import StepGuide from "./common/StepGuide";
import StepSummary from "./common/StepSummary";
import { CheckCircle, Loader2, MoveLeft, MoveRight, X } from "lucide-react";
import StepCountries from "./common/StepCountries";

// Define interface
interface Props {
    open: boolean
    onOpenChange: (open: boolean) => void
}

// Define form data
const defaultFormData = {
    country_id: "",
    country_name: "",
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

export function CommonPlanTripModal({ open, onOpenChange }: Props) {
    // Define route
    const router = useRouter();

    // Define state
    const [step, setStep] = useState(0);
    const [planYourTripForm, setPlanYourTripForm] = useState<any>(defaultFormData);
    const [errors, setErrors] = useState<string>("");
    const [leadId, setLeadId] = useState<string>("");
    const [formLoader, setFormLoader] = useState(false);

    // Handle close
    const handleClose = () => {
        setStep(0);
        setErrors("");
        setPlanYourTripForm(defaultFormData);
        onOpenChange(false);
    }

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
                "countries",
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
                StepCountries,
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={handleClose} />
            <div className="relative w-full h-full bg-[#FFF6E5] overflow-auto">
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 z-10 p-2 rounded-full bg-[#FFC765] hover:bg-black hover:text-white cursor-pointer transition"
                >
                    <X className="h-5 w-5" />
                </button>
                <div className="min-h-full flex items-start justify-center px-6 py-10 md:py-16">
                    <div className="w-full max-w-4xl space-y-5">
                        {/* Screen Step */}
                        {CurrentStep && (
                            <CurrentStep
                                planYourTripForm={planYourTripForm}
                                setPlanYourTripForm={setPlanYourTripForm}
                                jumpToStep={jumpToStep}
                            />
                        )}

                        {/* Error */}
                        {errors && (
                            <p className="text-red-600 text-sm md:text-base">{errors}</p>
                        )}

                        {/* Navigation */}
                        <div className="flex gap-3">
                            {step > 0 && !formLoader && (
                                <button
                                    onClick={() => setStep(step - 1)}
                                    className="flex items-center gap-2 px-8 py-2.5 bg-white text-black rounded-sm font-medium border border-black hover:bg-black transition-colors hover:text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <MoveLeft className="h-4 w-4" />
                                    Previous
                                </button>
                            )}

                            {CurrentStepKey !== "summary" && (
                                <button
                                    disabled={formLoader}
                                    onClick={handleNextStep}
                                    className="flex items-center gap-2 px-8 py-2.5 bg-black text-white rounded-sm font-medium border border-black hover:bg-white transition-colors hover:text-black cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
                                    className="flex items-center gap-2 px-8 py-2.5 bg-black text-white rounded-sm font-medium border border-black hover:bg-white transition-colors hover:text-black cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {formLoader ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <CheckCircle className="h-5 w-5" />
                                    )}
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
