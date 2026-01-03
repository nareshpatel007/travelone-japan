import { useState } from "react";

const travelerConfig = [
    ["Adults", "Ages 12 or above", "adults"],
    ["Child", "Ages 8-12", "child812"],
    ["Child", "Ages 3-7", "child37"],
    ["Infant", "Ages 0-2", "infant"],
];

export default function StepTravelers() {
    const [activeTab, setActiveTab] = useState<"solo" | "family" | "group">("family");

    const [onlyWoman, setOnlyWoman] = useState(false);

    const [familyCount, setFamilyCount] = useState({
        adults: 2,
        child812: 0,
        child37: 0,
        infant: 0,
    });

    const [groupCount, setGroupCount] = useState({
        adults: 0,
        child812: 0,
        child37: 0,
        infant: 0,
    });

    const updateCount = (
        type: "family" | "group",
        key: string,
        value: number
    ) => {
        const updater = type === "family" ? setFamilyCount : setGroupCount;
        updater((prev: any) => ({
            ...prev,
            [key]: Math.max(0, value),
        }));
    };

    // Active data
    const activeData: any = activeTab === "family" ? familyCount : groupCount;

    return (
        <>
            <h2 className="!text-xl !md:text-3xl !font-normal !mb-6">
                Who's traveling and how many of you?
            </h2>

            {/* Tabs */}
            <div className="!flex !gap-3 !mb-3 !md:mb-6">
                <Tab label="Solo" active={activeTab === "solo"} onClick={() => setActiveTab("solo")} />
                <Tab label="Family" active={activeTab === "family"} onClick={() => setActiveTab("family")} />
                <Tab label="Small Group" active={activeTab === "group"} onClick={() => setActiveTab("group")} />
            </div>

            {/* SOLO */}
            {activeTab === "solo" && (
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        checked={onlyWoman}
                        onChange={(e) => setOnlyWoman(e.target.checked)}
                    />
                    <span>Only woman</span>
                </div>
            )}

            {/* FAMILY & GROUP – SAME LAYOUT */}
            {(activeTab === "family" || activeTab === "group") && (
                <div className="space-y-4">
                    {travelerConfig.map(([title, subtitle, key]) => (
                        <div
                            key={key}
                            className="flex justify-between items-center"
                        >
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
            className={`px-4 py-2 text-sm !md:text-md rounded-md cursor-pointer transition ${active
                ? "!bg-black !text-white"
                : "bg-white text-black"
                }`}
        >
            {label}
        </button>
    );
}