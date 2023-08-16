import { Card } from "@/components/Card";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valtteri Palonkorpi",
  description:
    "Software Engineer and a Poodle dad with a love for creating things",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <div className="max-w-3xl my-0 mx-auto p-2 sm:p-8">
          <main>
            <Card />
            <Navigation />
            <div className="text-sm px-4 py-4">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
