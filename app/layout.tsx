import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Localhost",
  description: "Find a host for every journey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}