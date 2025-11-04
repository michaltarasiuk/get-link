"use client";

import {DownloadIcon, type LucideIcon, SettingsIcon} from "lucide-react";
import Link, {type LinkProps} from "next/link";
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
        className={cn("flex gap-1 px-3 py-1.5", "md:flex-col md:px-1 md:py-2")}>
        <li>
          <SidebarLink href={Routes.save} icon={DownloadIcon}>
            save
          </SidebarLink>
        </li>
        <li>
          <SidebarLink href={Routes.settings} icon={SettingsIcon}>
            settings
          </SidebarLink>
        </li>
      </ul>
    </nav>
  );
}

interface SidebarLinkProps extends LinkProps {
  icon: LucideIcon;
  children: React.ReactNode;
}

function SidebarLink({href, icon: Icon, children, ...props}: SidebarLinkProps) {
  const pathname = usePathname();
  const active = typeof href === "string" && pathname.startsWith(href);
  return (
    <Button
      variant={active ? "secondary" : "ghost"}
      className={cn("flex h-16 w-20 flex-col")}
      asChild>
      <Link href={href} {...props}>
        <Icon />
        {children}
      </Link>
    </Button>
  );
}
