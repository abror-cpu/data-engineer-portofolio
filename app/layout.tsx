import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hikmal Abror | Data Engineer",
  description: "Data Engineer portfolio — scalable pipelines, real-time streaming, cloud data platforms, and analytics infrastructure.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
