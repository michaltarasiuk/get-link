"use client";

import {DownloadIcon, SettingsIcon} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/cn";
import {Routes} from "@/lib/routes";

import {Button} from "./ui/button";

export function Sidebar() {
  const pathname = usePathname();
  function getButtonVariant(href: string) {
    return href === pathname ? "secondary" : "ghost";
  }
  return (
    <nav
      className={cn(
        "bg-sidebar relative flex gap-1 px-2 py-1.5",
        "before:bg-sidebar before:absolute before:start-0 before:top-0 before:h-4 before:w-full before:-translate-y-full",
        "after:bg-background after:absolute after:start-0 after:top-0 after:h-4 after:w-full after:-translate-y-full after:rounded-b-4xl",
        "md:border-sidebar-border md:flex-col md:border-e md:p-1 md:py-2 md:before:hidden md:after:hidden",
      )}>
      <Button
        variant={getButtonVariant(Routes.save)}
        className={cn("flex h-16 w-20 flex-col")}
        asChild>
        <Link href={Routes.save}>
          <DownloadIcon />
          save
        </Link>
      </Button>
      <Button
        variant={getButtonVariant(Routes.settings)}
        className={cn("flex h-16 w-20 flex-col")}
        asChild>
        <Link href={Routes.settings}>
          <SettingsIcon />
          settings
        </Link>
      </Button>
    </nav>
  );
}
