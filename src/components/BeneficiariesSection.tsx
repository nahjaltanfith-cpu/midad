import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const metrics = [
  { value: 500, suffix: "+", label: "شاب مستفيد" },
  { value: 15, suffix: "+", label: "برنامج تدريبي" },
  { value: 10, suffix: "+", label: "شراكة مجتمعية" },
  { value: 5, suffix: "", label: "مبادرات فاعلة" },
];

const initiatives = [
  {
    title: "برامج بناء القدرات",
    desc: "دورات تدريبية متخصصة في القيادة والتواصل وإدارة المشاريع",
    icon: "🎓",
    gradient: "from-[#1C6C81] to-[#2A8DA8]",
  },
  {
    title: "الإرشاد المهني",
    desc: "جلسات استشارية فردية وجماعية لتوجيه الشباب مهنياً",
    icon: "💼",
    gradient: "from-[#C5952A] to-[#E8B84B]",
  },
  {
    title: "المبادرات التطوعية",
    desc: "فرص تطوعية لتعزيز روح المسؤولية المجتمعية لدى الشباب",
    icon: "🤝",
    gradient: "from-[#1C6C81] to-[#2A8DA8]",
  },
  {
    title: "ريادة الأعمال",
    desc: "دعم وتحفيز المشاريع الشبابية الناشئة وتنمية مهارات ريادة الأعمال",
    icon: "🚀",
    gradient: "from-[#C5952A] to-[#E8B84B]",
  },
];

export default function BeneficiariesSection() {
  return (
    <section id="beneficiaries" className="py-28 relative overflow-hidden">
      {/* Full-width gradient background for metrics */}
      <div className="absolute top-0 left-0 right-0 h-[420px] gradient-primary" />
      <div className="absolute top-[380px] left-0 right-0 h-20 bg-gradient-to-b from-[#2A8DA8]/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-bold tracking-widest text-white/90 uppercase mb-3">أثرنا</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">المستفيدون والمشاريع</h2>
            <div className="w-20 h-1 mx-auto rounded-full gradient-gold" />
          </div>
        </AnimateOnScroll>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {metrics.map((m, i) => (
            <AnimateOnScroll key={m.label} delay={i * 0.1}>
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 text-center text-white hover:bg-white/15 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter target={m.value} suffix={m.suffix} />
                </div>
                <div className="text-sm text-white/80 font-medium">{m.label}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Initiatives */}
        <div className="grid sm:grid-cols-2 gap-8">
          {initiatives.map((item, i) => (
            <AnimateOnScroll key={item.title} delay={i * 0.1}>
              <div className="p-8 rounded-3xl bg-card shadow-elegant border border-border hover-lift flex gap-5 items-start group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-3xl shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
