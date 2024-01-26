"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/lib/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NavBar categories={["electronics", "jewellery"]} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
