"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
import Heading from "@/components/common/heading";
import Link from "next/link";
import Image from "next/image";
import { BlogSidebar } from "@/components/blog/sidebar";
import { formatDate } from "@/lib/utils";
import { Pagination } from "@/components/tours/pagination";
import PageHeading from "@/components/common/page-heading";

export default function BlogPage() {
    // Define state
    const [ready, setReady] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [blogList, setBlogList] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [totalPages, setTotalPages] = useState<any>(0);
    const [totalCount, setTotalCount] = useState<any>(0);

    useEffect(() => {
        // Wait one frame after hydration
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
                const response = await fetch("/api/blog/list", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the JSON response
                const data = await response.json();

                // Update the state
                setBlogList(data?.data?.result ?? []);
                setTotalPages(data?.data?.last_page ?? 0);
                setCurrentPage(data?.data?.current_page ?? 1);
                setTotalCount(data?.data?.total ?? 0);
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("Failed to fetch tours:", error);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchInitData();
        return () => controller.abort();
    }, []);

    // Pagination data
    useEffect(() => {
        const controller = new AbortController();
        const fetchFilterData = async () => {
            try {
                // Fetch the data
                const response = await fetch("/api/blog/list", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        page: currentPage,
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse the JSON response
                const data = await response.json();

                // Scroll to top
                window.scrollTo(0, 0);

                // Update the state
                setBlogList(data?.data?.result ?? []);
            } catch (error: any) {
                if (error.name !== "AbortError") {
                    console.error("Failed to fetch tours:", error);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchFilterData();
        return () => controller.abort();
    }, [currentPage]);

    return (
        <body>
            {ready && <>
                <CommonHeader />
                <div className="max-w-7xl mx-auto px-5 md:px-0 md:p-6">
                    <PageHeading
                        main="Travel Blog"
                        sub="Discover travel tips, destination guides, and inspiring stories from our experts."
                    />
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex-1">
                            <div className="space-y-10">
                                {!isLoading && blogList && blogList.map((post) => (
                                    <div className="group !transition-all !duration-300 !overflow-hidden">
                                        <Link href={`/blog/${post.post_slug}`}>
                                            <div className="relative h-50 md:h-150 overflow-hidden">
                                                <Image
                                                    src={post.featured_image || "/placeholder.svg"}
                                                    alt={post.image_title || "Placeholder Image"}
                                                    fill
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="py-6 space-y-4 text-center">
                                                <div className="!flex !items-center !justify-center !mb-3">
                                                    <span className="text-xs md:text-sm font-semibold text-[#385b21] bg-[#d4e9e7] px-4 py-1 block">{post.image_title}</span>
                                                </div>
                                                <span className="text-xl md:text-2xl font-semibold text-gray-900 block">{post.post_title}</span>
                                                <span className="text-sm md:text-lg font-strong text-gray-900 block">{post.meta_description}</span>
                                                <span className="text-xs md:text-sm font-semibold text-gray-900 block">{formatDate(post.created_at)} by <u className="italic">TravelOne</u></span>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <Pagination
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                                totalPages={totalPages}
                            />
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
                <CommonFooter />
            </>}
        </body>
    );
}
