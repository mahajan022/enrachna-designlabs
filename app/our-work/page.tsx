import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollObserver from "@/components/ScrollObserver";

const projects = [
  {
    id: 1,
    title: "BLDC Ceiling Fan Power Controller",
    category: "Home Appliance",
    description: "A compact and efficient BLDC motor power controller designed for ceiling fans. Engineered for precise speed control, energy efficiency, and silent operation — delivering superior performance over conventional AC motor controllers.",
    tags: ["Product Designing", "Product Engineering", "Product Development"],
    img: "/work-bldc-fan.jpg",
  },
  {
    id: 2,
    title: "AC Temperature Controller",
    category: "Home Appliances",
    description: "A sleek and intuitive temperature controller module for air conditioning systems. Designed with a focus on user experience and manufacturability — integrating seamless hardware and software to deliver precise thermal management.",
    tags: ["Product Design", "Prototyping"],
    img: "/work-ac-controller.jpg",
  },
];

export default function OurWorkPage() {
  return (
    <>
      <ScrollObserver />

      {/* HERO */}
      <div className="bg-[#0f2428] relative overflow-hidden px-6 lg:px-10 py-24">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #b8956a 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#b8956a]/70 font-medium">Portfolio</span>
          <div className="w-8 h-[2px] bg-[#b8956a]/40 mt-3 mb-5" />
          <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-semibold text-white leading-[1.15] max-w-[700px]">
            Products We&apos;ve Brought to Life
          </h1>
          <p className="text-white/55 text-[1rem] leading-relaxed max-w-[520px] mt-5">
            A selection of real-world projects where we turned ideas into market-ready products — from concept to final production.
          </p>
        </div>
      </div>

      {/* PROJECTS */}
      <section className="bg-white py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-24">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Image */}
              <div className={`rounded-2xl overflow-hidden bg-[#f7f5f2] ${i % 2 === 0 ? "fade-left" : "fade-right"}`}>
                <Image
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className={i % 2 === 0 ? "fade-right" : "fade-left"}>
                <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#b8956a] font-medium">{p.category}</span>
                <div className="w-8 h-[2px] bg-[#1a4a52] mt-3 mb-5" />
                <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-[#1a2a2e] leading-tight mb-5">
                  {p.title}
                </h2>
                <p className="text-[#5a6e74] text-[1rem] leading-relaxed mb-8">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 bg-[#f7f5f2] border border-[#ddd8d0] rounded-full text-[0.78rem] font-medium text-[#1a4a52]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a4a52] py-20 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #b8956a 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-xl mx-auto text-center relative z-10 fade-up">
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold text-white mb-4">
            Ready to Build Your Product?
          </h2>
          <p className="text-white/60 text-[1rem] mb-8">
            Let&apos;s discuss your idea and turn it into the next success story.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#b8956a] hover:bg-[#a07a52] text-white px-8 py-3.5 text-[0.97rem] font-medium transition-colors rounded-sm"
          >
            Start a Project <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
