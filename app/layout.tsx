import Navbar from "@/components/Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Exemplo Supabase",
  description:
    "Nextjs Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <main className="flex flex-col items-center min-h-screen">
          <Navbar />
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
