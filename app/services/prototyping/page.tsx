import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import ScrollObserver from "@/components/ScrollObserver";

export default function Page() {
  return (
    <>
      <ScrollObserver />
      <div className="bg-[#0f2428] relative overflow-hidden px-6 lg:px-10 py-20">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #b8956a 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[0.62rem] tracking-[0.28em] uppercase text-[#b8956a]/70 font-medium">Services</span>
          <div className="w-8 h-[2px] bg-[#b8956a]/40 mt-3 mb-5" />
          <h1 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold text-white leading-[1.15] max-w-[620px]">Hold Your Idea in Your Hands Before Mass Production</h1>
          <p className="text-white/55 text-[1rem] leading-relaxed max-w-[500px] mt-5">From concept models to functional prototypes — rapidly validating form, fit, and function at every stage.</p>
        </div>
      </div>
      <section className="bg-white py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="fade-left">
            <span className="text-[0.62rem] tracking-[0.28em] uppercase text-[#b8956a] font-medium">Overview</span>
            <div className="w-8 h-[2px] bg-[#1a4a52] mt-3 mb-5" />
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-[#1a2a2e] leading-tight mb-6">Prototyping</h2>
            <p className="text-[#5a6e74] text-[0.97rem] leading-relaxed mb-8">Encharna delivers highly accurate components, parts & fully-functional prototypes using wide variety of materials. allowing you to validate assumptions, test usability, and catch issues before they become expensive manufacturing problems. We build prototypes at every fidelity level — from appearance models that showcase your CMF to fully functional units ready for user testing.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#1a4a52] hover:bg-[#0f3038] text-white px-7 py-3.5 text-[0.88rem] font-medium transition-colors rounded-sm">Enquire About This Service <ArrowRight size={14} /></Link>
          </div>
          <div className="relative rounded-xl overflow-hidden fade-right">
            <Image src="/prototyping.jpeg" alt="Prototyping" width={800} height={600} className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>
      <section className="py-24 px-6 lg:px-10 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="fade-right">
            <span className="text-[0.62rem] tracking-[0.28em] uppercase text-[#b8956a] font-medium">What&apos;s Included</span>
            <div className="w-8 h-[2px] bg-[#1a4a52] mt-3 mb-5" />
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-semibold text-[#1a2a2e] leading-tight mb-8">Scope of Work</h2>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1a4a52] flex-shrink-0 mt-2" /><span className="text-[#5a6e74] text-[0.92rem] leading-relaxed">3D printing — FDM, SLA, SLS for concept and functional models</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1a4a52] flex-shrink-0 mt-2" /><span className="text-[#5a6e74] text-[0.92rem] leading-relaxed">CNC machined appearance and functional prototypes</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1a4a52] flex-shrink-0 mt-2" /><span className="text-[#5a6e74] text-[0.92rem] leading-relaxed">Soft tooling and vacuum casting for low-volume runs</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1a4a52] flex-shrink-0 mt-2" /><span className="text-[#5a6e74] text-[0.92rem] leading-relaxed">Surface finishing, painting, and CMF representation</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1a4a52] flex-shrink-0 mt-2" /><span className="text-[#5a6e74] text-[0.92rem] leading-relaxed">Functional assembly and fit-check evaluation</span></li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#1a4a52] flex-shrink-0 mt-2" /><span className="text-[#5a6e74] text-[0.92rem] leading-relaxed">User testing support and design iteration</span></li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden fade-left">
            <Image src="/prototyping-scope.jpeg" alt="Prototyping scope" width={800} height={600} className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>
      <section className="bg-[#1a4a52] py-20 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #b8956a 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10 fade-up">
          <span className="text-[0.62rem] tracking-[0.28em] uppercase text-[#b8956a]/80 font-medium">Our Approach</span>
          <div className="w-8 h-[2px] bg-[#b8956a]/40 mt-3 mb-5 mx-auto" />
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-white leading-tight mb-5">Why Choose Enrachna for This Service</h2>
          <p className="text-white/60 text-[0.97rem] leading-relaxed max-w-[580px] mx-auto mb-10">Because we do both design and engineering in-house, our prototypes are never one-offs — they feed directly back into your production-ready files.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#b8956a] hover:bg-[#a07a52] text-white px-10 py-4 text-[0.88rem] font-medium transition-colors rounded-sm">Start a Conversation <ArrowRight size={14} /></Link>
        </div>
      </section>
      <section className="bg-[#0f2428] py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <span className="text-[0.62rem] tracking-[0.28em] uppercase text-[#b8956a]/70 font-medium">Explore More</span>
          <div className="w-8 h-[2px] bg-[#b8956a]/30 mt-3 mb-8" />
          <h2 className="font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-semibold text-white mb-8">Other Services</h2>
          <div className="grid sm:grid-cols-3 gap-5 fade-up">
            <Link href="/services/cad-modelling" className="group block relative overflow-hidden rounded-xl"><div className="aspect-[4/3] rounded-xl overflow-hidden relative"><Image src="/cad-modelling.jpeg" alt="2D / 3D CAD Modelling" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" /><div className="absolute bottom-0 left-0 right-0 p-5 z-20"><h3 className="font-display text-[1rem] font-semibold text-white leading-snug">2D / 3D CAD Modelling</h3><span className="inline-flex items-center gap-1 mt-1.5 text-[0.7rem] tracking-wide text-[#b8956a]/80 group-hover:text-[#b8956a] transition-colors">View Service <ChevronRight size={11} /></span></div></div></Link>
            <Link href="/services/product-engineering" className="group block relative overflow-hidden rounded-xl"><div className="aspect-[4/3] rounded-xl overflow-hidden relative"><Image src="/product-engineering.jpg" alt="Product Engineering" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" /><div className="absolute bottom-0 left-0 right-0 p-5 z-20"><h3 className="font-display text-[1rem] font-semibold text-white leading-snug">Product Engineering</h3><span className="inline-flex items-center gap-1 mt-1.5 text-[0.7rem] tracking-wide text-[#b8956a]/80 group-hover:text-[#b8956a] transition-colors">View Service <ChevronRight size={11} /></span></div></div></Link>
            <Link href="/services/tool-design-development" className="group block relative overflow-hidden rounded-xl"><div className="aspect-[4/3] rounded-xl overflow-hidden relative"><Image src="/tool-design-development.jpeg" alt="Tool Design and Development" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" /><div className="absolute bottom-0 left-0 right-0 p-5 z-20"><h3 className="font-display text-[1rem] font-semibold text-white leading-snug">Tool Design and Development</h3><span className="inline-flex items-center gap-1 mt-1.5 text-[0.7rem] tracking-wide text-[#b8956a]/80 group-hover:text-[#b8956a] transition-colors">View Service <ChevronRight size={11} /></span></div></div></Link>
          </div>
        </div>
      </section>
    </>
  );
}
