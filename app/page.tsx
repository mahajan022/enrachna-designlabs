"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronRight, ChevronLeft, Layers, Cpu, Box, Settings, Package, Users, Wrench, FlaskConical } from "lucide-react";

const slides: { title: string; sub: string; tag: string; img: string }[] = [
  {
    title: "Crafting Products That Define Their Industries",
    sub: "End-to-end product design and engineering — from concept to launch, entirely under one roof.",
    tag: "Industrial Design · Engineering · Mumbai",
    img: "/hero-1.png",
  },
  {
    title: "From Sketch to Shelf — We Handle Every Step",
    sub: "Our integrated team eliminates the fragmentation of working with multiple agencies.",
    tag: "Full-Spectrum Product Studio",
    img: "/hero-2.png",
  },
  {
    title: "Innovation-First. Always.",
    sub: "We pursue industry-first features in every project — not just what works, but what stands apart.",
    tag: "Discipline · Integrity · Teamwork",
    img: "/hero-3.png",
  },
];

const services = [
  { icon: Box, label: "Industrial Product Design", href: "/services/industrial-product-design" },
  { icon: Layers, label: "2D / 3D CAD Modelling", href: "/services/cad-modelling" },
  { icon: Cpu, label: "Product Engineering", href: "/services/product-engineering" },
  { icon: FlaskConical, label: "Prototyping", href: "/services/prototyping" },
  { icon: Wrench, label: "Tool Design and Development", href: "/services/tool-design-development" },
  { icon: Settings, label: "Product Development", href: "/services/product-development" },
  { icon: Package, label: "Packaging Design", href: "/services/packaging-design" },
  { icon: Users, label: "Consulting", href: "/services/consulting" },
];

