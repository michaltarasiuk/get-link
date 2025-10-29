import "./globals.css";

import {ProcessingQueue} from "@/components/ProcessingQueue";
import {Sidebar} from "@/components/Sidebar";
import {cn} from "@/lib/cn";
import {geistMono, geistSans} from "@/lib/fonts";
import {ThemeScript} from "@/lib/theme";

export default function Layout({children}: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
        )}>
        <script
          dangerouslySetInnerHTML={{
            __html: ThemeScript,
          }}
        />
        <main
          className={cn(
            "flex h-dvh flex-col [&>div]:flex-1",
            "md:flex-row-reverse",
          )}>
          {children}
          <Sidebar />
          <ProcessingQueue />
        </main>
      </body>
    </html>
  );
}
