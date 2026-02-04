import type { Metadata } from "next";
import ToursPage from "@/components/pages/tour-list";

export const metadata: Metadata = {
    title: "Tours",
    description: "Browse our curated tour packages including adventure, family, luxury, and budget tours."
};

export default function Page() {
    return <ToursPage />;
}