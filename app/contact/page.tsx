import ContactPage from "@/components/pages/contact-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Contact TravelOne for tour bookings, custom travel plans, and customer support."
};

export default function Page() {
    return <ContactPage />;
}
