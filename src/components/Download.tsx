import {ClipboardPaste, Music, Sparkles, VolumeOff} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group";
import {cn} from "@/lib/cn";

export function Download() {
  return (
    <div className={cn("w-full max-w-2xl space-y-1.5")}>
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
            <Sparkles className={cn("size-4")} />
          </ToggleGroupItem>
          <ToggleGroupItem value="audio">
            <Music className={cn("size-4")} />
          </ToggleGroupItem>
          <ToggleGroupItem value="mute">
            <VolumeOff className={cn("size-4")} />
          </ToggleGroupItem>
        </ToggleGroup>
        <Button variant="outline" size="lg">
          <ClipboardPaste /> paste
        </Button>
      </div>
    </div>
  );
}
