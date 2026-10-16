import { navItemsMenu } from "@/lib/data";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const ProfileDropdown = ({ setIsLoggedIn }) => {
    return (
        <div className="absolute right-0 top-[calc(100%+8px)] z-100 min-w-60 rounded-[14px] border border-white/10 bg-[#1a1d2e] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <div className="w-fit md:hidden">
                <ThemeSwitcher />
            </div>

            <div className="md:hidden mb-2 mt-3 h-px bg-white/[0.07]" />

            {
                navItemsMenu.slice(0, 7).map((item) => (
                    <Link
                        key={item.label}
                        href={item.page}
                        className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-sm text-[#9ca3b8] transition-all duration-200 hover:bg-[#6c63ff26] hover:text-white"
                    >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                    </Link>
                ))
            }

            <div className="my-1.5 h-px bg-white/[0.07]" />

            <div
                onClick={() => setIsLoggedIn(false)}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-sm font-semibold text-red-500 transition-all duration-200 hover:bg-[#6c63ff26]"
            >
                <span>🚪</span>
                <span>Log out</span>
            </div>
        </div>
    );
};

export default ProfileDropdown;