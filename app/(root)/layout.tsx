import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, currentUser } from "@clerk/nextjs";
import TopBar from "@/components/shared/TopBar/TopBar";
import LeftBar from "@/components/shared/LeftBar/LeftBar";
import BottomBar from "@/components/shared/BottomBar/BottomBar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NKTV tech tool",
  description: "NKTV tech tool",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  if (!user) {
    return null;
  }

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar />
          <main className="flex flex-row">
            <LeftBar />
            <section className="flex w-full flex-col items-center px-6 pt-22">
              {children}
            </section>
          </main>
          <BottomBar />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
