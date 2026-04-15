const goals = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "استثمار أوقات الشباب",
    desc: "المساهمة في تقديم البرامج والمبادرات لاستثمار أوقات الشباب بشكل إيجابي",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    title: "الاعتماد على الذات",
    desc: "تعزيز القدرات الشبابية على الاعتماد على الذات والتنمية الشخصية",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "بناء المجتمع",
    desc: "تفعيل دور الشباب في بناء وتنمية المجتمع",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "الاستشارات المهنية",
    desc: "تقديم الاستشارات الشخصية والمهنية والسلوكية والاجتماعية للشباب",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "البرامج التعليمية",
    desc: "تقديم البرامج والمبادرات لاستثمار أوقات الشباب بشكل إيجابي",
  },
];

const boardMembers = [
  { name: "خالد سالم العواشز", role: "رئيس مجلس الإدارة" },
  { name: "عبدالله عبدالمحسن الدوسري", role: "نائب رئيس مجلس الإدارة" },
  { name: "أحمد إبراهيم الزيداني", role: "عضو" },
  { name: "عمر محمد أبو ملحة", role: "عضو" },
  { name: "سعد إبراهيم آل مهدي", role: "عضو" },
];

const assemblyMembers = [
  "مجاهد علي دخيخ",
  "خالد سالم العواشز",
  "أحمد إبراهيم الزيداني",
  "عمر محمد أبو ملحة",
  "خالد سعيد القحطاني",
  "سعد إبراهيم آل مهدي",
  "عبدالله عبدالمحسن الدوسري",
  "محمد إبراهيم آل مهدي",
  "محمد عبدالمحسن الدوسري",
  "بسام حميد الوادعي",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">تعرف علينا</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">من نحن</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            جمعية أهلية مقرها أبها بمنطقة عسير، تُعنى بتمكين الشباب وبناء قدراتهم
          </p>
        </div>

        {/* Goals */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">أهدافنا</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((g, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl bg-card shadow-card border border-border hover-lift">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center text-white shrink-0">
                  {g.icon}
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{g.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Board of Directors */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">مجلس الإدارة</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {boardMembers.map((m) => (
              <div key={m.name} className="p-6 rounded-2xl bg-card shadow-card border border-border text-center hover-lift">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold">
                  {m.name.charAt(0)}
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1">{m.name}</h4>
                <span className="text-xs text-primary font-medium">{m.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* General Assembly */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">أعضاء الجمعية العمومية</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {assemblyMembers.map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-card shadow-sm border border-border"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <span className="text-sm font-medium text-foreground">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="text-center p-8 rounded-2xl bg-card shadow-card border border-border">
          <svg className="w-10 h-10 mx-auto mb-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <h4 className="font-bold text-foreground mb-1">المقر الرئيسي</h4>
          <p className="text-muted-foreground">مدينة أبها، منطقة عسير</p>
        </div>
      </div>
    </section>
  );
}
