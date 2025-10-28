import "./globals.css";

import {Sidebar} from "@/components/Sidebar";
import {cn} from "@/lib/cn";
import {geistMono, geistSans} from "@/lib/fonts";

export default function Layout({children}: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={cn(
          "dark",
          `${geistSans.variable} ${geistMono.variable} antialiased`,
        )}>
        <main className={cn("flex h-dvh flex-col", "sm:flex-row-reverse")}>
          {children}
          <Sidebar />
        </main>
      </body>
    </html>
  );
}
