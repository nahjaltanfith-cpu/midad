import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import { useI18n } from "@/lib/i18n";

// تنظيم البيانات في مكان واحد لسهولة الإدارة
const coreValues = [
  {
    key: "v1",
    accent: "primary",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  },
  {
    key: "v2",
    accent: "gold",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
  {
    key: "v3",
    accent: "primary",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
  },
  {
    key: "v4",
    accent: "gold",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  },
];

export default function VisionSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* عناصر ديكورية للخلفية (Ambient Background) */}
      <div className="absolute top-0 left-1/4 w-150 h-150 rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-125 h-125 rounded-full bg-gold/4 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Vision & Mission - تصميم جانبي متطور */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32">
          {/* Vision Card */}
          <AnimateOnScroll >
            <div className="h-full relative group p-px rounded-[2.5rem] bg-linear-to-b from-border/50 to-transparent">
              <div className="h-full bg-card/50 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10 border border-white/5 transition-all duration-500 group-hover:bg-card/80 shadow-2xl shadow-black/5">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold tracking-widest text-primary uppercase">{t("vision.visionLabel")}</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight">{t("vision.visionTitle")}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{t("vision.visionDesc")}</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Mission Card */}
          <AnimateOnScroll  delay={0.2}>
            <div className="h-full relative group p-px rounded-[2.5rem] bg-linear-to-b from-border/50 to-transparent">
              <div className="h-full bg-card/50 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10 border border-white/5 transition-all duration-500 group-hover:bg-card/80 shadow-2xl shadow-black/5">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl gradient-gold flex items-center justify-center shadow-lg shadow-gold/20">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold tracking-widest text-gold uppercase">{t("vision.missionLabel")}</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight">{t("vision.missionTitle")}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{t("vision.missionDesc")}</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Values Section */}
        <div className="text-center mb-20">
          <AnimateOnScroll>
            <span className="px-4 py-1.5 rounded-full bg-gold/10 text-[11px] font-black tracking-[0.2em] text-gold uppercase mb-6 inline-block border border-gold/20">
              {t("vision.valuesTag")}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              {t("vision.valuesTitle")}
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Bento Grid Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {coreValues.map((value, i) => (
            <AnimateOnScroll key={value.key} delay={i * 0.1}>
              <div className="group relative p-8 rounded-[2rem] bg-card border border-border/50 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2">
                {/* تأثير الإضاءة الخلفية عند الحوم (Hover Glow) */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10 rounded-full ${value.accent === 'gold' ? 'bg-gold/5' : 'bg-primary/5'}`} />
                
                <div className={`w-14 h-14 mb-8 rounded-2xl flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                  value.accent === "gold" ? "gradient-gold shadow-xl shadow-gold/20" : "gradient-primary shadow-xl shadow-primary/20"
                }`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                  </svg>
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {t(`vision.${value.key}Title`)}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t(`vision.${value.key}Desc`)}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}