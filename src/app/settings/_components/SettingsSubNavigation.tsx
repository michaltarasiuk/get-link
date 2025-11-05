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

import {
  SubNavigation,
  SubNavigationSection,
  SubNavigationSeparator,
  SubNavigationTab,
} from "@/components/SubNavigation";
import {Routes} from "@/lib/routes";

export function SettingsSubNavigation() {
  return (
    <SubNavigation>
      <SubNavigationSection>
        <SubNavigationTab
          href={Routes.settingsAppearance}
          color="blue"
          icon={SunIcon}>
          appearance
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settingsAccessibility}
          color="purple"
          icon={UserIcon}>
          accessibility
        </SubNavigationTab>
      </SubNavigationSection>
      <SubNavigationSection>
        <SubNavigationTab
          href={Routes.settingsVideo}
          color="magenta"
          icon={FilmIcon}>
          video
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settingsAudio}
          color="orange"
          icon={MusicIcon}>
          audio
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settingsMetadata}
          color="green"
          icon={FileIcon}>
          metadata
        </SubNavigationTab>
      </SubNavigationSection>
      <SubNavigationSection>
        <SubNavigationTab
          href={Routes.settingsLocal}
          color="blue"
          icon={CpuIcon}>
          local processing
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settingsInstances}
          color="purple"
          icon={GlobeIcon}>
          instances
        </SubNavigationTab>
      </SubNavigationSection>
      <SubNavigationSection>
        <SubNavigationTab
          href={Routes.settingsPrivacy}
          color="gray"
          icon={LockIcon}>
          privacy
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settingsAdvanced}
          color="gray"
          icon={SlidersVerticalIcon}>
          advanced
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href={Routes.settingsDebug}
          color="gray"
          icon={BugIcon}>
          info for nerds
        </SubNavigationTab>
      </SubNavigationSection>
    </SubNavigation>
  );
}
