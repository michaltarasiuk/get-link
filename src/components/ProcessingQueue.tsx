"use client";

import {ArrowDownIcon} from "lucide-react";
import {useExtracted} from "next-intl";

import {cn} from "@/lib/cn";

import {Button} from "./ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "./ui/popover";

export function ProcessingQueue() {
  const t = useExtracted();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          aria-label={t("Open processing queue")}
          variant="outline"
          size="icon"
          className={cn(
            "fixed end-3 top-1 z-50 size-10 rounded-full shadow-lg",
          )}>
          <div
            className={cn(
              "bg-muted relative flex size-7 items-center justify-center rounded-full",
            )}>
            <ArrowDownIcon aria-hidden className={cn("size-5")} />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent />
    </Popover>
  );
}
