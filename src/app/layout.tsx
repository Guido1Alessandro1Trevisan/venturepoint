import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VenturePoint",
  description: "Empowering visionaries. Fueling innovation. Building the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
