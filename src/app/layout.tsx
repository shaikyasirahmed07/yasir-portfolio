import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaik Yasir Ahmed | Software Engineer",
  description:
    "Portfolio of Shaik Yasir Ahmed — Computer Science Engineer building full-stack applications, backend systems, and practical software solutions.",
  keywords: [
    "Shaik Yasir Ahmed",
    "Yasir Ahmed",
    "Software Engineer",
    "Computer Science Engineer",
    "Full Stack Developer",
    "Java Developer",
    "React Developer",
    "Spring Boot Developer",
    "Next.js Developer",
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
    url: "https://yasir-portfolio-pearl.vercel.app/",
    siteName: "Shaik Yasir Ahmed Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shaik Yasir Ahmed | Software Engineer",
    description:
      "Portfolio of Shaik Yasir Ahmed — Computer Science Engineer and software developer.",
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