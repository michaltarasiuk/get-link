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
          className={cn("fixed end-2 top-2 rounded-full shadow-lg")}>
          <ArrowDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent />
    </Popover>
  );
}
