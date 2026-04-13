import Link from "next/link";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-[#0f2428] text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-1">
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Enrachna Design Labs" className="h-9 w-auto object-contain brightness-0 invert"/>
            </div>
            <p className="text-[0.82rem] leading-relaxed max-w-[220px] text-white/50">
              End-to-end product design and engineering — from the first sketch to the final launch.
            </p>
            <p className="mt-4 text-[0.75rem] text-[#b8956a]/70 italic">&ldquo;Discipline · Integrity · Teamwork&rdquo;</p>
          </div>

          <div>
            <h4 className="text-[0.62rem] tracking-[0.22em] uppercase text-white/85 font-semibold mb-5">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-[0.78rem] text-white/40 hover:text-[#b8956a] transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.62rem] tracking-[0.22em] uppercase text-white/85 font-semibold mb-5">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Our Work", href: "/our-work" },
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[0.78rem] text-white/40 hover:text-[#b8956a] transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.62rem] tracking-[0.22em] uppercase text-white/85 font-semibold mb-5">Contact</h4>
            <div className="flex flex-col gap-3.5">
              <a href="tel:+919506392933" className="flex items-start gap-2.5 group">
                <Phone size={13} className="text-[#b8956a]/60 flex-shrink-0 mt-0.5" />
                <span className="text-[0.78rem] text-white/40 group-hover:text-white transition-colors">+91 9506 392 933</span>
              </a>
              <a href="mailto:enrachnadesignlabs@gmail.com" className="flex items-start gap-2.5 group">
                <Mail size={13} className="text-[#b8956a]/60 flex-shrink-0 mt-0.5" />
                <span className="text-[0.78rem] text-white/40 group-hover:text-white transition-colors break-all">enrachnadesignlabs@gmail.com</span>
              </a>
              <a href="https://www.enrachnadesign.com" target="_blank" className="flex items-start gap-2.5 group">
                <Globe size={13} className="text-[#b8956a]/60 flex-shrink-0 mt-0.5" />
                <span className="text-[0.78rem] text-white/40 group-hover:text-white transition-colors">www.enrachnadesign.com</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="text-[#b8956a]/60 flex-shrink-0 mt-0.5" />
                <span className="text-[0.78rem] text-white/40">Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6">
          <p className="text-[0.68rem] text-white/20">© 2026 Enrachna Design Labs. All rights reserved.</p>
          <p className="text-[0.68rem] text-white/20">Mumbai · Maharashtra · India</p>
        </div>
      </div>
    </footer>
  );
}
