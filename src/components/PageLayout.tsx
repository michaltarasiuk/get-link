import {cn} from "@/lib/cn";
import {isDefined} from "@/lib/is-defined";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  header?: React.ReactNode;
}

export function PageLayout({title, children, header}: PageLayoutProps) {
  return (
    <div className={cn("pt-12", "sm:pt-0")}>
      <Header title={title}>{header}</Header>
      {children}
    </div>
  );
}

interface HeaderProps {
  title: string;
  children: React.ReactNode;
}

function Header({title, children}: HeaderProps) {
  return (
    <header
      className={cn(
        "bg-background fixed top-0 flex h-12 w-full items-center justify-center",
        "sm:hidden",
      )}>
      {isDefined(children) && (
        <div className={cn("absolute start-2")}>{children}</div>
      )}
      <h1 className={cn("text-lg font-semibold tracking-wide")}>{title}</h1>
    </header>
  );
}
