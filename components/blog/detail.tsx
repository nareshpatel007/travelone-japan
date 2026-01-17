"use client"

import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, FacebookIcon, TwitterIcon, InstagramIcon, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { BlogSidebar } from "./sidebar"
import Image from "next/image"
import { TourCard } from "../tours/tour-card"
import { useState } from "react"

const blogPost = {
    slug: "top-10-hidden-gems-in-europe",
    title: "Top 10 Hidden Gems in Europe You Must Visit",
    excerpt:
        "Discover the lesser-known destinations in Europe that offer authentic experiences away from the tourist crowds.",
    image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-5-img-4-1.jpg",
    gallery: [
        "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-5-img-4-1.jpg",
        "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/blog-single-img-3.jpg"
    ],
    author: "Sarah Johnson",
    authorImage: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/12/author.jpg",
    date: "Dec 15, 2024",
    category: "Travel Tips",
    readTime: "8 min read",
    content: `
    <p>Europe is home to countless breathtaking destinations, but some of the most magical places remain hidden from the typical tourist trail. While cities like Paris, Rome, and Barcelona draw millions of visitors each year, there are lesser-known gems waiting to be discovered by adventurous travelers.</p>
    
    <span>1. Hallstatt, Austria</span>
    <p>Nestled between a pristine lake and towering Alps, Hallstatt is a fairytale village that looks like it belongs in a storybook. With its pastel-colored houses, historic salt mines, and stunning mountain backdrop, this UNESCO World Heritage site offers a peaceful retreat from the bustling tourist hotspots.</p>
    
    <span>2. Colmar, France</span>
    <p>Often overshadowed by its more famous neighbors, Colmar is a charming Alsatian town that inspired the village in Disney's "Beauty and the Beast." Its colorful half-timbered houses, flower-lined canals, and excellent wine scene make it a perfect destination for romance and relaxation.</p>
    
    <span>3. Ronda, Spain</span>
    <p>Perched dramatically on a cliff overlooking the El Tajo gorge, Ronda is one of Spain's most spectacular white villages. The iconic Puente Nuevo bridge, ancient bullring, and stunning views make this hilltop town an unforgettable stop in Andalusia.</p>
    
    <span>4. Plitvice Lakes, Croatia</span>
    <p>This national park features 16 terraced lakes connected by waterfalls, surrounded by lush forest and diverse wildlife. The crystal-clear turquoise waters and wooden walkways create a magical experience that rivals any natural wonder in Europe.</p>
    
    <span>5. Sintra, Portugal</span>
    <p>Just a short train ride from Lisbon, Sintra feels like stepping into a fairytale kingdom. The colorful Pena Palace, mysterious Quinta da Regaleira, and enchanting gardens make this UNESCO site a must-visit for any Portugal itinerary.</p>
    
    <span>Planning Your Visit</span>
    <p>The best time to visit these hidden gems is during shoulder season (April-May or September-October) when crowds are smaller and weather is still pleasant. Consider booking guided tours to learn about the local history and culture, and always check for any entry requirements or reservations needed in advance.</p>
    
    <p>Remember, the joy of discovering hidden gems lies in experiencing them authentically. Take your time, engage with locals, and embrace the slower pace of life in these enchanting destinations.</p>
  `,
}

const tours = [
    {
        id: 1,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-3.jpg",
        badge: "Likely to sell out",
        tourType: "DAY TRIP",
        rating: 4.4,
        reviews: 899,
        title: "Stingray City and Starfish Experience with Coral Reef Snorkeling",
        duration: "3 hours 30 minutes",
        price: "$6,005",
    },
    {
        id: 2,
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-4.jpg",
        tourType: "GUIDED TOUR",
        rating: 4.6,
        reviews: 390,
        title: "Stingray City Sandbar, Coral Gardens Snorkeling & Blue Fish Point",
        duration: "3 hours",
        price: "$6,005",
    },
];

const comments = [
    {
        id: 1,
        author: "James Smith",
        date: "19.09.2023",
        avatar: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/blog-single-png-4-100x100.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra risus purus, at mattis mauris elementum ac. Proin iaculis nibh quis vehicula gravida.",
    },
    {
        id: 2,
        author: "Emily Johnson",
        date: "19.09.2023",
        avatar: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/blog-single-png-2-100x100.png",
        text: "Placerat ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra risus purus, at hinis mauris elementum ac. Proin iaculis nibh quis.",
    },
    {
        id: 3,
        author: "Sophia Brown",
        date: "19.09.2023",
        avatar: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/blog-single-png-3-100x100.png",
        text: "Proin ipsum dolor sit aleris, consectetur adipiscing elit. Mauris viverra risus purus, at hinis tinis elementum ac. Ipsum at urna eu tellus interdum lorem.",
    },
];

