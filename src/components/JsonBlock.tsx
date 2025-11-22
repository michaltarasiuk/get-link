import {cn} from "@/lib/cn";

export function JsonBlock({children}: {children: string}) {
  return (
    <div
      className={cn(
        "bg-muted text-muted-foreground rounded-xl p-3 text-sm font-medium whitespace-pre-wrap",
      )}>
      {children}
    </div>
  );
}
