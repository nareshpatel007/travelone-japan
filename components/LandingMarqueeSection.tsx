"use client";

import VerticalSlider from "./VerticalMarquee";
import MobileSlider from "./MobileSlider";
import HomeHeader from "./header/home-header";
import Link from "next/link";

interface Props {
    setOpenPlanYourTripModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const images1 = [
    "https://ik.imagekit.io/288weifiq/nextjs/Landing-marquee-img-01.png",
    "https://ik.imagekit.io/288weifiq/nextjs/Landing-marquee-img-01.png",
];

const images2 = [
    "https://ik.imagekit.io/288weifiq/nextjs/Landing-marquee-img-2.png",
    "https://ik.imagekit.io/288weifiq/nextjs/Landing-marquee-img-2.png",
];

const images3 = [
    "https://ik.imagekit.io/288weifiq/nextjs/Landing-marquee-img-3.png",
    "https://ik.imagekit.io/288weifiq/nextjs/Landing-marquee-img-3.png",
];

const images4 = [
    "https://ik.imagekit.io/288weifiq/nextjs/Landing-marquee-img-4.png",
    "https://ik.imagekit.io/288weifiq/nextjs/Landing-marquee-img-4.png",
];

export default function LandingMarqueeSection({ setOpenPlanYourTripModel }: Props) {
    return (
        <>
            {/* For Desktop */}
            <section className="hidden md:grid min-h-screen grid-cols-1 bg-[#FFF9EE] md:grid-cols-[48%_52%]">
                <div className="flex flex-col">
                    <HomeHeader />
                    <div className="flex flex-1 items-center px-18">
                        <div className="max-w-xl space-y-6 text-center md:text-left">
                            <h1 className="text-black text-3xl md:text-6xl leading-tight font-normal">
                                We Record Your Traveler Persona to Create Personalized Travel Plans.
                            </h1>

                            <p className="text-black text-base sm:text-lg leading-relaxed">
                                Our platform delivers 100% personalized journeys by synchronizing your unique persona with real-time global orchestration.
                            </p>

                            <button
                                onClick={() => setOpenPlanYourTripModel(true)}
                                className="bg-black text-white px-4 py-2.5 text-sm uppercase border border-black tracking-wide font-semibold hover:bg-transparent hover:text-black transition cursor-pointer mr-5"
                            >
                                Begin Your Persona Mapping
                            </button>

                            <Link href="/country">
                                <button
                                    className="border border-black text-black px-4 py-2.5 text-sm uppercase tracking-wide font-semibold hover:bg-black hover:text-white transition cursor-pointer"
                                >
                                    Explore Signature Collections
                                </button>
                            </Link>
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
                        {/* <VerticalSlider
                            images={images4}
                            direction="up"
                            className="hidden xl:block"
                        /> */}
                    </div>
                </div>
            </section>

            {/* For Mobile */}
            <section className="block md:hidden py-12 space-y-12 bg-[#FFF9EE]">
                <div className="flex flex-col">
                    <HomeHeader />
                    <div className="flex flex-1 items-center justify-center px-6 sm:px-8 lg:px-12">
                        <div className="max-w-xl space-y-6 text-center md:text-left">
                            <h1 className="text-black text-3xl leading-tight font-normal">
                                We Record Your Traveler Persona to Create Personalized Travel Plans.
                            </h1>

                            <p className="text-black text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                                Our platform delivers 100% personalized journeys by synchronizing your unique persona with real-time global orchestration.
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