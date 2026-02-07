import UserProfilePage from "@/components/pages/profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Your Profile",
    description: "View and manage your profile here."
};

export default function Page() {
    return <UserProfilePage />;
}