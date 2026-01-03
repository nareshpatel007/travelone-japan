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
    speed = 50,
}: Props) {
    return (
        <div className="relative h-screen overflow-hidden w-56">
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
                        alt=""
                        width={240}
                        height={320}
                        className="w-full object-cover rounded-full"
                        priority
                    />
                ))}
            </div>
        </div>
    );
}
