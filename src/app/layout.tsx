import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "FoodLoop Home",
  description: "Reduce household food waste with pantry intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
        <footer className="border-top bg-light py-3 text-center text-muted small">
          FoodLoop Home • Practical food-waste prevention web product
        </footer>
      </body>
    </html>
  );
}
