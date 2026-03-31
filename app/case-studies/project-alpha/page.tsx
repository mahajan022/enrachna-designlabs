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
          <span className="text-[0.6rem] tracking-[0.28em] uppercase text-[#1a2535] font-medium">Industrial Design · Prototyping</span>
          <div className="w-10 h-[1px] bg-[#111111] mt-3 mb-5" />
          <h1 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-medium text-white leading-[1.15] max-w-[640px]">
            Case Study —<br />Project Alpha
          </h1>
          <p className="text-white/60 text-[0.95rem] leading-relaxed max-w-[480px] mt-5">From concept sketch to launch-ready prototype</p>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="bg-white px-6 lg:px-10 pt-14 pb-0">
        <div className="max-w-7xl mx-auto">
          <IMG_PH label="Add main project hero image here (1200×675px)" cls="aspect-video" />
        </div>
      </div>

      {/* CHALLENGE */}
      <section className="bg-white py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-[0.6rem] tracking-[0.28em] uppercase text-[#1a2535] font-medium">The Challenge</span>
            <div className="w-10 h-[1px] bg-[#111111] mt-3 mb-5" />
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-medium text-[#1a2535] leading-tight mb-6">What the Client Needed</h2>
            <p className="text-[#5a6880] text-[0.92rem] leading-relaxed mb-8">Our client approached us with an early-stage concept for a new consumer product but lacked the in-house capability to move from sketch to something manufacturable. They needed a single partner to handle industrial design, engineering validation, and a working prototype — all within an aggressive timeline.</p>
            <div>
              <p className="text-[0.6rem] tracking-[0.22em] uppercase text-[#1a2535] font-medium mb-4">Services Used</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[0.68rem] tracking-[0.1em] uppercase bg-[#111111]/8 text-[#1a2535] px-3 py-1.5 rounded-lg font-medium">Industrial Product Design</span>
                <span className="text-[0.68rem] tracking-[0.1em] uppercase bg-[#111111]/8 text-[#1a2535] px-3 py-1.5 rounded-lg font-medium">2D / 3D CAD Modelling</span>
                <span className="text-[0.68rem] tracking-[0.1em] uppercase bg-[#111111]/8 text-[#1a2535] px-3 py-1.5 rounded-lg font-medium">Product Engineering</span>
                <span className="text-[0.68rem] tracking-[0.1em] uppercase bg-[#111111]/8 text-[#1a2535] px-3 py-1.5 rounded-lg font-medium">Prototyping</span>
              </div>
            </div>
          </div>
          <IMG_PH label="Add challenge / brief image here (800×600px)" cls="aspect-[4/3]" />
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-[#f4f6f9] py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <IMG_PH label="Add process / design development image here (800×600px)" cls="aspect-[4/3]" />
          <div>
            <span className="text-[0.6rem] tracking-[0.28em] uppercase text-[#1a2535] font-medium">Our Approach</span>
            <div className="w-10 h-[1px] bg-[#111111] mt-3 mb-5" />
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-medium text-[#1a2535] leading-tight mb-6">How We Solved It</h2>
            <p className="text-[#5a6880] text-[0.92rem] leading-relaxed">We began with an intensive concept development phase, exploring multiple design directions before converging on one that balanced aesthetic appeal with structural feasibility. Parallel engineering analysis ensured the design was manufacturable from the outset — avoiding costly late-stage redesigns.</p>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="bg-[#111111] py-24 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #b8956a 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <span className="text-[0.6rem] tracking-[0.28em] uppercase text-[#1a2535] font-medium">The Outcome</span>
            <div className="w-10 h-[1px] bg-[#111111] mt-3 mb-5" />
            <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-medium text-white leading-tight mb-6">What We Delivered</h2>
            <p className="text-white/65 text-[0.92rem] leading-relaxed mb-10">The client received a fully validated 3D CAD package, production-ready technical documentation, and a high-fidelity functional prototype — completing the full cycle in significantly less time than a traditional multi-vendor approach would have required.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white hover:bg-[#f0f0f0] text-[#111111] text-white px-8 py-3.5 text-[0.72rem] tracking-[0.12em] uppercase font-medium transition-colors rounded-lg">
              Start Your Project <ArrowRight size={14} />
            </Link>
          </div>
          <IMG_PH label="Add final result / finished product image here (800×600px)" cls="aspect-[4/3] !bg-white/5 !border-white/15" />
        </div>
      </section>

      {/* MORE CASES */}
      <section className="bg-white py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <span className="text-[0.6rem] tracking-[0.28em] uppercase text-[#1a2535] font-medium">More Work</span>
          <div className="w-10 h-[1px] bg-[#111111] mt-3 mb-5" />
          <h2 className="font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-medium text-[#1a2535] mb-10">Other Case Studies</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <Link href="/case-studies/project-alpha" className="group block bg-[#f4f6f9] border border-[#dde2eb] hover:border-gold p-6 rounded-lg transition-all">
              <p className="text-[0.6rem] tracking-[0.18em] uppercase text-[#1a2535] mb-2">Industrial Design · Prototyping</p>
              <h3 className="font-display text-[1.15rem] font-semibold text-[#1a2535] mb-1">Project Alpha</h3>
              <span className="inline-flex items-center gap-1 text-[0.68rem] uppercase text-[#1a2535] font-medium">View <ChevronRight size={11} /></span>
            </Link>
            <Link href="/case-studies/project-beta" className="group block bg-[#f4f6f9] border border-[#dde2eb] hover:border-gold p-6 rounded-lg transition-all">
              <p className="text-[0.6rem] tracking-[0.18em] uppercase text-[#1a2535] mb-2">Product Engineering · Tooling</p>
              <h3 className="font-display text-[1.15rem] font-semibold text-[#1a2535] mb-1">Project Beta</h3>
              <span className="inline-flex items-center gap-1 text-[0.68rem] uppercase text-[#1a2535] font-medium">View <ChevronRight size={11} /></span>
            </Link>
            <Link href="/case-studies/project-gamma" className="group block bg-[#f4f6f9] border border-[#dde2eb] hover:border-gold p-6 rounded-lg transition-all">
              <p className="text-[0.6rem] tracking-[0.18em] uppercase text-[#1a2535] mb-2">Reverse Engineering · CAD</p>
              <h3 className="font-display text-[1.15rem] font-semibold text-[#1a2535] mb-1">Project Gamma</h3>
              <span className="inline-flex items-center gap-1 text-[0.68rem] uppercase text-[#1a2535] font-medium">View <ChevronRight size={11} /></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
