import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SearchPanel from "@/components/Header/SearchPanel/SearchPanel";
import OffersPanel from "@/components/Header/OffersPanel/OffersPanel";
import MenuPanel from "@/components/Header/MenuPanel/MenuPanel";
import ActivitiesPanel from "@/components/Header/ActivitiesPanel/ActivitiesPanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bol.com clone",
  description:
    "This is a clone of bol.com that replicates the design and some features of the site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OffersPanel />
        <SearchPanel />
        <MenuPanel />
        <ActivitiesPanel />
        {children}
      </body>
    </html>
  );
}
