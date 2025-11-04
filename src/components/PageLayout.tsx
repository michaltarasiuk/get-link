import {ArrowLeftIcon} from "lucide-react";
import Link from "next/link";

import {cn} from "@/lib/cn";
import {isDefined} from "@/lib/is-defined";

import {Button} from "./ui/button";

interface PageLayoutProps extends React.ComponentProps<typeof Header> {
  children: React.ReactNode;
}

export function PageLayout({children, ...props}: PageLayoutProps) {
  return (
    <div className={cn("pt-12", "md:pt-0")}>
      <Header {...props} />
      {children}
    </div>
  );
}

function Header({title, backTo}: {title: string; backTo?: string}) {
  return (
    <header
      className={cn(
        "bg-background fixed top-0 flex h-12 w-full items-center justify-center",
        "md:hidden",
      )}>
      {isDefined(backTo) && (
        <Button
          variant="ghost"
          size="icon-sm"
          className={cn("absolute start-1.5")}
          asChild>
          <Link href={backTo}>
            <ArrowLeftIcon className={cn("size-5")} />
          </Link>
        </Button>
      )}
      <h1 className={cn("text-lg font-semibold tracking-wide")}>{title}</h1>
    </header>
  );
}
