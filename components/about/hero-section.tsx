import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="relative h-[300px] md:h-[450px] overflow-hidden">
            <Image
                src="https://ik.imagekit.io/288weifiq/nextjs/man-with-backpack-strolling-by-beach-fluffy-clouds_1258-296115.jpg"
                alt="Travel Experience"
                fill
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex max-w-5xl mx-auto items-center justify-center">
                <div className="text-center text-white space-y-2">
                    <h1 className="text-3xl md:text-6xl leading-tight font-normal">
                        The Global Standard for Persona-Led Travel Orchestration.
                    </h1>
                    <span className="text-md flex max-w-2xl mx-auto">
                        We are a technology-driven travel platform that records traveler personas to deliver 100% personalized global journeys.
                    </span>
                </div>
            </div>
        </div>
    );
}
