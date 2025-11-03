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
    return pathname.startsWith(href) ? "secondary" : "ghost";
  }
  return (
    <nav
      className={cn(
        "bg-sidebar relative",
        "before:bg-sidebar before:block before:h-4",
        "after:bg-background after:absolute after:top-0 after:h-4 after:w-full after:rounded-b-4xl",
        "sm:border-sidebar-border sm:border-e sm:before:hidden sm:after:hidden",
      )}>
      <ul
        className={cn("flex gap-1 px-2 py-1.5", "sm:flex-col sm:p-1 sm:py-2")}>
        <li>
          <Button
            variant={getButtonVariant(Routes.save)}
            className={cn("flex h-16 w-20 flex-col")}
            asChild>
            <Link href={Routes.save}>
              <DownloadIcon />
              save
            </Link>
          </Button>
        </li>
        <li>
          <Button
            variant={getButtonVariant(Routes.settings.root)}
            className={cn("flex h-16 w-20 flex-col")}
            asChild>
            <Link href={Routes.settings.root}>
              <SettingsIcon />
              settings
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
