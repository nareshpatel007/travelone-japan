import AboutPage from "@/components/pages/about-us";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about TravelOne, our mission, values, and how we create unforgettable travel experiences.",
    alternates: {
        canonical: `${process.env.SITE_URL}/about`
    },
};

export default function Page() {
    return <AboutPage />;
}
