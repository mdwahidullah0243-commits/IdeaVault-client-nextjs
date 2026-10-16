"use client";

import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme, theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const activeTheme = theme === "system" ? resolvedTheme : theme;

    return (
        <div className="flex items-center gap-2 border bg-transparent border-slate-600 rounded-full">
            <Button
                onPress={() => setTheme("light")}
                className={`${activeTheme === 'light' ? 'bg-white/80 text-black' : 'bg-transparent'}`}
            >
                <Sun />
            </Button>

            <Button
                onPress={() => setTheme("dark")}
                className={`${activeTheme === 'dark' ? 'bg-white/80 text-black' : 'bg-transparent text-white'}`}
            >
                <Moon />
            </Button>
        </div>
    );
};

export default ThemeSwitcher;