"use client";

import {
  BugIcon,
  CpuIcon,
  FileIcon,
  FilmIcon,
  GlobeIcon,
  LockIcon,
  MusicIcon,
  SlidersVerticalIcon,
  SunIcon,
  UserIcon,
} from "lucide-react";
import {useExtracted} from "next-intl";

import {
  SubNavigation,
  SubNavigationSection,
  SubNavigationSeparator,
  SubNavigationTab,
} from "@/components/SubNavigation";
import {usePathname} from "@/i18n/navigation";
import {cn} from "@/lib/cn";
import {Routes} from "@/lib/routes";

export default function SettingsLayout({
  children,
}: LayoutProps<"/[locale]/settings">) {
  const pathname = usePathname();
  return (
    <div className={cn("flex flex-col-reverse", "md:flex-row")}>
      <aside
        className={cn("md:block md:shrink-0 md:basis-75 md:p-3", {
          hidden: pathname !== Routes.settings.root,
        })}>
        <SettingsSubNavigation />
      </aside>
      <main className={cn("md:basis-xl md:p-3")}>{children}</main>
    </div>
  );
}

function SettingsSubNavigation() {
  const t = useExtracted();
  return (
    <SubNavigation>
      <SubNavigationSection>
        <SubNavigationTab
          href={Routes.settings.appearance}
          color="blue"
          icon={SunIcon}>
          {t("appearance")}
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settings.accessibility}
          color="purple"
          icon={UserIcon}>
          {t("accessibility")}
        </SubNavigationTab>
      </SubNavigationSection>
      <SubNavigationSection>
        <SubNavigationTab
          href={Routes.settings.video}
          color="magenta"
          icon={FilmIcon}>
          {t("video")}
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settings.audio}
          color="orange"
          icon={MusicIcon}>
          {t("audio")}
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settings.metadata}
          color="green"
          icon={FileIcon}>
          {t("metadata")}
        </SubNavigationTab>
      </SubNavigationSection>
      <SubNavigationSection>
        <SubNavigationTab
          href={Routes.settings.local}
          color="blue"
          icon={CpuIcon}>
          {t("local processing")}
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settings.instances}
          color="purple"
          icon={GlobeIcon}>
          {t("instances")}
        </SubNavigationTab>
      </SubNavigationSection>
      <SubNavigationSection>
        <SubNavigationTab
          href={Routes.settings.privacy}
          color="gray"
          icon={LockIcon}>
          {t("privacy")}
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settings.advanced}
          color="gray"
          icon={SlidersVerticalIcon}>
          {t("advanced")}
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settings.debug}
          color="gray"
          icon={BugIcon}>
          {t("info for nerds")}
        </SubNavigationTab>
      </SubNavigationSection>
    </SubNavigation>
  );
}
