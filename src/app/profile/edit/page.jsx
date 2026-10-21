import { updateProfile } from "@/lib/actions";
import { auth } from "@/lib/auth";
import { Avatar, Button, FieldError, Fieldset, Form, Input, Label, Surface, TextField } from "@heroui/react";
import { headers } from "next/headers";

export const metadata = {
    title: "Edit Profile",
};

const ProfileEditPage = async () => {
    
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const handleUpdatedProfileAction = async (formData) => {
        'use server';

        const modifiedProfile = Object.fromEntries(formData.entries());
        
        updateProfile(user?.id, modifiedProfile);
    };

    return (
        <main className="w-3/5 mx-auto px-4 py-12 space-y-8">
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#eaaaff]">
                    <span className="bg-linear-135 from-[#6C63FF] to-[#a855f7] text-transparent bg-clip-text">Welcome,</span> Junior Developer
                </h2>

                <p className="text-slate-300 text-sm">
                    Manage your profile information and account settings.
                </p>
            </div>

            <div className="rounded-2xl border border-gray-600 bg-[#1e2939] p-8 shadow-sm">
                <h1 className="text-2xl font-semibold text-gray-300">
                    Profile Settings
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                    Manage your personal information and profile details.
                </p>

                <Surface className="mt-8 bg-[#1e2939]">
                    <Form action={handleUpdatedProfileAction}>
                        {/* Profile Avatar */}
                        <div className="mx-auto mb-10 flex h-50 w-50 items-center justify-center rounded-full bg-gray-600">
                            <Avatar className="size-full rounded-full">
                                <Avatar.Image alt={user?.name} src={user?.image} />
                                <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                            </Avatar>
                        </div>

                        <Fieldset className="w-full">
                            <Fieldset.Group>
                                <TextField isRequired name="name" defaultValue={user?.name}>
                                    <Label className="text-white">Full Name</Label>
                                    <Input className='bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 rounded-full focus:border-[#10ac84]/70' placeholder="Enter your name" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="email" type="email" defaultValue={user?.email}>
                                    <Label className="text-white">Email</Label>
                                    <Input disabled className='bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 rounded-full focus:border-[#10ac84]/70' placeholder="Enter your email" variant="secondary" />
                                    <span className="px-1 text-xs text-error">Email cannot be changed directly.</span>
                                </TextField>

                                <TextField name="image" type="url" defaultValue={user?.image}>
                                    <Label className="text-white">ImageUrl</Label>
                                    <Input className='bg-[#2a3546] text-slate-300 placeholder:text-white/30 border-2 rounded-full focus:border-[#10ac84]/70' placeholder="Give your image address for profile" variant="secondary" />
                                </TextField>
                            </Fieldset.Group>

                            <Fieldset.Actions>
                                <Button
                                    type="submit"
                                    className="text-base font-medium py-2 h-auto rounded-xl border-none w-full bg-[#00786f] hover:bg-[#00786f]/70 text-white"
                                >
                                    Save Changes
                                </Button>
                            </Fieldset.Actions>
                        </Fieldset>
                    </Form>
                </Surface>
            </div>
        </main>
    );
};

export default ProfileEditPage;