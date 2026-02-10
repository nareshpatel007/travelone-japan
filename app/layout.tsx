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
    alternates: {
        canonical: "/",
    },
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

                <Script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></Script>

                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-EKM936JVW9"
                    strategy="afterInteractive"
                />
                <Script id="ga-init" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-EKM936JVW9');
                    `}
                </Script>

                {/* Google Tag Manager */}
                <Script id="gtm-init" strategy="afterInteractive">
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];
                        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                        var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                        f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-P779H4SK');
                    `}
                </Script>

                {/* Meta Pixel */}
                <Script id="fb-pixel" strategy="afterInteractive">
                    {`
                        !function(f,b,e,v,n,t,s){
                        if(f.fbq)return;n=f.fbq=function(){
                        n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)
                        }(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '1099480798256642');
                        fbq('track', 'PageView');
                    `}
                </Script>

                {/* Microsoft Clarity */}
                <Script id="clarity-init" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;
                        t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];
                        y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "su52f1wgx1");
                    `}
                </Script>

                {/* Microsoft Clarity */}
                <Script id="clarity-init" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;
                        t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];
                        y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "hykkcvtyw6");
                    `}
                </Script>
            </head>
            <html lang="en-US" className="no-touchevents">
                <body>
                    {/* GTM NoScript */}
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-P779H4SK"
                            height="0"
                            width="0"
                            style={{ display: "none", visibility: "hidden" }}
                        />
                    </noscript>

                    {/* Facebook NoScript */}
                    <noscript>
                        <img
                            height="1"
                            width="1"
                            style={{ display: "none" }}
                            src="https://www.facebook.com/tr?id=1099480798256642&ev=PageView&noscript=1"
                        />
                    </noscript>

                    {children}
                </body>
            </html>
        </>
    );
}
