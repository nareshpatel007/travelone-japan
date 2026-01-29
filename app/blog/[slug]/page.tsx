"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import { BlogDetail } from "@/components/blog/detail";
import { useParams } from "next/navigation";
import { X } from "lucide-react";

export default function Page() {
    // Get slug
    const params = useParams();
    const slug = params?.slug;

    // Define state
    const [ready, setReady] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [blogData, setBlogData] = useState<any>({});
    const [commentData, setCommentData] = useState<any>([]);

    useEffect(() => {
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    // Init data
    useEffect(() => {
        const controller = new AbortController();
        const fetchInitData = async () => {
            try {
                // Fetch the data
                const response = await fetch("/api/blog/single", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        slug
                    }),
                });

                // Parse the JSON response
                const data = await response.json();

                // Check response
                if (data.status) {
                    setBlogData(data?.data?.post ?? {});
                    setCommentData(data?.data?.comments ?? []);
                }
            } catch (error: any) {
                if (error.name == "AbortError") {
                    console.error("Failed to fetch single blog:", error);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchInitData();
        return () => controller.abort();
    }, []);

    return (
        <>
            <body>
                {ready && <>
                    <CommonHeader />

                    {!isLoading && blogData && <div className="max-w-7xl mx-auto px-5 md:px-0 py-6">
                        <BlogDetail
                            blogPost={blogData}
                            commentData={commentData}
                        />
                    </div>}

                    {isLoading && <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        {Array.from({ length: 2 }).map((_, index) => (
                            <div key={index} className="animate-pulse bg-gray-200 rounded-lg h-48 md:h-64"></div>
                        ))}
                    </div>}

                    {!isLoading && !blogData && <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 text-center space-y-5">
                        <div className="flex items-center justify-center">
                            <X
                                className="text-[#ef2853] opacity-15"
                                size={120}
                            />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-medium text-black">
                            Blog not found
                        </h2>

                        <p className="text-base md:text-lg text-black max-w-2xl mx-auto">
                            The blog you are looking for does not exist.
                        </p>
                    </div>}

                    <CommonFooter />
                </>}
            </body>
        </>
    );
}
