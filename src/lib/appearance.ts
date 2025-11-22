import dedent from "dedent";

import {getLanguageDisplayName} from "@/i18n/get-language-display-name";
import {DefaultLocale, type Locale, Locales} from "@/i18n/routing";

import {raise} from "./assert";

export type Theme = (typeof Themes)[number];

export const Themes = ["auto", "light", "dark"] as const;
export const PreferredTheme: Theme = "auto";

export const PreferredAutomaticLanguageSelection = false;

export const Languages = Locales.map((l) => {
  const languageDisplayName =
    getLanguageDisplayName(l) ??
    raise(`Language display name not found for locale: ${l}`);
  return {
    label: languageDisplayName.toLowerCase(),
    value: l,
  };
});
export const PreferredLanguage: Locale = DefaultLocale;

declare global {
  interface Window {
    __theme: Theme;
    __setTheme: (theme: Theme) => void;
    __setPreferredTheme: (theme: Theme) => void;
  }
}

export const ThemeScript = dedent`
  (function () {
    function getPrefersDarkSchemeMedia() {
      return window.matchMedia('(prefers-color-scheme: dark)');
    }
    function getSystemTheme() {
      return getPrefersDarkSchemeMedia().matches ? 'dark' : 'light';
    }
    
    window.__setTheme = function(theme) {
      const resolvedTheme = theme === 'auto' ? getSystemTheme() : theme;
      window.__theme = resolvedTheme;
      document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
    }

    let preferredTheme;
    try {
      const settings = JSON.parse(localStorage.getItem('settings'));
      preferredTheme = settings?.appearance?.theme;
    } catch {}

    window.__setPreferredTheme = function(theme) {
      preferredTheme = theme;
      window.__setTheme(theme);
      try {
        const settings = JSON.parse(localStorage.getItem('settings')) ?? {};
        settings.appearance ??= {};
        settings.appearance.theme = theme;
        localStorage.setItem('settings', JSON.stringify(settings));
      } catch {}
    };

    window.__setTheme(preferredTheme);

    const darkQuery = getPrefersDarkSchemeMedia();
    darkQuery.addEventListener('change', function (e) {
      if (!preferredTheme || preferredTheme === 'auto') {
        window.__setTheme('auto');
      }
    });
  })();
`;
