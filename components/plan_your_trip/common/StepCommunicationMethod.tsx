"use client";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import QuestionHeading from "./questionHeading";

interface Props {
    planYourTripForm: any;
    setPlanYourTripForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function StepCommunicationMethod({
    planYourTripForm,
    setPlanYourTripForm,
}: Props) {
    // Define state
    const [selected, setSelected] = useState<string | null>(null);

    // Restore selection when coming back to this step
    useEffect(() => {
        if (planYourTripForm?.communication_method) {
            setSelected(planYourTripForm.communication_method);
        }
    }, [planYourTripForm?.communication_method]);

    // Handle change
    const handleChange = (value: string) => {
        // Prevent reselect / deselect
        if (selected === value) return;

        setSelected(value);

        setPlanYourTripForm((prev: any) => ({
            ...prev,
            communication_method: value,
        }));
    };

    return (
        <div className="space-y-5">
            <QuestionHeading
                title="What is your preferred method of communication?"
            />
            <div className="max-h-[55vh] md:max-h-[60vh] overflow-y-auto space-y-3">
                <Option
                    text="Phone Call"
                    value="Phone Call"
                    selected={selected}
                    onChange={handleChange}
                />

                <Option
                    text="WhatsApp"
                    value="WhatsApp"
                    selected={selected}
                    onChange={handleChange}
                />
                
                <Option
                    text="Email"
                    value="Email"
                    selected={selected}
                    onChange={handleChange}
                />
                
                <Option
                    text="SMS / Text Message"
                    value="SMS / Text Message"
                    selected={selected}
                    onChange={handleChange}
                />
                
                <Option
                    text="Video Call (Zoom / Google Meet)"
                    value="Video Call (Zoom / Google Meet)"
                    selected={selected}
                    onChange={handleChange}
                />
                
                <Option
                    text="No Preference (Any is fine)"
                    value="No Preference (Any is fine)"
                    selected={selected}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

function Option({
    text,
    subText,
    value,
    selected,
    onChange,
}: any) {
    const isActive = selected === value;

    return (
        <label
            onClick={() => onChange(value)}
            className={`flex items-center justify-between border px-5 py-4 rounded-sm cursor-pointer transition bg-white ${isActive ? "border-black" : "border-black/30"}`}
        >
            <div className="grid gap-1 text-sm md:text-base text-black">
                <span>{text}</span>
                {subText && <span>{subText}</span>}
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
                {isActive && <Check className="h-5 w-5 font-semibold text-black" />}
            </div>
            <input
                type="radio"
                checked={isActive}
                onChange={() => onChange(value)}
                className="hidden"
            />
        </label>
    );
}