import { Avatar } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import { authClient } from "@/lib/auth-client";
import { RiMenu3Line } from "react-icons/ri";

const ProfileManagement = () => {
    const [profileOpen, setProfileOpen] = useState(false);
    const { data } = authClient.useSession();

    const user = data?.user;

    return (
        <div className="relative">
            <div
                onClick={() => setProfileOpen((p) => !p)}
                className="only-avatar relative"
            >
                <Avatar>
                    <Avatar.Image alt={user?.name} src={user?.image} />
                    <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                </Avatar>

                <RiMenu3Line className="size-5 font-extrabold absolute -right-0.5 bottom-0" />
            </div>

            <div
                onClick={() => setProfileOpen((p) => !p)}
                className={`avatar-box cursor-pointer items-center gap-2 rounded-[10px] border border-white/10 px-2.5 py-1.5 transition-all duration-200 ${profileOpen ? "bg-[#6c63ff1a]" : "bg-transparent"
                    }`}
            >
                <Avatar>
                    <Avatar.Image alt={user?.name} src={user?.image} />
                    <Avatar.Fallback>{user?.name}</Avatar.Fallback>
                </Avatar>

                <div className="text-left">
                    <p className="text-[13px] font-semibold leading-tight text-[#e8eaf0]">
                        {
                            `${user?.name.split(' ').slice(0, 1).join('')} ${user?.name.split(' ').slice(1, 2).map(word => word[0])}.`
                        }
                    </p>
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