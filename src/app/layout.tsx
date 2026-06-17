import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MGV Seeboden | Singen am See",
  description: "Männergesangverein Seeboden am Millstätter See — vierstimmiger Chorgesang, Kameradschaft und Kärntner Liedgut seit 1894.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
