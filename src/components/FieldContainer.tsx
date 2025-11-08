import {Slot} from "@radix-ui/react-slot";

import {cn} from "@/lib/cn";

import {FieldLabel} from "./ui/field";

interface FieldContainerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function FieldContainer({children, asChild}: FieldContainerProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp className={cn("bg-muted flex h-10 justify-between rounded-lg px-3")}>
      {children}
    </Comp>
  );
}

export function FieldLabelContainer({
  children,
  ...props
}: React.ComponentProps<typeof FieldLabel>) {
  return (
    <FieldContainer asChild>
      <FieldLabel {...props}>{children}</FieldLabel>
    </FieldContainer>
  );
}
