"use client";

import {cva, type VariantProps} from "class-variance-authority";
import {ChevronRightIcon, type LucideIcon} from "lucide-react";
import Link, {type LinkProps} from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/cn";

import {Separator} from "./ui/separator";

export function SubNavigation({children}: {children: React.ReactNode}) {
  return <nav className={cn("sticky top-0 space-y-3 p-3")}>{children}</nav>;
}

export function SubNavigationSection({children}: {children: React.ReactNode}) {
  return (
    <div
      className={cn(
        "bg-muted border-border rounded-lg border",
        "md:border-0 md:bg-transparent",
      )}>
      {children}
    </div>
  );
}

interface SubNavigationTabProps<T>
  extends Pick<LinkProps<T>, "href">,
    VariantProps<typeof iconContainerVariants>,
    VariantProps<typeof iconVariants> {
  icon: LucideIcon;
  children: React.ReactNode;
}

export function SubNavigationTab<T>({
  href,
  color,
  icon: Icon,
  children,
}: SubNavigationTabProps<T>) {
  const pathname = usePathname();
  const active = href === pathname;
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2.5 px-2.5 py-1.5 font-medium transition-colors",
        "md:hover:bg-muted md:rounded-lg md:px-1.5",
        {
          "md:bg-muted": active,
        },
      )}>
      <div
        className={cn(
          iconContainerVariants({
            color,
            active,
          }),
        )}>
        <Icon
          className={cn(
            iconVariants({
              color,
              active,
            }),
          )}
        />
      </div>
      {children}
      <ChevronRightIcon className={cn("ms-auto size-4", "md:hidden")} />
    </Link>
  );
}

export function SubNavigationSeparator() {
  return <Separator className={cn("md:hidden")} />;
}

const iconContainerVariants = cva(
  "border-border flex size-8 items-center justify-center rounded-md border",
  {
    variants: {
      color: {
        blue: null,
        purple: null,
        magenta: null,
        orange: null,
        green: null,
        gray: null,
      },
      active: {
        true: null,
        false: null,
      },
    },
    compoundVariants: [
      {
        color: "blue",
        active: true,
        className: "bg-blue border-blue",
      },
      {
        color: "purple",
        active: true,
        className: "bg-purple border-purple",
      },
      {
        color: "magenta",
        active: true,
        className: "bg-magenta border-magenta",
      },
      {
        color: "orange",
        active: true,
        className: "bg-orange border-orange",
      },
      {
        color: "green",
        active: true,
        className: "bg-green border-green",
      },
      {
        color: "gray",
        active: true,
        className: "bg-gray border-gray",
      },
    ],
  },
);

const iconVariants = cva("size-4", {
  variants: {
    color: {
      blue: "text-blue",
      purple: "text-purple",
      magenta: "text-magenta",
      orange: "text-orange",
      green: "text-green",
      gray: "text-gray",
    },
    active: {
      true: "text-white",
      false: null,
    },
  },
});
