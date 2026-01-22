import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OurVision() {
    return (
        <div className="max-w-7xl mx-auto px-5 md:px-0 py-10 md:py-14">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="flex-1">
                    <div className="text-black">
                        <h1 className="text-3xl md:text-6xl leading-tight font-normal">
                            Our Vision: The Persona-First Era
                        </h1>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                        The era of generic travel search is over. TravelOne is pioneering the <b>Traveler Persona Asset</b>. We don't just book trips; we record and refine your travel DNA—your preferences, your "vibes," and your non-negotiables. By building this proprietary data asset, we ensure that every subsequent trip we curate for you is more accurate, more effortless, and more personal than the last.
                    </p>

                    <Link
                        href="/country"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-black/90 transition-colors"
                    >
                        <MapPin className="h-5 w-5" />
                        Explore Experiences
                    </Link>
                </div>
                <div className="w-full max-w-[500px] mx-auto lg:mx-0">
                    <Image
                        src="https://ik.imagekit.io/288weifiq/nextjs/tourist-taking-photos-nature-landscape-using-his-smartphone_346278-385.jpg"
                        alt="Travelers enjoying an experience"
                        width={500}
                        height={500}
                        className="w-full h-auto rounded-sm shadow-lg"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
