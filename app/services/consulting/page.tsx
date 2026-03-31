import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

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
            Strategic Guidance from<br />Practitioners, Not Theorists
          </h1>
          <p className="text-white/60 text-[0.95rem] leading-relaxed max-w-[500px] mt-5">Honest, experienced consulting on product strategy, feasibility, and go-to-market planning — from a team that has actually built products.</p>
        </div>
      </div>

      {/* INTRO */}
      <section className="bg-white py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[0.6rem] tracking-[0.28em] uppercase text-[#1a2535] font-medium">Overview</span>
            <div className="w-10 h-[1px] bg-[#111111] mt-3 mb-5" />
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium text-[#1a2535] leading-tight mb-6">Consulting</h2>
            <p className="text-[#5a6880] text-[0.92rem] leading-relaxed mb-8">Sometimes you don't need a full project engagement — you need sharp, experienced advice. Our consulting service gives you direct access to our team's expertise for product strategy, feasibility reviews, supplier evaluation, and more.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#333333] text-white px-7 py-3 text-[0.72rem] tracking-[0.12em] uppercase font-medium transition-colors rounded-lg">
              Enquire About This Service <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative">
            <IMG_PH label="Consulting session (800×600px)" cls="aspect-[4/3]" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-[#222222]/20 -z-10" />
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
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0 mt-2" /><span className="text-[#5a6880] text-[0.88rem] leading-relaxed">Product feasibility and market fit assessment</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0 mt-2" /><span className="text-[#5a6880] text-[0.88rem] leading-relaxed">Technology and material selection advisory</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0 mt-2" /><span className="text-[#5a6880] text-[0.88rem] leading-relaxed">Supplier and manufacturing partner evaluation</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0 mt-2" /><span className="text-[#5a6880] text-[0.88rem] leading-relaxed">Product development roadmap planning</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0 mt-2" /><span className="text-[#5a6880] text-[0.88rem] leading-relaxed">Design and engineering peer review</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] flex-shrink-0 mt-2" /><span className="text-[#5a6880] text-[0.88rem] leading-relaxed">IP and innovation strategy guidance</span></li>
            </ul>
          </div>
          <IMG_PH label="Product strategy roadmap (800×600px)" cls="aspect-[4/3]" />
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
          <p className="text-white/60 text-[0.95rem] leading-relaxed max-w-[580px] mx-auto mb-10">We've lived through the challenges of product development from the inside. Our advice is grounded in real-world experience — not textbook frameworks.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-[#f0f0f0] text-[#111111] text-white px-10 py-4 text-[0.75rem] tracking-[0.14em] uppercase font-medium transition-colors rounded-lg">
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
              { href: "/services/industrial-design", label: "Industrial Product Design" },
              { href: "/services/product-engineering", label: "Product Engineering" },
              { href: "/services/prototyping", label: "Prototyping" },
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
