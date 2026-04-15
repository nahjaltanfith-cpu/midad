const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "الإبداع",
    desc: "نؤمن بأن الشباب هم محرك الإبداع والتجديد في المجتمع",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "الشراكة",
    desc: "نبني شراكات فاعلة مع مختلف القطاعات لتحقيق أثر مستدام",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "التميز",
    desc: "نسعى لتقديم برامج نوعية ذات جودة عالية ومعايير متقدمة",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "المسؤولية",
    desc: "نتحمل مسؤوليتنا تجاه المجتمع ونعمل بشفافية ومصداقية",
  },
];

export default function VisionSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="relative p-8 rounded-2xl overflow-hidden gradient-primary shadow-elegant">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-white/70 uppercase mb-2 block">الرؤية</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                شباب ممكّن يقود التنمية
              </h3>
              <p className="text-white/85 leading-relaxed">
                أن نكون المنظمة الرائدة في تمكين الشباب وبناء قدراتهم ليكونوا قادة التغيير الإيجابي في مجتمعاتهم
              </p>
            </div>
          </div>

          <div className="relative p-8 rounded-2xl overflow-hidden bg-card shadow-card border border-border">
            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-primary/5 translate-x-1/3 translate-y-1/3" />
            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">الرسالة</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                نبني جيلاً واعياً
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                تقديم برامج ومبادرات نوعية تسهم في استثمار طاقات الشباب وتعزيز قدراتهم على الاعتماد على الذات والمشاركة الفاعلة في بناء المجتمع
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">ما يميزنا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">قيمنا</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`p-6 rounded-2xl bg-card shadow-card border border-border hover-lift text-center animate-fade-up animate-delay-${(i + 1) * 100}`}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center text-white">
                {v.icon}
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{v.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
