import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

const values = [
  {
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    title: "الإبداع",
    desc: "نؤمن بأن الشباب هم محرك الإبداع والتجديد في المجتمع",
    accent: "primary",
  },
  {
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
    title: "الشراكة",
    desc: "نبني شراكات فاعلة مع مختلف القطاعات لتحقيق أثر مستدام",
    accent: "gold",
  },
  {
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    title: "التميز",
    desc: "نسعى لتقديم برامج نوعية ذات جودة عالية ومعايير متقدمة",
    accent: "primary",
  },
  {
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    title: "المسؤولية",
    desc: "نتحمل مسؤوليتنا تجاه المجتمع ونعمل بشفافية ومصداقية",
    accent: "gold",
  },
];

export default function VisionSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/[0.02] blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[80px] translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10 mb-28 max-w-6xl mx-auto">
          <AnimateOnScroll>
            <div className="relative p-10 md:p-12 rounded-[2rem] overflow-hidden gradient-primary shadow-luxury group cursor-pointer">
              <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/[0.07] group-hover:scale-150 transition-transform duration-1000" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/[0.04]" />
              <div className="absolute top-6 left-6 w-1 h-20 rounded-full bg-gradient-to-b from-[#D4A533]/60 to-transparent" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.12] backdrop-blur-sm text-xs font-bold tracking-[0.15em] text-white/90 uppercase mb-5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  الرؤية
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                  شباب ممكّن
                  <br />
                  يقود التنمية
                </h3>
                <p className="text-white/80 leading-relaxed text-lg font-light">
                  أن نكون المنظمة الرائدة في تمكين الشباب وبناء قدراتهم ليكونوا قادة التغيير الإيجابي في مجتمعاتهم
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="relative p-10 md:p-12 rounded-[2rem] overflow-hidden bg-card shadow-luxury border border-border group hover:border-primary/15 transition-all duration-500 md:mt-8 cursor-pointer">
              <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-primary/[0.03] group-hover:scale-125 transition-transform duration-1000" />
              <div className="absolute top-6 left-6 w-1 h-20 rounded-full gradient-gold opacity-40" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 text-xs font-bold tracking-[0.15em] text-primary uppercase mb-5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                  الرسالة
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                  نبني جيلاً
                  <br />
                  واعياً وقادراً
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                  تقديم برامج ومبادرات نوعية تسهم في استثمار طاقات الشباب وتعزيز قدراتهم على الاعتماد على الذات والمشاركة الفاعلة في بناء المجتمع
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Values */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/8 text-xs font-bold tracking-[0.15em] text-gold uppercase mb-4">
              ✦ ما يميزنا
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">قيمنا</h2>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <AnimateOnScroll key={v.title} delay={i * 0.1}>
              <div className="p-8 rounded-[2rem] bg-card shadow-card border border-border hover-lift gold-border-hover text-center group cursor-pointer">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                    v.accent === "gold" ? "gradient-gold shadow-gold/20" : "gradient-primary shadow-primary/20"
                  }`}
                >
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
