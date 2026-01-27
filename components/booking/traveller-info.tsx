"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import TravellerForm from "./traveller-form";
import "swiper/css";

const travellers = [
    { type: "Adult", ageLabel: "Ages 12 or above" },
    { type: "Adult", ageLabel: "Ages 12 or above" },
    { type: "Child", ageLabel: "Age 8–12" },
    { type: "Infant", ageLabel: "Below 3" },
];

export default function TravellerInfoTab() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">

            {/* ================= MOBILE (ACCORDION) ================= */}
            <div className="md:hidden space-y-4">
                {travellers.map((t, index) => (
                    <div
                        key={index}
                        className="border rounded-md overflow-hidden"
                    >
                        <button
                            onClick={() => setOpen(open === index ? null : index)}
                            className="w-full flex justify-between items-center px-4 py-3 bg-green-100"
                        >
                            <div className="text-left">
                                <p className="font-semibold text-sm">
                                    {t.type} {index + 1}
                                </p>
                                <span className="text-xs text-gray-600">{t.ageLabel}</span>
                            </div>
                            {open === index ? <ChevronUp /> : <ChevronDown />}
                        </button>

                        {open === index && (
                            <div className="p-4">
                                <TravellerForm
                                    index={index}
                                    title={t.type}
                                    ageLabel={t.ageLabel}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* ================= DESKTOP (VERTICAL SLIDER) ================= */}
            <div className="hidden md:block">
                <Swiper
                    direction="vertical"
                    slidesPerView={1}
                    mousewheel
                    modules={[Mousewheel]}
                    className="h-[650px]"
                >
                    {travellers.map((t, index) => (
                        <SwiperSlide key={index} className="p-6">
                            <div className="bg-white border rounded-md p-6 shadow-sm">
                                <TravellerForm
                                    index={index}
                                    title={t.type}
                                    ageLabel={t.ageLabel}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
