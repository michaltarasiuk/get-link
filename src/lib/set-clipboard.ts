export async function setClipboard(text: string) {
  const clipboardItem = new ClipboardItem({
    "text/plain": text,
  });
  await navigator.clipboard.write([clipboardItem]);
}
