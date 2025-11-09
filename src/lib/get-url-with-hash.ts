export function getUrlWithHash(hash: string) {
  const url = new URL(window.location.href);
  url.hash = `#${hash}`;
  return String(url);
}
