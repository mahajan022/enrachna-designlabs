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
        scrolled ? "shadow-[0_2px_16px_rgba(27,79,138,0.10)]" : "border-b border-[#dde2eb]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logo.png" alt="Enrachna Design Labs" width={160} height={48} className="h-10 w-auto object-contain" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setOpenDrop("services")}
            onMouseLeave={() => setOpenDrop(null)}
          >
            <button className="flex items-center gap-1 px-4 h-[72px] text-[0.8rem] font-500 text-[#5a6880] hover:text-[#1a2535] transition-colors">
              Services
              <ChevronDown size={13} className={`transition-transform duration-200 ${openDrop === "services" ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute top-[72px] left-0 w-64 bg-white border border-[#dde2eb] shadow-xl transition-all duration-200 ${
              openDrop === "services" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
            }`}>
              {services.map((s) => (
                <Link key={s.href} href={s.href}
                  className="block px-5 py-3 text-[0.78rem] text-[#5a6880] hover:text-[#1a2535] hover:bg-[#f4f6f9] border-b border-[#f0f2f6] last:border-b-0 transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenDrop("cases")}
            onMouseLeave={() => setOpenDrop(null)}
          >
            <button className="flex items-center gap-1 px-4 h-[72px] text-[0.8rem] font-500 text-[#5a6880] hover:text-[#1a2535] transition-colors">
              Case Studies
              <ChevronDown size={13} className={`transition-transform duration-200 ${openDrop === "cases" ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute top-[72px] left-0 w-72 bg-white border border-[#dde2eb] shadow-xl transition-all duration-200 ${
              openDrop === "cases" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
            }`}>
              {caseStudies.map((c) => (
                <Link key={c.href} href={c.href}
                  className="block px-5 py-3 text-[0.78rem] text-[#5a6880] hover:text-[#1a2535] hover:bg-[#f4f6f9] border-b border-[#f0f2f6] last:border-b-0 transition-colors">
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about" className="px-4 h-[72px] flex items-center text-[0.8rem] font-500 text-[#5a6880] hover:text-[#1a2535] transition-colors">
            About Us
          </Link>

          <Link href="/contact" className="ml-4 px-6 py-2.5 bg-[#111111] text-white text-[0.75rem] font-600 hover:bg-[#0a0a0a] transition-colors rounded-sm">
            Contact
          </Link>
        </nav>

        <button className="lg:hidden text-[#1a2535]" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#dde2eb] py-4 px-6 flex flex-col gap-2 shadow-xl">
          <p className="text-[0.62rem] tracking-[0.2em] uppercase text-[#1a2535] font-600 mb-1">Services</p>
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="text-[0.84rem] text-[#5a6880] hover:text-[#1a2535] py-1 transition-colors">{s.label}</Link>
          ))}
          <div className="border-t border-[#dde2eb] my-2" />
          <p className="text-[0.62rem] tracking-[0.2em] uppercase text-[#1a2535] font-600 mb-1">Case Studies</p>
          {caseStudies.map((c) => (
            <Link key={c.href} href={c.href} className="text-[0.84rem] text-[#5a6880] hover:text-[#1a2535] py-1 transition-colors">{c.label}</Link>
          ))}
          <div className="border-t border-[#dde2eb] my-2" />
          <Link href="/about" className="text-[0.84rem] text-[#5a6880] hover:text-[#1a2535] py-1">About Us</Link>
          <Link href="/contact" className="mt-2 px-5 py-3 bg-[#111111] text-white text-[0.75rem] font-600 text-center rounded-sm">Contact</Link>
        </div>
      )}
    </header>
  );
}
