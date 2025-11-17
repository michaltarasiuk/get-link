import {ProcessingQueue} from "@/components/ProcessingQueue";
import {Sidebar} from "@/components/Sidebar";
import {cn} from "@/lib/cn";

export default function ShellLayout({children}: LayoutProps<"/[locale]">) {
  return (
    <div className={cn("flex min-h-dvh flex-col-reverse", "md:flex-row")}>
      <Sidebar />
      <div className={cn("flex flex-1 flex-col")}>{children}</div>
      <ProcessingQueue />
    </div>
  );
}
