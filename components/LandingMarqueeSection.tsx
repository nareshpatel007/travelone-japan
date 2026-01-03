"use client"

import Image from "next/image";
import VerticalSlider from "./VerticalMarquee";
import MobileSlider from "./MobileSlider";

// Define props
interface Props {
    setOpenPlanYourTripModel: React.Dispatch<React.SetStateAction<boolean>>
}

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
        <div className="elementor-element elementor-element-3150fd8 e-con-full e-flex qodef-container-heights--disabled e-con e-parent e-lazyloaded">
            <div className="elementor-element elementor-element-5b79242 e-con-full e-flex qodef-container-heights--disabled e-con e-child">
                <div className="elementor-element elementor-element-ec76f25 elementor-widget__width-initial elementor-widget-laptop__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-wanderaway_core_section_title">
                    <div className="elementor-widget-container">
                        <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--left">
                            <h1 className="qodef-m-title">Where All the Stories From Your Travels Find Their Home.</h1>
                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-bb5aff5 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile_extra__width-initial elementor-widget-laptop__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-wanderaway_core_info_section">
                    <div className="elementor-widget-container">
                        <div className="qodef-shortcode qodef-m qodef-info-section qodef-layout--background-text qodef-background-text-pos--top-left">
                            <div className="qodef-m-background-text"></div>
                            <div className="qodef-m-info">
                                <p className="qodef-m-text">
                                    Welcome to TravelOne, a theme specifically made for sharing all your travel adventures with your
                                    reading audience!
                                </p>
                                <div className="qodef-m-button !mt-5">
                                    <span
                                        className="qodef-shortcode qodef-m qodef-button qodef-layout--filled qodef-html--link qodef-m-text cursor-pointer"
                                        onClick={() => setOpenPlanYourTripModel(true)}
                                    >
                                        Plan Your Trip
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="elementor-element elementor-element-04bed72 e-con-full e-flex qodef-container-heights--disabled e-con e-child pb-10 md:pb-0">
                <MobileSlider images={mobileImages} />
                <div className="hidden md:flex lg:hidden gap-6 px-8 bg-[#fbf7ef] justify-center">
                    <VerticalSlider images={images1} direction="down" />
                    <VerticalSlider images={images2} direction="up" />
                </div>
                <div className="hidden lg:flex gap-6 px-20 bg-[#fbf7ef] justify-center">
                    <VerticalSlider images={images1} direction="down" />
                    <VerticalSlider images={images2} direction="up" />
                    <VerticalSlider images={images1} direction="down" />
                    <VerticalSlider images={images2} direction="up" />
                </div>
            </div>
        </div>
    )
}
