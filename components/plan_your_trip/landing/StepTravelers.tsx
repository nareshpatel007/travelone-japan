"use client";
import { useEffect, useState } from "react";

const travelerConfig = [
    ["Adults", "Ages 12 or above", "adults"],
    ["Child", "Ages 8-12", "child_8_12"],
    ["Child", "Ages 3-7", "child_3_7"],
    ["Infant", "Ages 0-2", "infant"],
];

interface Props {
    planYourTripForm: any;
    setPlanYourTripForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function StepTravelers({
    planYourTripForm,
    setPlanYourTripForm,
}: Props) {
    // Define state
    const [activeTab, setActiveTab] = useState<"solo" | "family" | "group">("family");
    const [onlyWoman, setOnlyWoman] = useState(false);

    const [familyCount, setFamilyCount] = useState({
        adults: 2,
        child_8_12: 0,
        child_3_7: 0,
        infant: 0,
    });

    const [groupCount, setGroupCount] = useState({
        adults: 2,
        child_8_12: 0,
        child_3_7: 0,
        infant: 0,
    });

    /* ----------------------------------
       RESTORE VALUES ON STEP REVISIT
    ---------------------------------- */
    useEffect(() => {
        if (planYourTripForm?.prefer_travel_type) {
            setActiveTab(
                planYourTripForm.prefer_travel_type === "family"
                    ? "family"
                    : planYourTripForm.prefer_travel_type === "group"
                        ? "group"
                        : "solo"
            );
        }

        if (
            planYourTripForm?.family_friends &&
            Object.keys(planYourTripForm.family_friends).length
        ) {
            setFamilyCount(planYourTripForm.family_friends);
        }

        if (
            planYourTripForm?.groups &&
            Object.keys(planYourTripForm.groups).length
        ) {
            setGroupCount(planYourTripForm.groups);
        }

        if (planYourTripForm?.solo?.is_women_only !== undefined) {
            setOnlyWoman(planYourTripForm.solo.is_women_only);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    /* ----------------------------------
       UPDATE COUNTS
    ---------------------------------- */
    const updateCount = (
        type: "family" | "group",
        key: string,
        value: number
    ) => {
        const updater = type === "family" ? setFamilyCount : setGroupCount;

        updater((prev: any) => {
            const updated = {
                ...prev,
                [key]: Math.max(0, value),
            };

            setPlanYourTripForm((form: any) => ({
                ...form,
                prefer_travel_type: type === "family" ? "family" : "group",
                [type === "family" ? "family_friends" : "groups"]: updated,
            }));

            return updated;
        });
    };

    /* ----------------------------------
       SOLO TOGGLE
    ---------------------------------- */
    const handleSoloChange = (checked: boolean) => {
        setOnlyWoman(checked);

        setPlanYourTripForm((form: any) => ({
            ...form,
            prefer_travel_type: "solo",
            solo: {
                is_women_only: checked,
            },
        }));
    };

    const activeData: any = activeTab === "family" ? familyCount : groupCount;

    return (
        <>
            <h2 className="!text-xl !md:text-3xl !font-normal !mb-6">
                Who's traveling and how many of you?
            </h2>

            {/* Tabs */}
            <div className="!flex !gap-3 !mb-3 !md:mb-6">
                <Tab
                    label="Solo"
                    active={activeTab === "solo"}
                    onClick={() => {
                        setActiveTab("solo");
                        setPlanYourTripForm((f: any) => ({
                            ...f,
                            prefer_travel_type: "solo",
                        }));
                    }}
                />
                <Tab
                    label="Family"
                    active={activeTab === "family"}
                    onClick={() => {
                        setActiveTab("family");
                        setPlanYourTripForm((f: any) => ({
                            ...f,
                            prefer_travel_type: "family",
                        }));
                    }}
                />
                <Tab
                    label="Small Group"
                    active={activeTab === "group"}
                    onClick={() => {
                        setActiveTab("group");
                        setPlanYourTripForm((f: any) => ({
                            ...f,
                            prefer_travel_type: "group",
                        }));
                    }}
                />
            </div>

            {/* SOLO */}
            {activeTab === "solo" && (
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        checked={onlyWoman}
                        onChange={(e) => handleSoloChange(e.target.checked)}
                    />
                    <span>Only woman</span>
                </div>
            )}

            {/* FAMILY & GROUP */}
            {(activeTab === "family" || activeTab === "group") && (
                <div className="space-y-4">
                    {travelerConfig.map(([title, subtitle, key]) => (
                        <div key={key} className="flex justify-between items-center">
                            <div>
                                <p className="font-medium">{title}</p>
                                <p className="text-sm text-gray-600">{subtitle}</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() =>
                                        updateCount(activeTab, key, activeData[key] - 1)
                                    }
                                    className="w-8 h-8 bg-white border rounded-full hover:bg-black hover:text-white cursor-pointer"
                                >
                                    −
                                </button>

                                <span className="w-4 text-center">
                                    {activeData[key]}
                                </span>

                                <button
                                    onClick={() =>
                                        updateCount(activeTab, key, activeData[key] + 1)
                                    }
                                    className="w-8 h-8 bg-white border rounded-full hover:bg-black hover:text-white cursor-pointer"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

function Tab({ label, active, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 text-sm !md:text-md rounded-md cursor-pointer transition ${active ? "!bg-black !text-white" : "bg-white text-black"
                }`}
        >
            {label}
        </button>
    );
}