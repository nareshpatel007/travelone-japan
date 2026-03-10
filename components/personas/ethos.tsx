"use client";

import Image from "next/image";

interface Props {
    text: string;
}

export default function EthosSection({ text }: Props) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="relative min-h-[300px] md:min-h-[600px] py-5 md:py-20 md:py-32 px-6 md:px-10 flex items-center justify-center text-center">
                <div className="max-w-5xl mx-auto space-y-5">
                    <h2 className="text-4xl md:text-6xl font-normal leading-tight tracking-tight text-black">
                        The Core Ethos: Your Travel Psychography
                    </h2>

                    <p className="max-w-3xl mx-auto text-sm md:text-lg text-black leading-relaxed">
                        {text}
                    </p>
                </div>
            </div>
            <div className="relative h-[330px] md:h-[600px] text-center overflow-hidden">
                <Image
                    src="/common/about-img-2.png"
                    alt="TravelOne"
                    fill
                    priority
                    loading="eager"
                    sizes="50vw"
                    className="object-cover"
                />
            </div>
        </div>
    );
}
