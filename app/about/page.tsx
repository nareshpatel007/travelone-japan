"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import { Globe, Heart, MapPin, Star, Shield, Headphones } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
    { value: "300K+", label: "Travel Experiences" },
    { value: "200+", label: "Countries & Regions" },
    { value: "50M+", label: "Happy Travelers" },
    { value: "4.5", label: "Average Rating", icon: Star },
]

const values = [
    {
        icon: Globe,
        title: "Global Reach",
        description: "We connect travelers with local experiences in destinations around the world.",
    },
    {
        icon: Shield,
        title: "Trust & Safety",
        description: "Every experience is vetted for quality and safety to ensure peace of mind.",
    },
    {
        icon: Heart,
        title: "Passion for Travel",
        description: "We believe travel has the power to transform lives and create lasting memories.",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Our dedicated team is always available to help you before, during, and after your trip.",
    },
]

const team = [
    {
        name: "Sarah Chen",
        role: "CEO & Co-Founder",
        image: "https://goonetravel.vercel.app/professional-ceo-portrait.png",
    },
    {
        name: "Michael Rodriguez",
        role: "Chief Product Officer",
        image: "https://goonetravel.vercel.app/professional-product-officer.png",
    },
    {
        name: "Emily Thompson",
        role: "Head of Operations",
        image: "https://goonetravel.vercel.app/professional-operations-manager.png",
    },
    {
        name: "David Kim",
        role: "Chief Technology Officer",
        image: "https://goonetravel.vercel.app/professional-man-tech-officer-portrait.jpg",
    },
]

const milestones = [
    {
        year: "2008",
        title: "Founded",
        description: "Viator was founded with a mission to connect travelers with experiences",
    },
    {
        year: "2014",
        title: "Joined TripAdvisor",
        description: "Became part of the TripAdvisor family"
    },
    {
        year: "2018",
        title: "10M+ Travelers",
        description: "Reached milestone of serving over 10 million happy travelers",
    },
    {
        year: "2023",
        title: "300K+ Experiences",
        description: "Expanded to offer over 300,000 travel experiences worldwide",
    },
];

