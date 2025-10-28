import {Download} from "lucide-react";
import Link from "next/link";

import {cn} from "@/lib/cn";
import {Routes} from "@/lib/routes";

import {Button} from "./ui/button";

export function Sidebar() {
  return (
    <nav className={cn("bg-sidebar px-2 py-1", "sm:px-1 sm:py-2")}>
      <Button variant="ghost" asChild className={cn("flex size-18 flex-col")}>
        <Link href={Routes.save}>
          <Download />
          Save
        </Link>
      </Button>
    </nav>
  );
}
