import "./globals.css";

import {cn} from "@/lib/cn";
import {geistMono, geistSans} from "@/lib/fonts";

export default function Layout({children}: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={cn(
          "dark p-2",
          `${geistSans.variable} ${geistMono.variable} antialiased`,
        )}>
        {children}
      </body>
    </html>
  );
}
