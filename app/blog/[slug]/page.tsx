"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";
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
            <body>
                {ready && <>
                    <CommonHeader />
                    <div className="max-w-7xl mx-auto px-5 md:px-0 md:p-6">
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
