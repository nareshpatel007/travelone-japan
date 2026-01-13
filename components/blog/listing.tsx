"use client"

import Link from "next/link";
import Image from "next/image";
import { BlogSidebar } from "./sidebar";

const blogPosts = [
    {
        slug: "top-10-hidden-gems-in-europe",
        title: "Top 10 Hidden Gems in Europe You Must Visit",
        excerpt:
            "Discover the lesser-known destinations in Europe that offer authentic experiences away from the tourist crowds. From charming villages to stunning natural landscapes.",
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-5-img-4-1.jpg",
        author: "Sarah Johnson",
        date: "Dec 15, 2024",
        category: "Travel Tips",
        readTime: "8 min read",
    },
    {
        slug: "ultimate-guide-to-paris",
        title: "The Ultimate Guide to Paris: Beyond the Eiffel Tower",
        excerpt:
            "Paris has so much more to offer than its iconic landmarks. Explore hidden cafes, secret gardens, and local neighborhoods that make the City of Light truly magical.",
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/blog-single-img-4.jpg",
        author: "Michael Chen",
        date: "Dec 12, 2024",
        category: "City Guides",
        readTime: "12 min read",
    },
    {
        slug: "best-adventure-tours-2024",
        title: "Best Adventure Tours to Take in 2024",
        excerpt:
            "From hiking in Patagonia to diving in the Maldives, discover the most thrilling adventure tours that will push your limits and create unforgettable memories.",
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-3-new-single-11.jpg",
        author: "Emily Rodriguez",
        date: "Dec 10, 2024",
        category: "Adventure",
        readTime: "10 min read",
    },
    {
        slug: "food-tours-around-the-world",
        title: "Food Tours Around the World: A Culinary Journey",
        excerpt:
            "Embark on a gastronomic adventure with the best food tours across different continents. Taste authentic local cuisine and learn about culinary traditions.",
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/blog-single-img-8.jpg",
        author: "David Park",
        date: "Dec 8, 2024",
        category: "Food & Drink",
        readTime: "7 min read",
    },
    {
        slug: "traveling-with-kids-tips",
        title: "Traveling with Kids: Essential Tips for Family Adventures",
        excerpt:
            "Planning a family vacation? Learn how to keep the little ones entertained while exploring new destinations. Practical tips from experienced traveling parents.",
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/custom-single-12.jpg",
        author: "Lisa Thompson",
        date: "Dec 5, 2024",
        category: "Family Travel",
        readTime: "9 min read",
    },
    {
        slug: "sustainable-travel-guide",
        title: "Sustainable Travel: How to Explore Responsibly",
        excerpt:
            "Learn how to minimize your environmental impact while traveling. Discover eco-friendly accommodations, tours, and practices for conscious travelers.",
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/custom-single-1.jpg",
        author: "James Wilson",
        date: "Dec 3, 2024",
        category: "Sustainability",
        readTime: "11 min read",
    },
]

export function BlogList() {
    return (
        <div className="flex flex-col lg:flex-row gap-8 !mb-10">
            <div className="flex-1">
                <div className="space-y-10">
                    {blogPosts.map((post) => (
                        <div className="group !transition-all !duration-300 !overflow-hidden">
                            <Link href={`/blog/${post.slug}`}>
                                <div className="relative h-50 md:h-150 overflow-hidden">
                                    <Image
                                        src={post.image || "/placeholder.svg"}
                                        alt={post.title}
                                        fill
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="py-6 space-y-4 text-center">
                                    <div className="!flex !items-center !justify-center !mb-3">
                                        <span className="text-xs md:text-sm font-semibold text-[#385b21] bg-[#d4e9e7] px-4 py-1 block">{post.category}</span>
                                    </div>
                                    <span className="text-xl md:text-2xl font-semibold text-gray-900 block">{post.title}</span>
                                    <span className="text-sm md:text-lg font-strong text-gray-900 block">{post.excerpt}</span>
                                    <span className="text-xs md:text-sm font-semibold text-gray-900 block">{post.date} by <u className="italic">{post.author}</u></span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <BlogSidebar />
        </div>
    )
}
