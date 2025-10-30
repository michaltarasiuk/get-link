import "./globals.css";

import {ProcessingQueue} from "@/components/ProcessingQueue";
import {Sidebar} from "@/components/Sidebar";
import {cn} from "@/lib/cn";
import {ibmPlexMonoFont, ibmPlexSansFont} from "@/lib/fonts";
import {ThemeScript} from "@/lib/theme";

export default function Layout({children}: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("antialiased", [
          ibmPlexSansFont.className,
          ibmPlexSansFont.variable,
          ibmPlexMonoFont.variable,
        ])}>
        <script
          dangerouslySetInnerHTML={{
            __html: ThemeScript,
          }}
        />
        <main className={cn("flex h-dvh flex-col", "md:flex-row-reverse")}>
          <div className={cn("flex-1 px-2 pt-2")}>{children}</div>
          <Sidebar />
          <ProcessingQueue />
        </main>
      </body>
    </html>
  );
}
