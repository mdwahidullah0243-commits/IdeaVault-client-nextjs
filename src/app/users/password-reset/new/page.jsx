import { Button, Form, Input, Label, TextField } from "@heroui/react";

const PasswordResetPage = () => {
    return (
        <div className="w-1/2 mx-auto h-screen mt-15 space-y-10">
            <h2 className="text-3xl font-semibold text-slate-300 text-center">
                Forgot your password?
            </h2>

            <div className="bg-[#1e2939] p-8 rounded-xl border border-slate-600">
                <Form className="space-y-8">
                    <TextField isRequired name="email" type="email" className='space-y-1'>
                        <Label className="text-white">What's your email address?</Label>
                        <Input className='bg-[#2a3546] text-slate-300 py-3 border border-slate-600 placeholder:text-white/30' placeholder="you@example.com" variant="secondary" />
                    </TextField>

                    <Button
                        type="submit"
                        className="text-base font-medium py-2 h-auto rounded-xl border-none w-full bg-[#00786f] hover:bg-[#00786f]/70 text-white"
                    >
                        Send reset link
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default PasswordResetPage;