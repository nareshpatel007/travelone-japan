import SearchPage from "@/components/pages/search-tour";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Your Search Results",
    description: "View and book your search results here."
};

export default function Page() {
    return <SearchPage />;
}