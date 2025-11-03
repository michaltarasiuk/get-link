"use client";

import {CheckIcon, LinkIcon} from "lucide-react";
import {useEffect, useRef, useState} from "react";

import {cn} from "@/lib/cn";

import {Button} from "./ui/button";

export function CopyButton() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  function handleClick() {
    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 2_000);
  }
  return (
    <Button variant="ghost" size="icon-sm" onClick={handleClick}>
      <LinkIcon
        className={cn(
          "transition-transform ease-in-out",
          copied ? "scale-0" : "scale-100",
        )}
      />
      <CheckIcon
        className={cn(
          "absolute transition-transform ease-in-out",
          copied ? "scale-100" : "scale-0",
        )}
      />
    </Button>
  );
}
