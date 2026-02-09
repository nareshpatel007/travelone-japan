"use client";
import { Check, X } from "lucide-react";
import QuestionHeading from "./questionHeading";
import { useEffect } from "react";

// Define the summary configuration
const SUMMARY_IN_MIND_CONFIG = [
    {
        label: "Destination in mind",
        stepKey: "choose_flow",
        shouldShow: () => true,
        isAnswered: (form: any) => !!form.choose_flow,
    },
    {
        label: "First time visiting",
        stepKey: "first_visit",
        shouldShow: () => true,
        isAnswered: (form: any) => !!form.first_time_visit,
    },
    {
        label: "Travel season",
        stepKey: "travel_time",
        shouldShow: () => true,
        isAnswered: (form: any) => !!form.season_name,
    },
    {
        label: "Trip design",
        stepKey: "trip_design",
        shouldShow: () => true,
        isAnswered: (form: any) => !!form.trip_design,
    },
    {
        label: "Theme options",
        stepKey: "themes_single",
        shouldShow: (form: any) => form.trip_design === "The Focused Vision",
        isAnswered: (form: any) => Array.isArray(form.themes_priority_1) && form.themes_priority_1.length > 0,
    },
    {
        label: "Theme priority 1",
        stepKey: "themes_priority_1",
        shouldShow: (form: any) => form.trip_design === "The Dual Perspective",
        isAnswered: (form: any) => Array.isArray(form.themes_priority_1) && form.themes_priority_1.length > 0,
    },
    {
        label: "Theme priority 2",
        stepKey: "themes_priority_2",
        shouldShow: (form: any) => form.trip_design === "The Dual Perspective",
        isAnswered: (form: any) => Array.isArray(form.themes_priority_2) && form.themes_priority_2.length > 0,
    },
    {
        label: "Regions",
        stepKey: "regions",
        shouldShow: () => true,
        isAnswered: (form: any) => Array.isArray(form.cities_options) && form.cities_options.length > 0,
    },
    {
        label: "Trip duration",
        stepKey: "days",
        shouldShow: () => true,
        isAnswered: (form: any) => !!form.day_option,
    },
    {
        label: "Budget",
        stepKey: "budget",
        shouldShow: () => true,
        isAnswered: (form: any) => !!form.budget,
    },
    {
        label: "Travelers",
        stepKey: "travelers",
        shouldShow: () => true,
        isAnswered: (form: any) => !!form.prefer_travel_type,
    },
    {
        label: "Accommodation",
        stepKey: "accommodation",
        shouldShow: () => true,
        isAnswered: (form: any) => !!form.accommodation,
    },
    {
        label: "Meals",
        stepKey: "meals",
        shouldShow: () => true,
        isAnswered: (form: any) => !!form.meal_preferences,
    },
    {
        label: "Transfer",
        stepKey: "transfer",
        shouldShow: () => true,
        isAnswered: (form: any) => !!form.transportation,
    },
    {
        label: "Guide",
        stepKey: "guide",
        shouldShow: () => true,
        isAnswered: (form: any) => !!form.guide,
    },
];

interface Props {
    planYourTripForm: any;
    setPlanYourTripForm: React.Dispatch<React.SetStateAction<any>>;
    jumpToStep: (stepKey: any) => void;
}

export default function StepSummary({ planYourTripForm, setPlanYourTripForm, jumpToStep }: Props) {
    // Get visible items
    const visibleItems = SUMMARY_IN_MIND_CONFIG.filter((item) =>
        item.shouldShow(planYourTripForm)
    );

    // Init update flag
    useEffect(() => {
        setPlanYourTripForm((prev: any) => ({
            ...prev,
            is_show_history_btn: true
        }));
    }, []);

    return (
        <div className="space-y-5">
            <QuestionHeading title="Your Preference Summary" />
            <div className="border border-black rounded-sm p-5 space-y-5 bg-white/60 max-h-[55vh] md:max-h-[60vh] overflow-y-auto space-y-3">
                {visibleItems.map((item, index) => {
                    const answered = item.isAnswered(planYourTripForm);

                    return (
                        <div
                            key={item.label}
                            onClick={() => answered && jumpToStep(item.stepKey)}
                            className="flex items-center justify-between border-b pb-2 hover:underline cursor-pointer"
                        >
                            <span className="text-sm md:text-base text-black">
                                Preference {index + 1}: {item.label}
                            </span>
                            <span className="flex items-center justify-center">
                                {answered && <div className="flex items-center space-x-2">
                                    <Check className="h-5 w-5 font-semibold text-green-700" />
                                    <span className="text-sm md:text-base text-green-700">Completed</span>
                                </div>}

                                {!answered && <div className="flex items-center space-x-2">
                                    <X className="h-5 w-5 font-semibold text-red-500" />
                                    <span className="text-sm md:text-base text-red-500">Not Completed</span>
                                </div>}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}