const whyPoints = [
  { n: "01", title: "One Team. Every Discipline.", body: "Design, engineering, and prototyping all handled in-house — no vendor gaps, no miscommunication, no lost context." },
  { n: "02", title: "Faster to Market", body: "Consolidated workflows dramatically compress your timeline. What takes months across multiple agencies, we deliver quicker." },
  { n: "03", title: "Full Confidentiality", body: "Every engagement is covered by strict NDA. Your intellectual property stays protected throughout, without exception." },
  { n: "04", title: "Innovation-First", body: "We actively pursue industry-first features in every project — not just what works, but what makes your product stand out." },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [sent, setSent] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <>
      {/* ── HERO CAROUSEL ── */}
      <section className="relative h-[90vh] min-h-[560px] overflow-hidden">
        {slides.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}>
            <Image src={s.img} alt="" fill sizes="100vw" className="object-cover" priority={i === 0} />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            {slides.map((s, i) => (
              <div key={i} className={`transition-all duration-700 ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute"}`}>
                {i === current && (
                  <div className="max-w-[700px]">
                    <div className="inline-flex items-center gap-2 border border-[#b8956a]/40 text-[#d4b08a] text-[0.65rem] tracking-[0.22em] uppercase px-4 py-2 rounded-full mb-8">{s.tag}</div>
                    <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.15] text-white mb-6">{s.title}</h1>
                    <p className="text-white/65 text-[1rem] leading-relaxed max-w-[500px] mb-10">{s.sub}</p>
                    <div className="flex flex-wrap gap-4">
                      <Link href="/about" className="inline-flex items-center gap-2 bg-[#b8956a] text-white px-8 py-3.5 text-[0.88rem] font-medium hover:bg-[#a07a52] transition-colors rounded-sm">
                        Discover Our Story <ArrowRight size={14} />
                      </Link>
                      <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white/80 hover:text-white px-8 py-3.5 text-[0.88rem] font-medium transition-colors rounded-sm">
                        Start a Project
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
          <button onClick={prev} className="w-9 h-9 rounded-full border border-white/30 hover:border-[#b8956a] text-white/70 hover:text-[#b8956a] flex items-center justify-center transition-all"><ChevronLeft size={16} /></button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-[3px] rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[#b8956a]" : "w-3 bg-white/30"}`} />
            ))}
          </div>
          <button onClick={next} className="w-9 h-9 rounded-full border border-white/30 hover:border-[#b8956a] text-white/70 hover:text-[#b8956a] flex items-center justify-center transition-all"><ChevronRight size={16} /></button>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="bg-white py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#b8956a] font-semibold mb-3">Who We Are</p>
            <div className="w-8 h-[2px] bg-[#1a4a52] mb-5" />
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-semibold text-[#1a2a2e] leading-tight mb-5">One Studio.<br />Every Stage of Your Product Journey.</h2>
            <p className="text-[#5a6e74] text-[0.97rem] leading-relaxed mb-4">Enrachna Design Labs is a leading agency that provides end-to-end solutions, from the conceptual stage to the final product launch.</p>
            <p className="text-[#5a6e74] text-[0.97rem] leading-relaxed mb-8">By offering all key services under one roof, our customers enjoy better project execution, reduced costs, fewer follow-ups, faster time-to-market, enhanced product quality, and complete confidentiality.</p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#1a4a52] hover:bg-[#0f3038] text-white px-7 py-3 text-[0.9rem] font-medium transition-colors rounded-sm">Learn More <ChevronRight size={14} /></Link>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image src="/studio-team.png" alt="Enrachna Design Labs Studio" width={800} height={600} className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* ── KEY FACTORS ── */}
      <section className="bg-[#f7f5f2] py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-[clamp(1.5rem,2.5vw,2.2rem)] font-semibold text-[#1a2a2e] mb-3">
            The Power of <span className="text-[#1a4a52] text-[2.2rem] leading-none">3</span> Key Factors Driving Our Complete Design Process
          </h2>
          <p className="text-[#5a6e74] text-[0.95rem] leading-relaxed max-w-[640px] mb-10">Our comprehensive process is structured around three fundamental principles — proven instrumental in delivering successful projects tailored to customer needs.</p>
          <div className="flex flex-wrap items-center gap-5 mb-8">
            {[
              { label: "Customer Desirability", icon: "/icons/customer.svg" },
              { label: "Technical Feasibility", icon: "/icons/technology.svg" },
              { label: "Business Viability", icon: "/icons/business.svg" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-3 bg-white border border-[#ddd8d0] rounded-xl px-6 py-4 shadow-sm">
                <Image src={f.icon} alt={f.label} width={40} height={40} />
                <span className="font-medium text-[0.95rem] text-[#1a2a2e]">{f.label}</span>
              </div>
            ))}
            <Link href="/about" className="px-6 py-3.5 bg-[#1a4a52] text-white text-[0.9rem] font-medium hover:bg-[#0f3038] transition-colors rounded-sm">Read More</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#b8956a] font-semibold mb-3">What We Do</p>
          <div className="w-8 h-[2px] bg-[#1a4a52] mb-5" />
          <h2 className="font-display text-[clamp(2rem,3vw,2.8rem)] font-semibold text-[#1a2a2e] leading-tight mb-12">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group bg-[#f7f5f2] hover:bg-[#1a4a52] rounded-xl p-7 transition-all duration-250 flex flex-col items-center text-center border border-[#eeeae4] hover:border-[#1a4a52] hover:shadow-md">
                <div className="w-14 h-14 flex items-center justify-center mb-5 rounded-full bg-white group-hover:bg-white/10 transition-colors">
                  <s.icon size={30} className="text-[#1a4a52] group-hover:text-[#b8956a] transition-colors" strokeWidth={1.4} />
                </div>
                <h3 className="font-sans text-[0.92rem] font-semibold text-[#1a2a2e] group-hover:text-white leading-snug transition-colors">{s.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 px-6 lg:px-10 bg-[#1a4a52]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#b8956a] font-semibold mb-3">Why Enrachna</p>
          <div className="w-8 h-[2px] bg-[#b8956a] mb-5" />
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-white leading-tight mb-12">The Integrated Advantage</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map((w, i) => (
              <div key={i} className="p-7 bg-white/8 rounded-xl border border-white/12 hover:bg-white/12 transition-colors">
                <div className="font-display text-[2.8rem] font-semibold leading-none text-[#b8956a]/30 mb-5">{w.n}</div>
                <h4 className="text-[0.95rem] font-semibold text-white mb-3 leading-snug">{w.title}</h4>
                <p className="text-white/55 text-[0.85rem] leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ── */}
      <section className="bg-[#f7f5f2] py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="rounded-xl overflow-hidden">
            <Image src="/office-contact.png" alt="Enrachna Office" width={800} height={600} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div>
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#b8956a] font-semibold mb-3">Reach Out</p>
            <div className="w-8 h-[2px] bg-[#1a4a52] mb-5" />
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-semibold text-[#1a2a2e] mb-2">Let&apos;s Build Something Meaningful</h2>
            <p className="text-[#5a6e74] text-[0.95rem] leading-relaxed mb-8">We&apos;re ready to help you turn your vision into an industry-first product. Share a few details and our team will be in touch to discuss how we can accelerate your growth.</p>
            {sent ? (
              <div className="bg-[#1a4a52]/8 border border-[#1a4a52]/20 rounded-xl p-8 text-center">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-display text-xl font-semibold text-[#1a2a2e] mb-2">Message Sent!</h3>
                <p className="text-[#5a6e74] text-[0.88rem]">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="First Name" className="w-full border-b border-[#1a4a52]/30 focus:border-[#1a4a52] text-[#1a2a2e] placeholder-[#5a6e74]/50 py-3 text-[0.92rem] outline-none transition-colors bg-transparent" />
                  <input type="text" placeholder="Last Name" className="w-full border-b border-[#1a4a52]/30 focus:border-[#1a4a52] text-[#1a2a2e] placeholder-[#5a6e74]/50 py-3 text-[0.92rem] outline-none transition-colors bg-transparent" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <input type="email" placeholder="Email" className="w-full border-b border-[#1a4a52]/30 focus:border-[#1a4a52] text-[#1a2a2e] placeholder-[#5a6e74]/50 py-3 text-[0.92rem] outline-none transition-colors bg-transparent" />
                  <input type="tel" placeholder="Phone" className="w-full border-b border-[#1a4a52]/30 focus:border-[#1a4a52] text-[#1a2a2e] placeholder-[#5a6e74]/50 py-3 text-[0.92rem] outline-none transition-colors bg-transparent" />
                </div>
                <textarea placeholder="Tell us about your project" rows={4} className="w-full border-b border-[#1a4a52]/30 focus:border-[#1a4a52] text-[#1a2a2e] placeholder-[#5a6e74]/50 py-3 text-[0.92rem] outline-none resize-none transition-colors bg-transparent" />
                <button onClick={() => setSent(true)} className="mt-1 px-8 py-3.5 bg-[#1a4a52] text-white text-[0.9rem] font-medium hover:bg-[#0f3038] transition-colors rounded-sm w-fit">Submit</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
