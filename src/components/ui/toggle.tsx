"use client";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "@/lib/cn";

export const toggleVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium outline-none transition-[color,box-shadow] whitespace-nowrap",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
    "hover:bg-muted hover:text-muted-foreground",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: [
          "border border-input bg-transparent shadow-xs",
          "hover:bg-accent hover:text-accent-foreground",
        ],
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Toggle({
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      {...props}
      className={cn(
        toggleVariants({
          variant,
          size,
        }),
        props.className,
      )}
    />
  );
}
