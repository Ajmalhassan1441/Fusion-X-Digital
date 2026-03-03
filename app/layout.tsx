import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Splashscreen from './component/commen/Splashscreen';
import StarBackground from './component/commen/starbackground';
import Header from './module/header/Header';
import Footer from "./module/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FusionX Digital - Where Creativity Meets Technology",
  description: "Graphic Design, Digital Marketing, WordPress Development, and Web Development services under one roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StarBackground />
        <Splashscreen />
        <Header />
        <main className="relative z-10">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}