import {LinkIcon} from "lucide-react";

import {Button} from "./ui/button";

export function CopyButton() {
  return (
    <Button variant="ghost" size="icon-sm">
      <LinkIcon />
    </Button>
  );
}
