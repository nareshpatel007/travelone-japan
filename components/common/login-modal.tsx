"use client"

import type React from "react";
import { useState } from "react";
import { X, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ForgotPasswordModal } from "./forgot-password-modal";
import QuestionHeading from "../plan_your_trip/landing/questionHeading";
import Link from "next/link";

// Define props
interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function LoginModal({ open, onOpenChange }: Props) {
    // Define state
    const [isSignUp, setIsSignUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [showForgotPassword, setShowForgotPassword] = useState(false)

    // Handle login submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(isSignUp ? "Sign up" : "Log in", { email, password, firstName, lastName })
    }

    const resetForm = () => {
        setEmail("")
        setPassword("")
        setFirstName("")
        setLastName("")
        setShowPassword(false)
    }

    const toggleMode = () => {
        setIsSignUp(!isSignUp)
        resetForm()
    }

    const handleForgotPassword = () => {
        onOpenChange(false)
        setShowForgotPassword(true)
    }

    return (
        <>
            {open && <div className="!fixed !inset-0 !z-[999] !flex !items-center !justify-center !bg-black/40 !px-4">
                <div
                    className="!relative !w-full !max-w-[380px] !md:max-w-xl !bg-[#d9eed8] !shadow-xl !overflow-visible"
                    style={{
                        borderTopLeftRadius: "180px",
                        borderTopRightRadius: "180px",
                        borderBottomLeftRadius: "12px",
                        borderBottomRightRadius: "12px",
                    }}
                >
                    <div className="!absolute !top-16 !right-10 !translate-x-1/2 !-translate-y-1/2 !z-50 cursor-pointer">
                        <svg
                            className="!absolute !inset-0 !w-10 !h-10"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 110 110"
                            fill="#a6c5a9"
                        >
                            <path d="M109.2,72.8c-1.9,5.2-11.5,6.4-14.7,10.6c-3.4,4.3-2,13.5-6.5,16.6c-4.6,3.1-13.1-1.3-18.4,0.3c-5.3,1.6-9.7,9.8-15.4,9.7c-5.5-0.1-9.6-8.4-15.1-10.2C33.6,98,25,102.1,20.6,99c-4.5-3.3-2.8-12.4-5.9-16.8c-3.2-4.4-12.8-5.9-14.4-11.1c-1.6-5.1,5.3-11.5,5.4-16.9C5.8,49-1.1,42.4,0.8,37.2s11.5-6.4,14.7-10.6c3.4-4.3,2-13.5,6.5-16.6c4.6-3.1,13.1,1.3,18.4-0.3c5.3-1.6,9.7-9.8,15.4-9.7c5.5,0.1,9.6,8.4,15.1,10.2C76.4,12,85,7.9,89.4,11c4.5,3.3,2.8,12.4,5.9,16.8c3.2,4.4,12.8,5.9,14.4,11.1c1.6,5.1-5.3,11.5-5.4,16.9C104.2,61,111.1,67.6,109.2,72.8z" />
                        </svg>

                        <button
                            aria-label="Close"
                            className="relative w-10 h-10 flex items-center justify-center text-white text-sm font-semibold cursor-pointer"
                            onClick={() => {
                                onOpenChange(false);
                            }}
                        >
                            ✕
                        </button>
                    </div>
                    <div className="p-8 md:p-10">
                        <QuestionHeading
                            title={`${isSignUp ? "Create an account" : "Log in to your account"}`}
                            subtitle={`${isSignUp ? "Sign up to access your bookings" : "Log in to manage your bookings and payments."}`}
                        />
                        <div className="space-y-3">
                            {isSignUp && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-md text-black mb-0">First name</label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="w-full rounded-sm px-4 py-2 bg-white border border-gray-900"
                                            placeholder="First name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-md text-black mb-0">Last name</label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="w-full rounded-sm px-4 py-2 bg-white border border-gray-900"
                                            placeholder="Last name"
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            <div>
                                <label className="block text-md text-black mb-0">Email address</label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full rounded-sm px-4 py-2 bg-white border border-gray-900"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-md text-black mb-0">Password</label>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full rounded-sm px-4 py-2 bg-white border border-gray-900"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            {isSignUp && <div className="flex items-start gap-2 pt-2">
                                <input
                                    type="checkbox"
                                    className="mt-1 cursor-pointer"
                                />
                                <label className="text-xs md:text-sm text-gray-700">
                                    By signing up, you agree to our <Link href="https://travelone.io/terms-conditions" target="_blank" className="underline">T&Cs</Link> and <Link href="https://travelone.io/privacy-policy" target="_blank" className="underline">Privacy Policy</Link>, including the use of cookies.
                                </label>
                            </div>}

                            {!isSignUp && (
                                <div className="flex justify-end">
                                    <button type="button" onClick={handleForgotPassword} className="text-sm text-black hover:text-black/80 font-medium hover:underline cursor-pointer">
                                        Forgot password?
                                    </button>
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center bg-black text-white font-semibold mt-3 py-2.5 rounded-md hover:bg-[#666] transition-colors cursor-pointer"
                            >
                                {isSignUp ? "Create account" : "Log in"}
                            </button>

                            <div className="relative py-3">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 text-gray-700">or continue with</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1">
                                <button
                                    type="button"
                                    className="flex items-center justify-center !bg-white !gap-2 !px-4 !py-2 !border !border-gray-300 rounded-lg hover:bg-black-200 transition-colors cursor-pointer"
                                >
                                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                                        <path
                                            fill="#4285F4"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        />
                                        <path
                                            fill="#EA4335"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        />
                                    </svg>
                                    <span className="text-xs sm:text-sm font-medium text-gray-700">Google</span>
                                </button>
                            </div>
                            <p className="text-center text-sm text-gray-600 pt-2">
                                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                                <button type="button" onClick={toggleMode} className="text-black hover:text-black/80 font-medium hover:underline cursor-pointer">
                                    {isSignUp ? "Log in" : "Sign up"}
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>}

            <ForgotPasswordModal open={showForgotPassword} onOpenChange={() => setShowForgotPassword(false)} />
        </>
    )
}
