"use client"

import { formatDate, formatPrice } from "@/lib/utils";
import { CalendarCheck, CheckCircle, Download, File, HelpCircle, Info, Printer, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define interface
interface Props {
    orderData: any;
}

export function BookingConfirmation({ orderData }: Props) {
    return (
        <div className="space-y-8">
            {(orderData?.order?.status === 'REJECTED' || orderData?.order?.status === 'CANCELLED') ? <div className="text-center space-y-6">
                <div className="flex justify-center">
                    <X className="w-18 h-18 text-black" />
                </div>
                <h2 className="text-black text-3xl md:text-5xl font-normal leading-tight">
                    Your booking has been not confirmed.
                </h2>
            </div> : <div className="text-center space-y-6">
                <div className="flex justify-center">
                    <CheckCircle className="w-18 h-18 text-black" />
                </div>
                <h2 className="text-black text-3xl md:text-5xl font-normal leading-tight">
                    Congratulations! Your booking has been confirmed.
                </h2>
            </div>}

            <div className="flex flex-col lg:flex-row gap-5">
                <div className="flex-1">
                    <div className="bg-[#FFF9EE] border border-amber-300 rounded-sm p-4 mb-6">
                        <div className="flex gap-4">
                            <Info className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                            <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                                {(orderData?.order?.status === 'REJECTED' || orderData?.order?.status === 'CANCELLED') ? <li>
                                    Apologies! Your booking could not be completed due to a payment issue. If money was deducted from your account, a refund will be processed within 5-7 business days. Please revisit later to retry your booking.
                                </li> : <>
                                    {orderData?.order?.payment_method == 'Bank Transfer' ? <>
                                        <li>Thank You for Choosing TravelOne!</li>
                                        <li>Dear {`${orderData?.order?.customer_fname} ${orderData?.order?.customer_lname}`}, We’re thrilled to have you join our upcoming journey. Your booking has been received successfully, and we can’t wait to help you experience the beauty, culture, and cuisine in the most seamless way possible.</li>
                                    </> : <li>
                                        Congratulations! Your booking is confirmed. We’ve sent your tour details to your email <b>{orderData?.order?.customer_email}</b>. You can also check your "My Bookings" to view your upcoming trip and manage your booking.
                                    </li>}
                                </>}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                        <div className="p-4">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <Image
                                        src={orderData?.cart_data?.tour_info?.featured_image || "/placeholder.svg"}
                                        alt={orderData?.cart_data?.tour_info?.tour_name}
                                        width={500}
                                        height={500}
                                        className="w-40 h-40 object-cover rounded-sm"
                                    />
                                </div>
                                <div className="flex-1 min-w-0 space-y-2">
                                    <div className="flex justify-between items-start gap-4 space-y-2">
                                        <span className="font-semibold text-black text-base md:text-xl">
                                            {orderData?.cart_data?.tour_info?.tour_name}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4 space-y-2">
                                        <span className="font-semibold text-black text-base md:text-lg flex-shrink-0">
                                            Booking Amount: ${formatPrice(orderData?.order?.payable_amount, 2)}
                                        </span>
                                    </div>
                                    <div className="text-sm md:text-base text-black">
                                        Booking Reference Number:
                                        <span className="font-medium text-black">
                                            {` #${orderData?.order?.booking_ref_no}`}
                                        </span>
                                    </div>
                                    <div className="text-sm md:text-base text-black">
                                        Travel Date: {formatDate(orderData?.cart_data?.booking_date)}
                                    </div>
                                    <div className="text-sm md:text-base text-black">
                                        Rooms: {orderData?.cart_data?.total_rooms} | Total Travellers: {orderData?.cart_data?.total_travelers}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 p-4 flex gap-3 justify-right">
                            <button className="flex items-center gap-2 px-4 py-2 text-base bg-black text-white rounded-sm font-medium border border-black hover:bg-white hover:text-black hover:border-black cursor-pointer transition-colors">
                                <Download className="w-4 h-4" />
                                Download Itinerary
                            </button>

                            <button className="flex items-center gap-2 px-4 py-2 text-base bg-black text-white rounded-sm font-medium border border-black hover:bg-white hover:text-black hover:border-black cursor-pointer transition-colors">
                                <File className="w-4 h-4" />
                                Download Invoice
                            </button>

                            {orderData?.order?.payment_method == 'Bank Transfer' && <Link href={`/bookings/${orderData?.order?.checkout_id}`}>
                                <button className="flex items-center gap-2 px-4 py-2 text-base bg-black text-white rounded-sm font-medium border border-black hover:bg-white hover:text-black hover:border-black cursor-pointer transition-colors">
                                    <CalendarCheck className="w-4 h-4" />
                                    Booking Details
                                </button>
                            </Link>}

                            <Link href="/contact">
                                <button className="flex items-center gap-2 px-4 py-2 text-base bg-white text-black rounded-sm font-medium border border-black hover:bg-black hover:text-white hover:border-black cursor-pointer transition-colors">
                                    <HelpCircle className="w-4 h-4" />
                                    Need Help?
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="lg:w-85 space-y-6">
                    <div className="bg-white border border-gray-200 rounded-sm p-4 space-y-3">
                        <span className="text-lg font-semibold block">Need help?</span>
                        <p className="text-sm text-gray-600">
                            You can find a contact form and phone number for your language on our{" "}
                            <Link href="#" className="text-black hover:underline">
                                help page
                            </Link>.
                        </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-sm p-4 space-y-3">
                        <span className="text-lg font-semibold block">More popular experiences</span>
                        <div className="space-y-6">
                            {orderData?.related_tours && orderData?.related_tours.map((tour: any) => (
                                <Link key={tour?.id} href={`/tour/${tour?.slug}`} className="flex gap-3 group">
                                    <Image
                                        src={tour?.featured_image || "/placeholder.svg"}
                                        alt={tour?.name}
                                        width={60}
                                        height={60}
                                        className="w-14 h-14 object-cover rounded-sm flex-shrink-0"
                                    />
                                    <div className="flex-1 min-w-0 space-y-2">
                                        <span className="block text-sm font-medium text-gray-900 group-hover:text-black transition-colors line-clamp-2 hover:underline">
                                            {tour?.name}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-xs font-semibold text-gray-900">
                                                Start from ${formatPrice(tour?.starting_price, 0)}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
