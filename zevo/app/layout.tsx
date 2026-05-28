import type { Metadata } from "next";
import { Poppins, Inter, Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const ralewayHeading = Raleway({subsets:['latin'],variable:'--font-heading'});

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Zevo",
  description: "Zevo - storage solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", poppins.variable, "font-sans", inter.variable, ralewayHeading.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
