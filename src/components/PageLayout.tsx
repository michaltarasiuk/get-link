import {ArrowLeftIcon} from "lucide-react";

import {Link} from "@/i18n/navigation";
import {cn} from "@/lib/cn";
import {isDefined} from "@/lib/is-defined";

import {Button} from "./ui/button";

export function PageLayout({
  children,
  ...props
}: React.ComponentProps<typeof Header> & {children: React.ReactNode}) {
  return (
    <div
      className={cn("pt-12", "md:mb-0 md:pt-0", {
        "mb-20": isDefined(children),
      })}>
      <Header {...props} />
      {children}
    </div>
  );
}

function Header({title, backTo}: {title: string; backTo?: string}) {
  return (
    <header
      className={cn(
        "bg-background fixed top-0 z-50 flex h-12 w-full items-center justify-center",
        "md:hidden",
      )}>
      {isDefined(backTo) && <BackLink href={backTo} />}
      <h1 className={cn("text-lg font-semibold tracking-wide")}>{title}</h1>
    </header>
  );
}

function BackLink({href}: {href: string}) {
  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className={cn("absolute start-1.5")}
      asChild>
      <Link href={href}>
        <ArrowLeftIcon aria-hidden className={cn("size-5")} />
      </Link>
    </Button>
  );
}
