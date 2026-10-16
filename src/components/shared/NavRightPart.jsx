'use client';

import Link from "next/link";
import ProfileManagement from "./ProfileManagement";
import { useState } from "react";
import DropdownNavItems from "./DropdownNavItems";

const NavRightPart = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            {
                isLoggedIn
                    ?
                    < ProfileManagement setIsLoggedIn={setIsLoggedIn} />
                    :
                    <>
                        <DropdownNavItems isLoggedIn={isLoggedIn} />

                        <div className="max-xl:hidden flex gap-2">
                            <Link href={'/login'}>
                                <button onClick={() => setIsLoggedIn(true)} className="hover:border-[#6C63FF] hover:text-[#6C63FF] bg-transparent text-[#9ca3b8] border border-[#ffffff1f] rounded-[10px] py-2.5 px-5.5 text-base font-medium cursor-pointer transition-all duration-200">
                                    Log in
                                </button>
                            </Link>

                            <Link href={'/register'}>
                                <button className="hover:-translate-y-0.5 hover:shadow-[0px_8px_24px] hover:shadow-[#6c63ff66] bg-linear-135 from-[#6C63FF] to-[#a855f7] text-white border-none rounded-[10px] py-2.5 px-5.5 text-base font-semibold cursor-pointer transition-all duration-200 tracking-[0.02em]">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </>
            }
        </>
    );
};

export default NavRightPart;