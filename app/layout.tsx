import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "@/app/providers";

export const metadata: Metadata = {
  title: "Shaik Yasir Ahmed — Product-minded Software Engineer",
  description: "Portfolio of Shaik Yasir Ahmed: software engineering, full-stack development and thoughtful digital products.",
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Shaik Yasir Ahmed — Software Developer",
    description: "Selected work, engineering interests and ways to get in touch.",
    type: "website",
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en" suppressHydrationWarning><body><Providers>{children}</Providers></body></html>;
}
