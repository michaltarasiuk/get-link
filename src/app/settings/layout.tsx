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
import {usePathname} from "next/navigation";

import {
  SubNavigation,
  SubNavigationSection,
  SubNavigationSeparator,
  SubNavigationTab,
} from "@/components/SubNavigation";
import {cn} from "@/lib/cn";
import {Routes} from "@/lib/routes";

export default function SettingsLayout({children}: LayoutProps<"/settings">) {
  const pathname = usePathname();
  return (
    <div className={cn("flex flex-col-reverse", "sm:flex-row")}>
      <aside
        className={cn("sm:block sm:shrink-0 sm:basis-75 sm:p-3", {
          hidden: pathname !== Routes.settings.root,
        })}>
        <SettingsSubNavigation />
      </aside>
      <main className={cn("sm:basis-xl sm:p-3")}>{children}</main>
    </div>
  );
}

function SettingsSubNavigation() {
  return (
    <SubNavigation>
      <SubNavigationSection>
        <SubNavigationTab
          href={Routes.settings.appearance}
          color="blue"
          icon={SunIcon}>
          appearance
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settings.accessibility}
          color="purple"
          icon={UserIcon}>
          accessibility
        </SubNavigationTab>
      </SubNavigationSection>
      <SubNavigationSection>
        <SubNavigationTab
          href={Routes.settings.video}
          color="magenta"
          icon={FilmIcon}>
          video
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settings.audio}
          color="orange"
          icon={MusicIcon}>
          audio
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settings.metadata}
          color="green"
          icon={FileIcon}>
          metadata
        </SubNavigationTab>
      </SubNavigationSection>
      <SubNavigationSection>
        <SubNavigationTab
          href={Routes.settings.local}
          color="blue"
          icon={CpuIcon}>
          local processing
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settings.instances}
          color="purple"
          icon={GlobeIcon}>
          instances
        </SubNavigationTab>
      </SubNavigationSection>
      <SubNavigationSection>
        <SubNavigationTab
          href={Routes.settings.privacy}
          color="gray"
          icon={LockIcon}>
          privacy
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settings.advanced}
          color="gray"
          icon={SlidersVerticalIcon}>
          advanced
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settings.debug}
          color="gray"
          icon={BugIcon}>
          info for nerds
        </SubNavigationTab>
      </SubNavigationSection>
    </SubNavigation>
  );
}
