import type { Metadata } from "next";
import Script from "next/script";

// Define the metadata object
export const metadata: Metadata = {
    title: {
        default: "TravelOne: Trusted Experts for World-Class Curated Vacations",
        template: "%s | TravelOne"
    },
    description: "Book expertly-guided tour packages with the USA's trusted travel partner – TravelOne. Join thousands of happy travelers who experience our world-class vacations every year.",
    keywords: [
        "travel",
        "tours",
        "travelone",
        "holiday packages",
        "destinations",
        "travel booking"
    ],
    icons: {
        icon: "https://ik.imagekit.io/288weifiq/nextjs/favicon.png"
    },
    robots: "index, follow",
    metadataBase: new URL("https://travelone.io"),
    openGraph: {
        type: "website",
        siteName: "TravelOne",
        title: "TravelOne: Trusted Experts for World-Class Curated Vacations",
        description: "Book expertly-guided tour packages with the USA's trusted travel partner – TravelOne. Join thousands of happy travelers who experience our world-class vacations every year.",
        images: ["/favicon.png"]
    },
    twitter: {
        card: "summary_large_image",
        title: "TravelOne: Trusted Experts for World-Class Curated Vacations",
        description: "Book expertly-guided tour packages with the USA's trusted travel partner – TravelOne. Join thousands of happy travelers who experience our world-class vacations every year.",
        images: ["/favicon.png"]
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <head>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

                <link rel="stylesheet" href="/assets/home-css/styles.css" />
                <link rel="stylesheet" href="/assets/home-css/grid.css" />
                <link rel="stylesheet" href="/assets/home-css/main.css" />
                <link rel="stylesheet" href="/assets/home-css/main.min.css" />
                <link rel="stylesheet" href="/assets/home-css/main(1).min.css" />
                <link rel="stylesheet" href="/assets/home-css/wanderaway-core.min.css" />
                <link rel="stylesheet" href="/assets/home-css/home.css" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Quintessential&family=Science+Gothic:wght@100..900&display=swap"
                    rel="stylesheet"
                />

                <link rel="stylesheet" href="/assets/home-css/main(1).css" />
                <link rel="stylesheet" href="/assets/home-css/custom-frontend.min.css" />
                <link rel="stylesheet" href="/assets/home-css/sbi-styles.min.css" />
                <link rel="stylesheet" href="/assets/home-css/widget-menu-anchor.min.css" />
                <link rel="stylesheet" href="/assets/home-css/magnific-popup.css" />
                <link rel="stylesheet" href="/assets/home-css/post-3060.css" />
                <link rel="stylesheet" href="/assets/home-css/roboto.css" />
                <link rel="stylesheet" href="/assets/home-css/robotoslab.css" />
                <link rel="stylesheet" href="/assets/home-css/wc-blocks.css" />

                <Script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></Script>
            </head>
            <html lang="en-US" className="no-touchevents">
                {children}
            </html>
        </>
    );
}
