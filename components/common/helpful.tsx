"use client"

import { ThumbsDown, ThumbsUp } from "lucide-react";

// Define props
interface Props {
    text?: string
}

export default function PageHelpful({ text = 'Was this page helpful?' }: Props) {
    return (
        <div className="!bg-amber-100 !p-6 !border-b !border-gray-200">
            <div className="!max-w-7xl !mx-auto">
                <div className="flex items-center justify-center gap-5">
                    <span className="text-[#1E1E1E] font-medium">{text}</span>
                    <ThumbsUp className="h-5 w-5 text-[#C46A3A]" />
                    <ThumbsDown className="h-5 w-5 text-[#C46A3A]" />
                </div>
            </div>
        </div>
    )
}
