"use client"

import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { BlogSidebar } from "./sidebar"
import Image from "next/image"

const blogPost = {
    slug: "top-10-hidden-gems-in-europe",
    title: "Top 10 Hidden Gems in Europe You Must Visit",
    excerpt:
        "Discover the lesser-known destinations in Europe that offer authentic experiences away from the tourist crowds.",
    image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/home-5-img-4-1.jpg",
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

export function BlogDetail() {
    return (
        <div className="py-8 md:py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8">
                    <article className="flex-1">
                        <div className="!bg-white !rounded-xl overflow-hidden shadow-sm">
                            <div className="relative h-64 md:h-96">
                                <Image
                                    src={blogPost.image || "/placeholder.svg"}
                                    alt={blogPost.title}
                                    fill
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="!px-3 !py-1 !bg-amber-500 !text-white text-sm font-medium rounded-full">
                                        {blogPost.category}
                                    </span>
                                </div>
                            </div>
                            <div className="!p-7">
                                <span className="text-2xl md:text-3xl font-bold text-gray-900 !block !mb-4">{blogPost.title}</span>
                                <div
                                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#f53] prose-a:no-underline hover:prose-a:underline"
                                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                                />
                                <div className="!mt-8 !pt-6 !border-t !border-gray-200">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-sm text-gray-500">Tags:</span>
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
                            </div>
                        </div>
                        <div className="!bg-white rounded-xl !p-6 !mt-6 shadow-sm">
                            <div className="flex items-start gap-4">
                                <Image
                                    src={blogPost.authorImage || "/placeholder.svg"}
                                    alt={blogPost.author}
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <span className="font-bold text-gray-900 !block !mb-1">About {blogPost.author}</span>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Sarah is a passionate traveler and writer with over 10 years of experience exploring hidden corners
                                        of the world. She specializes in off-the-beaten-path destinations and sustainable travel practices.
                                    </p>
                                    <Link href="#" className="text-[#f53] text-sm font-medium hover:underline">
                                        View all posts by {blogPost.author}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>
                    <BlogSidebar />
                </div>
            </div>
        </div>
    )
}
