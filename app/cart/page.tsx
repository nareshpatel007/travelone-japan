import CartPage from "@/components/pages/cart";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Your Cart",
    description: "View and manage your cart here."
};

export default function Page() {
    return <CartPage />;
}
