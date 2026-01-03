"use client";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    planYourTripForm: any;
    setPlanYourTripForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function StepMeals({
    planYourTripForm,
    setPlanYourTripForm,
}: Props) {
    const meals = [
        "Michelin & Fine Dining",
        "Local Gems & Markets",
        "Cultural & Farm-to-Table",
        "A Balanced Mix",
        "Flexible (Decide on the go)",
    ];

    const [selected, setSelected] = useState<string[]>([]);

    // ✅ Restore previously selected meals
    useEffect(() => {
        if (Array.isArray(planYourTripForm?.meal_preferences)) {
            setSelected(planYourTripForm.meal_preferences);
        }
    }, [planYourTripForm?.meal_preferences]);

    const toggleMeal = (meal: string) => {
        setSelected((prev) => {
            const updated = prev.includes(meal)
                ? prev.filter((m) => m !== meal)
                : [...prev, meal];

            // ✅ Save to parent state
            setPlanYourTripForm((form: any) => ({
                ...form,
                meal_preferences: updated,
            }));

            return updated;
        });
    };

    return (
        <>
            <h2 className="!text-xl !md:text-3xl !text-center !px-10 !pt-15 !font-semibold !mb-6">
                How would you like to dine? (Select your preferences)
            </h2>

            <div className="!grid !md:grid-cols-2 !gap-0">
                {meals.map((meal, i) => {
                    const isActive = selected.includes(meal);

                    return (
                        <label
                            key={i}
                            onClick={() => toggleMeal(meal)}
                            className="!flex !items-center !justify-between !px-3 !py-2 !rounded-sm !cursor-pointer !transition !bg-white"
                        >
                            <div className="!flex !items-center !gap-4">
                                {/* <span className="!border !rounded !px-2 !text-sm !border-[#54595F]">
                                    {i + 1}
                                </span> */}
                                <span className="text-sm md:text-base">{meal}</span>
                            </div>

                            <input
                                type="checkbox"
                                checked={isActive}
                                onChange={() => toggleMeal(meal)}
                                className="hidden"
                            />

                            {isActive && (
                                <span className="!text-black !text-md !font-semibold">
                                    <Check className="h-5 w-5" />
                                </span>
                            )}
                        </label>
                    );
                })}
            </div>
        </>
    );
}