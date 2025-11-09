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
        <div className={cn("flex min-h-dvh flex-col", "md:flex-row-reverse")}>
          <div className={cn("flex flex-1 flex-col")}>{children}</div>
          <Sidebar />
          <ProcessingQueue />
        </div>
      </body>
    </html>
  );
}
