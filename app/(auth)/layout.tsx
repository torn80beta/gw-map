import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

export const metadata = {
  title: "NKTV tech tool",
  description: "NKTV tech tool",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <div className="flex min-h-screen w-full items-center justify-center">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
