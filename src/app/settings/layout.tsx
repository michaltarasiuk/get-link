"use client";

import {usePathname} from "next/navigation";

import {cn} from "@/lib/cn";
import {Routes} from "@/lib/routes";

import {SettingsSubNavigation} from "./_components/SettingsSubNavigation";

export default function SettingsLayout({children}: LayoutProps<"/settings">) {
  const pathname = usePathname();
  return (
    <div className={cn("flex flex-col-reverse", "md:flex-row")}>
      <aside
        className={cn("md:block md:shrink-0 md:basis-75 md:p-3", {
          hidden: pathname !== Routes.settings,
        })}>
        <SettingsSubNavigation />
      </aside>
      <main className={cn("md:basis-xl md:p-3")}>{children}</main>
    </div>
  );
}
