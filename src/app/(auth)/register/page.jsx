'use client';

import SignInWithGoogle from "@/components/auth/SignInWithGoogle";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    Description,
    FieldError,
    Fieldset,
    Form,
    Input,
    InputGroup,
    Label,
    Surface,
    TextField,
} from "@heroui/react";
import { Eye } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const [isVisible, setIsVisible] = useState(false);
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

    const handleSubmitOnRegister = async (event) => {
        event.preventDefault();
        setError('');

        const formData = new FormData(event.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email(
            {
                name: userData.name,
                email: userData.email,
                image: userData.imageUrl,
                password: userData.password,
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

        if (data) {
            toast.success(`Your account is successfully created!`);
        };

        if (error) {
            toast.error(`Your account is faild - ${error.message}`);
        };
    };

    return (
        <div className="max-w-120 sm:max-w-150 mx-auto my-15 space-y-7">
            <div className="text-center space-y-2">
                <h2 className={`text-2xl font-semibold`}>
                    Create Account
                </h2>
                <p className="text-sm font-medium text-slate-600">
                    Start your adventure with IdeaVault
                </p>
            </div>

            <div className="rounded-xl flex items-center justify-center bg-[#1e2939] p-8">
                <Surface className="w-full bg-[#1e2939]">
                    <Form onSubmit={handleSubmitOnRegister}>
                        <Fieldset className="w-full">
                            <Fieldset.Group>
                                <TextField isRequired name="name">
                                    <Label className="text-white">Full Name</Label>
                                    <Input className='bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 rounded-full focus:border-[#10ac84]/70' placeholder="Enter your name" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="email" type="email">
                                    <Label className="text-white">Email</Label>
                                    <Input className='bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 rounded-full focus:border-[#10ac84]/70' placeholder="Enter your email" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                <TextField name="imageUrl" type="url">
                                    <Label className="text-white">ImageUrl</Label>
                                    <Input className='bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 rounded-full focus:border-[#10ac84]/70' placeholder="Give your image address for profile" variant="secondary" />
                                </TextField>

                                <TextField
                                    isRequired
                                    minLength={6}
                                    name="password"
                                    type={isVisible ? "text" : "password"}
                                    validate={(value) => {
                                        if (value.length < 6) {
                                            return "Password must be at least 6 characters";
                                        }
                                        if (!/[A-Z]/.test(value)) {
                                            return "Password must contain at least one uppercase letter";
                                        }
                                        if (!/[a-z]/.test(value)) {
                                            return "Password must contain at least one lowercase letter";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label className="text-white">Password</Label>
                                    <InputGroup className='bg-[#2a3546] text-slate-300 border-2 rounded-full focus:border-[#10ac84]/70!'>
                                        <InputGroup.Input
                                            className='w-full placeholder:text-white/30'
                                            type={isVisible ? "text" : "password"}
                                            placeholder="Enter your password"
                                        />
                                        <InputGroup.Suffix className="pe-0">
                                            <Button
                                                isIconOnly
                                                aria-label={isVisible ? "Hide password" : "Show password"}
                                                size="sm"
                                                className=''
                                                onPress={() => setIsVisible(!isVisible)}
                                            >
                                                {isVisible ? <Eye className="size-4" /> : <FaEyeSlash className="size-4" />}
                                            </Button>
                                        </InputGroup.Suffix>
                                    </InputGroup>
                                    <Description>
                                        Must be at least 6 characters with 1 uppercase and 1 lowercase letter
                                    </Description>
                                    <FieldError />
                                </TextField>
                            </Fieldset.Group>

                            <p className="text-center text-slate-400 text-sm font-medium">By signing up, you agree to our terms of use.</p>

                            <Fieldset.Actions>
                                <Button
                                    type="submit"
                                    className="text-base font-medium py-2 h-auto rounded-xl border-none w-full bg-[#00786f] hover:bg-[#00786f]/70 text-white"
                                >
                                    Create account
                                </Button>
                            </Fieldset.Actions>
                        </Fieldset>
                    </Form>

                    <div className="divider text-slate-500 my-8">Or continue with</div>

                    <SignInWithGoogle content={'Sign Up with Google'} />

                    <div className="mt-5 flex justify-center items-center gap-2 text-base">
                        <p className="font-medium text-slate-400">
                            Already have an account?
                        </p>
                        <Link href={'/login'} className="text-[#0abde3] font-semibold">
                            Sign In
                        </Link>
                    </div>
                </Surface>
            </div>
        </div>
    );
};

export default RegisterPage;