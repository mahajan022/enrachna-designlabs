"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const services = [
  { label: "Industrial Product Design", href: "/services/industrial-design" },
  { label: "2D / 3D CAD Modelling", href: "/services/cad-modelling" },
  { label: "Product Engineering", href: "/services/product-engineering" },
  { label: "Prototyping", href: "/services/prototyping" },
  { label: "Tool & Die Design", href: "/services/tool-die-design" },
  { label: "Reverse Engineering", href: "/services/reverse-engineering" },
  { label: "Packaging Design", href: "/services/packaging-design" },
  { label: "Consulting", href: "/services/consulting" },
];

const caseStudies = [
  { label: "Case Study — Project Alpha", href: "/case-studies/project-alpha" },
  { label: "Case Study — Project Beta", href: "/case-studies/project-beta" },
  { label: "Case Study — Project Gamma", href: "/case-studies/project-gamma" },
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
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : "border-b border-[#dde2eb]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Enrachna Design Labs" width={160} height={48} className="h-10 w-auto object-contain" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0">

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDrop("services")}
            onMouseLeave={() => setOpenDrop(null)}
          >
            <button className="relative flex items-center gap-1.5 px-4 h-[72px] text-[0.85rem] font-600 text-[#1a2535] tracking-wide group">
              Services
              <ChevronDown size={13} className={`transition-transform duration-200 ${openDrop === "services" ? "rotate-180" : ""}`} />
              {/* underline */}
              <span className={`absolute bottom-4 left-4 right-4 h-[2px] bg-[#1a2535] origin-left transition-transform duration-300 ease-out ${openDrop === "services" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            </button>

            <div className={`absolute top-[72px] left-0 w-64 bg-white border border-[#e0e0e0] shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-200 ${
              openDrop === "services" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
            }`}>
              {services.map((s) => (
                <Link key={s.href} href={s.href}
                  className="flex items-center px-5 py-3 text-[0.8rem] font-500 text-[#333] border-b border-[#f0f0f0] last:border-b-0 transition-all duration-150 hover:bg-[#111111] hover:text-white hover:pl-6">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Case Studies dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDrop("cases")}
            onMouseLeave={() => setOpenDrop(null)}
          >
            <button className="relative flex items-center gap-1.5 px-4 h-[72px] text-[0.85rem] font-600 text-[#1a2535] tracking-wide group">
              Case Studies
              <ChevronDown size={13} className={`transition-transform duration-200 ${openDrop === "cases" ? "rotate-180" : ""}`} />
              <span className={`absolute bottom-4 left-4 right-4 h-[2px] bg-[#1a2535] origin-left transition-transform duration-300 ease-out ${openDrop === "cases" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            </button>

            <div className={`absolute top-[72px] left-0 w-72 bg-white border border-[#e0e0e0] shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-200 ${
              openDrop === "cases" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
            }`}>
              {caseStudies.map((c) => (
                <Link key={c.href} href={c.href}
                  className="flex items-center px-5 py-3 text-[0.8rem] font-500 text-[#333] border-b border-[#f0f0f0] last:border-b-0 transition-all duration-150 hover:bg-[#111111] hover:text-white hover:pl-6">
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          {/* About Us */}
          <Link href="/about" className="relative px-4 h-[72px] flex items-center text-[0.85rem] font-600 text-[#1a2535] tracking-wide group">
            About Us
            <span className="absolute bottom-4 left-4 right-4 h-[2px] bg-[#1a2535] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>

          <Link href="/contact" className="ml-4 px-6 py-2.5 bg-[#111111] text-white text-[0.8rem] font-600 hover:bg-[#333] transition-colors rounded-sm tracking-wide">
            Contact
          </Link>
        </nav>

        <button className="lg:hidden text-[#1a2535]" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e8e8e8] py-4 px-6 flex flex-col gap-1 shadow-xl">
          <p className="text-[0.62rem] tracking-[0.2em] uppercase text-[#888] font-700 mb-2">Services</p>
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="text-[0.84rem] font-600 text-[#1a2535] hover:text-[#111111] py-2 border-b border-[#f4f4f4] transition-colors">{s.label}</Link>
          ))}
          <div className="border-t border-[#e8e8e8] my-3" />
          <p className="text-[0.62rem] tracking-[0.2em] uppercase text-[#888] font-700 mb-2">Case Studies</p>
          {caseStudies.map((c) => (
            <Link key={c.href} href={c.href} className="text-[0.84rem] font-600 text-[#1a2535] hover:text-[#111111] py-2 border-b border-[#f4f4f4] transition-colors">{c.label}</Link>
          ))}
          <div className="border-t border-[#e8e8e8] my-3" />
          <Link href="/about" className="text-[0.84rem] font-600 text-[#1a2535] hover:text-[#111111] py-2">About Us</Link>
          <Link href="/contact" className="mt-3 px-5 py-3 bg-[#111111] text-white text-[0.8rem] font-600 text-center rounded-sm">Contact</Link>
        </div>
      )}
    </header>
  );
}