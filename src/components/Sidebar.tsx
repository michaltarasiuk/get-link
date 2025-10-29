"use client";

import {Download, Settings} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/cn";
import {Routes} from "@/lib/routes";

import {Button} from "./ui/button";

export function Sidebar() {
  const pathname = usePathname();
  return (
    <nav
      className={cn(
        "bg-sidebar flex gap-1 px-2 py-1",
        "md:border-sidebar-border md:flex-col md:border-e md:p-1 md:py-2",
      )}>
      <Button
        variant={Routes.save === pathname ? "secondary" : "ghost"}
        className={cn("flex h-16 w-20 flex-col")}
        asChild>
        <Link href={Routes.save}>
          <Download />
          save
        </Link>
      </Button>
      <Button
        variant={Routes.settings === pathname ? "secondary" : "ghost"}
        className={cn("flex h-16 w-20 flex-col")}
        asChild>
        <Link href={Routes.settings}>
          <Settings />
          settings
        </Link>
      </Button>
    </nav>
  );
}
