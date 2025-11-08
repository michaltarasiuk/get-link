import {ChevronsUpDown} from "lucide-react";
import * as React from "react";

import {cn} from "@/lib/cn";

export function NativeSelect(props: React.ComponentProps<"select">) {
  return (
    <div
      data-slot="native-select-wrapper"
      className={cn(
        "relative flex w-20 justify-end rounded-md p-1",
        "has-[select:disabled]:opacity-50",
        "has-focus-visible:border-ring has-focus-visible:ring-ring/50 has-focus-visible:ring-[3px]",
      )}>
      <select
        data-slot="native-select"
        {...props}
        className={cn(
          "absolute inset-0 start-1 appearance-none text-sm outline-none",
          "placeholder:text-muted-foreground",
          "selection:text-primary-foreground",
          "disabled:pointer-events-none disabled:cursor-not-allowed",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          props.className,
        )}
      />
      <ChevronsUpDown
        data-slot="native-select-icon"
        aria-hidden="true"
        className={cn("text-muted-foreground size-4 opacity-50")}
      />
    </div>
  );
}

export function NativeSelectOption(props: React.ComponentProps<"option">) {
  return <option data-slot="native-select-option" {...props} />;
}

export function NativeSelectOptGroup(props: React.ComponentProps<"optgroup">) {
  return <optgroup data-slot="native-select-optgroup" {...props} />;
}
