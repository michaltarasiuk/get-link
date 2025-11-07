import {cn} from "@/lib/cn";

import {FieldLabel} from "./ui/field";

export function FieldLabelContainer({
  children,
  ...props
}: React.ComponentProps<typeof FieldLabel>) {
  return (
    <FieldLabel
      {...props}
      className={cn(
        props.className,
        "bg-muted flex justify-between rounded-lg p-3",
      )}>
      {children}
    </FieldLabel>
  );
}
