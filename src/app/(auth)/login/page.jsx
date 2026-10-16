'use client';

import SignInWithGoogle from "@/components/auth/SignInWithGoogle";
import {
    Button,
    FieldError,
    Fieldset,
    Form,
    Input,
    Label,
    Surface,
    TextField,
} from "@heroui/react";
import Link from "next/link";

const LoginPage = () => {
    // const handleSubmitOnRegister = async (event) => {
    //     event.preventDefault();

    //     const formData = new FormData(event.currentTarget);
    //     const userData = Object.fromEntries(formData.entries());

    //     const { data, error } = await authClient.signUp.email({
    //         name: userData.name,
    //         email: userData.email,
    //         image: userData.imageUrl,
    //         password: userData.password,
    //         callbackURL: '/destinations'
    //     });

    //     if(data) {
    //         alert(`Your account is successfully created!`);
    //     };

    //     if(error) {
    //         alert(`Your account is faild - ${error.message}`);
    //     };
    // };

    return (
        <div className="max-w-120 sm:max-w-150 mx-auto my-15 space-y-7">
            <div className="text-center space-y-2">
                <h2 className={`text-2xl font-semibold`}>
                    Welcome Back
                </h2>
                <p className="text-sm font-medium text-slate-600">
                    Resume your adventure with IdeaVault
                </p>
            </div>

            <div className="rounded-xl flex items-center justify-center bg-[#1e2939] p-8">
                <Surface className="w-full bg-[#1e2939]">
                    <Form>
                        <Fieldset className="w-full">
                            <Fieldset.Group>
                                <TextField isRequired name="email" type="email">
                                    <Label className="text-white">Email</Label>
                                    <Input className='bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 focus:border-[#10ac84]/70' placeholder="Enter your email" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="password" type="password">
                                    <Label className="text-white">Password</Label>
                                    <Input className='bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 focus:border-[#10ac84]/70' placeholder="Enter your password" variant="secondary" />
                                    <FieldError />
                                </TextField>
                            </Fieldset.Group>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Input type="checkbox" className='accent-[#00786f] size-4 rounded-xl' />
                                    <Label className="text-white">Remember me</Label>
                                </div>

                                <Link href={'/users/password-reset/new'} className="underline hover:no-underline hover:text-cyan-500 text-slate-200 text-sm">
                                    Forgot your password?
                                </Link>
                            </div>

                            <Fieldset.Actions>
                                <Button
                                    type="submit"
                                    className="text-base font-medium py-2 h-auto rounded-xl border-none w-full bg-[#00786f] hover:bg-[#00786f]/70 text-white"
                                >
                                    Sign In
                                </Button>
                            </Fieldset.Actions>
                        </Fieldset>
                    </Form>

                    <div className="divider text-slate-500 my-8">Or continue with</div>

                    <SignInWithGoogle content={'Sign In with Google'} />

                    <div className="mt-5 flex justify-center items-center gap-2 text-base">
                        <p className="font-medium text-slate-400">
                            Don't have an account?
                        </p>
                        <Link href={'/login'} className="text-[#0abde3] font-semibold">
                            Sign Up
                        </Link>
                    </div>
                </Surface>
            </div>
        </div>
    );
};

export default LoginPage;