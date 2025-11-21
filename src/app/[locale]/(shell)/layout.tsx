"use client";

import {ProcessingQueue} from "@/components/ProcessingQueue";
import {Sidebar} from "@/components/Sidebar";
import {useIsServer} from "@/hooks/use-is-server";
import {cn} from "@/lib/cn";

export default function ShellLayout({children}: LayoutProps<"/[locale]">) {
  const isServer = useIsServer();
  return (
    <div
      className={cn(
        "flex min-h-dvh flex-col-reverse",
        "md:flex-row",
        isServer
          ? "opacity-0"
          : "opacity-100 transition-opacity duration-200 ease-out",
      )}>
      <Sidebar />
      <div className={cn("flex flex-1 flex-col")}>{children}</div>
      <ProcessingQueue />
    </div>
  );
}
