"use client";

import {useHash} from "@/hooks/use-hash";
import {cn} from "@/lib/cn";
import {prependHash} from "@/lib/routes";

import {CopyButton} from "./CopyButton";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({id, title, children}: SectionProps) {
  const hash = useHash();
  return (
    <section
      id={id}
      className={cn("space-y-3 rounded-lg p-3", {
        "animate-highlight": hash === prependHash(id),
      })}>
      <header className={cn("mb-2.5 flex items-center gap-1.5")}>
        <h2 className={cn("font-semibold")}>{title}</h2>
        <CopyButton
          onCopy={() => {
            const url = new URL(String(location));
            url.hash = prependHash(id);
            return String(url);
          }}
        />
      </header>
      {children}
    </section>
  );
}