export default function AboutPage() {
    // Define state
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Wait one frame after hydration
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    return (
        <>
            <body className="wp-singular page-template page-template-page-full-width page-template-page-full-width-php page page-id-280 wp-theme-wanderaway theme-wanderaway qi-blocks-1.4.3 qodef-gutenberg--no-touch qode-framework-1.2.6 woocommerce-js qodef-qi--no-touch qi-addons-for-elementor-1.9.3 wanderaway-core-1.2 wanderaway-1.1.1 qodef-content-grid-1300 qodef-back-to-top--enabled qodef-header--standard qodef-header-appearance--sticky qodef-mobile-header--side-area qodef-drop-down-second--full-width qodef-drop-down-second--default qode-export-1.0 qodef-header-standard--center qodef-search--covers-header elementor-default elementor-kit-4 elementor-page elementor-page-280 qodef-browser--chrome e--ua-blink e--ua-chrome e--ua-webkit">
                {ready && <>
                    <CommonHeader />

                    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                        <Image src="https://goonetravel.vercel.app/travel-adventure-group-tourists-exploring-beautifu.jpg" alt="Travel Experience" fill className="object-cover" />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center text-white px-4">
                                <span className="text-3xl md:text-5xl font-bold !block !mb-4">About Viator</span>
                                <span className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                                    Connecting travelers with unforgettable experiences around the world
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="!pb-10 !max-w-7xl !mx-auto">
                        <div className="!bg-white !py-10 !border-b !border-gray-200">
                            <div className="max-w-7xl mx-auto px-4 md:px-8">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                                    {stats.map((stat) => (
                                        <div key={stat.label} className="text-center">
                                            <div className="flex items-center justify-center gap-1">
                                                <span className="text-3xl md:text-4xl font-bold text-[#ffa200]">{stat.value}</span>
                                            </div>
                                            <p className="text-gray-600 mt-1">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="!py-12 px-4 md:px-8">
                            <div className="max-w-7xl mx-auto">
                                <div className="flex flex-col lg:flex-row gap-10 items-center">
                                    <div className="flex-1">
                                        <span className="text-2xl md:text-3xl font-bold text-gray-900 !block !mb-4">Our Mission</span>
                                        <p className="text-gray-600 mb-4 leading-relaxed">
                                            At Viator, we believe that travel is about more than just visiting new places—it's about creating
                                            meaningful connections and unforgettable memories. Our mission is to help travelers discover and book
                                            the best experiences, from iconic attractions to hidden gems.
                                        </p>
                                        <p className="text-gray-600 !mb-6 leading-relaxed">
                                            We partner with thousands of local operators and tour guides around the world to bring you authentic,
                                            high-quality experiences that go beyond the typical tourist path. Whether you're seeking adventure,
                                            culture, relaxation, or all three, we're here to help you plan your perfect trip.
                                        </p>
                                        <Link
                                            href="/tours"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f53] text-white font-medium rounded-full hover:bg-[#333] transition-colors"
                                        >
                                            <MapPin className="h-5 w-5" />
                                            Explore Experiences
                                        </Link>
                                    </div>
                                    <div className="lg:w-[450px]">
                                        <Image
                                            src="https://goonetravel.vercel.app/diverse-group-tourists-enjoying-guided-tour-advent.jpg"
                                            alt="Travelers enjoying an experience"
                                            width={450}
                                            height={350}
                                            className="rounded-xl shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="!bg-gray-100 !py-12 md:py-16 !px-8">
                        <div className="!max-w-7xl !mx-auto !text-center">
                            <span className="text-2xl md:text-3xl font-bold !text-gray-900 !block !mb-8 text-center">Our Values</span>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {values.map((value) => (
                                    <div key={value.title} className="!bg-white !rounded-xl !p-6 !text-center">
                                        <div className="w-14 h-14 !bg-[#ffc765]/10 !rounded-full !flex !items-center !justify-center !mx-auto !mb-4">
                                            <value.icon className="h-7 w-7 text-[#ffa200]" />
                                        </div>
                                        <span className="font-semibold text-gray-900 !block !mb-2">{value.title}</span>
                                        <span className="text-sm text-gray-600">{value.description}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="!pb-10 !max-w-7xl !mx-auto">
                        <div className="!py-16 !px-8">
                            <div className="!max-w-4xl !mx-auto">
                                <span className="text-2xl md:text-3xl font-bold text-gray-900 !block !mb-8 !text-center">Our Journey</span>
                                <div className="relative">
                                    <div className="!absolute left-1/2 transform -translate-x-1/2 h-full !w-0.5 !bg-[#ffc765]" />
                                    <div className="!space-y-8">
                                        {milestones.map((milestone, index) => (
                                            <div
                                                key={milestone.year}
                                                className={`flex items-center gap-6 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                                            >
                                                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                                                    <span className="!text-[#ffa200] !font-bold !text-lg">{milestone.year}</span>
                                                    <span className="font-semibold !block text-gray-900">{milestone.title}</span>
                                                    <span className="text-sm text-gray-600">{milestone.description}</span>
                                                </div>
                                                <div className="!w-4 !h-4 !bg-[#ffa200] rounded-full border-4 border-white shadow z-10" />
                                                <div className="flex-1" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="!bg-white !py-16 !px-8">
                            <div className="!max-w-7xl !mx-auto">
                                <span className="text-2xl md:text-3xl font-bold text-gray-900 !block !mb-8 text-center">Leadership Team</span>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {team.map((member) => (
                                        <div key={member.name} className="text-center">
                                            <Image
                                                src={member.image || "/placeholder.svg"}
                                                alt={member.name}
                                                width={200}
                                                height={200}
                                                className="!w-32 !h-32 !rounded-full !object-cover !mx-auto !mb-4"
                                            />
                                            <span className="font-semibold !block text-gray-900">{member.name}</span>
                                            <span className="text-sm text-gray-600">{member.role}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="!bg-[#fcefdf] !py-16 !px-8">
                        <div className="!max-w-3xl !mx-auto !text-center">
                            <span className="text-2xl md:text-3xl font-bold text-black !block !mb-4">Ready to Start Your Adventure?</span>
                            <p className="text-black/90 !mb-6">
                                Discover thousands of unforgettable experiences waiting for you around the world.
                            </p>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 !px-8 !py-3 !bg-black !text-white font-medium rounded-full !hover:bg-white !hover:text-black"
                            >
                                Explore Now
                            </Link>
                        </div>
                    </div>

                    <CommonFooter />
                </>}
            </body>
        </>
    );
}
