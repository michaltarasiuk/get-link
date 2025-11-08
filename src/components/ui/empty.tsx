import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "@/lib/cn";

export function Empty(props: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty"
      {...props}
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance",
        "md:p-12",
        props.className,
      )}
    />
  );
}

export function EmptyHeader(props: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-header"
      {...props}
      className={cn(
        "flex max-w-sm flex-col items-center gap-2 text-center",
        props.className,
      )}
    />
  );
}

const emptyMediaVariants = cva(
  [
    "flex shrink-0 items-center justify-center mb-2",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: [
          "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg",
          "[&_svg:not([class*='size-'])]:size-6",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export function EmptyMedia({
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      {...props}
      className={cn(
        emptyMediaVariants({
          variant,
        }),
        props.className,
      )}
    />
  );
}

export function EmptyTitle(props: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-title"
      {...props}
      className={cn("text-lg font-medium tracking-tight", props.className)}
    />
  );
}

export function EmptyDescription(props: React.ComponentProps<"p">) {
  return (
    <div
      data-slot="empty-description"
      {...props}
      className={cn(
        "text-muted-foreground text-sm/relaxed",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        props.className,
      )}
    />
  );
}

export function EmptyContent(props: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="empty-content"
      {...props}
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        props.className,
      )}
    />
  );
}
