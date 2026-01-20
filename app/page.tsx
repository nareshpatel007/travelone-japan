"use client";

import CommonFooter from "@/components/footer/common-footer";
import HomeMobileHeader from "@/components/header/home-mobile-header";
import LandingMarqueeSection from "@/components/LandingMarqueeSection";
import Image from "next/image";
import Heading from "@/components/common/heading";
import FeatureCard from "@/components/FeatureCard";
import { useEffect, useState } from "react";
import { LandingPlanTripModal } from "@/components/plan_your_trip/landing-popup";

// Define interface
interface CategoryCard {
    id: number
    label: string
    image: string
}

const categories: CategoryCard[] = [
    {
        id: 1,
        label: "Destinations",
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-7.jpg",
    },
    {
        id: 2,
        label: "Road Trips",
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-8.jpg",
    },
    {
        id: 3,
        label: "Secret Gems",
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-026.jpg",
    },
    {
        id: 4,
        label: "Tips & Tricks",
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-9.jpg",
    },
]

const cities = [
    { name: "Teneriffe", category: "Low budget", image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-3.jpg" },
    { name: "Georgia", category: "Hiking", image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-5.jpg" },
    { name: "Istanbul", category: "Food tours", image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-7.jpg" },
    { name: "Maldives", category: "Low budget", image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-img-24.jpg" },
    { name: "Jordan", category: "Hiking", image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-2.jpg" },
    { name: "Istanbul", category: "Food tours", image: "https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-7.jpg" },
];

interface DestinationCard {
    id: number
    title: string
    location: string
    image: string
}

const destinations: DestinationCard[] = [
    {
        id: 1,
        title: "Mexico Itinerary: Ultimate 15-day Travel Guide",
        location: "Mexico, Mexico",
        image: "https://ik.imagekit.io/288weifiq/landing-japan/home-3-img-new-7.jpg",
    },
    {
        id: 2,
        title: "Egypt Itinerary: Ultimate 7-day Travel Guide",
        location: "Giza, Egypt",
        image: "https://ik.imagekit.io/288weifiq/landing-japan/home-3-img-new-8.jpg",
    },
    {
        id: 3,
        title: "13 Things to do in Bali, Trips and Tricks",
        location: "Bali, Indonesia",
        image: "https://ik.imagekit.io/288weifiq/landing-japan/home-3-img-new-9.jpg",
    },
];

const populorDestination = [
    {
        id: 1,
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Home-1-destination-08.jpg",
        name: "Giza"
    },
    {
        id: 2,
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Home-1-destination-01.jpg",
        name: "Mexico"
    },
    {
        id: 3,
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Home-1-destination-04.jpg",
        name: "Paris"
    },
    {
        id: 4,
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Home-1-destination-07.jpg",
        name: "Lagos"
    },
    {
        id: 5,
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Home-1-destination-03.jpg",
        name: "Notodden"
    },
    {
        id: 1,
        image: "https://ik.imagekit.io/288weifiq/landing-japan/Home-1-destination-08.jpg",
        name: "Giza"
    }
];



export default function HomePage() {
    // Define state
    const [ready, setReady] = useState(false);
    const [openPlanYourTripModel, setOpenPlanYourTripModel] = useState<boolean>(false);

    useEffect(() => {
        // Wait one frame after hydration
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    return (
        <>
            <body
                className="wp-singular page-template page-template-page-full-width page-template-page-full-width-php page page-id-3060 wp-theme-wanderaway theme-wanderaway qi-blocks-1.4.3 qodef-gutenberg--no-touch qode-framework-1.2.6 woocommerce-js qodef-qi--no-touch qodef-content-grid-1300 qodef-back-to-top--enabled qodef-content-behind-header qodef-header--standard qodef-header-appearance--none qodef-header--transparent qodef-content--behind-header qodef-mobile-header--side-area qodef-drop-down-second--full-width qodef-drop-down-second--default qode-export-1.0 qodef-header-standard--left">
                {ready && <div id="qodef-page-wrapper">

                    <HomeMobileHeader />

                    <LandingMarqueeSection setOpenPlanYourTripModel={setOpenPlanYourTripModel} />

                    <div className="space-y-22 md:space-y-22 py-18 max-w-7xl mx-auto px-5 md:px-0">
                        {/* Section 1 */}
                        <div>
                            <Heading
                                main="Handcrafted Japan Itineraries"
                                sub="Discover the Best of Japan with Our Handcrafted Itineraries"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                                <div className="flex flex-col">
                                    <div className="relative h-80 mb-6 overflow-hidden rounded-lg">
                                        <Image
                                            src={"https://ik.imagekit.io/288weifiq/landing-japan/destionation-list-1.jpg"}
                                            alt={"Image"}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-light mb-3 font-medium leading-tight">Sample Tour Title</h3>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="relative h-80 mb-6 overflow-hidden rounded-lg">
                                        <Image
                                            src={"https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-2.jpg"}
                                            alt={"Image"}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-light mb-3 font-medium leading-tight">Sample Tour Title</h3>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="relative h-80 mb-6 overflow-hidden rounded-lg">
                                        <Image
                                            src={"https://ik.imagekit.io/288weifiq/landing-japan/Destination-list-4.jpg"}
                                            alt={"Image"}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-light mb-3 font-medium leading-tight">Sample Tour Title</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <Heading main="Quick Type Pick" sub="Nulla massa nisl, aliquam sed ante porta, suscipit facilisis nulla." />

                            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                                {categories.map((category) => (
                                    <div key={category.id} className="relative h-48 md:h-72 rounded-lg !text-center overflow-hidden group cursor-pointer">
                                        <Image
                                            src={category.image || "/placeholder.svg"}
                                            alt={category.label}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="!bg-white px-5 py-2 rounded">
                                                <h3 className="text-md md:text-xl text-black">{category.label}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <Heading main="Top Cities" sub="Lorem ipsum dolor sit amet cons ectetur adipi." />
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                {cities.map((destination, index) => (
                                    <div key={index} className="relative h-48 md:h-64 rounded-lg overflow-hidden group cursor-pointer">
                                        <Image
                                            src={destination?.image || "/placeholder.svg"}
                                            alt={destination?.name || "Image"}
                                            fill
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                                        <div className="!absolute !bottom-0 !left-0 !right-0 !p-6 !text-white !flex !flex-col !justify-end !h-full">
                                            <h3 className="!text-2xl !font-semibold !text-white !mb-1">{destination.name}</h3>
                                            <p className="!text-sm !font-light">{destination.category}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <Heading main="Favourite Destinations" sub="Vestibulum id neque varius, loreet nisi ut, pharetra metus." />
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                {populorDestination.map((destination, index) => (
                                    <div key={index} className="flex-shrink-0 flex flex-col items-center">
                                        <div className="w-40 h-40 rounded-full overflow-hidden mb-4 flex-shrink-0">
                                            <Image
                                                src={destination?.image || "/placeholder.svg"}
                                                alt={destination?.name || "Destination"}
                                                width={160}
                                                height={160}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="!text-lg !font-semibold !text-black">{destination?.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <Heading main="Top Travel Spots" sub="Top Travel Spots: Our Recommended Destinations A Click Away"
                            />
                            <div className="mt-10 grid grid-cols-1 lg:grid-cols-10 gap-4 min-h-[380px]">
                                <div className="relative col-span-1 lg:col-span-7 md:h-full overflow-hidden">
                                    <Image
                                        src="https://ik.imagekit.io/288weifiq/landing-japan/home3-img-1.webp"
                                        alt="Featured travel destination"
                                        fill
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                                <div className="col-span-1 lg:col-span-3 flex flex-col gap-1">
                                    {destinations.map((destination) => (
                                        <div
                                            key={destination.id}
                                            className="flex items-center lg:flex-col lg:text-center !bg-[#fcefdf] !p-6 lg:p-8 rounded-sm"
                                        >
                                            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden flex-shrink-0">
                                                <Image
                                                    src={destination.image || '/placeholder.svg'}
                                                    alt={destination.location}
                                                    width={80}
                                                    height={80}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="block md:hidden w-5"></div>
                                            <div className="!lg:mt-4">
                                                <p className="text-sm !text-gray-500 !m-0 !mb-2">
                                                    {destination.location}
                                                </p>
                                                <h5 className="font-semibold !text-gray-900 !m-0">
                                                    {destination.title}
                                                </h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 6 */}
                    <div className="relative w-full h-150 overflow-hidden">
                        <Image
                            src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-img-6.jpg"
                            alt="Travel worth reading about"
                            fill
                            className="absolute inset-0 w-full h-full object-cover object-center opacity-100"
                        />
                        <div className="relative h-full flex items-center justify-center px-8">
                            <div className="text-center max-w-2xl">
                                <h2 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
                                    For Travels Worth<br />
                                    Reading About
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* Section 7 */}
                    <div className="space-y-22 md:space-y-22 py-18 max-w-7xl mx-auto px-5 md:px-0">
                        <FeatureCard />
                    </div>

                    <div id="qodef-page-outer" className="!pt-40">
                        <div id="qodef-page-inner" className="qodef-content-full-width">
                            <main id="qodef-page-content" className="qodef-grid qodef-layout--template qodef-grid-template--12 "
                                role="main">
                                <div className="qodef-grid-inner">
                                    <div className="qodef-grid-item qodef-page-content-section qodef-col--content">
                                        <div className="elementor elementor-3060">
                                            <div className="elementor-element elementor-element-997454e e-con-full e-flex qodef-container-heights--disabled e-con e-parent">
                                                <div className="elementor-element elementor-element-b249df6 e-con-full e-flex qodef-container-heights--disabled e-con e-child qodef-parallax qodef--parallax-row qodef-parallax--init">
                                                    <div className="qodef-parallax-row-holder">
                                                        <div className="qodef-parallax-img-holder !opacity-100">
                                                            <div className="qodef-parallax-img-wrapper">
                                                                <Image fill src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-img-01.jpg" alt="Parallax Image" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-748fc69 elementor-widget elementor-widget-wanderaway_core_stacked_images">
                                                        <div className="elementor-widget-container">
                                                            <div className="qodef-shortcode qodef-m qodef-stacked-images qodef-layout--default qodef--has-appear qodef-shadow--enabled">
                                                                <div className="qodef-m-images">
                                                                    <div className="qodef-m-image !opacity-100">
                                                                        <Image src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-img-02.jpg" alt="Parallax Image" width="609" height="476" />
                                                                    </div>
                                                                    <div className="qodef-m-image !opacity-100" style={{ bottom: "-9%", right: "-13%", textAlign: "right" }}>
                                                                        <Image src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-img-3.png" alt="Parallax Image" width="215" height="326" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-bc8a773 e-con-full e-flex qodef-container-heights--disabled e-con e-child">
                                                    <div className="elementor-element elementor-element-f5f7f9b elementor-widget__width-initial elementor-widget elementor-widget-wanderaway_core_info_section">
                                                        <div className="elementor-widget-container">
                                                            <div className="qodef-shortcode qodef-m qodef-info-section qodef-layout--background-text qodef-background-text-pos--top-left">
                                                                <div className="qodef-m-info">
                                                                    <h2 className="qodef-m-title !text-black">Dedicated Destination Showcase Module</h2>
                                                                    <p className="qodef-m-text !text-black">Complete with destination singles, flexible lists, maps &amp; more</p>
                                                                    <div className="qodef-m-button">
                                                                        <a className="qodef-shortcode qodef-m qodef-button qodef-layout--filled qodef-html--link" href="#" style={{ margin: "32px 0 0 0" }}>
                                                                            <span className="qodef-m-text">View more</span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-910737b elementor-widget elementor-widget-wanderaway_core_icon_with_text">
                                                        <div className="elementor-widget-container">
                                                            <div className="qodef-shortcode qodef-m qodef-icon-with-text qodef-layout--before-content qodef--svg-icon">
                                                                <div className="qodef-m-icon-wrapper">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32.333"
                                                                        height="32.845" viewBox="0 0 32.333 32.845">

                                                                        <path fill="#ff6565"
                                                                            d="M32.096 21.742c-.547 1.559-3.372 1.921-4.335 3.172-1 1.3-.582 4.034-1.913 4.945s-3.85-.4-5.42.077c-1.555.468-2.865 2.935-4.526 2.909-1.6-.025-2.832-2.514-4.431-3.048s-4.134.7-5.416-.24c-1.329-.973-.813-3.706-1.748-5s-3.75-1.77-4.234-3.3c-.48-1.516 1.57-3.431 1.6-5.051.026-1.563-1.979-3.538-1.431-5.1s3.372-1.921 4.334-3.172c1-1.3.582-4.034 1.914-4.945s3.85.4 5.42-.077c1.555-.468 2.865-2.935 4.526-2.909 1.6.025 2.832 2.514 4.43 3.048s4.134-.7 5.416.24c1.329.973.813 3.705 1.748 5s3.75 1.77 4.234 3.3c.48 1.516-1.57 3.431-1.6 5.051-.026 1.57 1.979 3.541 1.432 5.1Z">
                                                                        </path>

                                                                        <path fill="#fff"
                                                                            d="m16.167 9.257 2.068 4.19 4.625.672-3.346 3.262.79 4.606-4.136-2.174-4.136 2.174.79-4.606-3.346-3.262 4.625-.672Z">
                                                                        </path>
                                                                    </svg>
                                                                </div>
                                                                <div className="qodef-m-content">
                                                                    <p className="qodef-m-text !text-black">Five premade destination layouts</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="elementor-element elementor-element-d0d83e8 e-con-full e-flex qodef-container-heights--disabled e-con e-parent">
                                                <div className="elementor-element elementor-element-63b91f0 e-con-full e-flex qodef-container-heights--disabled e-con e-child">
                                                    <div className="elementor-element elementor-element-973ff86 elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget elementor-widget-wanderaway_core_section_title">
                                                        <div className="elementor-widget-container">
                                                            <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--left">
                                                                <h2 className="qodef-m-title !text-black">A Variety of Ways to Display Posts</h2>
                                                                <p className="qodef-m-text !text-black" style={{ marginTop: "10px", fontSize: "19px" }}>You get every layout &amp; option you’ll need to captivate the blogosphere; 3 adjustable blog list elements, tons of ways to display single posts &amp; more.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-4e3d233 elementor-widget elementor-widget-wanderaway_core_textual_list">
                                                        <div className="elementor-widget-container">
                                                            <div className="qodef-shortcode qodef-m qodef-textual-list">
                                                                <ul className="qodef-e-list">
                                                                    <li className="qodef-e-item">
                                                                        <span className="qodef-e-bullet"></span>
                                                                        <span className="qodef-e-text">Huge set of single post layouts</span>
                                                                    </li>
                                                                    <li className="qodef-e-item">
                                                                        <span className="qodef-e-bullet"></span>
                                                                        <span className="qodef-e-text">Dynamic Blog List Mix element</span>
                                                                    </li>
                                                                    <li className="qodef-e-item">
                                                                        <span className="qodef-e-bullet"></span>
                                                                        <span className="qodef-e-text">Blog list galleries and sliders</span>
                                                                    </li>
                                                                    <li className="qodef-e-item">
                                                                        <span className="qodef-e-bullet"></span>
                                                                        <span className="qodef-e-text">Feature videos, audio &amp; more</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-0705473 elementor-widget elementor-widget-wanderaway_core_button">
                                                        <div className="elementor-widget-container">
                                                            <div className="qodef-shortcode qodef-m qodef-button qodef-layout--filled qodef-html--link">
                                                                <span className="qodef-m-text">VIEW MORE</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-0f040d7 e-con-full e-flex qodef-container-heights--disabled e-con e-child">
                                                    <div className="elementor-element elementor-element-c650457 elementor-widget elementor-widget-wanderaway_core_stacked_images">
                                                        <div className="elementor-widget-container">
                                                            <div className="qodef-shortcode qodef-m qodef-stacked-images qodef-layout--default qodef--has-appear qodef-shadow--enabled">
                                                                <div className="qodef-m-images">
                                                                    <div className="qodef-m-image !opacity-100">
                                                                        <Image src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-img-04.jpg" alt="s" width={733} height={715} />
                                                                    </div>
                                                                    <div className="qodef-m-image qodef-disabled--1024 !opacity-100" style={{ bottom: "-11%", left: "-26%", textAlign: "left" }}>
                                                                        <Image src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-img-05.jpg" alt="s" width={589} height={562} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="elementor-element elementor-element-9374edf e-con-full e-flex qodef-container-heights--disabled e-con e-parent">
                                                <div className="elementor-element elementor-element-81101c4 e-con-full e-flex qodef-container-heights--disabled e-con e-child">
                                                    <div className="elementor-element elementor-element-1b30435 elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-widget-laptop__width-initial elementor-widget elementor-widget-wanderaway_core_section_title">
                                                        <div className="elementor-widget-container">
                                                            <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--left">
                                                                <h2 className="qodef-m-title !text-black">Easily Launch an Online Store Too!</h2>
                                                                <p className="qodef-m-text !text-black" style={{ marginTop: "10px", fontSize: "19px" }}>The theme is fully compatible with the powerful &amp; free WooCommerce plugin, and on top of that you get a great set of shop page templates &amp; features.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-2a61ee2 elementor-widget elementor-widget-wanderaway_core_textual_list">
                                                        <div className="elementor-widget-container">
                                                            <div className="qodef-shortcode qodef-m qodef-textual-list">
                                                                <ul className="qodef-e-list">
                                                                    <li className="qodef-e-item">
                                                                        <span className="qodef-e-bullet"></span>
                                                                        <span className="qodef-e-text">Set up your online store in no
                                                                            time</span>
                                                                    </li>
                                                                    <li className="qodef-e-item">
                                                                        <span className="qodef-e-bullet"></span>
                                                                        <span className="qodef-e-text">Full WooCommerce
                                                                            compatibility</span>
                                                                    </li>
                                                                    <li className="qodef-e-item">
                                                                        <span className="qodef-e-bullet"></span>
                                                                        <span className="qodef-e-text">Easily adjustable shop
                                                                            singles</span>
                                                                    </li>
                                                                    <li className="qodef-e-item">
                                                                        <span className="qodef-e-bullet"></span>
                                                                        <span className="qodef-e-text">Fully flexible Product List
                                                                            element</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-21c1f92 elementor-widget elementor-widget-wanderaway_core_button">
                                                        <div className="elementor-widget-container">
                                                            <div className="qodef-shortcode qodef-m qodef-button qodef-layout--filled qodef-html--link">
                                                                <span className="qodef-m-text">VIEW MORE</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="elementor-element elementor-element-ad6543f e-con-full e-flex qodef-container-heights--disabled e-con e-child">
                                                    <div className="elementor-element elementor-element-50c708c elementor-widget elementor-widget-wanderaway_core_image_gallery">
                                                        <div className="elementor-widget-container">
                                                            <div className="qodef-shortcode qodef-m qodef-image-gallery qodef-shadow--enabled qodef-grid qodef-layout--columns qodef-gutter--medium qodef-col-num--2 qodef-responsive--predefined qodef-swiper--show-pagination">
                                                                <div className="qodef-grid-inner">
                                                                    <div className="qodef-e qodef-image-wrapper qodef-grid-item !opacity-100">
                                                                        <Image src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-img-08.jpg" alt="Parallax Image" width="1000" height="1080" />
                                                                    </div>
                                                                    <div className="qodef-e qodef-image-wrapper qodef-grid-item ">
                                                                        <Image src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-img-07.jpg" alt="Parallax Image" width="1000" height="1080" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-white">
                        <div className="relative z-10 max-w-6xl mb-[-100px] md:mb-[-140px] mx-auto pt-24 md:pt-32 mb-6">
                            <div className="hidden md:block absolute left-4 md:left-29 top-16 md:top-77">
                                <img
                                    src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-5.png"
                                    alt="Image"
                                    className="w-24 h-32 md:w-40 md:h-40 rounded-full object-cover"
                                />
                            </div>

                            <div className="hidden md:block absolute right-4 md:right-21 top-12 md:top-30">
                                <img
                                    src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-6.png"
                                    alt="Image"
                                    className="w-24 h-24 md:w-54 md:h-50 rounded-full object-cover"
                                />
                            </div>

                            <div className="flex justify-center">
                                <img
                                    src="https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-7.png"
                                    alt="Image"
                                    className="w-56 h-80 md:w-110 md:h-[580px] rounded-full object-cover"
                                />
                            </div>
                        </div>
                        <section className="!relative !w-full !overflow-hidden !pt-34 !md:pt-40">
                            <div
                                className="!absolute !inset-0 !bg-no-repeat !bg-top !bg-cover"
                                style={{
                                    backgroundImage:
                                        "url('https://ik.imagekit.io/288weifiq/landing-japan/Landing-marquee-img-9.png')",
                                }}
                            />
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <h2 className="text-3xl !text-black md:text-5xl font-normal leading-tight !mb-4">
                                    Every Travel Story’s <br /> Favorite Destination
                                </h2>

                                <p className="max-w-xl !text-black !mb-8">
                                    Create a website the stories from your journeys truly deserve with
                                    WanderAway, a modern travelogue & personal travel blog theme.
                                </p>

                                <button className="bg-black text-white px-8 py-3 uppercase text-sm tracking-wide">
                                    Purchase
                                </button>
                            </div>
                        </section>
                    </div>

                    <LandingPlanTripModal open={openPlanYourTripModel} onOpenChange={setOpenPlanYourTripModel} />

                    <CommonFooter />
                </div>}
            </body>
        </>
    );
}
