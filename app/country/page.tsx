import type { Metadata } from "next";
import DestinationPage from "@/components/pages/destination-list";

export const metadata: Metadata = {
    title: "Destinations",
    description: "Explore popular travel destinations worldwide. Discover places, attractions, and tour options."
};

export default function Page() {
    return <DestinationPage />;
}
