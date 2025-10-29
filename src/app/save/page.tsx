import {Download} from "@/components/Download";
import {cn} from "@/lib/cn";

export default function SavePage() {
  return (
    <div className={cn("flex items-center justify-center p-2")}>
      <Download />
    </div>
  );
}
