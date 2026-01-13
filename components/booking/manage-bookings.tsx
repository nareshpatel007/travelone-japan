"use client"

import { useState } from "react"
import { Calendar, CheckCircle, Clock, MapPin, Search, Printer, X, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type BookingStatus = "upcoming" | "completed" | "cancelled"

interface Booking {
    id: string
    tourName: string
    image: string
    bookingNumber: string
    pin: string
    date: string
    time: string
    location: string
    travelers: string
    price: string
    status: BookingStatus
}

const bookings: Booking[] = [
    {
        id: "1",
        tourName: "Richmond Historic Trolley Tour",
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-3.jpg",
        bookingNumber: "GYG52539120",
        pin: "a+NcqxYh",
        date: "December 15, 2024",
        time: "10:00 AM",
        location: "Richmond, Virginia",
        travelers: "2 Adults",
        price: "₹3,900",
        status: "upcoming",
    },
    {
        id: "2",
        tourName: "Ghost Tour of Shockoe Bottom",
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-4.jpg",
        bookingNumber: "GYG52539121",
        pin: "b+XyzAbc",
        date: "December 20, 2024",
        time: "8:00 PM",
        location: "Shockoe Bottom, Richmond",
        travelers: "3 Adults, 1 Child",
        price: "₹5,200",
        status: "upcoming",
    },
    {
        id: "3",
        tourName: "Segway Tour of Richmond Landmarks",
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-7.jpg",
        bookingNumber: "GYG52539115",
        pin: "c+DefGhi",
        date: "November 5, 2024",
        time: "2:00 PM",
        location: "Downtown Richmond",
        travelers: "2 Adults",
        price: "₹4,500",
        status: "completed",
    },
    {
        id: "4",
        tourName: "Richmond City Sightseeing Van Tour",
        image: "https://wanderaway.qodeinteractive.com/wp-content/uploads/2023/08/Destination-list-8.jpg",
        bookingNumber: "GYG52539110",
        pin: "d+JklMno",
        date: "October 28, 2024",
        time: "11:00 AM",
        location: "Richmond, Virginia",
        travelers: "1 Adult",
        price: "₹1,950",
        status: "cancelled",
    },
]

const statusConfig = {
    upcoming: {
        label: "Upcoming",
        bgColor: "bg-blue-50",
        textColor: "text-blue-700",
        borderColor: "border-blue-200",
        icon: Clock,
    },
    completed: {
        label: "Completed",
        bgColor: "bg-green-50",
        textColor: "text-green-700",
        borderColor: "border-green-200",
        icon: CheckCircle,
    },
    cancelled: {
        label: "Cancelled",
        bgColor: "bg-gray-50",
        textColor: "text-gray-500",
        borderColor: "border-gray-200",
        icon: X,
    },
}

export function ManageBookings() {
    // Define state
    const [activeTab, setActiveTab] = useState<"all" | BookingStatus>("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // Filter bookings
    const filteredBookings = bookings.filter((booking) => {
        const matchesTab = activeTab === "all" || booking.status === activeTab;
        const matchesSearch =
            booking.tourName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            booking.bookingNumber.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    })

    // Tabs
    const tabs = [
        { id: "all" as const, label: "All Bookings", count: bookings.length },
        { id: "upcoming" as const, label: "Upcoming", count: bookings.filter((b) => b.status === "upcoming").length },
        { id: "completed" as const, label: "Completed", count: bookings.filter((b) => b.status === "completed").length },
        { id: "cancelled" as const, label: "Cancelled", count: bookings.filter((b) => b.status === "cancelled").length },
    ]

    return (
        <>
            <div className="mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by tour name or booking number..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 !rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-transparent text-sm"
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-2 !mb-6 overflow-x-auto !pb-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab.id
                            ? "bg-amber-500 text-white"
                            : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                            }`}
                    >
                        {tab.label} ({tab.count})
                    </button>
                ))}
            </div>

            {/* Bookings List */}
            {filteredBookings.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
                    <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
                    <p className="text-gray-500 mb-6">
                        {searchQuery ? "Try adjusting your search terms." : "You don't have any bookings in this category yet."}
                    </p>
                    <Link
                        href="/tours"
                        className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-full font-medium hover:bg-[#158a9c] transition-colors"
                    >
                        Explore Tours
                    </Link>
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredBookings.map((booking) => {
                        const status = statusConfig[booking.status];
                        const StatusIcon = status.icon;

                        return (
                            <div
                                key={booking.id}
                                className={`!bg-white !border !border-gray-200 !mb-5 !rounded-lg overflow-hidden ${booking.status === "cancelled" ? "opacity-75" : ""
                                    }`}
                            >
                                <div className="!p-6">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={booking.image || "/placeholder.svg"}
                                                alt={booking.tourName}
                                                width={300}
                                                height={300}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 !mb-3">
                                                <div>
                                                    <span className="font-semibold text-gray-900 text-lg !block !mb-1">{booking.tourName}</span>
                                                    <div
                                                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium !${status.bgColor} !${status.textColor}`}
                                                    >
                                                        <StatusIcon className="w-3.5 h-3.5" />
                                                        {status.label}
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <span className="font-semibold !text-gray-900 text-lg">{booking.price}</span>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 !mb-4">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-gray-400" />
                                                    <span>
                                                        {booking.date} at {booking.time}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-gray-400" />
                                                    <span>{booking.location}</span>
                                                </div>
                                                <div className="text-gray-500">
                                                    Booking: <span className="font-medium text-gray-700">{booking.bookingNumber}</span>
                                                </div>
                                                <div className="text-gray-500">
                                                    Travelers: <span className="font-medium text-gray-700">{booking.travelers}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-3 !pt-3 !border-t !border-gray-100">
                                                <Link
                                                    href="#"
                                                    className="text-sm font-medium text-amber-500 hover:underline"
                                                >
                                                    View details
                                                </Link>
                                                {booking.status === "upcoming" && (
                                                    <>
                                                        <span className="text-gray-300">|</span>
                                                        <button className="text-sm font-medium !text-amber-500 hover:underline flex items-center gap-1.5">
                                                            <Printer className="w-4 h-4" />
                                                            Print voucher
                                                        </button>
                                                        <span className="text-gray-300">|</span>
                                                        <button className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline">
                                                            Modify booking
                                                        </button>
                                                        <span className="text-gray-300">|</span>
                                                        <button className="text-sm font-medium text-red-600 hover:underline">
                                                            Cancel booking
                                                        </button>
                                                    </>
                                                )}
                                                {booking.status === "completed" && (
                                                    <>
                                                        <span className="text-gray-300">|</span>
                                                        <Link href="#" className="text-sm font-medium text-amber-500 hover:underline">
                                                            Write a review
                                                        </Link>
                                                        <span className="text-gray-300">|</span>
                                                        <Link href="#" className="text-sm font-medium text-amber-500 hover:underline">
                                                            Book again
                                                        </Link>
                                                    </>
                                                )}
                                                {booking.status === "cancelled" && (
                                                    <>
                                                        <span className="text-gray-300">|</span>
                                                        <Link href="#" className="text-sm font-medium text-amber-500 hover:underline">
                                                            Book again
                                                        </Link>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
            <div className="!mt-8 !bg-amber-50 !border !border-amber-200 !rounded-lg !p-5">
                <div className="flex gap-4">
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    <div>
                        <span className="font-semibold text-gray-900 !block !mb-1">Need help with a booking?</span>
                        <span className="!text-sm !text-gray-600">
                            If you have any questions or need assistance with your bookings, visit our{" "}
                            <Link href="#" className="text-amber-500 hover:underline font-medium">
                                help center
                            </Link>{" "}
                            or contact our customer support team.
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
