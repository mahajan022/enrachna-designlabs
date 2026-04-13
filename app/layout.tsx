import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enrachna Design Labs — Industrial Product Design & Engineering | Mumbai",
  description: "Enrachna Design Labs is a leading industrial product design and engineering studio in Mumbai. End-to-end solutions from concept to launch — CAD modelling, prototyping, tool design, packaging design, and consulting.",
  keywords: "industrial product design, product engineering, CAD modelling, prototyping, tool design, packaging design, product development, Mumbai, India, design studio",
  authors: [{ name: "Enrachna Design Labs" }],
  creator: "Enrachna Design Labs",
  publisher: "Enrachna Design Labs",
  metadataBase: new URL("https://enrachnadesignlabs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Enrachna Design Labs — Industrial Product Design & Engineering",
    description: "End-to-end product design and engineering studio in Mumbai. From concept to launch — all under one roof.",
    url: "https://enrachnadesignlabs.com",
    siteName: "Enrachna Design Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Enrachna Design Labs",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enrachna Design Labs — Industrial Product Design & Engineering",
    description: "End-to-end product design and engineering studio in Mumbai.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "41075dc6838af680",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${sora.variable}`}>
      <body className="pt-[76px]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}