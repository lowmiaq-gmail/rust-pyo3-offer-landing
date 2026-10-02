import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rust/PyO3 Hot-Path Speedup — $199 Fixed",
  description:
    "Fixed-price $199 offer: take one Python hot-path dependency, deliver a Rust/PyO3 drop-in wheel, migration notes, and rollback. Same playbook as the sample RFC3339 validator.",
  openGraph: {
    title: "Rust/PyO3 Hot-Path Speedup — $199 Fixed",
    description:
      "One Python bottleneck → Rust/PyO3 drop-in wheel + migration notes + rollback. Fixed $199.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
