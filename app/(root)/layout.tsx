import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopBar from "../components/shared/TopBar/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GW Map",
  description: "GW address tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
