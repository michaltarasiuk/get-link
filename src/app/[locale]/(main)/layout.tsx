import {ProcessingQueue} from "@/components/ProcessingQueue";
import {Sidebar} from "@/components/Sidebar";
import {cn} from "@/lib/cn";

export default function MainLayout({children}: LayoutProps<"/[locale]">) {
  return (
    <div className={cn("flex min-h-dvh flex-col", "md:flex-row-reverse")}>
      <div className={cn("flex flex-1 flex-col")}>{children}</div>
      <Sidebar />
      <ProcessingQueue />
    </div>
  );
}
