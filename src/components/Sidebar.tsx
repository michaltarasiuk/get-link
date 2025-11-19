"use client";

import {ChevronsRightIcon, DownloadIcon, SettingsIcon} from "lucide-react";
import {useExtracted} from "next-intl";

import {useIsMobile} from "@/hooks/use-is-mobile";
import {Link, usePathname} from "@/i18n/navigation";
import {cn} from "@/lib/cn";
import {isSaveRoute, isSettingsRoute, Routes} from "@/lib/routes";

import {Button} from "./ui/button";

export function Sidebar() {
  return (
    <aside
      className={cn(
        "bg-sidebar fixed bottom-0 z-50 w-full space-y-1 px-3 py-2",
        "md:border-sidebar-border md:static md:w-auto md:border-e md:px-1",
      )}>
      <SidebarLogo />
      <SidebarLinks />
    </aside>
  );
}

function SidebarLogo() {
  return (
    <ChevronsRightIcon
      aria-hidden
      className={cn("mx-auto hidden size-10", "md:block")}
    />
  );
}

function SidebarLinks() {
  const isMobile = useIsMobile();
  const t = useExtracted();
  const settingsRoute = isMobile
    ? Routes.settings.root
    : Routes.settings.appearance;
  return (
    <nav className={cn("flex gap-1", "md:flex-col")}>
      <SidebarLink href={Routes.save} isActive={isSaveRoute}>
        <DownloadIcon aria-hidden />
        {t("save")}
      </SidebarLink>
      <SidebarLink href={settingsRoute} isActive={isSettingsRoute}>
        <SettingsIcon aria-hidden />
        {t("settings")}
      </SidebarLink>
    </nav>
  );
}

interface SidebarLinkProps {
  href: string;
  isActive: (pathname: string) => boolean;
  children: React.ReactNode;
}

function SidebarLink({href, isActive, children}: SidebarLinkProps) {
  const pathname = usePathname();
  const active = isActive(pathname);
  return (
    <Button
      variant={active ? "secondary" : "ghost"}
      className={cn("flex h-16 w-20 flex-col")}
      asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
}
