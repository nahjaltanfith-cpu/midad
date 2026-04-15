import { Button } from "@/components/ui/button";

export default function GovernanceSection() {
  return (
    <section id="governance" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">الشفافية والمصداقية</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">الحوكمة والتقارير</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bylaws */}
          <div className="p-8 rounded-2xl bg-card shadow-card border border-border hover-lift text-center" id="reports">
            <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">اللائحة الأساسية</h3>
            <p className="text-sm text-muted-foreground mb-6">
              اللائحة الأساسية لمنظمة مداد لتمكين الشباب المعتمدة من المركز الوطني لتنمية القطاع غير الربحي
            </p>
            <a href="/docs/bylaws.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="gradient" className="rounded-full px-6 gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                تحميل اللائحة
              </Button>
            </a>
          </div>

          {/* Registration Decree */}
          <div className="p-8 rounded-2xl bg-card shadow-card border border-border hover-lift text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-gold/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">قرار التسجيل</h3>
            <div className="space-y-1 text-sm text-muted-foreground mb-6">
              <p>رقم الصادر: <span className="font-semibold text-foreground">ED047745</span></p>
              <p>رقم الترخيص: <span className="font-semibold text-foreground">1000862200</span></p>
              <p>التاريخ: <span className="font-semibold text-foreground">1447/09/24 هـ</span></p>
            </div>
            <a href="/docs/registration-decree.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="gradient-gold" className="rounded-full px-6 gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                تحميل القرار الرسمي
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
