import FAQPage from "@/components/pages/faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQs",
    description: "Frequently Asked Questions - Get answers to common travel questions."
};

export default function Page() {
    return <FAQPage />;
}