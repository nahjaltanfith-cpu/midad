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
      <div className="absolute inset-0 bg-gradient-to-l from-[#1C6C81]/90 via-[#1C6C81]/75 to-[#2A8DA8]/60" />
      
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider gradient-gold text-white mb-6">
            نحو جيل ممكّن
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            مداد لتمكين
            <br />
            <span className="text-[#E8B84B]">الشباب</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-lg">
            نسعى لبناء قدرات الشباب وتعزيز دورهم في التنمية المجتمعية من خلال برامج ومبادرات نوعية
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient-gold" size="lg" className="rounded-full px-8 text-base">
              اكتشف المزيد
            </Button>
            <a href="#about">
              <Button variant="outline" size="lg" className="rounded-full px-8 text-base border-white/40 text-white hover:bg-white/10 hover:text-white">
                من نحن
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
