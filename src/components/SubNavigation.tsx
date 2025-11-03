"use client";

import {cva, type VariantProps} from "class-variance-authority";
import {ChevronRightIcon, type LucideIcon} from "lucide-react";
import Link, {type LinkProps} from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/cn";

import {Separator} from "./ui/separator";

export function SubNavigation({children}: {children: React.ReactNode}) {
  return <nav className={cn("space-y-3 p-2", "sm:p-6.5")}>{children}</nav>;
}

export function SubNavigationSection({children}: {children: React.ReactNode}) {
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

export function SubNavigationTab({
  href,
  color,
  icon: Icon,
  children,
}: SubNavigationTabProps) {
  const active = href === usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 p-2 font-medium transition-colors",
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

interface SubNavigationTabProps
  extends LinkProps,
    VariantProps<typeof iconContainerVariants>,
    VariantProps<typeof iconVariants> {
  icon: LucideIcon;
  children: React.ReactNode;
}

const iconContainerVariants = cva(
  "border-border flex size-8 items-center justify-center rounded-md border",
  {
    variants: {
      color: {
        blue: null,
        purple: null,
        red: null,
        yellow: null,
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
        className: "bg-blue-500 border-blue-500",
      },
      {
        color: "purple",
        active: true,
        className: "bg-purple-500 border-purple-500",
      },
      {
        color: "red",
        active: true,
        className: "bg-red-500 border-red-500",
      },
      {
        color: "yellow",
        active: true,
        className: "bg-yellow-500 border-yellow-500",
      },
      {
        color: "green",
        active: true,
        className: "bg-green-500 border-green-500",
      },
      {
        color: "gray",
        active: true,
        className: "bg-gray-500 border-gray-500",
      },
    ],
  },
);

const iconVariants = cva("size-4", {
  variants: {
    color: {
      blue: "text-blue-500",
      purple: "text-purple-500",
      red: "text-red-500",
      yellow: "text-yellow-500",
      green: "text-green-500",
      gray: "text-gray-500",
    },
    active: {
      true: "text-white",
      false: null,
    },
  },
});
