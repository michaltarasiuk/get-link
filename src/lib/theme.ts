import dedent from "dedent";

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
    });
  })();
`;
