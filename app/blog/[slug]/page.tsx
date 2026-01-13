"use client";

import CommonHeader from "@/components/header/common-header";
import CommonMobileHeader from "@/components/header/common-mobile-header";
import CommonFooter from "@/components/footer/common-footer";
import CommonTopHeader from "@/components/header/common-top-header";
import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, HelpCircle, FileText } from "lucide-react";
import Link from "next/link";
import Heading from "@/components/common/heading";
import { BlogList } from "@/components/blog/listing";
import { BlogDetail } from "@/components/blog/detail";

export default function BlogPage() {
    // Define state
    const [ready, setReady] = useState(false);
    
    useEffect(() => {
        // Wait one frame after hydration
        requestAnimationFrame(() => {
            setReady(true);
        });
    }, []);

    return (
        <>
            <body className="wp-singular page-template page-template-page-full-width page-template-page-full-width-php page page-id-280 wp-theme-wanderaway theme-wanderaway qi-blocks-1.4.3 qodef-gutenberg--no-touch qode-framework-1.2.6 woocommerce-js qodef-qi--no-touch qi-addons-for-elementor-1.9.3 wanderaway-core-1.2 wanderaway-1.1.1 qodef-content-grid-1300 qodef-back-to-top--enabled qodef-header--standard qodef-header-appearance--sticky qodef-mobile-header--side-area qodef-drop-down-second--full-width qodef-drop-down-second--default qode-export-1.0 qodef-header-standard--center qodef-search--covers-header elementor-default elementor-kit-4 elementor-page elementor-page-280 qodef-browser--chrome e--ua-blink e--ua-chrome e--ua-webkit">
                {ready && <>
                    <CommonTopHeader />
                    <CommonHeader />
                    <CommonMobileHeader />

                    <div className="max-w-7xl mx-auto">
                        <div className="p-5 md:p-6">
                            <BlogDetail />
                        </div>
                    </div>

                    <CommonFooter />
                </>}
            </body>
        </>
    );
}
