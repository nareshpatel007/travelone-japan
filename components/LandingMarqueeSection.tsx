"use client";

import VerticalSlider from "./VerticalMarquee";
import MobileSlider from "./MobileSlider";
import HomeHeader from "./header/home-header";

interface Props {
    setOpenPlanYourTripModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const images1 = [
    "https://ik.imagekit.io/288weifiq/nextjs/slider_1.webp",
    "https://ik.imagekit.io/288weifiq/nextjs/slider_1.webp",
];

const images2 = [
    "https://ik.imagekit.io/288weifiq/nextjs/slider_2.webp",
    "https://ik.imagekit.io/288weifiq/nextjs/slider_2.webp",
];

const images3 = [
    "https://ik.imagekit.io/288weifiq/nextjs/slider_3.webp",
    "https://ik.imagekit.io/288weifiq/nextjs/slider_3.webp",
];

const images4 = [
    "https://ik.imagekit.io/288weifiq/nextjs/slider_4.webp",
    "https://ik.imagekit.io/288weifiq/nextjs/slider_4.webp",
];

export default function LandingMarqueeSection({ setOpenPlanYourTripModel }: Props) {
    return (
        <>
            {/* For Desktop */}
            <section className="hidden md:grid min-h-screen grid-cols-1 md:grid-cols-[45%_55%] lg:grid-cols-[50%_50%] bg-[#FFF9EE]">
                <div className="flex flex-col">
                    <HomeHeader />
                    <div className="flex flex-1 items-center px-20">
                        <div className="max-w-lg space-y-6 text-center md:text-left">
                            <h1 className="text-black text-5xl lg:text-6xl leading-tight font-normal">
                                Where Your Unique Persona Meets the World’s Greatest Destinations.
                            </h1>

                            <p className="text-black text-base sm:text-lg leading-relaxed md:mx-0">
                                TravelOne transcends traditional booking to create a living, breathing journey synchronized in real-time to your unique Traveler Persona.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button
                                    onClick={() => setOpenPlanYourTripModel(true)}
                                    className="bg-black text-white px-4 py-3 text-sm uppercase border border-black tracking-wide font-semibold hover:bg-transparent hover:text-black transition cursor-pointer"
                                >
                                    Begin Your Persona Mapping
                                </button>

                                <button
                                    className="border border-black text-black px-4 py-2.5 text-sm uppercase tracking-wide font-semibold hover:bg-black hover:text-white transition cursor-pointer"
                                >
                                    Explore Signature Collections
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-1 gap-8 lg:gap-10 justify-center">
                        {/* Always visible */}
                        <VerticalSlider images={images1} direction="down" />
                        <VerticalSlider images={images2} direction="up" />
                        <VerticalSlider images={images3} direction="down" />

                        {/* Only on wide desktop (xl+) — NO wrapper */}
                        <VerticalSlider
                            images={images4}
                            direction="up"
                            className="hidden xl:block"
                        />
                    </div>
                </div>
            </section>

            {/* For Mobile */}
            <section className="block md:hidden py-20 space-y-14 bg-[#FFF9EE]">
                <div className="flex flex-col">
                    <HomeHeader />
                    <div className="flex flex-1 items-center justify-center px-6 sm:px-8 lg:px-12">
                        <div className="max-w-xl space-y-6 text-center md:text-left">
                            <h1 className="text-black text-3xl leading-tight font-normal">
                                Where Your Unique Persona Meets the World’s Greatest Destinations.
                            </h1>

                            <p className="text-black text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                                TravelOne transcends traditional booking to create a living, breathing journey synchronized in real-time to your unique Traveler Persona.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button
                                    onClick={() => setOpenPlanYourTripModel(true)}
                                    className="bg-black text-white px-4 py-3 text-sm uppercase border border-black tracking-wide font-semibold hover:bg-transparent hover:text-black transition cursor-pointer"
                                >
                                    Begin Your Persona Mapping
                                </button>

                                <button
                                    className="border border-black text-black px-4 py-2.5 text-sm uppercase tracking-wide font-semibold hover:bg-black hover:text-white transition cursor-pointer"
                                >
                                    Explore Signature Collections
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <MobileSlider />
                </div>
            </section>
        </>
    );
}