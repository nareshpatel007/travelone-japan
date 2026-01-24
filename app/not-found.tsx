"use client";

import Link from "next/link";
import { Search, Home, MapPin, Compass } from "lucide-react";
import CommonFooter from "@/components/footer/common-footer";
import CommonHeader from "@/components/header/common-header";
import { useEffect, useState } from "react";

export default function NotFound() {
    // Define state
    const [ready, setReady] = useState(false);

    useEffect(() => {
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    return (
        <body>
            {ready && <>
                <div className="min-h-screen bg-white">
                    <CommonHeader />
                    <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-30 text-center">
                        <div className="relative mb-8">
                            <h1 className="text-[120px] md:text-[180px] font-bold text-black opacity-10 leading-none">404</h1>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-semibold text-[#1E1E1E] mb-4">Oops! Looks like you're off the map</h2>

                        <p className="text-base md:text-lg text-black mb-10 max-w-2xl mx-auto">
                            The page you're looking for doesn't exist. But don't worry, there are plenty of amazing destinations waiting
                            to be explored.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-lg font-semibold text-base hover:bg-[#1E1E1E] transition-colors shadow-lg"
                            >
                                <Home className="h-5 w-5" />
                                Back to Home
                            </Link>
                            <Link
                                href="/tour"
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-lg font-semibold text-base hover:bg-[#1E1E1E] hover:border-[#1E1E1E] hover:text-white transition-colors"
                            >
                                <Search className="h-5 w-5" />
                                Explore Tours
                            </Link>
                        </div>
                    </div>
                    <CommonFooter />
                </div>
            </>}
        </body>
    )
}
