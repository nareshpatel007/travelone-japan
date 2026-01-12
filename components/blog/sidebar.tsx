"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star, Mail } from "lucide-react"
import Image from "next/image"

const popularTours = [
    {
        id: 1,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-5-img-4-1.jpg",
        title: "London: Oxford and Cotswolds Villages Day Trip",
        rating: 4.6,
        reviews: 1446,
        price: "₹7,151",
    },
    {
        id: 2,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-3-new-single-11.jpg",
        title: "Prague: Old Town and Underground Tour",
        rating: 4.8,
        reviews: 777,
        price: "₹3,031",
    },
    {
        id: 3,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/custom-single-12.jpg",
        title: "Istanbul: Turkish Mosaic Lamp Workshop",
        rating: 4.9,
        reviews: 2826,
        price: "₹2,016",
    },
]

const recentPosts = [
    {
        slug: "best-adventure-tours-2024",
        title: "Best Adventure Tours to Take in 2024",
        date: "Dec 10, 2024",
    },
    {
        slug: "food-tours-around-the-world",
        title: "Food Tours Around the World",
        date: "Dec 8, 2024",
    },
    {
        slug: "traveling-with-kids-tips",
        title: "Traveling with Kids: Essential Tips",
        date: "Dec 5, 2024",
    },
]

export function BlogSidebar() {
    const sliderRef = useRef<HTMLDivElement>(null)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [email, setEmail] = useState("")

    const scroll = (direction: "left" | "right") => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.clientWidth
            const newSlide =
                direction === "left" ? Math.max(0, currentSlide - 1) : Math.min(popularTours.length - 1, currentSlide + 1)

            sliderRef.current.scrollTo({
                left: newSlide * slideWidth,
                behavior: "smooth",
            })
            setCurrentSlide(newSlide)
        }
    }

    const handleScroll = () => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.clientWidth
            const newSlide = Math.round(sliderRef.current.scrollLeft / slideWidth)
            setCurrentSlide(newSlide)
        }
    }

    return (
        <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
            <div className="!bg-white !rounded-xl !p-5 !shadow-sm !mb-6">
                <div className="flex items-center justify-between !mb-4">
                    <span className="font-bold text-gray-900">Popular Tours</span>
                    <div className="flex gap-1">
                        <button
                            onClick={() => scroll("left")}
                            disabled={currentSlide === 0}
                            className="!p-1.5 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            aria-label="Previous tour"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={currentSlide === popularTours.length - 1}
                            className="!p-1.5 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            aria-label="Next tour"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div
                    ref={sliderRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {popularTours.map((tour) => (
                        <Link key={tour.id} href={`/tours/${tour.id}`} className="flex-shrink-0 w-full snap-start">
                            <div className="relative h-40 rounded-lg overflow-hidden !mb-3">
                                <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="w-full h-full object-cover" />
                            </div>
                            <span className="font-medium text-gray-900 text-sm line-clamp-2 !block !mb-2">{tour.title}</span>
                            <p className="font-bold !text-amber-500">{tour.price}</p>
                        </Link>
                    ))}
                </div>

                {/* Slider Dots */}
                <div className="flex justify-center gap-1.5 mt-4">
                    {popularTours.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (sliderRef.current) {
                                    sliderRef.current.scrollTo({
                                        left: index * sliderRef.current.clientWidth,
                                        behavior: "smooth",
                                    })
                                    setCurrentSlide(index)
                                }
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index ? "bg-amber-500" : "bg-gray-300"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            <div className="!bg-white !rounded-xl !p-5 !shadow-sm">
                <span className="font-bold text-gray-900 !block !mb-4">Recent Posts</span>
                <div className="!space-y-4">
                    {recentPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-amber-500 transition-colors line-clamp-2">
                                {post.title}
                            </span>
                            <p className="text-xs text-gray-500 !mt-1">{post.date}</p>
                        </Link>
                    ))}
                </div>
                <Link href="/blog" className="!block text-center !text-amber-500 !text-sm font-medium !mt-4 hover:underline">
                    View all posts
                </Link>
            </div>
        </aside>
    )
}
