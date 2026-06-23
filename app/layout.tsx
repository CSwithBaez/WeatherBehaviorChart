import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Inside Weather Chart - Self-Regulation Tracker",
  description: "A behavioral tracker for early childhood self-regulation and emotional intelligence",
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
