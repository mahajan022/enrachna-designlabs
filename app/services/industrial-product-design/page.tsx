import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="bg-[#0f2428] relative overflow-hidden px-6 lg:px-10 py-20">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #b8956a 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[0.62rem] tracking-[0.28em] uppercase text-[#b8956a]/70 font-medium">Services</span>
          <div className="w-8 h-[2px] bg-[#b8956a]/40 mt-3 mb-5" />
          <h1 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold text-white leading-[1.15] max-w-[620px]">
            Design That Merges Beauty With Function
          </h1>
          <p className="text-white/55 text-[1rem] leading-relaxed max-w-[500px] mt-5">Human-centred industrial design that turns your product vision into forms users love and manufacturers can build.</p>
        </div>
      </div>
      <section className="bg-white py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[0.62rem] tracking-[0.28em] uppercase text-[#b8956a] font-medium">Overview</span>
            <div className="w-8 h-[2px] bg-[#1a4a52] mt-3 mb-5" />
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-[#1a2a2e] leading-tight mb-6">Industrial Product Design</h2>
            <p className="text-[#5a6e74] text-[0.97rem] leading-relaxed mb-8">Great products start with great design. Our industrial design team blends aesthetics, ergonomics, and manufacturability to create products that stand out on the shelf and in the hands of your users. From early sketches to final CMF definition, we guide the complete visual and physical language of your product.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1a4a52] hover:bg-[#0f3038] text-white px-7 py-3.5 text-[0.88rem] font-medium transition-colors rounded-sm">
              Enquire About This Service <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image src="/industrial-product-design.jpeg" alt="Industrial Product Design" width={800} height={600} className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>
      <section className="py-24 px-6 lg:px-10 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[0.62rem] tracking-[0.28em] uppercase text-[#b8956a] font-medium">What&apos;s Included</span>
            <div className="w-8 h-[2px] bg-[#1a4a52] mt-3 mb-5" />
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-semibold text-[#1a2a2e] leading-tight mb-8">Scope of Work</h2>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1a4a52] flex-shrink-0 mt-2" /><span className="text-[#5a6e74] text-[0.92rem] leading-relaxed">User research, ergonomics, and human-centred design</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1a4a52] flex-shrink-0 mt-2" /><span className="text-[#5a6e74] text-[0.92rem] leading-relaxed">Concept ideation and sketching</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1a4a52] flex-shrink-0 mt-2" /><span className="text-[#5a6e74] text-[0.92rem] leading-relaxed">CMF (Colour, Material, Finish) definition</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1a4a52] flex-shrink-0 mt-2" /><span className="text-[#5a6e74] text-[0.92rem] leading-relaxed">Form development and aesthetic refinement</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1a4a52] flex-shrink-0 mt-2" /><span className="text-[#5a6e74] text-[0.92rem] leading-relaxed">Design for manufacture consideration at concept stage</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1a4a52] flex-shrink-0 mt-2" /><span className="text-[#5a6e74] text-[0.92rem] leading-relaxed">Presentation renders and concept communication decks</span></li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image src="/industrial-product-design-scope.jpeg" alt="Industrial Product Design scope" width={800} height={600} className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>
      <section className="bg-[#1a4a52] py-20 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #b8956a 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-[0.62rem] tracking-[0.28em] uppercase text-[#b8956a]/80 font-medium">Our Approach</span>
          <div className="w-8 h-[2px] bg-[#b8956a]/40 mt-3 mb-5 mx-auto" />
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-white leading-tight mb-5">Why Choose Enrachna for This Service</h2>
          <p className="text-white/60 text-[0.97rem] leading-relaxed max-w-[580px] mx-auto mb-10">Our designers think beyond aesthetics — every decision is grounded in how the product will be manufactured, used, and perceived in the market.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#b8956a] hover:bg-[#a07a52] text-white px-10 py-4 text-[0.88rem] font-medium transition-colors rounded-sm">Start a Conversation <ArrowRight size={14} /></Link>
        </div>
      </section>
      <section className="bg-[#0f2428] py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <span className="text-[0.62rem] tracking-[0.28em] uppercase text-[#b8956a]/70 font-medium">Explore More</span>
          <div className="w-8 h-[2px] bg-[#b8956a]/30 mt-3 mb-8" />
          <h2 className="font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-semibold text-white mb-8">Other Services</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <Link href="/services/cad-modelling" className="group block relative overflow-hidden rounded-xl"><div className="aspect-[4/3] rounded-xl overflow-hidden relative"><Image src="/cad-modelling.jpeg" alt="2D / 3D CAD Modelling" fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" /><div className="absolute bottom-0 left-0 right-0 p-5 z-20"><h3 className="font-display text-[1rem] font-semibold text-white leading-snug">2D / 3D CAD Modelling</h3><span className="inline-flex items-center gap-1 mt-1.5 text-[0.7rem] tracking-wide text-[#b8956a]/80 group-hover:text-[#b8956a] transition-colors">View Service <ChevronRight size={11} /></span></div></div></Link>
            <Link href="/services/product-engineering" className="group block relative overflow-hidden rounded-xl"><div className="aspect-[4/3] rounded-xl overflow-hidden relative"><Image src="/product-engineering.jpeg" alt="Product Engineering" fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" /><div className="absolute bottom-0 left-0 right-0 p-5 z-20"><h3 className="font-display text-[1rem] font-semibold text-white leading-snug">Product Engineering</h3><span className="inline-flex items-center gap-1 mt-1.5 text-[0.7rem] tracking-wide text-[#b8956a]/80 group-hover:text-[#b8956a] transition-colors">View Service <ChevronRight size={11} /></span></div></div></Link>
            <Link href="/services/prototyping" className="group block relative overflow-hidden rounded-xl"><div className="aspect-[4/3] rounded-xl overflow-hidden relative"><Image src="/prototyping.jpeg" alt="Prototyping" fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" /><div className="absolute bottom-0 left-0 right-0 p-5 z-20"><h3 className="font-display text-[1rem] font-semibold text-white leading-snug">Prototyping</h3><span className="inline-flex items-center gap-1 mt-1.5 text-[0.7rem] tracking-wide text-[#b8956a]/80 group-hover:text-[#b8956a] transition-colors">View Service <ChevronRight size={11} /></span></div></div></Link>
          </div>
        </div>
      </section>
    </>
  );
}
