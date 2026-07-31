import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dilshan Madhuranga — Software Engineer & Web Development Team Lead",
  description:
    "Professional portfolio of Dilshan Madhuranga, a Software Engineer and Web Development Team Lead with experience designing and developing enterprise and customer-facing web applications using Angular, React, TypeScript, and modern system architectures.",
  keywords: [
    "Software Engineer",
    "Web Development Team Lead",
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Dilshan Madhuranga" }],
  openGraph: {
    title: "Dilshan Madhuranga — Software Engineer & Web Development Team Lead",
    description:
      "Designing and developing enterprise and customer-facing web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
