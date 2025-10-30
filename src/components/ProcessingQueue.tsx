import {ArrowDownIcon} from "lucide-react";

import {cn} from "@/lib/cn";

import {Button} from "./ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "./ui/popover";

export function ProcessingQueue() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn("fixed end-2 top-2 size-10 rounded-full shadow-lg")}>
          <div
            className={cn(
              "bg-muted relative size-7 rounded-full",
              "flex items-center justify-center",
            )}>
            <ArrowDownIcon className={cn("size-5")} />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent />
    </Popover>
  );
}
