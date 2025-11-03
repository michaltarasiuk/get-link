import {
  ClipboardPasteIcon,
  MusicIcon,
  SparklesIcon,
  VolumeOffIcon,
} from "lucide-react";

import {cn} from "@/lib/cn";

import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {ToggleGroup, ToggleGroupItem} from "./ui/toggle-group";

export function Save() {
  return (
    <div className={cn("w-full max-w-2xl space-y-1.5 px-2")}>
      <Input placeholder="paste the link here" className={cn("h-10")} />
      <div
        className={cn(
          "flex flex-col justify-between gap-y-1.5",
          "sm:flex-row",
        )}>
        <ToggleGroup
          type="single"
          defaultValue="auto"
          variant="outline"
          size="lg"
          className={cn("grid w-full grid-cols-3", "sm:w-auto")}>
          <ToggleGroupItem value="auto">
            <SparklesIcon className={cn("size-4")} />
          </ToggleGroupItem>
          <ToggleGroupItem value="audio">
            <MusicIcon className={cn("size-4")} />
          </ToggleGroupItem>
          <ToggleGroupItem value="mute">
            <VolumeOffIcon className={cn("size-4")} />
          </ToggleGroupItem>
        </ToggleGroup>
        <Button size="lg">
          <ClipboardPasteIcon />
          paste
        </Button>
      </div>
    </div>
  );
}
