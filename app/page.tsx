"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronRight, ChevronLeft, Layers, Cpu, Box, Settings, RotateCcw, Package, Users } from "lucide-react";

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
  { icon: Layers, label: "Product Strategy & Road Maps", href: "/services/product-strategy" },
  { icon: Box, label: "Conceptualisation & Industrial Design", href: "/services/conceptualisation-industrial-design" },
  { icon: Cpu, label: "Product Engineering", href: "/services/product-engineering" },
  { icon: Settings, label: "Innovation & Industry First", href: "/services/innovation-industry-first" },
  { icon: Settings, label: "Product Development – Tools, Molds & Dies", href: "/services/product-development" },
  { icon: RotateCcw, label: "Product Testing & Validation", href: "/services/product-testing-validation" },
  { icon: Package, label: "Sourcing", href: "/services/sourcing" },
  { icon: Users, label: "Project Management & Greenfield Projects", href: "/services/project-management" },
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
            <div className="absolute inset-0 bg-black/68" />
          </div>
        ))}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            {slides.map((s, i) => (
              <div key={i} className={`transition-all duration-700 ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute"}`}>
                {i === current && (
                  <div className="max-w-[700px]">
                    <div className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-[0.65rem] tracking-[0.22em] uppercase px-4 py-2 rounded-full mb-8">{s.tag}</div>
                    <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-700 leading-[1.1] text-white mb-6">{s.title}</h1>
                    <p className="text-white/65 text-[0.97rem] leading-relaxed max-w-[500px] mb-10">{s.sub}</p>
                    <div className="flex flex-wrap gap-4">
                      <Link href="/about" className="inline-flex items-center gap-2 bg-white text-[#111111] px-8 py-3.5 text-[0.78rem] font-600 hover:bg-[#f0f0f0] transition-colors rounded-sm">
                        Discover Our Story <ArrowRight size={14} />
                      </Link>
                      <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white/80 hover:text-white px-8 py-3.5 text-[0.78rem] font-600 transition-colors rounded-sm">
                        Start a Project
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-6 lg:left-10 z-20 flex items-center gap-4">
          <button onClick={prev} className="w-9 h-9 rounded-full border border-white/30 hover:border-white text-white/70 hover:text-white flex items-center justify-center transition-all"><ChevronLeft size={16} /></button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-[3px] rounded-full transition-all duration-300 ${i === current ? "w-8 bg-white" : "w-3 bg-white/30"}`} />
            ))}
          </div>
          <button onClick={next} className="w-9 h-9 rounded-full border border-white/30 hover:border-white text-white/70 hover:text-white flex items-center justify-center transition-all"><ChevronRight size={16} /></button>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="bg-white py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#888] font-600 mb-3">Who We Are</p>
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-700 text-[#1a2535] leading-tight mb-5">One Studio.<br />Every Stage of Your Product Journey.</h2>
            <p className="text-[#5a6880] text-[0.92rem] leading-relaxed mb-4">Enrachna Design Labs is a full-spectrum product design and engineering studio built to eliminate the fragmentation companies face when juggling multiple vendors.</p>
            <p className="text-[#5a6880] text-[0.92rem] leading-relaxed mb-8">We are a team of designers, innovators, engineers and strategists with a common goal of making a meaningful &amp; positive impact — fueled by passion, commitment, and complete transparency.</p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#333] text-white px-7 py-3 text-[0.78rem] font-600 transition-colors rounded-sm">Learn More <ChevronRight size={14} /></Link>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image src="/studio-team.png" alt="Enrachna Design Labs Studio" width={800} height={600} className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* ── KEY FACTORS ── */}
      <section className="bg-[#f4f6f9] py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-[clamp(1.5rem,2.5vw,2.2rem)] font-700 text-[#1a2535] mb-3">
            The Power of <span className="text-[#111111] text-[2rem] leading-none">3</span> Key Factors Driving Our Complete Design Process
          </h2>
          <p className="text-[#5a6880] text-[0.88rem] leading-relaxed max-w-[640px] mb-10">Our comprehensive process is structured around three fundamental principles — proven instrumental in delivering successful projects tailored to customer needs.</p>
          <div className="flex flex-wrap items-center gap-6 mb-8">
            {[
              { label: "Customer Desirability", icon: "/icons/customer.svg" },
              { label: "Technical Feasibility", icon: "/icons/technology.svg" },
              { label: "Business Viability", icon: "/icons/business.svg" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-3 bg-white border border-[#dde2eb] rounded-xl px-6 py-4">
                <Image src={f.icon} alt={f.label} width={40} height={40} />
                <span className="font-600 text-[0.9rem] text-[#1a2535]">{f.label}</span>
              </div>
            ))}
            <Link href="/about" className="px-6 py-3 bg-[#111111] text-white text-[0.78rem] font-600 hover:bg-[#333] transition-colors rounded-sm">Read More</Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-[clamp(2rem,3vw,2.8rem)] font-700 text-[#1a2535] leading-tight mb-12">Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group bg-[#f0f1f3] hover:bg-[#e8eaf0] rounded-2xl p-8 transition-all duration-200 flex flex-col items-center text-center border border-transparent hover:border-[#1a2535]/15 hover:shadow-sm">
                <div className="w-16 h-16 flex items-center justify-center mb-6">
                  <s.icon size={36} className="text-[#4a4a5a] group-hover:text-[#111111] transition-colors" strokeWidth={1.2} />
                </div>
                <h3 className="font-display text-[0.95rem] font-600 text-[#1a2535] leading-snug">{s.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 px-6 lg:px-10 bg-[#f4f6f9]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#888] font-600 mb-3">Why Enrachna</p>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-700 text-[#1a2535] leading-tight mb-12">The Integrated Advantage</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map((w, i) => (
              <div key={i} className="p-7 bg-white rounded-xl hover:bg-[#ebebeb] transition-colors border border-[#e8e8e8]">
                <div className="font-display text-[3rem] font-800 leading-none text-[#1a2535]/10 mb-5">{w.n}</div>
                <h4 className="text-[0.9rem] font-700 text-[#1a2535] mb-3 leading-snug">{w.title}</h4>
                <p className="text-[#5a6880] text-[0.8rem] leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ── */}
      <section className="bg-[#111111] py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="rounded-xl overflow-hidden">
            <Image src="/office-contact.png" alt="Enrachna Office" width={800} height={600} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div>
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-700 text-white mb-2">Get in Touch</h2>
            <p className="text-white/55 text-[0.88rem] leading-relaxed mb-8">We&apos;d love to chat! Please provide the requested information below, and our team will be in touch ASAP to learn more about your business and how we can help.</p>
            {sent ? (
              <div className="bg-white/10 border border-white/20 rounded-xl p-8 text-center">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-display text-xl font-700 text-white mb-2">Message Sent!</h3>
                <p className="text-white/55 text-[0.88rem]">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="First Name" className="w-full border-b border-white/25 focus:border-white text-white placeholder-white/35 py-3 text-[0.88rem] outline-none transition-colors bg-transparent" />
                  <input type="text" placeholder="Last Name" className="w-full border-b border-white/25 focus:border-white text-white placeholder-white/35 py-3 text-[0.88rem] outline-none transition-colors bg-transparent" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <input type="email" placeholder="Email" className="w-full border-b border-white/25 focus:border-white text-white placeholder-white/35 py-3 text-[0.88rem] outline-none transition-colors bg-transparent" />
                  <input type="tel" placeholder="Phone" className="w-full border-b border-white/25 focus:border-white text-white placeholder-white/35 py-3 text-[0.88rem] outline-none transition-colors bg-transparent" />
                </div>
                <textarea placeholder="Message" rows={4} className="w-full border-b border-white/25 focus:border-white text-white placeholder-white/35 py-3 text-[0.88rem] outline-none resize-none transition-colors bg-transparent" />
                <button onClick={() => setSent(true)} className="mt-1 px-8 py-3.5 bg-white text-[#111111] text-[0.82rem] font-700 hover:bg-[#f0f0f0] transition-colors rounded-sm w-fit">Submit</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}