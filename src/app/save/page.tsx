import {Download} from "@/components/Download";
import {cn} from "@/lib/cn";

export default function SavePage() {
  return (
    <div className={cn("flex flex-1 items-center justify-center p-2")}>
      <Download />
    </div>
  );
}
