import { navItems } from "@/lib/data";
import NavItem from "./NavItem";
import NavRightPart from "./NavRightPart";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center sticky top-0 z-50 bg-[#0b0d14d9] backdrop-blur-[20px] border-b border-[#ffffff0f] py-0 px-6 h-16">
            {/* Logo */}
            <div className="flex items-center gap-2.5 cursor-pointer">
                <div className="w-8.5 h-8.5 rounded-[10px] bg-linear-135 from-[#6C63FF] to-[#a855f7] flex items-center justify-center text-lg">
                    💡
                </div>
                <span className="text-2xl font-extrabold tracking-[-0.03em] text-white">
                    Idea
                    <span className="text-[#6C63FF]">
                        Vault
                    </span>
                </span>
            </div>

            {/* NavLinks */}
            <div className="max-xl:hidden flex items-center gap-2">
                {
                    navItems.map((item) => (
                        <NavItem key={item.id} item={item} />
                    ))
                }
            </div>

            <div className="max-md:hidden">
                <ThemeSwitcher />
            </div>

            {/* Right side */}
            <NavRightPart />
        </nav>
    );
};

export default Navbar;