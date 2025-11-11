"use client";

import {DownloadIcon, type LucideIcon, SettingsIcon} from "lucide-react";
import {useExtracted} from "next-intl";

import {useIsMobile} from "@/hooks/use-is-mobile";
import {Link, usePathname} from "@/i18n/navigation";
import {cn} from "@/lib/cn";
import {Routes} from "@/lib/routes";
import {isFirstPathSegmentEqual} from "@/lib/routes";

import {Button} from "./ui/button";

export function Sidebar() {
  const isMobile = useIsMobile();
  const t = useExtracted();
  const settingsRoute = isMobile
    ? Routes.settings.root
    : Routes.settings.appearance;
  return (
    <nav
      className={cn(
        "bg-sidebar relative",
        "before:bg-sidebar before:block before:h-4",
        "after:bg-background after:absolute after:top-0 after:h-4 after:w-full after:rounded-b-4xl",
        "md:border-sidebar-border md:border-e md:before:hidden md:after:hidden",
      )}>
      <ul
        className={cn(
          "sticky top-0 flex gap-1 px-3 py-1.5",
          "md:flex-col md:px-1 md:py-2",
        )}>
        <li>
          <SidebarLink href={Routes.save} icon={DownloadIcon}>
            {t("save")}
          </SidebarLink>
        </li>
        <li>
          <SidebarLink href={settingsRoute} icon={SettingsIcon}>
            {t("settings")}
          </SidebarLink>
        </li>
      </ul>
    </nav>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

function SidebarLink({href, icon: Icon, children}: SidebarLinkProps) {
  const pathname = usePathname();
  const active = isFirstPathSegmentEqual(pathname, href);
  return (
    <Button
      variant={active ? "secondary" : "ghost"}
      className={cn("flex h-16 w-20 flex-col")}
      asChild>
      <Link href={href}>
        <Icon />
        {children}
      </Link>
    </Button>
  );
}
