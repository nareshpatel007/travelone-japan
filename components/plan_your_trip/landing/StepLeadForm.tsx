"use client";
import { useEffect, useState } from "react";
import QuestionHeading from "./questionHeading";

interface Props {
    planYourTripForm: any;
    setPlanYourTripForm: React.Dispatch<React.SetStateAction<any>>;
}

export default function StepLeadForm({
    planYourTripForm,
    setPlanYourTripForm,
}: Props) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [acceptPrivacy, setAcceptPrivacy] = useState(false);

    // ✅ Restore values when coming back to this step
    useEffect(() => {
        if (planYourTripForm?.full_name) {
            setFullName(planYourTripForm.full_name);
        }
        if (planYourTripForm?.email) {
            setEmail(planYourTripForm.email);
        }
        if (planYourTripForm?.mobile) {
            setMobile(planYourTripForm.mobile);
        }
        if (planYourTripForm?.privacy_policy_accepted !== undefined) {
            setAcceptPrivacy(planYourTripForm.privacy_policy_accepted);
        }
    }, [planYourTripForm]);

    const updateForm = (key: string, value: any) => {
        setPlanYourTripForm((prev: any) => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <>
            <QuestionHeading title="Secure Your Custom Design" subtitle="Our Lead Designer will review your profile personally" />
            <div className="space-y-4">
                <div>
                    <label className="!block !text-md !text-black !mb-0">Full name</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                            setFullName(e.target.value);
                            updateForm("full_name", e.target.value);
                        }}
                        placeholder="Enter your full name"
                        className="!w-full !rounded-sm !px-4 !py-2 !bg-white border"
                    />
                </div>
                <div>
                    <label className="!block !text-md !text-black !mb-0">Email address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            updateForm("email", e.target.value);
                        }}
                        placeholder="Enter your email"
                        className="!w-full !rounded-sm !px-4 !py-2 !bg-white border"
                    />
                </div>
                <div>
                    <label className="!block !text-md !text-black !mb-0">Mobile number</label>
                    <input
                        type="tel"
                        value={mobile}
                        onChange={(e) => {
                            setMobile(e.target.value);
                            updateForm("mobile", e.target.value);
                        }}
                        placeholder="Enter your mobile number"
                        className="!w-full !rounded-sm !px-4 !py-2 !bg-white border"
                    />
                </div>
                <div className="flex items-start gap-2 pt-2">
                    <input
                        type="checkbox"
                        checked={acceptPrivacy}
                        onChange={(e) => {
                            setAcceptPrivacy(e.target.checked);
                            updateForm(
                                "privacy_policy_accepted",
                                e.target.checked
                            );
                        }}
                        className="mt-1 cursor-pointer"
                    />
                    <label className="text-xs md:text-sm text-gray-700">
                        I agree to the <a href="https://travelone.io/terms-conditions" target="_blank" className="underline">T&Cs</a> and <a href="https://travelone.io/privacy-policy" target="_blank" className="underline">Privacy Policy</a>, and consent to receive communications from TravelOne, including follow-up call and text messages for quotes, scheduling, and call reminders, regarding my inquiry. Std msg & data rates apply. Text STOP to cancel, HELP for info.
                    </label>
                </div>
            </div>
        </>
    );
}