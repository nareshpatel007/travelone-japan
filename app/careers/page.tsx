import CareersPage from "@/components/pages/careers";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers",
    description: "Join our team and make your travel dreams come true."
};

export default function Page() {
    return <CareersPage />;
}
