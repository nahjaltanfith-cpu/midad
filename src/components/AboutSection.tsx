import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import VisionSection from "@/components/VisionSection";

const goals = [
  {
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "استثمار أوقات الشباب",
    desc: "المساهمة في تقديم البرامج والمبادرات لاستثمار أوقات الشباب بشكل إيجابي",
  },
  {
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
    title: "الاعتماد على الذات",
    desc: "تعزيز القدرات الشبابية على الاعتماد على الذات والتنمية الشخصية",
  },
  {
    icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
    title: "بناء المجتمع",
    desc: "تفعيل دور الشباب في بناء وتنمية المجتمع",
  },
  {
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    title: "الاستشارات المهنية",
    desc: "تقديم الاستشارات الشخصية والمهنية والسلوكية والاجتماعية للشباب",
  },
  {
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    title: "البرامج التعليمية",
    desc: "تقديم البرامج والمبادرات لاستثمار أوقات الشباب بشكل إيجابي",
  },
];

const boardMembers = [
  { name: "خالد سالم العواشز", role: "رئيس مجلس الإدارة", color: "from-[#1C6C81] to-[#2A8DA8]" },
  { name: "عبدالله عبدالمحسن الدوسري", role: "نائب رئيس مجلس الإدارة", color: "from-[#D4A533] to-[#E8C84B]" },
  { name: "أحمد إبراهيم الزيداني", role: "عضو", color: "from-[#1C6C81] to-[#2A8DA8]" },
  { name: "عمر محمد أبو ملحة", role: "عضو", color: "from-[#D4A533] to-[#E8C84B]" },
  { name: "سعد إبراهيم آل مهدي", role: "عضو", color: "from-[#1C6C81] to-[#2A8DA8]" },
];

const assemblyMembers = [
  "مجاهد علي دخيخ", "خالد سالم العواشز", "أحمد إبراهيم الزيداني",
  "عمر محمد أبو ملحة", "خالد سعيد القحطاني", "سعد إبراهيم آل مهدي",
  "عبدالله عبدالمحسن الدوسري", "محمد إبراهيم آل مهدي", "محمد عبدالمحسن الدوسري",
  "بسام حميد الوادعي",
];

function PageHeader({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) {
  return (
    <div className="relative overflow-hidden py-28 mb-8">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.72_0.14_75_/_8%)_0%,_transparent_50%)]" />
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/[0.04] animate-[float_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-white/[0.03]" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <AnimateOnScroll>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.1] backdrop-blur-sm text-xs font-bold tracking-[0.15em] text-white/90 uppercase mb-5">
            {badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
          <div className="w-20 h-[3px] mx-auto rounded-full gradient-gold" />
          {subtitle && (
            <p className="text-white/70 max-w-2xl mx-auto mt-5 text-lg font-light leading-relaxed">{subtitle}</p>
          )}
        </AnimateOnScroll>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden">
      <PageHeader
        badge="تعرف علينا"
        title="عن الجمعية"
        subtitle="جمعية أهلية مقرها أبها بمنطقة عسير، تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية"
      />

      <div className="py-20 bg-background relative">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-[100px] translate-x-1/2 -translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Classification badges */}
          <AnimateOnScroll>
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              <span className="px-5 py-2.5 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground shadow-card hover:shadow-elegant hover:border-primary/15 transition-all duration-400">
                التصنيف: المجموعة الرابعة - الخدمات الاجتماعية
              </span>
              <span className="px-5 py-2.5 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground shadow-card hover:shadow-elegant hover:border-primary/15 transition-all duration-400">
                منظمات تقدم خدمات إنسانية واجتماعية
              </span>
            </div>
          </AnimateOnScroll>

          {/* Vision & Mission */}
          <VisionSection />

          {/* Goals */}
          <div className="mb-28">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/8 text-xs font-bold tracking-[0.15em] text-primary uppercase mb-4">
                  ✦ أهدافنا
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">الأهداف الاستراتيجية</h2>
              </div>
            </AnimateOnScroll>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {goals.map((g, i) => (
                <AnimateOnScroll key={i} delay={i * 0.08}>
                  <div className="flex gap-5 p-7 rounded-[1.5rem] bg-card shadow-card border border-border hover-lift gold-border-hover group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/15 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={g.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{g.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Board of Directors */}
          <div className="mb-28">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/8 text-xs font-bold tracking-[0.15em] text-gold uppercase mb-4">
                  القيادة
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">مجلس الإدارة</h2>
              </div>
            </AnimateOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {boardMembers.map((m, i) => (
                <AnimateOnScroll key={m.name} delay={i * 0.08}>
                  <div className="p-6 rounded-[2rem] bg-card shadow-card border border-border text-center hover-lift gold-border-hover group cursor-pointer">
                    {/* Decorative top bar */}
                    <div className={`w-full h-1.5 rounded-full bg-gradient-to-l ${m.color} mb-6 group-hover:h-2 transition-all duration-500`} />
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-2 leading-snug group-hover:text-primary transition-colors duration-300">{m.name}</h4>
                    <span className="text-[11px] font-semibold text-primary bg-primary/8 px-3 py-1.5 rounded-full inline-block group-hover:bg-primary/15 transition-colors duration-300">
                      {m.role}
                    </span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* General Assembly */}
          <div className="mb-8">
            <AnimateOnScroll>
              <div className="text-center mb-14">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/8 text-xs font-bold tracking-[0.15em] text-primary uppercase mb-4">
                  الأعضاء المؤسسون
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">أعضاء الجمعية العمومية</h2>
              </div>
            </AnimateOnScroll>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {assemblyMembers.map((name, i) => (
                <AnimateOnScroll key={i} delay={i * 0.04}>
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-card shadow-sm border border-border hover:shadow-card hover:border-primary/15 hover:-translate-y-1 transition-all duration-400 cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center text-primary text-sm font-bold shrink-0 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">{name}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
