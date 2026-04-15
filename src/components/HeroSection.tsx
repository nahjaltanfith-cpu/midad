import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="شباب سعوديون في بيئة عمل حديثة"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-l from-[#0d3d4a]/95 via-[#1C6C81]/80 to-[#2A8DA8]/65" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full border border-white/5" />
      <div className="absolute bottom-32 left-40 w-40 h-40 rounded-full border border-white/5" />
      <div className="absolute top-1/3 right-10 w-2 h-24 rounded-full bg-gradient-to-b from-[#E8B84B]/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <span
            className="inline-block px-5 py-2 rounded-full text-xs font-bold tracking-wider gradient-gold text-white mb-8 shadow-lg shadow-[#C5952A]/20"
            style={{ animation: "fadeUp 0.6s ease-out forwards" }}
          >
            نحو جيل ممكّن
          </span>
          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8"
            style={{ animation: "fadeUp 0.6s ease-out 0.15s forwards", opacity: 0 }}
          >
            مداد لتمكين
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#E8B84B] to-[#f0cb6e]">الشباب</span>
          </h1>
          <p
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-lg"
            style={{ animation: "fadeUp 0.6s ease-out 0.3s forwards", opacity: 0 }}
          >
            نسعى لبناء قدرات الشباب وتعزيز دورهم في التنمية المجتمعية من خلال برامج ومبادرات نوعية
          </p>
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: "fadeUp 0.6s ease-out 0.45s forwards", opacity: 0 }}
          >
            <Button variant="gradient-gold" size="lg" className="rounded-full px-10 text-base shadow-lg shadow-[#C5952A]/25 hover:shadow-xl hover:shadow-[#C5952A]/30 transition-shadow">
              اكتشف المزيد
            </Button>
            <a href="#about">
              <Button variant="outline" size="lg" className="rounded-full px-10 text-base border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                من نحن
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
