import dedent from "dedent";

import {getLanguageDisplayName} from "@/i18n/get-language-display-name";
import {DefaultLocale, Locales} from "@/i18n/routing";

import {raise} from "./assert";

type Theme = (typeof Themes)[number];

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
  type Theme = "light" | "dark";
  interface Window {
    __theme: Theme;
    __setPreferredTheme: (theme: Theme) => void;
  }
}

export const ThemeScript = dedent`
  (function () {
    function setTheme(theme) {
      window.__theme = theme;
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }

    let preferredTheme;
    try {
      preferredTheme = localStorage.getItem('theme');
    } catch {}

    window.__setPreferredTheme = function(theme) {
      preferredTheme = theme;
      setTheme(theme);
      try {
        localStorage.setItem('theme', theme);
      } catch {}
    };

    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    let initialTheme = preferredTheme || (darkQuery.matches ? 'dark' : 'light');
    setTheme(initialTheme);

    darkQuery.addEventListener('change', function (e) {
      if (!preferredTheme) setTheme(e.matches ? 'dark' : 'light');
    });2
  })();
`;
