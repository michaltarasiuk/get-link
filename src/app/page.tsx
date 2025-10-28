import {redirect} from "next/navigation";

import {Routes} from "@/lib/routes";

export default function Page() {
  redirect(Routes.save);
}
