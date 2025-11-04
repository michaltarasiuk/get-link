"use client";

import {cva, type VariantProps} from "class-variance-authority";
import {ChevronRightIcon, type LucideIcon} from "lucide-react";
import Link, {type LinkProps} from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/cn";

import {Separator} from "./ui/separator";

interface SubNavigationProps {
  children: React.ReactNode;
}

export function SubNavigation({children}: SubNavigationProps) {
  return <nav className={cn("space-y-3 p-3")}>{children}</nav>;
}

interface SubNavigationSectionProps {
  children: React.ReactNode;
}

export function SubNavigationSection({children}: SubNavigationSectionProps) {
  return (
    <div
      className={cn(
        "bg-muted border-border rounded-lg border",
        "sm:border-0 sm:bg-transparent",
      )}>
      {children}
    </div>
  );
}

interface SubNavigationTabProps
  extends LinkProps,
    VariantProps<typeof iconContainerVariants>,
    VariantProps<typeof iconVariants> {
  icon: LucideIcon;
  children: React.ReactNode;
}

export function SubNavigationTab({
  href,
  color,
  icon: Icon,
  children,
}: SubNavigationTabProps) {
  const pathname = usePathname();
  const active = href === pathname;
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2.5 px-2.5 py-1.5 font-medium transition-colors",
        "sm:hover:bg-muted sm:rounded-lg sm:p-1.5",
        {
          "sm:bg-muted": active,
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
      <ChevronRightIcon className={cn("ms-auto size-4", "sm:hidden")} />
    </Link>
  );
}

export function SubNavigationSeparator() {
  return <Separator className={cn("sm:hidden")} />;
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
