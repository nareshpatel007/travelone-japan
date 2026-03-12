"use client";

import CommonHeader from "@/components/header/common-header";
import CommonFooter from "@/components/footer/common-footer";
import { useEffect, useState } from "react";

export default function Page() {
    // Define state
    const [ready, setReady] = useState<boolean>(false);

    useEffect(() => {
        requestAnimationFrame(() => { setReady(true); });
    }, []);

    return (
        <>
            {ready && <>
                <div className="min-h-screen bg-white">
                    <CommonHeader />

                    <CommonFooter />
                </div>
            </>}
        </>
    );
}