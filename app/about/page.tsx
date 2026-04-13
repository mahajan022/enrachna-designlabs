import Link from "next/link";
import Image from "next/image";
import ScrollObserver from "@/components/ScrollObserver";
import { ArrowRight, Shield, Zap, Users, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#0f2428] relative overflow-hidden px-6 lg:px-10 py-20">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #b8956a 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#b8956a]/70 font-medium">About Us</span>
          <div className="w-8 h-[2px] bg-[#b8956a]/40 mt-3 mb-5" />
          <h1 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold text-white leading-[1.15] max-w-[600px]">A Studio Built Around One Simple Belief</h1>
          <p className="text-white/55 text-[1.05rem] leading-relaxed max-w-[500px] mt-5">Great products don&apos;t happen by accident. They are the result of purposeful design, rigorous engineering, and a team that cares about every detail.</p>
        </div>
      </div>

      <section className="bg-white py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#b8956a] font-medium">Who We Are</span>
          <div className="w-8 h-[2px] bg-[#1a4a52] mt-3 mb-6" />
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-[#1a2a2e] mb-10">One team. Every stage of your product journey.</h2>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <div className="space-y-5">
              <p className="text-[#5a6e74] text-[1.02rem] leading-relaxed">We are a team of designers, innovators, engineers and strategists with a common goal of making a meaningful &amp; positive impact — fueled by passion, commitment, and complete transparency.</p>
              <p className="text-[#5a6e74] text-[1.02rem] leading-relaxed">Enrachna Design Labs is a leading agency that provides end-to-end solutions, from the conceptual stage to the final product launch. By offering all key services under one roof, our customers enjoy better project execution, reduced costs, fewer follow-ups, faster time-to-market, and complete confidentiality.</p>
              <p className="text-[#5a6e74] text-[1.02rem] leading-relaxed">With a strong focus on innovation, we continuously strive to create unique, industry-first features — adding significant value to the products we design.</p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image src="/about-team.jpeg" alt="Enrachna Team" width={800} height={600} className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f2] py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#b8956a] font-medium">Our Process</span>
          <div className="w-8 h-[2px] bg-[#1a4a52] mt-3 mb-5" />
          <h2 className="font-display text-[clamp(1.5rem,2.5vw,2.2rem)] font-semibold text-[#1a2a2e] mb-3">The Power of <span className="text-[#1a4a52] text-[2.2rem]">3</span> Key Factors</h2>
          <p className="text-[#5a6e74] text-[1rem] leading-relaxed max-w-[640px] mb-10">Our comprehensive process is structured around three fundamental principles — proven instrumental in delivering successful projects tailored to customer needs.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Customer Desirability", icon: "/icons/customer.svg", desc: "We place the end-user at the centre of every design decision — ensuring the product solves real problems." },
              { title: "Technical Feasibility", icon: "/icons/technology.svg", desc: "Our engineering team validates every design against real-world manufacturing constraints and tolerances." },
              { title: "Business Viability", icon: "/icons/business.svg", desc: "We help clients evaluate commercial potential, cost of goods, and go-to-market strategy alongside the design process." },
            ].map((f) => (
              <div key={f.title} className="bg-white border border-[#ddd8d0] rounded-xl p-7 hover:border-[#1a4a52]/30 hover:shadow-sm transition-all">
                <Image src={f.icon} alt={f.title} width={44} height={44} className="mb-4" />
                <h3 className="font-display text-[1.1rem] font-semibold text-[#1a2a2e] mb-3">{f.title}</h3>
                <p className="text-[#5a6e74] text-[0.97rem] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#b8956a] font-medium">Our Edge</span>
          <div className="w-8 h-[2px] bg-[#1a4a52] mt-3 mb-5" />
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-[#1a2a2e] leading-tight mb-12">Why Clients Choose Enrachna</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Integrated Team", body: "Design, engineering, and prototyping handled by one connected team — no inter-vendor delays or lost context." },
              { icon: Zap, title: "Faster Delivery", body: "Streamlined internal workflows reduce timelines significantly — your product reaches market sooner." },
              { icon: Shield, title: "Full Confidentiality", body: "Your intellectual property is treated with absolute discretion. Every project operates under strict NDA." },
              { icon: Star, title: "Innovation-First", body: "We pursue industry-first features in every project — adding real value that differentiates your product." },
            ].map((item, i) => (
              <div key={i} className="bg-[#f7f5f2] border border-[#ddd8d0] p-7 rounded-xl hover:border-[#1a4a52]/40 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#1a4a52]/10 rounded-xl flex items-center justify-center mb-5">
                  <item.icon size={20} className="text-[#1a4a52]" />
                </div>
                <h3 className="font-display text-[1.05rem] font-semibold text-[#1a2a2e] mb-3">{item.title}</h3>
                <p className="text-[#5a6e74] text-[0.97rem] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a4a52] py-20 px-6 lg:px-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #b8956a 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-xl mx-auto relative z-10">
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-white/60 text-[1.05rem] mb-8">Let&apos;s talk about your next product.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#b8956a] hover:bg-[#a07a52] text-white px-8 py-3.5 text-[0.97rem] font-medium transition-colors rounded-sm">Get In Touch <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  );
}