'use client';

import { authClient } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const SignInWithGoogle = ({ content }) => {
    const searchParams = useSearchParams();
    const [error, setError] = useState("");

    const requestedUrl = searchParams.get("callbackUrl") || "/";

    // Prevent external or protocol-relative redirects
    const callbackUrl =
        requestedUrl.startsWith("/") &&
            !requestedUrl.startsWith("//") &&
            !requestedUrl.startsWith("/\\")
            ? requestedUrl
            : "/";

    const handleSignInWithGoogle = async () => {
        setError('');

        await authClient.signIn.social(
            {
                provider: 'google',
                callbackURL: callbackUrl
            },
            {
                onSuccess: () => {
                    window.location.assign(callbackUrl);
                },
                onError: (ctx) => {
                    setError(ctx.error.message);
                },
            }
        );
    };

    return (
        <button onClick={handleSignInWithGoogle} className="border-none btn gap-2 w-full rounded-xl text-sm text-shadow-none font-medium shadow-none py-2 h-auto">
            <FcGoogle size={22} /> {content}
        </button>
    );
};

export default SignInWithGoogle;