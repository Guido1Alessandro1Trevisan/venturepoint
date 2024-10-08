import type { Metadata } from "next";
import Footer from "@/components/ui/footer";
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
      </body>
    </html>
  );
}
