import { AnimateOnScroll, useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const metrics = [
  { value: 500, suffix: "+", label: "شاب مستفيد", icon: "👥" },
  { value: 15, suffix: "+", label: "برنامج تدريبي", icon: "📚" },
  { value: 10, suffix: "+", label: "شراكة مجتمعية", icon: "🤝" },
  { value: 5, suffix: "", label: "مبادرات فاعلة", icon: "🚀" },
];

const initiatives = [
  {
    title: "برامج بناء القدرات",
    desc: "دورات تدريبية متخصصة في القيادة والتواصل وإدارة المشاريع",
    icon: "🎓",
    type: "primary" as const,
  },
  {
    title: "الإرشاد المهني",
    desc: "جلسات استشارية فردية وجماعية لتوجيه الشباب مهنياً",
    icon: "💼",
    type: "gold" as const,
  },
  {
    title: "المبادرات التطوعية",
    desc: "فرص تطوعية لتعزيز روح المسؤولية المجتمعية لدى الشباب",
    icon: "🤝",
    type: "primary" as const,
  },
  {
    title: "ريادة الأعمال",
    desc: "دعم وتحفيز المشاريع الشبابية الناشئة وتنمية مهارات ريادة الأعمال",
    icon: "🚀",
    type: "gold" as const,
  },
];

export default function BeneficiariesSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Gradient background for metrics area */}
      <div className="absolute top-0 left-0 right-0 h-[480px] gradient-hero" />
      <div className="absolute top-0 left-0 right-0 h-[480px] bg-[radial-gradient(ellipse_at_top_right,_oklch(0.72_0.14_75_/_6%)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.1] backdrop-blur-sm text-xs font-bold tracking-[0.15em] text-white/90 uppercase mb-4">
              أثرنا المجتمعي
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">المستفيدون والمشاريع</h2>
            <div className="w-20 h-[3px] mx-auto rounded-full gradient-gold" />
          </div>
        </AnimateOnScroll>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {metrics.map((m, i) => (
            <AnimateOnScroll key={m.label} delay={i * 0.1}>
              <div className="p-8 rounded-[2rem] bg-white/[0.08] backdrop-blur-md border border-white/[0.1] text-center text-white hover:bg-white/[0.12] transition-all duration-500 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-500">{m.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter target={m.value} suffix={m.suffix} />
                </div>
                <div className="text-sm text-white/70 font-medium">{m.label}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Initiatives */}
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">مبادراتنا</h3>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {initiatives.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 0.1}>
              <div className="p-8 rounded-[2rem] bg-card shadow-luxury border border-border hover-lift gold-border-hover flex gap-6 items-start group">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500 ${
                    item.type === "gold" ? "gradient-gold shadow-gold/20" : "gradient-primary shadow-primary/20"
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
