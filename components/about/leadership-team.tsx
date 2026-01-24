"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";

// Leadership Team
const leadership = [
    {
        name: "Vipul Shah",
        role: "CTO",
        image: "/about/img_team_63e33ba779f7f6-39405930-32732924.webp"
    },
    {
        name: "Pranav Amin",
        role: "Sales Manager - Canada",
        image: "/about/img_team_63e33bb2382cf1-81493713-48358927.webp"
    },
    {
        name: "Louise Berg",
        role: "Social Media & Destination Expert",
        image: "/about/img_team_63e33bbf427638-77996729-78363986.webp"
    },
    {
        name: "Michael Bronfman",
        role: "Sales Manager - Canada",
        image: "/about/img_team_63e33bceb55f81-24897182-80425447.webp"
    },
];

export default function LeadershipTeam() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-5 md:px-8 space-y-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* IMAGE */}
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden">
                            <Image
                                src="/about/img_team_674b22f265e656-43103817-70883790.webp"
                                alt="Bhavin Vora"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h3 className="text-3xl md:text-6xl leading-tight font-normal">
                            The Leadership
                        </h3>

                        <p className="text-lg font-medium text-black">
                            Bhavin Vora <span className="text-gray-600">| Founder & CEO</span>
                        </p>

                        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
                            With nearly two decades of experience leading digital transformation for
                            global retail icons, Bhavin Vora brings “Big Data” precision to the world
                            of travel. An expert in AI orchestration and consumer behavior, he founded
                            TravelOne to solve the “Complexity Crisis” in travel and bring
                            high-scale personalization to North America.
                        </p>

                        <div className="flex justify-center lg:justify-start">
                            <Link
                                href="https://www.linkedin.com/in/bhavinofficial/"
                                target="_blank"
                                className="inline-flex items-center gap-2 border border-black rounded-full p-3 hover:bg-black hover:text-white transition"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {leadership.map((member, index) => (
                        <div key={index} className="text-center space-y-6">
                            <div className="relative flex justify-center">
                                <div className="absolute -inset-2 rounded-lg bg-[#FFF9EE] border border-amber-200 opacity-90 blur-[1px]" />
                                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="font-semibold text-md md:text-lg text-black">{member.name}</p>
                                <p className="text-sm md:text-base text-black">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
