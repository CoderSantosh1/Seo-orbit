import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Footer from "@/app/components/footer";
import PageLoader from "@/app/components/PageLoader";
import { siteData } from "@/app/data/site-data";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = siteData.metadata;

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageLoader>
          <Header />
          <Navbar />
          <main className="flex-1 pt-[128px] sm:pt-[112px] lg:pt-[120px]">
            {children}
          </main>

          <Footer />
        </PageLoader>
      </body>
    </html>
  );
}