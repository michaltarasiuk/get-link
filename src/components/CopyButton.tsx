import {CheckIcon, CopyIcon, LinkIcon} from "lucide-react";
import {useEffect, useRef, useState} from "react";

import {assertNever} from "@/lib/assert";
import {writeTextToClipboard} from "@/lib/clipboard";
import {cn} from "@/lib/cn";

import {Button} from "./ui/button";

type CopyButtonProps =
  | {
      type: "text";
      text: string;
    }
  | {
      type: "link";
      hash: string;
    };

export function CopyButton(props: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  async function handleCopy() {
    let text: string;
    if (props.type === "link") {
      const url = new URL(String(location));
      url.hash = `#${props.hash}`;
      text = String(url);
    } else if (props.type === "text") {
      text = props.text;
    } else {
      assertNever(props);
    }
    await writeTextToClipboard(text);
    handleCopied();
  }
  function handleCopied() {
    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 2_000);
  }
  const CopyButtonIcon = props.type === "text" ? CopyIcon : LinkIcon;
  return (
    <Button variant="ghost" size="icon-sm" onClick={handleCopy}>
      <CopyButtonIcon
        aria-hidden
        className={cn(
          "transition-transform ease-in-out",
          copied ? "scale-0" : "scale-100",
        )}
      />
      <CheckIcon
        aria-hidden
        className={cn(
          "absolute transition-transform ease-in-out",
          copied ? "scale-100" : "scale-0",
        )}
      />
    </Button>
  );
}
