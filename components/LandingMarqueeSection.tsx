"use client"

import VerticalSlider from "./VerticalMarquee";
import MobileSlider from "./MobileSlider";
import HomeHeader from "./header/home-header";

// Define props
interface Props {
    setOpenPlanYourTripModel: React.Dispatch<React.SetStateAction<boolean>>
}

// Define images
const mobileImages = [
    "https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-1024-img-2.png",
    "https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-680-img-1.png"
];

const images1 = [
    "https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-01.png",
    "https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-4.png",
];

const images2 = [
    "https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-3.png",
    "https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-4.png",
];

export default function LandingMarqueeSection({ setOpenPlanYourTripModel }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] bg-[#FFF9EE] min-h-screen">
            <div>
                <HomeHeader />
                <div className="flex items-center px-8 md:px-16 lg:px-24 py-16 md:py-50 bg-[#FFF9EE]">
                    <div className="max-w-xl space-y-6">
                        <h1 className="hidden md:block text-black text-4xl md:text-6xl leading-tight font-normal">
                            Where All the Stories <br />
                            From Your Travels <br />
                            Find Their Home.
                        </h1>

                        <h1 className="block md:hidden text-black text-4xl md:text-6xl leading-tight font-normal">
                            Where All the Stories From Your Travels Find Their Home.
                        </h1>

                        <p className="text-black text-base md:text-lg leading-relaxed max-w-md">
                            Welcome to TravelOne, a theme specifically made for sharing all your travel adventures with your
                            reading audience!
                        </p>

                        <button
                            onClick={() => setOpenPlanYourTripModel(true)}
                            className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-gray-800 cursor-pointer transition"
                        >
                            Plan Your Trip
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <MobileSlider images={mobileImages} />

                <div className="hidden md:flex lg:hidden gap-6 px-8 justify-center bg-[#FFF9EE]">
                    <VerticalSlider images={images1} direction="down" />
                    <VerticalSlider images={images2} direction="up" />
                </div>

                <div className="hidden lg:flex gap-6 px-20 justify-center bg-[#FFF9EE]">
                    <VerticalSlider images={images1} direction="down" />
                    <VerticalSlider images={images2} direction="up" />
                    <VerticalSlider images={images1} direction="down" />
                    <VerticalSlider images={images2} direction="up" />
                </div>
            </div>
        </div>
    )
}
