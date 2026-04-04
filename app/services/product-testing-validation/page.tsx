"use client";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
const IMG_PH = ({ label = "", cls = "" }: { label?: string; cls?: string }) => (
  <div className={`bg-[#f4f6f9] border-2 border-dashed border-[#dde2eb] rounded-lg flex flex-col items-center justify-center gap-3 text-[#5a6880] ${cls}`}>
    <svg className="opacity-30" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
    {label && <span className="text-[0.66rem] tracking-wide text-center px-6">📌 {label}</span>}
  </div>
);

export default function Page() {
  return (
    <>
      {/* HERO */}
      <div className="bg-[#111111] relative overflow-hidden px-6 lg:px-10 py-20">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #b8956a 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[0.6rem] tracking-[0.28em] uppercase text-white/50 font-medium">Services</span>
          <div className="w-10 h-[1px] bg-white/30 mt-3 mb-5" />
          <h1 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-medium text-white leading-[1.15] max-w-[600px]">
            Validate Before You Commit
          </h1>
          <p className="text-white/60 text-[0.95rem] leading-relaxed max-w-[500px] mt-5">Comprehensive testing and validation services that ensure your product meets every performance, safety, and regulatory requirement.</p>
        </div>
      </div>

      {/* INTRO */}
      <section className="bg-white py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[0.6rem] tracking-[0.28em] uppercase text-[#1a2535] font-medium">Overview</span>
            <div className="w-10 h-[1px] bg-[#111111] mt-3 mb-5" />
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium text-[#1a2535] leading-tight mb-6">Product Testing & Validation</h2>
            <p className="text-[#5a6880] text-[0.92rem] leading-relaxed mb-8">Launching a product without thorough testing is a costly risk. Our product testing and validation service puts your product through rigorous real-world and lab conditions to identify issues before they reach customers. From functional testing to regulatory compliance, we ensure your product is ready for the market.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#333333] text-white px-7 py-3 text-[0.72rem] tracking-[0.12em] uppercase font-medium transition-colors rounded-lg">
              Enquire About This Service <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative">
             <Image
  src="/product-testing.jpeg"
  alt="Product Testing and Validation"
  width={800}
  height={600}
  className="w-full h-full object-cover rounded-lg"
/> 
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="py-24 px-6 lg:px-10 bg-[#f4f6f9]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[0.6rem] tracking-[0.28em] uppercase text-[#1a2535] font-medium">What&apos;s Included</span>
            <div className="w-10 h-[1px] bg-[#111111] mt-3 mb-5" />
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-medium text-[#1a2535] leading-tight mb-8">Scope of Work</h2>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0 mt-2" /><span className="text-[#5a6880] text-[0.88rem] leading-relaxed">Functional and performance testing</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0 mt-2" /><span className="text-[#5a6880] text-[0.88rem] leading-relaxed">Environmental and stress testing</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0 mt-2" /><span className="text-[#5a6880] text-[0.88rem] leading-relaxed">Regulatory compliance and certification support</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0 mt-2" /><span className="text-[#5a6880] text-[0.88rem] leading-relaxed">First article inspection (FAI)</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0 mt-2" /><span className="text-[#5a6880] text-[0.88rem] leading-relaxed">User testing and feedback integration</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0 mt-2" /><span className="text-[#5a6880] text-[0.88rem] leading-relaxed">Durability and lifecycle testing</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0 mt-2" /><span className="text-[#5a6880] text-[0.88rem] leading-relaxed">Test report documentation and sign-off</span></li>
            </ul>
          </div>
          <Image
  src="/product-testing-scope.jpeg"
  alt="Product Testing Scope"
  width={800}
  height={600}
  className="w-full h-full object-cover rounded-lg"
/>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-[#111111] py-20 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #b8956a 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[0.6rem] tracking-[0.28em] uppercase text-white/50 font-medium">Our Approach</span>
          <div className="w-10 h-[1px] bg-white/30 mt-3 mb-5 mx-auto" />
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium text-white leading-tight mb-5">
            Why Choose Enrachna for This Service
          </h2>
          <p className="text-white/60 text-[0.95rem] leading-relaxed max-w-[580px] mx-auto mb-10">Our testing protocols are designed to uncover issues early — when they are cheapest to fix — so you can launch with complete confidence.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-[#f0f0f0] text-[#111111] px-10 py-4 text-[0.75rem] tracking-[0.14em] uppercase font-medium transition-colors rounded-lg">
            Start a Conversation <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="bg-[#111111] py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-[clamp(1.8rem,2.5vw,2.4rem)] font-700 text-white mb-10">Other Services</h2>
          <div className="grid sm:grid-cols-3 gap-5">
                        {[
              { href: "/services/product-engineering", label: "Product Engineering" },
              { href: "/services/product-development", label: "Product Development" },
              { href: "/services/sourcing", label: "Sourcing" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="group block relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3] bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <div className="absolute inset-0 flex items-center justify-center text-white/10">
                    <svg width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                    <h3 className="font-display text-[1.05rem] font-700 text-white group-hover:text-[#4a4a5a] transition-colors">{s.label}</h3>
                    <span className="inline-flex items-center gap-1 mt-1 text-[0.68rem] tracking-wide text-white/50 group-hover:text-white/70 transition-colors">
                      View Service <ChevronRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}