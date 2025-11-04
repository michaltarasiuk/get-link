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
        "sm:border-sidebar-border sm:border-e sm:before:hidden sm:after:hidden",
      )}>
      <ul
        className={cn("flex gap-1 px-2 py-1.5", "sm:flex-col sm:p-1 sm:py-2")}>
        <li>
          <SidebarLink href={Routes.save} icon={DownloadIcon}>
            save
          </SidebarLink>
        </li>
        <li>
          <SidebarLink href={Routes.settings.root} icon={SettingsIcon}>
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

function SidebarLink({icon: Icon, children, ...props}: SidebarLinkProps) {
  const pathname = usePathname();
  function isActive() {
    return typeof props.href === "string" && pathname.startsWith(props.href);
  }
  return (
    <Button
      variant={isActive() ? "secondary" : "ghost"}
      className={cn("flex h-16 w-20 flex-col")}
      asChild>
      <Link {...props}>
        <Icon />
        {children}
      </Link>
    </Button>
  );
}
