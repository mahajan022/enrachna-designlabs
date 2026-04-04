import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Zap, Users, Star } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="bg-[#111111] relative overflow-hidden px-6 lg:px-10 py-20">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-white/60 font-600 mb-4">About Us</p>
          <h1 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-700 text-white leading-[1.15] max-w-[600px]">
            A Studio Built Around One Simple Belief
          </h1>
          <p className="text-white/60 text-[0.95rem] leading-relaxed max-w-[500px] mt-5">
            Great products don&apos;t happen by accident. They are the result of purposeful design, rigorous engineering, and a team that cares about every detail.
          </p>
        </div>
      </div>

      {/* WHO WE ARE */}
      <section className="bg-white py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-700 text-[#1a2535] mb-6">Who we are</h2>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <div className="space-y-5">
              <p className="text-[#5a6880] text-[0.95rem] leading-relaxed">
                We are a team of designers, innovators, engineers and strategists with a common goal of making a meaningful &amp; a positive impact.
              </p>
              <p className="text-[#5a6880] text-[0.95rem] leading-relaxed">
                Ever since we commenced our operations in October 2021, we have been helping our clients achieve their business goals. We are working in close coordination with our clients almost like their extended teams while maintaining business ethics and complete transparency.
              </p>
              <p className="text-[#5a6880] text-[0.95rem] leading-relaxed">
                Fueled by our passion and commitment, we have been successfully delivering projects and striving to exceed the customer expectation by going the extra mile. For us, each and every project is unique, and keeping user needs in mind, we strive to address their pain points through inclusive design and detailed engineering.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/about-team.jpeg"
                alt="Enrachna Design Labs Team"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 KEY FACTORS */}
      <section className="bg-[#f4f6f9] py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-[clamp(1.5rem,2.5vw,2.2rem)] font-700 text-[#1a2535] mb-3">
            The Power of <span className="text-[#1a2535] text-[2rem]">3</span> Key Factors Driving Our Complete Design Process
          </h2>
          <p className="text-[#5a6880] text-[0.88rem] leading-relaxed max-w-[640px] mb-10">
            Our comprehensive process is structured around three fundamental principles. These principles have proven instrumental in delivering successful projects that are tailored to customer needs, consistently achieving outcomes in the least possible time and with minimal iterations throughout the product design and development phases.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Customer Desirability", icon: "👤", desc: "We place the end-user at the centre of every design decision — ensuring the product solves real problems people actually have." },
              { title: "Technical Feasibility", icon: "⚙️", desc: "Our engineering team validates every design against real-world manufacturing constraints, materials, and tolerances." },
              { title: "Business Viability", icon: "📊", desc: "We help clients evaluate commercial potential, cost of goods, and go-to-market strategy alongside the design process." },
            ].map((f) => (
              <div key={f.title} className="bg-white border border-[#dde2eb] rounded-xl p-7">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display text-[1rem] font-700 text-[#1a2535] mb-3">{f.title}</h3>
                <p className="text-[#5a6880] text-[0.82rem] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR EDGE */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#1a2535] font-600 mb-3">Our Edge</p>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-700 text-[#1a2535] leading-tight mb-12">Why Clients Choose Enrachna</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Integrated Team", body: "Design, engineering, and prototyping handled by one connected team — no inter-vendor delays or lost context." },
              { icon: Zap, title: "Faster Delivery", body: "Streamlined internal workflows reduce timelines significantly — your product reaches market sooner." },
              { icon: Shield, title: "Full Confidentiality", body: "Your intellectual property is treated with absolute discretion. Every project operates under strict NDA." },
              { icon: Star, title: "Innovation-First", body: "We pursue industry-first features in every project — adding real value that differentiates your product." },
            ].map((item, i) => (
              <div key={i} className="bg-[#f4f6f9] border border-[#dde2eb] p-7 rounded-xl hover:border-[#222222]/30 hover:shadow-md transition-all">
                <div className="w-11 h-11 bg-[#ebebeb] rounded-xl flex items-center justify-center mb-5">
                  <item.icon size={18} className="text-[#1a2535]" />
                </div>
                <h3 className="font-display text-[1rem] font-700 text-[#1a2535] mb-3">{item.title}</h3>
                <p className="text-[#5a6880] text-[0.82rem] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111111] py-20 px-6 lg:px-10 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-700 text-white mb-4">Ready to Work Together?</h2>
          <p className="text-white/60 text-[0.92rem] mb-8">Let&apos;s talk about your next product.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#1a2535] px-8 py-3.5 text-[0.78rem] font-700 hover:bg-[#f0f0f0] transition-colors rounded-sm">
            Get In Touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}