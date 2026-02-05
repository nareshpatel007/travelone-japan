"use client"

import { getLoginCookie, isLoggedIn } from "@/lib/auth";
import { getClientIp } from "@/lib/getClientIp";
import { get } from "http";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

// Define props
interface Props {
    pageName?: string
    text?: string
}

export default function PageHelpful({ pageName = '', text = 'Was this page helpful?' }: Props) {
    // Define state
    const [helpful, setHelpful] = useState<boolean>(false);

    // Get login data
    const user = getLoginCookie();

    // Handle submit
    const handleSubmit = async (type: string) => {
        try {
            // Call API
            await fetch('/api/helpful', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: user?.user_id || "",
                    page_link: pageName,
                    vote: type
                })
            });

            // Update state
            setHelpful(true);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="bg-[#d9eed8] p-5">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                    <span className="text-black font-medium">{text}</span>
                    {helpful && <span className="text-green-600 font-medium">Thanks for your feedback!</span>}

                    {!helpful && <>
                        <div className="p-3 bg-white rounded-full cursor-pointer">
                            <ThumbsUp
                                onClick={() => handleSubmit('up')}
                                className="h-5 w-5 text-black hover:text-green-500"
                            />
                        </div>
                        <div className="p-3 bg-white rounded-full cursor-pointer">
                            <ThumbsDown
                                onClick={() => handleSubmit('down')}
                                className="h-5 w-5 text-black hover:text-red-500"
                            />
                        </div>
                    </>}
                </div>
            </div>
        </div>
    )
}
