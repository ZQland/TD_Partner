import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creating the next generation of digital IDs",
  description: "Created by Team TD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}