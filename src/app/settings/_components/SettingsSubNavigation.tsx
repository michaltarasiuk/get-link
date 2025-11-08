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

export function SettingsSubNavigation() {
  return (
    <SubNavigation>
      <SubNavigationSection>
        <SubNavigationTab
          href="/settings/appearance"
          color="blue"
          icon={SunIcon}>
          appearance
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href="/settings/accessibility"
          color="purple"
          icon={UserIcon}>
          accessibility
        </SubNavigationTab>
      </SubNavigationSection>
      <SubNavigationSection>
        <SubNavigationTab
          href="/settings/video"
          color="magenta"
          icon={FilmIcon}>
          video
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href="/settings/audio"
          color="orange"
          icon={MusicIcon}>
          audio
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href="/settings/metadata"
          color="green"
          icon={FileIcon}>
          metadata
        </SubNavigationTab>
      </SubNavigationSection>
      <SubNavigationSection>
        <SubNavigationTab href="/settings/local" color="blue" icon={CpuIcon}>
          local processing
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href="/settings/instances"
          color="purple"
          icon={GlobeIcon}>
          instances
        </SubNavigationTab>
      </SubNavigationSection>
      <SubNavigationSection>
        <SubNavigationTab href="/settings/privacy" color="gray" icon={LockIcon}>
          privacy
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab
          href="/settings/advanced"
          color="gray"
          icon={SlidersVerticalIcon}>
          advanced
        </SubNavigationTab>
        <SubNavigationSeparator />
        <SubNavigationTab href="/settings/debug" color="gray" icon={BugIcon}>
          info for nerds
        </SubNavigationTab>
      </SubNavigationSection>
    </SubNavigation>
  );
}
