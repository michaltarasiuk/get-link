import {Download} from "@/components/Download";
import {cn} from "@/lib/cn";

export default function Page() {
  return (
    <div className={cn("flex min-h-dvh items-center justify-center")}>
      <Download />
    </div>
  );
}
