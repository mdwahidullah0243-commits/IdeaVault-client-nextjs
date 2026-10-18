import { Avatar } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

const ProfileManagement = () => {
    const [profileOpen, setProfileOpen] = useState(false);

    return (
        <div className="relative">
            <Avatar
                onClick={() => setProfileOpen((p) => !p)}
                className="only-avatar"
            >
                <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
                <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>

            <div
                onClick={() => setProfileOpen((p) => !p)}
                className={`avatar-box cursor-pointer items-center gap-2 rounded-[10px] border border-white/10 px-2.5 py-1.5 transition-all duration-200 ${profileOpen ? "bg-[#6c63ff1a]" : "bg-transparent"
                    }`}
            >
                <Avatar>
                    <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>

                <div className="text-left">
                    <p className="text-[13px] font-semibold leading-tight text-[#e8eaf0]">Alex Rahim</p>
                    <p className="text-[11px] text-gray-500">Innovator</p>
                </div>

                <ChevronDown size={20} className={`ml-4 transition-all duration-200 ${profileOpen ? 'rotate-180' : ''}`} />
            </div>

            {
                profileOpen && (
                    <ProfileDropdown />
                )
            }
        </div>
    );
};

export default ProfileManagement;