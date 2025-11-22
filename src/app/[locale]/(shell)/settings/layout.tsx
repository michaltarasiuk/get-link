"use client";

import {useAtomValue} from "jotai/react";
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
  SubNavigationTab,
  SubNavigationTabSeparator,
} from "@/components/SubNavigation";
import {usePathname} from "@/i18n/navigation";
import {cn} from "@/lib/cn";
import {Routes} from "@/lib/routes";
import {advancedAtom} from "@/lib/storage";

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
      <div className={cn("md:max-w-xl md:basis-xl md:p-3")}>{children}</div>
    </div>
  );
}

function SettingsSubNavigation() {
  const advanced = useAtomValue(advancedAtom);
  const t = useExtracted();
  return (
    <SubNavigation title={t("settings")}>
      <SubNavigationSection>
        <SubNavigationTab
          href={Routes.settings.appearance}
          color="blue"
          icon={SunIcon}>
          {t("appearance")}
        </SubNavigationTab>
        <SubNavigationTabSeparator />
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
        <SubNavigationTabSeparator />
        <SubNavigationTab
          href={Routes.settings.audio}
          color="orange"
          icon={MusicIcon}>
          {t("audio")}
        </SubNavigationTab>
        <SubNavigationTabSeparator />
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
        <SubNavigationTabSeparator />
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
        <SubNavigationTabSeparator />
        <SubNavigationTab
          href={Routes.settings.advanced}
          color="gray"
          icon={SlidersVerticalIcon}>
          {t("advanced")}
        </SubNavigationTab>
        {advanced.enableFeatureForNerds && (
          <>
            <SubNavigationTabSeparator />
            <SubNavigationTab
              href={Routes.settings.debug}
              color="gray"
              icon={BugIcon}>
              {t("info for nerds")}
            </SubNavigationTab>
          </>
        )}
      </SubNavigationSection>
    </SubNavigation>
  );
}
