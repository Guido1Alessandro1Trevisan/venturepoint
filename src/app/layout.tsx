import type { Metadata } from "next";
import Footer from "@/components/ui/footer";
import { Analytics } from "@vercel/analytics/react"
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
        <Footer/>
        <Analytics/>
      </body>
    </html>
  );
}
