import {ArrowLeftIcon} from "lucide-react";
import Link, {type LinkProps} from "next/link";

import {cn} from "@/lib/cn";

import {Button} from "./ui/button";

export function BackLink(props: LinkProps) {
  return (
    <Button variant="ghost" size="icon-sm" asChild>
      <Link {...props}>
        <ArrowLeftIcon className={cn("size-5")} />
      </Link>
    </Button>
  );
}
