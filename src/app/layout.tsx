import "./globals.css";

import {ThemeScript} from "@/lib/appearance";
import {cn} from "@/lib/cn";
import {ibmPlexMonoFont, ibmPlexSansFont} from "@/lib/fonts";

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
        {children}
      </body>
    </html>
  );
}
