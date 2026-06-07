import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareerBridge+ | Recruitment & Career Intelligence Suite",
  description:
    "A recruitment and career intelligence platform for students, employers, and universities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}
