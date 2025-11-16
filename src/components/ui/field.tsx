"use client";

import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";
import {useMemo} from "react";

import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";
import {cn} from "@/lib/cn";

export function FieldSet(props: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      data-slot="field-set"
      {...props}
      className={cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3",
        "has-[>[data-slot=radio-group]]:gap-3",
        props.className,
      )}
    />
  );
}

export function FieldLegend({
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & {variant?: "legend" | "label"}) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      {...props}
      className={cn(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        props.className,
      )}
    />
  );
}

export function FieldGroup(props: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-group"
      {...props}
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7",
        "*:data-[slot=field-group]:gap-4",
        "data-[slot=checkbox-group]:gap-3",
        props.className,
      )}
    />
  );
}

const fieldVariants = cva(
  ["group/field flex w-full gap-3", "data-[invalid=true]:text-destructive"],
  {
    variants: {
      orientation: {
        vertical: ["flex-col", "*:w-full", "[&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "*:data-[slot=field-label]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col",
          "*:w-full",
          "[&>.sr-only]:w-auto",
          "@md/field-group:*:data-[slot=field-label]:flex-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  },
);

export function Field({
  orientation = "vertical",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      {...props}
      className={cn(
        fieldVariants({
          orientation,
        }),
        props.className,
      )}
    />
  );
}

export function FieldBackground({
  asChild,
  ...props
}: React.ComponentProps<"div"> & {asChild?: boolean}) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      {...props}
      className={cn(
        "bg-muted flex min-h-9 justify-between overflow-x-scroll rounded-lg p-1",
        props.className,
      )}
    />
  );
}

export function FieldContent(props: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-content"
      {...props}
      className={cn(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        props.className,
      )}
    />
  );
}

export function FieldLabel(props: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      {...props}
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug",
        "*:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary",
        "dark:has-data-[state=checked]:bg-primary/10",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border",
        "group-data-[disabled=true]/field:opacity-50",
        props.className,
      )}
    />
  );
}

export function FieldTitle(props: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="field-label"
      {...props}
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        "group-data-[disabled=true]/field:opacity-50",
        props.className,
      )}
    />
  );
}

export function FieldDescription(props: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-description"
      {...props}
      className={cn(
        "text-muted-foreground text-sm leading-normal font-normal",
        "last:mt-0 nth-last-2:-mt-1",
        "[[data-variant=legend]+&]:-mt-1.5",
        "group-has-data-[orientation=horizontal]/field:text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        props.className,
      )}
    />
  );
}

export function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  children?: React.ReactNode;
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "relative -my-2 h-5 text-sm",
        "group-data-[variant=outline]/field-group:-mb-2",
        className,
      )}
      {...props}>
      <Separator className={cn("absolute inset-0 top-1/2")} />
      {children && (
        <span
          data-slot="field-separator-content"
          className={cn(
            "bg-background text-muted-foreground relative mx-auto block w-fit px-2",
          )}>
          {children}
        </span>
      )}
    </div>
  );
}

export function FieldError({
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{message?: string} | undefined>;
}) {
  const content = useMemo(() => {
    if (children) {
      return children;
    }
    if (!errors?.length) {
      return null;
    }
    const uniqueErrors = [
      ...new Map(errors.map((error) => [error?.message, error])).values(),
    ];
    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }
    return (
      <ul className={cn("ml-4 flex list-disc flex-col gap-1")}>
        {uniqueErrors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>,
        )}
      </ul>
    );
  }, [children, errors]);
  if (!content) {
    return null;
  }
  return (
    <div data-slot="field-error" role="alert" {...props}>
      className={cn("text-destructive text-sm font-normal", props.className)}
      {content}
    </div>
  );
}
