import { Avatar } from "@heroui/react";

export default function ProfilePage() {

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
                    <div className="flex h-50 w-50 items-center justify-center overflow-hidden rounded-full bg-gray-100">
                        <Avatar className="size-full">
                            <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
                            <Avatar.Fallback>JD</Avatar.Fallback>
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
                            value={'Junior Developer'}
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
                            value={'juniordeveloper0243@gmail.com'}
                            className="w-full rounded-lg border focus:border-2 border-gray-600 px-4 py-3 outline-none focus:border-[#00786f]"
                        />
                    </div>
                </form>
            </div>
        </main>
    );
}
