"use client";

import { Button } from "@heroui/react";
import { MonitorCog, Moon, Sun } from "lucide-react";
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
        <div className="flex items-center gap-2 border bg-[#060b10] border-slate-600 rounded-full p-0.5">
            <Button
                variant={activeTheme === "light" ? "primary" : "secondary"}
                onPress={() => setTheme("light")}
            >
                <Sun />
            </Button>

            <Button
                variant={activeTheme === "dark" ? "primary" : "secondary"}
                onPress={() => setTheme("dark")}
            >
                <Moon />
            </Button>
        </div>
    );
};

export default ThemeSwitcher;