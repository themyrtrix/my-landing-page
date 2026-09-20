"use client";
import { Menu, Moon, Sun, ChevronDown, UserRound } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "./ui";

export function Header({ onMenu }: { onMenu: () => void }) {
  const { theme, setTheme } = useTheme(); const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-[color:var(--canvas)]/80 backdrop-blur-xl"><div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 lg:px-8">
    <a href="#" className="text-[15px] font-semibold tracking-[-.02em]">lumina<span className="text-accent">.</span></a>
    <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-[13px] text-muted md:flex"><a className="text-ink" href="#home">Home</a><a className="transition hover:text-ink" href="#about">About</a><a className="transition hover:text-ink" href="#works">Works</a></nav>
    <div className="flex items-center gap-2"><button aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-full p-2 text-muted transition hover:bg-black/5 hover:text-ink dark:hover:bg-white/10">{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</button><div className="relative hidden sm:block"><button onClick={() => setOpen(!open)} className="flex items-center gap-2 rounded-full p-1.5 pr-2 text-sm transition hover:bg-black/[.05] dark:hover:bg-white/[.08]"><span className="grid size-7 place-items-center rounded-full bg-gradient-to-br from-[#ffc6a5] to-[#dfb9ff] text-[10px] font-semibold">SC</span><span className="hidden lg:block">Sophie Chen</span><ChevronDown size={14} className="text-muted" /></button>{open && <div className="absolute right-0 mt-2 w-44 rounded-2xl border hairline bg-[color:var(--canvas)] p-1.5 shadow-soft"><button className="w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-black/5 dark:hover:bg-white/10">Profile</button><button className="w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-black/5 dark:hover:bg-white/10">Preferences</button><button className="w-full rounded-xl px-3 py-2 text-left text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30">Sign out</button></div>}</div><button onClick={onMenu} aria-label="Open menu" className="rounded-full p-2 text-muted hover:bg-black/5 md:hidden"><Menu size={20} /></button></div>
  </div></header>;
}
