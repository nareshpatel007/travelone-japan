"use client";

export default function IntroSection() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl text-center space-y-8">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black">
                    Tailor-made Japan trips curated by experts
                </h2>

                {/* Underline */}
                <div className="flex justify-center">
                    <span className="w-20 h-1 bg-[#0f3d5e]" />
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Japan is where ancient tradition meets futuristic innovation. From the magical
                    cherry blossoms in spring to timeless temples and high-tech cities, every
                    corner offers something unique. Savor authentic sushi, ride the lightning-fast
                    Shinkansen, and explore the calm of Kyoto or the vibrant pulse of Tokyo.
                    It’s a journey where culture, cuisine, and technology blend into an
                    unforgettable travel experience.
                </p>

            </div>
        </section>
    );
}