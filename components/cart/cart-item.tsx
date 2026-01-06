"use client"

import { Trash2, Plus, Minus } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface CartItemProps {
    item: {
        id: number
        title: string
        image: string
        price: number
        quantity: number
        details: string
        travelDate: string
        roomInfo: string
    }
}

export function CartItem({ item }: CartItemProps) {
    const [quantity, setQuantity] = useState(item.quantity)

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity > 0) {
            setQuantity(newQuantity)
        }
    }

    return (
        <div className="rounded-lg !border !border-border !bg-white !p-6 !mb-4">
            <div className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                    <div className="h-24 w-24 sm:h-32 sm:w-32 !rounded-lg !overflow-hidden !bg-black/20">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} className="!h-full !w-full !object-cover" width={100} height={100} />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <span className="!text-[20px] !font-semibold !text-foreground !text-balance">{item.title}</span>
                    <p className="!mt-1 !text-sm !text-muted-foreground">{item.details}</p>
                    <div className="mt-3 space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <span>📅</span>
                            <span>{item.travelDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <span>🏠</span>
                            <span>{item.roomInfo}</span>
                        </div>
                    </div>
                    <div className="!mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div className="!text-lg !font-semibold !text-foreground">${(item.price * quantity).toLocaleString()}</div>
                        <div className="!flex !items-center !gap-3">
                            <button
                                className="!p-2 !text-red-600 !cursor-pointer !rounded-lg !transition-colors"
                                aria-label="Remove item"
                            >
                                <Trash2 className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <button className="!mt-3 !text-sm !font-medium text-gray-500 hover:text-black !cursor-pointer">
                        Change date or participants
                    </button>
                </div>
            </div>
        </div>
    )
}
