import {redirect} from "@/i18n/navigation";
import {Routes} from "@/lib/routes";

export default async function MainPage({params}: PageProps<"/[locale]">) {
  const {locale} = await params;
  redirect({
    locale,
    href: Routes.save,
  });
}
