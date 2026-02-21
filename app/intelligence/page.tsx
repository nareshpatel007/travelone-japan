import IntelligencePage from "@/components/pages/intelligence";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Intelligence",
    description: "TravelOne is a travel platform that empowers you to discover and plan your next adventure. Our mission is to make travel as intelligent as the people who take it.",
    alternates: {
        canonical: `${process.env.SITE_URL}/intelligence`
    },
};

export default function Page() {
    return <IntelligencePage />;
}
