"use client";
import { useState } from "react";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import Image from "next/image";
import ScrollObserver from "@/components/ScrollObserver";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <div className="bg-[#0f2428] relative overflow-hidden px-6 lg:px-10 py-20">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #b8956a 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#b8956a]/70 font-medium">Contact</span>
          <div className="w-8 h-[2px] bg-[#b8956a]/40 mt-3 mb-5" />
          <h1 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold text-white leading-[1.15] max-w-[600px]">Let&apos;s Build Something<br />Meaningful</h1>
          <p className="text-white/55 text-[1.05rem] leading-relaxed max-w-[480px] mt-5">Share a few details about your project and our team will reach out to discuss how we can help.</p>
        </div>
      </div>

      <section className="bg-white py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div className="rounded-xl overflow-hidden">
            <Image src="/office-contact.png" alt="Enrachna Office" width={800} height={600} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div>
            <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#b8956a] font-medium">Reach Out</span>
            <div className="w-8 h-[2px] bg-[#1a4a52] mt-3 mb-5" />
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-semibold text-[#1a2a2e] mb-3">Get in Touch</h2>
            <p className="text-[#5a6e74] text-[1rem] leading-relaxed mb-8">We&apos;d love to chat! Please provide the requested information below, and our team will be in touch ASAP to learn more about your business and how we can help.</p>
            {sent ? (
              <div className="bg-[#1a4a52]/8 border border-[#1a4a52]/20 rounded-xl p-8 text-center">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-display text-xl font-semibold text-[#1a2a2e] mb-2">Message Sent!</h3>
                <p className="text-[#5a6e74] text-[0.97rem]">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="First Name" className="w-full border-b border-[#1a4a52]/25 focus:border-[#1a4a52] text-[#1a2a2e] placeholder-[#5a6e74]/50 py-3 text-[1rem] outline-none transition-colors bg-transparent" />
                  <input type="text" placeholder="Last Name" className="w-full border-b border-[#1a4a52]/25 focus:border-[#1a4a52] text-[#1a2a2e] placeholder-[#5a6e74]/50 py-3 text-[1rem] outline-none transition-colors bg-transparent" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <input type="email" placeholder="Email" className="w-full border-b border-[#1a4a52]/25 focus:border-[#1a4a52] text-[#1a2a2e] placeholder-[#5a6e74]/50 py-3 text-[1rem] outline-none transition-colors bg-transparent" />
                  <input type="tel" placeholder="Phone" className="w-full border-b border-[#1a4a52]/25 focus:border-[#1a4a52] text-[#1a2a2e] placeholder-[#5a6e74]/50 py-3 text-[1rem] outline-none transition-colors bg-transparent" />
                </div>
                <textarea placeholder="Tell us about your project" rows={4} className="w-full border-b border-[#1a4a52]/25 focus:border-[#1a4a52] text-[#1a2a2e] placeholder-[#5a6e74]/50 py-3 text-[1rem] outline-none resize-none transition-colors bg-transparent" />
                <button onClick={() => setSent(true)} className="mt-1 px-8 py-3.5 bg-[#1a4a52] text-white text-[1rem] font-medium hover:bg-[#0f3038] transition-colors rounded-sm w-fit">Submit</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f2] py-14 px-6 lg:px-10 border-t border-[#ddd8d0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-8 lg:gap-16 items-center justify-center">
            {[
              { icon: Phone, label: "+91 9834305124", href: "tel:+919834305124" },
              { icon: Mail, label: "enrachnadesignlabs@gmail.com", href: "mailto:enrachnadesignlabs@gmail.com" },
              { icon: Globe, label: "www.enrachnadesignlabs.com", href: "https://www.enrachnadesignlabs.com" },
              { icon: MapPin, label: "Mumbai, Maharashtra, India", href: null },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <c.icon size={16} className="text-[#1a4a52] flex-shrink-0" />
                {c.href ? (
                  <a href={c.href} className="text-[1rem] text-[#5a6e74] hover:text-[#1a4a52] transition-colors">{c.label}</a>
                ) : (
                  <span className="text-[1rem] text-[#5a6e74]">{c.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}