import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TravelOne",
    robots: "max-image-preview:large",
    viewport: "width=device-width, initial-scale=1, user-scalable=yes",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en-US" className="no-touchevents">
            {children}
        </html>
    );
}
