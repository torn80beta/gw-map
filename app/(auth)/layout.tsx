import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "GW-map",
  description: "MKTV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
