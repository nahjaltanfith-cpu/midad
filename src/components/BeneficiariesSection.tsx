import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import headerBeneficiaries from "@/assets/header-beneficiaries.jpg";
import { useI18n } from "@/lib/i18n";

const initiatives = [
  {
    title: "برامج بناء القدرات",
    desc: "دورات تدريبية متخصصة في القيادة والتواصل وإدارة المشاريع",
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    type: "primary" as const,
  },
  {
    title: "الإرشاد المهني",
    desc: "جلسات استشارية فردية وجماعية لتوجيه الشباب مهنياً",
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
    type: "gold" as const,
  },
  {
    title: "المبادرات التطوعية",
    desc: "فرص تطوعية لتعزيز روح المسؤولية المجتمعية لدى الشباب",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    type: "primary" as const,
  },
  {
    title: "ريادة الأعمال",
    desc: "دعم وتحفيز المشاريع الشبابية الناشئة وتنمية مهارات ريادة الأعمال",
    icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    type: "gold" as const,
  },
];

export default function BeneficiariesSection() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden">
      {/* Page Header */}
      <div className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${headerBeneficiaries})` }} />
        <div className="absolute inset-0 bg-gradient-to-l from-[#071e25]/85 via-[#1C6C81]/70 to-[#2A8DA8]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.72_0.14_75_/_10%)_0%,_transparent_50%)]" />
        <div className="absolute bottom-10 left-20 w-40 h-40 rounded-full border border-white/[0.05] animate-[float_9s_ease-in-out_infinite]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.1] backdrop-blur-sm text-xs font-bold tracking-[0.15em] text-white/90 uppercase mb-5">
              {t("beneficiaries.badge")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t("beneficiaries.title")}</h1>
            <div className="w-20 h-[3px] mx-auto rounded-full gradient-gold" />
          </AnimateOnScroll>
        </div>
      </div>

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 relative z-10">
          {/* Initiatives */}
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/8 text-xs font-bold tracking-[0.15em] text-primary uppercase mb-4">
                {t("beneficiaries.initTag")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t("beneficiaries.initTitle")}</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {initiatives.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-[2rem] bg-card shadow-luxury border border-border hover-lift gold-border-hover flex gap-6 items-start group cursor-pointer">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                      item.type === "gold" ? "gradient-gold shadow-gold/20" : "gradient-primary shadow-primary/20"
                    }`}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{t(`beneficiaries.i${i + 1}Title`)}</h4>
                    <p className="text-muted-foreground leading-relaxed">{t(`beneficiaries.i${i + 1}Desc`)}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
