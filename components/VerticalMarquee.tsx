"use client";

import Image from "next/image";

interface Props {
    images: string[];
    direction?: "up" | "down";
    speed?: number;
}

export default function VerticalSlider({
    images,
    direction = "up",
    speed = 45,
}: Props) {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div
                className={`flex flex-col ${direction === "up" ? "animate-marqueeUp" : "animate-marqueeDown"}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {[...images, ...images].map((src, i) => (
                    <Image
                        key={i}
                        src={src}
                        alt="Image"
                        width={300}
                        height={350}
                        className="w-full object-cover"
                        priority
                    />
                ))}
            </div>
        </div>
    );
}
