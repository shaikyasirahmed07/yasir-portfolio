import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaik Yasir Ahmed | Software Engineer",
  description:
    "Portfolio of Shaik Yasir Ahmed — Computer Science Engineer focused on full-stack development, backend systems, and practical software solutions.",
  keywords: [
    "Shaik Yasir Ahmed",
    "Yasir Ahmed",
    "Software Engineer",
    "Full Stack Developer",
    "Java Developer",
    "React Developer",
    "Spring Boot",
    "Next.js",
    "Portfolio",
  ],
  authors: [
    {
      name: "Shaik Yasir Ahmed",
    },
  ],
  creator: "Shaik Yasir Ahmed",

  openGraph: {
    title: "Shaik Yasir Ahmed | Software Engineer",
    description:
      "Computer Science Engineer focused on full-stack development, backend systems, and practical software solutions.",
    type: "website",
    url: "https://your-domain.vercel.app",
    siteName: "Shaik Yasir Ahmed",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shaik Yasir Ahmed | Software Engineer",
    description:
      "Computer Science Engineer focused on full-stack development, backend systems, and practical software solutions.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}