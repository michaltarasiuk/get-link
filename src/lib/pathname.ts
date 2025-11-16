export function splitPathname(p: string) {
  return p.split("/").filter((s) => s !== "");
}

export function hasEqualFirstSegment(a: string, b: string) {
  return splitPathname(a).at(0) === splitPathname(b).at(0);
}
