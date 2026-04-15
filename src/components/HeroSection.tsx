import { Link } from "@tanstack/react-router";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import VisionSection from "@/components/VisionSection";

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Gradient background instead of image */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#071e25]/98 via-[#1C6C81]/90 to-[#2A8DA8]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_oklch(0.72_0.14_75_/_8%)_0%,_transparent_50%)]" />

        {/* Decorative geometry */}
        <div className="absolute top-20 left-16 w-80 h-80 rounded-full border border-white/[0.04] animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute top-32 left-28 w-56 h-56 rounded-full border border-white/[0.03] animate-[float_10s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-40 left-1/3 w-48 h-48 rounded-full border border-white/[0.03] animate-[float_8s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/4 right-8 w-[3px] h-28 rounded-full bg-gradient-to-b from-[#D4A533]/50 to-transparent" />
        <div className="absolute bottom-1/3 right-16 w-[3px] h-20 rounded-full bg-gradient-to-b from-white/10 to-transparent" />

        {/* Floating orbs */}
        <div className="absolute top-[15%] left-[10%] w-3 h-3 rounded-full bg-gold/30" style={{ animation: "float 6s ease-in-out infinite" }} />
        <div className="absolute top-[40%] left-[25%] w-2 h-2 rounded-full bg-white/20" style={{ animation: "float 8s ease-in-out infinite 1s" }} />
        <div className="absolute bottom-[25%] left-[15%] w-2 h-2 rounded-full bg-gold/20" style={{ animation: "float 7s ease-in-out infinite 2s" }} />
        <div className="absolute top-[60%] right-[20%] w-4 h-4 rounded-full bg-white/10" style={{ animation: "float 9s ease-in-out infinite 3s" }} />

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.15em] text-white/95 mb-10 border border-[#D4A533]/30 bg-[#D4A533]/10 backdrop-blur-sm"
              style={{ animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#D4A533] animate-pulse" />
              نحو جيل ممكّن يقود المستقبل
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-8"
              style={{ animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s forwards", opacity: 0 }}
            >
              مداد لتمكين
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#D4A533] via-[#E8C84B] to-[#f0d06e]">
                الشباب
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-white/85 leading-relaxed mb-12 max-w-xl font-light"
              style={{ animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s forwards", opacity: 0 }}
            >
              نسعى لبناء قدرات الشباب وتعزيز دورهم في التنمية المجتمعية من خلال برامج ومبادرات نوعية تصنع التغيير الإيجابي
            </p>

            <div
              className="flex flex-wrap gap-5"
              style={{ animation: "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.45s forwards", opacity: 0 }}
            >
              <Link to="/about">
                <button className="rounded-full px-10 py-3.5 text-base font-bold text-white gradient-gold shadow-gold hover:shadow-xl transition-all duration-500 hover:scale-105 gold-border-hover">
                  اكتشف المزيد
                </button>
              </Link>
              <Link to="/about">
                <button className="rounded-full px-10 py-3.5 text-base font-bold border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/50">
                  من نحن
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
      </section>

      {/* Vision & Mission on Home Page */}
      <VisionSection />
    </>
  );
}
