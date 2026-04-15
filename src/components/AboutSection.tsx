import { useState } from "react";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

const goals = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "استثمار أوقات الشباب",
    desc: "المساهمة في تقديم البرامج والمبادرات لاستثمار أوقات الشباب بشكل إيجابي",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "الاعتماد على الذات",
    desc: "تعزيز القدرات الشبابية على الاعتماد على الذات والتنمية الشخصية",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "بناء المجتمع",
    desc: "تفعيل دور الشباب في بناء وتنمية المجتمع",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "الاستشارات المهنية",
    desc: "تقديم الاستشارات الشخصية والمهنية والسلوكية والاجتماعية للشباب",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "البرامج التعليمية",
    desc: "تقديم البرامج والمبادرات لاستثمار أوقات الشباب بشكل إيجابي",
  },
];

const boardMembers = [
  { name: "خالد سالم العواشز", role: "رئيس مجلس الإدارة", initials: "خ ع" },
  { name: "عبدالله عبدالمحسن الدوسري", role: "نائب رئيس مجلس الإدارة", initials: "ع د" },
  { name: "أحمد إبراهيم الزيداني", role: "عضو", initials: "أ ز" },
  { name: "عمر محمد أبو ملحة", role: "عضو", initials: "ع م" },
  { name: "سعد إبراهيم آل مهدي", role: "عضو", initials: "س م" },
];

const assemblyMembers = [
  "مجاهد علي دخيخ", "خالد سالم العواشز", "أحمد إبراهيم الزيداني",
  "عمر محمد أبو ملحة", "خالد سعيد القحطاني", "سعد إبراهيم آل مهدي",
  "عبدالله عبدالمحسن الدوسري", "محمد إبراهيم آل مهدي", "محمد عبدالمحسن الدوسري",
  "بسام حميد الوادعي",
];

export default function AboutSection() {
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-[100px] translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimateOnScroll>
          <div className="text-center mb-24">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/8 text-xs font-bold tracking-[0.15em] text-primary uppercase mb-4">
              تعرف علينا
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">عن الجمعية</h2>
            <div className="w-20 h-[3px] mx-auto rounded-full gradient-gold" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg font-light leading-relaxed">
              جمعية أهلية مقرها أبها بمنطقة عسير، تحت إشراف وزارة الموارد البشرية والتنمية الاجتماعية
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="px-4 py-2 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground shadow-sm">
                التصنيف: المجموعة الرابعة - الخدمات الاجتماعية
              </span>
              <span className="px-4 py-2 rounded-full bg-card border border-border text-xs font-medium text-muted-foreground shadow-sm">
                منظمات تقدم خدمات إنسانية واجتماعية
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Goals */}
        <div className="mb-28">
          <AnimateOnScroll>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">أهدافنا الاستراتيجية</h3>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {goals.map((g, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <div className="flex gap-5 p-7 rounded-[1.5rem] bg-card shadow-card border border-border hover-lift gold-border-hover group">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/15 group-hover:scale-110 transition-transform duration-500">
                    {g.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{g.title}</h4>
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
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">مجلس الإدارة</h3>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-7 max-w-6xl mx-auto">
            {boardMembers.map((m, i) => (
              <AnimateOnScroll key={m.name} delay={i * 0.08}>
                <div className="p-7 rounded-[2rem] bg-card shadow-card border border-border text-center hover-lift gold-border-hover group">
                  <div className="w-20 h-20 mx-auto mb-5 rounded-full gradient-primary flex items-center justify-center text-white text-lg font-bold shadow-luxury group-hover:shadow-xl transition-all duration-500">
                    {m.initials}
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-2 leading-snug">{m.name}</h4>
                  <span className="text-[11px] font-semibold text-primary bg-primary/8 px-3 py-1.5 rounded-full inline-block">
                    {m.role}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* General Assembly */}
        <div className="mb-20">
          <AnimateOnScroll>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">أعضاء الجمعية العمومية</h3>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {assemblyMembers.map((name, i) => (
              <AnimateOnScroll key={i} delay={i * 0.04}>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-card shadow-sm border border-border hover:shadow-card hover:border-primary/15 transition-all duration-400">
                  <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center text-primary text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm font-medium text-foreground">{name}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Location — Clickable Map */}
        <AnimateOnScroll>
          <div
            className="relative rounded-[2rem] overflow-hidden shadow-luxury border border-border cursor-pointer group max-w-4xl mx-auto"
            onClick={() => setShowMap(!showMap)}
          >
            {!showMap ? (
              <div className="p-14 bg-card text-center">
                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/12 group-hover:scale-110 transition-all duration-500">
                  <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-3">المقر الرئيسي</h4>
                <p className="text-muted-foreground mb-5 text-lg">مدينة أبها، منطقة عسير</p>
                <span className="inline-flex items-center gap-2 text-sm text-primary font-bold group-hover:gap-3 transition-all duration-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                  </svg>
                  اضغط لعرض الخريطة
                </span>
              </div>
            ) : (
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60741.79652803654!2d42.468839!3d18.216324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb57b0e15e2725%3A0x1c8e3c6f64cf84b5!2sAbha%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع أبها"
                />
                <button
                  onClick={(e) => { e.stopPropagation(); setShowMap(false); }}
                  className="absolute top-4 left-4 w-10 h-10 rounded-full glass-premium flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
