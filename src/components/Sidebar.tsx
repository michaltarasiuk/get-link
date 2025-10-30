"use client";

import {DownloadIcon, SettingsIcon} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/cn";
import {Routes} from "@/lib/routes";

import {Button} from "./ui/button";

export function Sidebar() {
  return (
    <nav
      className={cn(
        "bg-sidebar relative",
        "before:bg-sidebar before:block before:h-4",
        "after:bg-background after:absolute after:top-0 after:h-4 after:w-full after:rounded-b-4xl",
        "md:border-sidebar-border md:border-e md:before:hidden md:after:hidden",
      )}>
      <ul
        className={cn("flex gap-1 px-2 py-1.5", "md:flex-col md:p-1 md:py-2")}>
        <li>
          <SidebarLink href={Routes.save}>
            <DownloadIcon />
            save
          </SidebarLink>
        </li>
        <li>
          <SidebarLink href={Routes.settings}>
            <SettingsIcon />
            settings
          </SidebarLink>
        </li>
      </ul>
    </nav>
  );
}

function SidebarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Button
      variant={href === pathname ? "secondary" : "ghost"}
      className={cn("flex h-16 w-20 flex-col")}
      asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
