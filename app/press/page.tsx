import PressPage from "@/components/pages/press";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TravelOne in the Spotlight",
    description: "Shaping the future of global travel through data intelligence and the power of Traveller DNA.",
    alternates: {
        canonical: `${process.env.SITE_URL}/press`
    },
};

export default function Page() {
    return <PressPage />;
}