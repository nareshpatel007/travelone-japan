import type { Metadata } from "next";
import AboutPage from "@/components/pages/about-us";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about TravelOne, our mission, values, and how we create unforgettable travel experiences."
};

export default function Page() {
    return <AboutPage />;
}
