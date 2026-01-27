"use client"

import { Home, Search } from "lucide-react";
import Link from "next/link";

// Define props
interface Props {
    code?: string;
    heading?: string;
    subHeading?: string;
    needButton?: boolean;
}

export default function NotFoundError({ code, heading, subHeading, needButton = true }: Props) {
    return (
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-30 text-center">
            <div className="relative mb-8">
                <h1 className="text-[120px] md:text-[180px] font-bold text-black opacity-10 leading-none">
                    {code || "404"}
                </h1>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#1E1E1E] mb-4">
                {heading || "Oops! Looks like you're off the map"}
            </h2>

            <p className="text-base md:text-lg text-black mb-10 max-w-2xl mx-auto">
                {subHeading || "The page you're looking for doesn't exist. But don't worry, there are plenty of amazing destinations waiting to be explored."}
            </p>

            {needButton && <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    href="/"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-lg font-semibold text-base hover:bg-[#1E1E1E] transition-colors shadow-lg"
                >
                    <Home className="h-5 w-5" />
                    Back to Home
                </Link>
                <Link
                    href="/country"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-lg font-semibold text-base hover:bg-[#1E1E1E] hover:border-[#1E1E1E] hover:text-white transition-colors"
                >
                    <Search className="h-5 w-5" />
                    Explore Destination
                </Link>
            </div>}
        </div>
    )
}
