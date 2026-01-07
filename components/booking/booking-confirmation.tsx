"use client"

import { CheckCircle, HelpCircle, Info, Printer, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const bookingDetails = {
    tourName: "Historium Bruges All-Inclusive Entrance Ticket",
    image: "/historic-trolley-tour-richmond-vintage-red-trolley.jpg",
    price: "$1,950.00",
    bookingNumber: "GYG52539120",
    pin: "a+NcqxYh",
    date: "November 9, 2024",
    time: "10:00 AM — 4:00 PM",
    validity: "Valid 1 day",
    travelers: "1 Adult (Age 13+)",
}

const popularExperiences = [
    {
        title: "Bruges: Guided Rickshaw Tour",
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-2.jpg",
        rating: 4.8,
        reviews: 88,
        price: "₹4,500",
    },
    {
        title: "Bruges: 30-Minute Private Tour by Bike Carriage",
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-3.jpg",
        rating: 4.7,
        reviews: 101,
        price: "₹2,499",
    },
    {
        title: "From Amsterdam: Bruges Day Tour & Canal Cruise",
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-5.jpg",
        rating: 4.6,
        reviews: 245,
        price: "₹8,900",
    },
]

export function BookingConfirmation() {
    return (
        <section className="py-8 md:py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-8">
                    <div className="flex justify-center !mb-4">
                        <CheckCircle className="w-16 h-16 text-black" />
                    </div>
                    <span className="!block !mb-10 text-2xl md:text-3xl font-bold text-gray-900">Thanks for your order</span>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                        <div className="!bg-blue-50 !border !border-blue-100 !rounded-lg !p-4 !mb-6">
                            <div className="!flex !gap-4">
                                <Info className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                                <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                                    <li>
                                        Thank you for your order. We've sent the information for your activity to{" "}
                                        <span className="font-medium text-gray-900">customer@email.com</span>. If you can't find it, please
                                        check your spam or promotion folder.
                                    </li>
                                    <li>If you need to make changes to your booking, you'll need your booking number and PIN.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="!bg-white !border !border-gray-200 !rounded-lg overflow-hidden">
                            <div className="!p-4">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <Image
                                            src="https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-3.jpg"
                                            alt="Tour Image"
                                            width={100}
                                            height={100}
                                            className="w-40 h-40 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start gap-4">
                                            <span className="!block !mb-2 font-semibold text-gray-900 text-base md:text-lg">{bookingDetails.tourName}</span>
                                            <span className="font-semibold text-gray-900 text-base md:text-lg flex-shrink-0">
                                                {bookingDetails.price}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 !mb-2">
                                            <CheckCircle className="w-4 h-4 text-black" />
                                            <span className="!text-black font-medium text-sm">We've sent your vouchers</span>
                                        </div>
                                        <div className="!mb-2 text-sm !text-gray-600">
                                            Booking Number: <span className="font-semibold text-gray-900">{bookingDetails.bookingNumber}</span>
                                        </div>
                                        <div className="!mb-2 text-sm !text-gray-600">
                                            {bookingDetails.date} (Open from {bookingDetails.time}) | {bookingDetails.validity}
                                        </div>
                                        <div className="!mb-2 text-sm text-gray-600">{bookingDetails.travelers}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="!border-t !border-gray-200 !p-4 flex gap-3 justify-right">
                                <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full font-medium border border-black hover:bg-white hover:text-black hover:border-black cursor-pointer transition-colors">
                                    <Printer className="w-5 h-5" />
                                    Printable Voucher
                                </button>
                                <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full font-medium border border-black hover:bg-white hover:text-black hover:border-black cursor-pointer transition-colors">
                                    <HelpCircle className="w-5 h-5" />
                                    Help Center
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-85 space-y-6">
                        <div className="!bg-white !border !border-gray-200 !rounded-lg !p-4 !mb-6">
                            <span className="block !font-semibold !text-gray-900 !mb-2">Need help?</span>
                            <p className="text-sm text-gray-600">
                                You can find a contact form and phone number for your language on our{" "}
                                <Link href="#" className="text-black hover:underline">
                                    help page
                                </Link>.
                            </p>
                        </div>
                        <div className="!bg-white !border !border-gray-200 !rounded-lg !p-4">
                            <span className="!block !font-semibold !text-gray-900 !mb-4">More popular experiences</span>
                            <div className="!space-y-4">
                                {popularExperiences.map((experience, index) => (
                                    <Link key={index} href="#" className="flex gap-3 group">
                                        <Image
                                            src={experience.image || "/placeholder.svg"}
                                            alt={experience.title}
                                            width={60}
                                            height={60}
                                            className="!w-14 !h-14 object-cover rounded-lg flex-shrink-0"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <span className="!block !text-sm !font-medium !text-gray-900 !group-hover:text-black transition-colors !line-clamp-2 !mb-2">
                                                {experience.title}
                                            </span>
                                            <div className="flex items-center gap-1 mt-1">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-3 h-3 ${i < Math.floor(experience.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-gray-500">{experience.reviews}</span>
                                                <span className="text-xs font-semibold text-gray-900 ml-auto">{experience.price}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
