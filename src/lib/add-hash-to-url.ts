export function addHashToUrl(hash: string) {
  const url = new URL(window.location.href);
  url.hash = `#${hash}`;
  return url.toString();
}
