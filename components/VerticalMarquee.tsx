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
        <div className="relative h-screen overflow-hidden w-100">
            <div
                className={`flex flex-col ${direction === "up"
                        ? "animate-marqueeUp"
                        : "animate-marqueeDown"
                    }`}
                style={{ animationDuration: `${speed}s` }}
            >
                {[...images, ...images].map((src, i) => (
                    <Image
                        key={i}
                        src={src}
                        alt="Image"
                        width={260}
                        height={340}
                        className="w-full object-cover rounded-full"
                        priority
                    />
                ))}
            </div>
        </div>
    );
}
