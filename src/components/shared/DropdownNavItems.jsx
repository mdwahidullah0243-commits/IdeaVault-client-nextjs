"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { navItemsMenu } from "@/lib/frontend-data";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import ThemeSwitcher from "./ThemeSwitcher";
import { authClient } from "@/lib/auth-client";
import MyLoading from "./MyLoading";

const DropdownNavItems = () => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    if (isPending) {
        return <MyLoading />
    }

    return (
        <div className={`${user && 'hidden'} xl:hidden`}>
            <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline" className='cursor-pointer'><RiMenu3Fill /></Button>} />

                <DropdownMenuContent className="xl:hidden w-50 border-white/10 bg-[#1a1d2e]" align="end">
                    <DropdownMenuGroup>
                        <DropdownMenuItem className={'md:hidden hover:bg-transparent!'}>
                            <ThemeSwitcher />
                        </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator className={'md:hidden'} />

                    <DropdownMenuGroup>
                        <DropdownMenuLabel>Pages</DropdownMenuLabel>
                        {
                            navItemsMenu.slice(2, 7).map(item => (
                                <Link key={item.label} href={item.page}>
                                    <DropdownMenuItem className={'cursor-pointer gap-2 hover:bg-[#6c63ff26]!'}>
                                        <span>{item.icon}</span>
                                        <span>{item.label}</span>
                                    </DropdownMenuItem>
                                </Link>
                            ))
                        }
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator />

                    <DropdownMenuGroup>
                        <DropdownMenuLabel>Auth</DropdownMenuLabel>
                        {
                            navItemsMenu.slice(7, 9).map(item => (
                                <Link key={item.label} href={item.page}>
                                    <DropdownMenuItem className={'cursor-pointer gap-2 hover:bg-[#6c63ff26]!'}>
                                        <span>{item.icon}</span>
                                        <span>{item.label}</span>
                                    </DropdownMenuItem>
                                </Link>
                            ))
                        }
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
};

export default DropdownNavItems;