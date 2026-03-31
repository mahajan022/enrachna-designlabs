import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Enrachna Design Labs — Industrial Product Design & Engineering",
  description: "End-to-end product design and engineering studio based in Mumbai.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="pt-[72px]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
