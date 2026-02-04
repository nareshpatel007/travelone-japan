import MyBookingsPage from "@/components/pages/my-bookings";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Bookings",
    description: "View and manage your bookings here."
};

export default function Page() {
    return <MyBookingsPage />;
}