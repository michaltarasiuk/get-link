"use client";

import {useHash} from "@/hooks/use-hash";
import {cn} from "@/lib/cn";

import {CopyButton} from "./CopyButton";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export function Section({
  title,
  children,
  text,
}: SectionProps & {text: string}) {
  return (
    <SectionRoot>
      <SectionHeader>
        <SectionHeading>{title}</SectionHeading>
        <CopyButton type="text" text={text} />
      </SectionHeader>
      {children}
    </SectionRoot>
  );
}

export function LinkSection({
  title,
  id,
  children,
}: SectionProps & {id: string}) {
  const hash = useHash();
  return (
    <SectionRoot
      id={id}
      className={cn({
        "animate-highlight": hash === `#${id}`,
      })}>
      <SectionHeader>
        <SectionHeading>{title}</SectionHeading>
        <CopyButton type="link" hash={id} />
      </SectionHeader>
      {children}
    </SectionRoot>
  );
}

function SectionRoot(props: React.ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn(
        "scroll-mt-12 space-y-3 rounded-lg p-3",
        "md:scroll-mt-0",
        props.className,
      )}
    />
  );
}

function SectionHeader(props: React.ComponentProps<"section">) {
  return (
    <header
      {...props}
      className={cn("mb-2.5 flex items-center gap-1.5", props.className)}
    />
  );
}

function SectionHeading(props: React.ComponentProps<"h2">) {
  return <h2 {...props} className={cn("font-semibold", props.className)} />;
}
