import type { Metadata } from "next";
import AboutPage from "@/components/pages/about-us";

export async function generateMetadata(): Promise<Metadata> {
    // Generate canonical url
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://travelone.io";
    const canonicalUrl = `${baseUrl}/about`;

    // Return metadata
    return {
        title: "About Us",
        description: "Learn about TravelOne, our mission, values, and how we create unforgettable travel experiences.",
        alternates: {
            canonical: canonicalUrl,
        },
    };
}

export default function Page() {
    return <AboutPage />;
}
