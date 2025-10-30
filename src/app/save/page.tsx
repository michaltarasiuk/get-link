import {Download} from "@/components/Download";
import {cn} from "@/lib/cn";

export default function SavePage() {
  return (
    <div className={cn("flex size-full items-center justify-center")}>
      <Download />
    </div>
  );
}
