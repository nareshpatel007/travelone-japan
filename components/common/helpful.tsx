"use client"

import { ThumbsDown, ThumbsUp } from "lucide-react";

// Define props
interface Props {
    text?: string
}

export default function PageHelpful({ text = 'Was this page helpful?' }: Props) {
    return (
        <div className="bg-[#d4e9e7] p-6 border-b border-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                    <span className="text-black font-medium">{text}</span>
                    <div className="p-3 bg-white rounded-full cursor-pointer">
                        <ThumbsUp className="h-5 w-5 text-black hover:text-green-500" />
                    </div>
                    <div className="p-3 bg-white rounded-full cursor-pointer">
                        <ThumbsDown className="h-5 w-5 text-black hover:text-red-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}
