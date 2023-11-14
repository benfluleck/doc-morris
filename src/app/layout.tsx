import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doc Morris App",
  description: "Shopping Cart Feature",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}
