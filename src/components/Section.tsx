import {cn} from "@/lib/cn";

import {CopyButton} from "./CopyButton";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({id, title, children}: SectionProps) {
  return (
    <section id={id} className={cn("space-y-2.5 p-3")}>
      <div className={cn("flex items-center gap-1.5")}>
        <h2 className={cn("font-semibold")}>{title}</h2>
        <CopyButton />
      </div>
      {children}
    </section>
  );
}
