"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const services = [
  { label: "Industrial Product Design", href: "/services/industrial-product-design" },
  { label: "2D / 3D CAD Modelling", href: "/services/cad-modelling" },
  { label: "Product Engineering", href: "/services/product-engineering" },
  { label: "Prototyping", href: "/services/prototyping" },
  { label: "Tool Design and Development", href: "/services/tool-design-development" },
  { label: "Product Development", href: "/services/product-development" },
  { label: "Packaging Design", href: "/services/packaging-design" },
  { label: "Consulting", href: "/services/consulting" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDrop(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-[0_2px_24px_rgba(26,74,82,0.10)]" : "border-b border-[#ddd8d0]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[76px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Enrachna Design Labs"
            width={180}
            height={54}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setOpenDrop("services")}
            onMouseLeave={() => setOpenDrop(null)}
          >
            <button className="relative flex items-center gap-1.5 px-5 h-[76px] text-[1.05rem] font-medium text-[#1a2a2e] tracking-wide group">
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 text-[#b8956a] ${openDrop === "services" ? "rotate-180" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-5 right-5 h-[2px] bg-[#b8956a] origin-left transition-transform duration-300 ease-out ${
                  openDrop === "services" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>

            <div
              className={`absolute top-[76px] left-0 w-80 bg-white border-t-2 border-t-[#1a4a52] border border-[#ddd8d0] shadow-[0_12px_40px_rgba(26,74,82,0.12)] transition-all duration-200 ${
                openDrop === "services"
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              }`}
            >
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center px-5 py-3.5 text-[0.88rem] font-medium text-[#1a2a2e] border-b border-[#f0ece6] last:border-b-0 transition-all duration-150 hover:bg-[#1a4a52] hover:text-white hover:pl-7"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/case-studies"
            className="relative px-5 h-[76px] flex items-center text-[1.05rem] font-medium text-[#1a2a2e] tracking-wide group"
          >
            Case Studies
            <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#b8956a] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>

          <Link
            href="/about"
            className="relative px-5 h-[76px] flex items-center text-[1.05rem] font-medium text-[#1a2a2e] tracking-wide group"
          >
            About Us
            <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#b8956a] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>

          <Link
            href="/contact"
            className="ml-3 px-7 py-2.5 bg-[#1a4a52] text-white text-[0.95rem] font-medium hover:bg-[#0f3038] transition-colors rounded-sm tracking-wide"
          >
            Contact
          </Link>
        </nav>

        <button
          className="lg:hidden text-[#1a2a2e]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#ddd8d0] py-4 px-6 flex flex-col gap-1 shadow-xl">
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#b8956a] font-semibold mb-2">
            Services
          </p>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="text-[0.92rem] font-medium text-[#1a2a2e] hover:text-[#1a4a52] py-2.5 border-b border-[#f4f0eb] transition-colors"
            >
              {s.label}
            </Link>
          ))}
          <div className="border-t border-[#ddd8d0] my-3" />
          <Link href="/case-studies" className="text-[0.97rem] font-medium text-[#1a2a2e] hover:text-[#1a4a52] py-2">Case Studies</Link>
          <Link href="/about" className="text-[0.97rem] font-medium text-[#1a2a2e] hover:text-[#1a4a52] py-2">About Us</Link>
          <Link href="/contact" className="mt-3 px-5 py-3.5 bg-[#1a4a52] text-white text-[0.95rem] font-medium text-center rounded-sm">Contact</Link>
        </div>
      )}
    </header>
  );
}
