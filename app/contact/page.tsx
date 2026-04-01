"use client";
import { useState } from "react";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import Image from "next/image";
export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* HERO */}
      <div className="bg-[#111111] relative overflow-hidden px-6 lg:px-10 py-20">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-white/50 font-600 mb-4">Contact</p>
          <h1 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-700 text-white leading-[1.15] max-w-[600px]">
            Let&apos;s Build Something<br />Worth Remembering
          </h1>
          <p className="text-white/55 text-[0.95rem] leading-relaxed max-w-[480px] mt-5">
            Share a few details about your project and our team will reach out to discuss how we can help.
          </p>
        </div>
      </div>

      {/* CONTACT BODY */}
      <section className="bg-white py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          {/* Left — office image placeholder */}
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/office-contact.png"
              alt="Enrachna Office"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Right form */}
          <div>
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-700 text-[#1a2535] mb-2">Get in Touch</h2>
            <p className="text-[#5a6880] text-[0.88rem] leading-relaxed mb-8">
              We&apos;d love to chat! Please provide the requested information below, and our team will be in touch ASAP to learn more about your business and how we can help.
            </p>

            {sent ? (
              <div className="bg-[#f4f6f9] border border-[#dde2eb] rounded-xl p-8 text-center">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-display text-xl font-700 text-[#1a2535] mb-2">Message Sent!</h3>
                <p className="text-[#5a6880] text-[0.88rem]">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input type="text" placeholder="First Name"
                      className="w-full border-b border-[#dde2eb] focus:border-[#222222] text-[#1a2535] placeholder-[#9aa4b5] py-3 text-[0.88rem] outline-none transition-colors bg-transparent" />
                  </div>
                  <div>
                    <input type="text" placeholder="Last Name"
                      className="w-full border-b border-[#dde2eb] focus:border-[#222222] text-[#1a2535] placeholder-[#9aa4b5] py-3 text-[0.88rem] outline-none transition-colors bg-transparent" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="email" placeholder="Email"
                    className="w-full border-b border-[#dde2eb] focus:border-[#222222] text-[#1a2535] placeholder-[#9aa4b5] py-3 text-[0.88rem] outline-none transition-colors bg-transparent" />
                  <input type="tel" placeholder="Phone"
                    className="w-full border-b border-[#dde2eb] focus:border-[#222222] text-[#1a2535] placeholder-[#9aa4b5] py-3 text-[0.88rem] outline-none transition-colors bg-transparent" />
                </div>
                <textarea placeholder="Message" rows={4}
                  className="w-full border-b border-[#dde2eb] focus:border-[#222222] text-[#1a2535] placeholder-[#9aa4b5] py-3 text-[0.88rem] outline-none resize-none transition-colors bg-transparent" />
                <button onClick={handleSubmit}
                  className="mt-2 px-8 py-3.5 bg-[#111111] hover:bg-[#0a0a0a] text-white text-[0.82rem] font-600 rounded-sm transition-colors w-fit">
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT INFO STRIP */}
      <section className="bg-[#f4f6f9] py-14 px-6 lg:px-10 border-t border-[#dde2eb]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-8 lg:gap-16 items-center justify-center">
            {[
              { icon: Phone, label: "+91 9506 392 933", href: "tel:+919506392933" },
              { icon: Mail, label: "enrachnadesignlabs@gmail.com", href: "mailto:enrachnadesignlabs@gmail.com" },
              { icon: Globe, label: "www.enrachnadesign.com", href: "https://www.enrachnadesign.com" },
              { icon: MapPin, label: "Mumbai, Maharashtra, India", href: null },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <c.icon size={16} className="text-[#1a2535] flex-shrink-0" />
                {c.href ? (
                  <a href={c.href} className="text-[0.85rem] text-[#5a6880] hover:text-[#1a2535] transition-colors">{c.label}</a>
                ) : (
                  <span className="text-[0.85rem] text-[#5a6880]">{c.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
