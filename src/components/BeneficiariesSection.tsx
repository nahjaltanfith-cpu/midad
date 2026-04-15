const metrics = [
  { value: "500+", label: "شاب مستفيد" },
  { value: "15+", label: "برنامج تدريبي" },
  { value: "10+", label: "شراكة مجتمعية" },
  { value: "5", label: "مبادرات فاعلة" },
];

const initiatives = [
  {
    title: "برامج بناء القدرات",
    desc: "دورات تدريبية متخصصة في القيادة والتواصل وإدارة المشاريع",
    icon: "🎓",
  },
  {
    title: "الإرشاد المهني",
    desc: "جلسات استشارية فردية وجماعية لتوجيه الشباب مهنياً",
    icon: "💼",
  },
  {
    title: "المبادرات التطوعية",
    desc: "فرص تطوعية لتعزيز روح المسؤولية المجتمعية لدى الشباب",
    icon: "🤝",
  },
  {
    title: "ريادة الأعمال",
    desc: "دعم وتحفيز المشاريع الشبابية الناشئة وتنمية مهارات ريادة الأعمال",
    icon: "🚀",
  },
];

export default function BeneficiariesSection() {
  return (
    <section id="beneficiaries" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">أثرنا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">المستفيدون والمشاريع</h2>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m) => (
            <div key={m.label} className="p-6 rounded-2xl gradient-primary text-center text-white shadow-elegant">
              <div className="text-3xl md:text-4xl font-bold mb-1">{m.value}</div>
              <div className="text-sm text-white/80">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Initiatives */}
        <div className="grid sm:grid-cols-2 gap-6">
          {initiatives.map((item) => (
            <div key={item.title} className="p-6 rounded-2xl bg-card shadow-card border border-border hover-lift flex gap-4 items-start">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
