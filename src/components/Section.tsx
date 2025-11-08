"use client";

import {cn} from "@/lib/cn";
import {setUrlHash} from "@/lib/set-url-hash";

import {CopyButton} from "./CopyButton";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({id, title, children}: SectionProps) {
  return (
    <section id={id} className={cn("space-y-3 p-3")}>
      <header className={cn("mb-2.5 flex items-center gap-1.5")}>
        <h2 className={cn("font-semibold")}>{title}</h2>
        <CopyButton getTextToCopy={() => setUrlHash(id)} />
      </header>
      {children}
    </section>
  );
}
