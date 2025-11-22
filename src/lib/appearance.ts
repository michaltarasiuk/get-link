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
    __setPreferredTheme: (theme: Theme) => void;
  }
}

export const ThemeScript = dedent`
  (function () {
    function getDarkQuery() {
      return window.matchMedia('(prefers-color-scheme: dark)');
    }
    function getSystemTheme() {
      return getDarkQuery().matches ? 'dark' : 'light';
    }
    function setTheme(theme) {
      window.__theme = theme;
      document.documentElement.classList.toggle(
        'dark',
        (theme === 'auto' ? getSystemTheme() : theme) === 'dark'
      );
    }

    let preferredTheme;
    try {
      const settings = JSON.parse(localStorage.getItem('settings'));
      preferredTheme = settings?.appearance?.theme;
    } catch {}

    window.__setPreferredTheme = function (theme) {
      preferredTheme = theme;
      setTheme(theme);
    };

    setTheme(preferredTheme);

    const darkQuery = getDarkQuery();
    darkQuery.addEventListener('change', function (e) {
      setTheme(window.__theme);
    });
  })();
`;
