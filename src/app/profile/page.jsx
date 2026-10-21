import { auth } from "@/lib/auth";
import { Avatar } from "@heroui/react";
import { headers } from "next/headers";

export const metadata = {
    title: "Profile",
};

const ProfilePage = async () => {
    
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    return (
        <main className="w-3/5 mx-auto px-4 py-12 space-y-8">
            <h2 className="text-2xl font-semibold text-[#eaaaff]">
                <span className="bg-linear-135 from-[#6C63FF] to-[#a855f7] text-transparent bg-clip-text">Welcome,</span> Junior Developer
            </h2>

            <div className="rounded-2xl border border-gray-600 bg-[#1e2939] p-8 shadow-sm">
                <h1 className="text-2xl font-semibold text-slate-200">
                    My Profile
                </h1>

                <form className="mt-8 space-y-6">
                    {/* Profile Avatar */}
                    <div className="mx-auto flex h-50 w-50 items-center justify-center overflow-hidden rounded-full bg-gray-100">
                        <Avatar className="size-full mx-auto">
                            <Avatar.Image alt={user?.name} src={user?.image} />
                            <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                        </Avatar>
                    </div>

                    {/* Full Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-gray-300"
                        >
                            Full Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            value={user?.name}
                            className="w-full rounded-lg border focus:border-2 border-gray-600 px-4 py-3 outline-none focus:border-[#00786f]"
                        />
                    </div>

                    {/* Email Address */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-300"
                        >
                            Email Address
                        </label>

                        <input
                            id="email"
                            type="email"
                            value={user?.email}
                            className="w-full rounded-lg border focus:border-2 border-gray-600 px-4 py-3 outline-none focus:border-[#00786f]"
                        />
                    </div>
                </form>
            </div>
        </main>
    );
};

export default ProfilePage;