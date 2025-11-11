export async function writeTextToClipboard(text: string) {
  const textItem = new ClipboardItem({
    "text/plain": text,
  });
  await navigator.clipboard.write([textItem]);
}
