import {IBM_Plex_Mono, IBM_Plex_Sans} from "next/font/google";

export const ibmPlexSansFont = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
});

export const ibmPlexMonoFont = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