export function BlogDetail() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [carouselRef, setCarouselRef] = useState<HTMLDivElement | null>(null);
    const [formData, setFormData] = useState({
        comment: "",
        name: "",
        email: "",
        website: "",
    })
    const [saveInfo, setSaveInfo] = useState(false)

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % blogPost.gallery.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + blogPost.gallery.length) % blogPost.gallery.length)
    }

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("[v0] Comment submitted:", formData)
        setFormData({ comment: "", name: "", email: "", website: "" })
    }

    const scrollCarousel = (direction: "left" | "right") => {
        if (carouselRef) {
            const scrollAmount = 250
            const newScroll = carouselRef.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount)
            carouselRef.scrollTo({ left: newScroll, behavior: "smooth" })
        }
    }

    return (
        <>
            <section className="w-full bg-white mb-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 gap-6 md:gap-8">
                        <Link href="/blog/hidden-beaches" className="group relative h-64 md:h-100 rounded-lg overflow-hidden">
                            <Image
                                src="https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-3.jpg"
                                alt="Featured: Hidden Beach Gems"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                    Jordan's ancient Petra and desert landscapes
                                </h3>
                            </div>
                        </Link>

                        {/* Featured Card 2 */}
                        <Link href="/blog/budget-travel-tips" className="group relative h-64 md:h-100 rounded-lg overflow-hidden">
                            <Image
                                src="https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-9.jpg"
                                alt="Featured: Budget Travel Tips"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                    Cappadocia's surreal landscapes and hot air
                                </h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="flex flex-col lg:flex-row gap-8">
                <article className="flex-1">
                    <div className="relative w-full h-96 md:h-[500px] bg-gray-200 overflow-hidden">
                        <Image
                            src={blogPost.gallery[currentImageIndex] || "/placeholder.svg"}
                            alt="Blog featured"
                            fill
                            className="object-cover"
                            priority
                        />
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                        >
                            <ChevronLeft size={24} className="text-gray-900" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                        >
                            <ChevronRight size={24} className="text-gray-900" />
                        </button>

                        {/* Dot Indicators */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {blogPost.gallery.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-3 h-1 rounded-full transition-all ${index === currentImageIndex ? "bg-amber-500 w-8" : "bg-white/60 hover:bg-white"
                                        }`}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="py-6 space-y-4 text-center">
                        <div className="!flex !items-center !justify-center !mb-3">
                            <span className="text-xs md:text-sm font-semibold text-[#385b21] bg-[#d4e9e7] px-4 py-1 block">{blogPost.category}</span>
                        </div>
                        <span className="text-lg md:text-4xl font-semibold text-gray-900 block">{blogPost.title}</span>
                        <div
                            className="text-sm md:text-lg font-strong text-gray-900 block"
                            dangerouslySetInnerHTML={{ __html: blogPost.content }}
                        />
                    </div>
                    <div className="my-7 text-center">
                        <div className="flex flex-wrap gap-5 justify-center">
                            <FacebookIcon className="h-6 w-6" />
                            <TwitterIcon className="h-6 w-6" />
                            <InstagramIcon className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="mt-8 py-4 border-t border-b border-gray-200 text-center">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["Europe", "Travel Tips", "Hidden Gems", "Adventure", "Budget Travel"].map((tag) => (
                                <span
                                    key={tag}
                                    className="!px-3 !py-1 !bg-gray-100 !text-gray-700 text-sm rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#edf3ed] p-10 my-6 shadow-sm">
                        <div className="flex items-start gap-6">
                            <Image
                                src={blogPost.authorImage || "/placeholder.svg"}
                                alt={blogPost.author}
                                width={64}
                                height={64}
                                className="w-30 h-30 rounded-full object-cover"
                            />
                            <div>
                                <span className="font-semibold text-gray-900 block mb-1">About {blogPost.author}</span>
                                <p className="text-gray-600 text-md">
                                    Sarah is a passionate traveler and writer with over 10 years of experience exploring hidden corners
                                    of the world. She specializes in off-the-beaten-path destinations and sustainable travel practices.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="py-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tours.map((tour) => (
                                <TourCard key={tour.id} {...tour} />
                            ))}
                        </div>
                    </div> */}

                    <div className="border-t border-amber-100 pt-12">
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Comments</h2>
                            <div className="space-y-6">
                                {comments.map((comment) => (
                                    <div key={comment.id} className="flex gap-4 pb-6 border-b border-gray-100">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-200">
                                                <Image
                                                    src={comment.avatar || "/placeholder.svg"}
                                                    alt={comment.author}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <div>
                                                    <h3 className="font-bold text-gray-900">{comment.author}</h3>
                                                    <p className="text-sm text-gray-500">{comment.date}</p>
                                                </div>
                                                <button className="flex items-center gap-1 text-black hover:text-gray-900 cursor-pointer text-sm font-semibold">
                                                    Reply <ArrowRight size={16} />
                                                </button>
                                            </div>
                                            <p className="text-gray-700">{comment.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white py-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Leave a Reply</h2>
                            <p className="text-sm text-gray-600 mb-6">
                                Your email address will not be published. Required fields are marked{" "}
                                <span className="text-red-600">*</span>
                            </p>

                            <form onSubmit={handleCommentSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="comment" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Your Comment <span className="text-red-600">*</span>
                                    </label>
                                    <textarea
                                        id="comment"
                                        value={formData.comment}
                                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900 resize-none"
                                        placeholder="Your Comment *"
                                    />
                                </div>

                                {/* Name and Email Fields */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Your Name <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
                                            placeholder="Your Name *"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Your Email <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
                                            placeholder="Your Email *"
                                        />
                                    </div>
                                </div>

                                {/* Website Field */}
                                <div>
                                    <label htmlFor="website" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Website
                                    </label>
                                    <input
                                        type="url"
                                        id="website"
                                        value={formData.website}
                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-900"
                                        placeholder="Website"
                                    />
                                </div>
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={saveInfo}
                                        onChange={(e) => setSaveInfo(e.target.checked)}
                                        className="w-4 h-4 border border-gray-300 rounded cursor-pointer focus:ring-1 focus:ring-gray-900"
                                    />
                                    <span className="text-sm text-gray-700">
                                        Save my name, email, and website in this browser for the next time I comment.
                                    </span>
                                </label>
                                <div>
                                    <button
                                        type="submit"
                                        className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                                    >
                                        POST COMMENT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </article>
                <BlogSidebar />
            </div>

            <div className="max-w-7xl mx-auto py-6">
                <div className="relative">
                    <button
                        onClick={() => scrollCarousel("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 cursor-pointer bg-black/50 hover:bg-black text-white p-1.5 rounded-full shadow-lg transition-all"
                        aria-label="Previous destinations"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scrollCarousel("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 cursor-pointer bg-black/50 hover:bg-black text-white p-1.5 rounded-full shadow-lg transition-all"
                        aria-label="Next destinations"
                    >
                        <ChevronRight size={24} />
                    </button>
                    <div ref={setCarouselRef} className="overflow-x-auto scrollbar-none">
                        <div className="flex gap-4 pb-4">
                            {[
                                { name: "Turkey", image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/destination-category-8.jpg" },
                                { name: "Portugal", image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/destination-category-7.jpg" },
                                { name: "Turkey", image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/destination-category-8.jpg" },
                                { name: "Portugal", image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/destination-category-7.jpg" },
                                { name: "Turkey", image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/destination-category-8.jpg" },
                                { name: "Portugal", image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/destination-category-7.jpg" },
                                { name: "Turkey", image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/destination-category-8.jpg" },
                                { name: "Portugal", image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/destination-category-7.jpg" },
                                { name: "Turkey", image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/destination-category-8.jpg" },
                                { name: "Portugal", image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/destination-category-7.jpg" },
                            ].map((destination) => (
                                <div className="flex-shrink-0 w-60 h-40 relative rounded-lg overflow-hidden group cursor-pointer">
                                    <Image
                                        src={destination.image || "/placeholder.svg"}
                                        alt={destination.name}
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                                    <div className="absolute bottom-0 left-0 p-4">
                                        <h3 className="text-white font-semibold text-lg">{destination.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
