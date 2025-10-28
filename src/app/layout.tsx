import "./globals.css";

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
        <main className={cn("flex h-dvh flex-col", "sm:flex-row-reverse")}>
          {children}
          <Sidebar />
        </main>
      </body>
    </html>
  );
}
