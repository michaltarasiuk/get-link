import dedent from "dedent";

import {getLanguageDisplayName} from "@/i18n/get-language-display-name";
import {DefaultLocale, Locales} from "@/i18n/routing";

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
export const PreferredLanguage = DefaultLocale;

declare global {
  interface Window {
    __theme: Theme;
    __setPreferredTheme: (theme: Theme) => void;
  }
}

export const ThemeScript = dedent`
  (function () {
    function getSystemTheme() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    function setTheme(theme) {
      window.__theme = theme;
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }

    let preferredTheme;
    try {
      const settings = JSON.parse(localStorage.getItem('settings'));
      preferredTheme = settings?.appearance?.theme;
    } catch {}

    window.__setPreferredTheme = function(theme) {
      preferredTheme = theme;
      setTheme(theme === 'auto' ? getSystemTheme() : theme);
      try {
        const settings = JSON.parse(localStorage.getItem('settings')) ?? {};
        settings.appearance ??= {};
        settings.appearance.theme = theme;
        localStorage.setItem('settings', JSON.stringify(settings));
      } catch {}
    };

    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(preferredTheme === 'auto' ? getSystemTheme() : preferredTheme);

    darkQuery.addEventListener('change', function (e) {
      if (!preferredTheme || preferredTheme === 'auto') {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  })();
`;
