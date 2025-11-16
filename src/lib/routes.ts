export const Routes = {
  save: "/save",
  settings: {
    root: "/settings",
    appearance: "/settings/appearance",
    accessibility: "/settings/accessibility",
    video: "/settings/video",
    audio: "/settings/audio",
    metadata: "/settings/metadata",
    local: "/settings/local",
    instances: "/settings/instances",
    privacy: "/settings/privacy",
    advanced: "/settings/advanced",
    debug: "/settings/debug",
  },
};

export function splitPathname(pathname: string) {
  return pathname.split("/").filter((segment) => segment !== "");
}

export function haveSameRootPath(a: string, b: string) {
  return splitPathname(a).at(0) === splitPathname(b).at(0);
}
