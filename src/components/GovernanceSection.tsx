import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

export default function GovernanceSection() {
  return (
    <section id="governance" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-xs font-bold tracking-widest text-primary uppercase mb-3">الشفافية والمصداقية</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">الحوكمة والتقارير</h2>
            <div className="w-20 h-1 mx-auto rounded-full gradient-primary" />
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Bylaws */}
          <AnimateOnScroll>
            <div className="rounded-3xl bg-card shadow-elegant border border-border overflow-hidden" id="reports">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">اللائحة الأساسية</h3>
                    <p className="text-xs text-muted-foreground">المركز الوطني لتنمية القطاع غير الربحي</p>
                  </div>
                </div>
                <a href="/docs/bylaws.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="gradient" size="sm" className="rounded-full gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    تحميل
                  </Button>
                </a>
              </div>
              <div className="bg-muted/30">
                <iframe
                  src="/docs/bylaws.pdf"
                  className="w-full border-0"
                  style={{ height: 500 }}
                  title="اللائحة الأساسية"
                />
              </div>
            </div>
          </AnimateOnScroll>

          {/* Registration Decree */}
          <AnimateOnScroll delay={0.15}>
            <div className="rounded-3xl bg-card shadow-elegant border border-border overflow-hidden">
              <div className="p-6 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">قرار التسجيل</h3>
                    <div className="flex gap-3 text-xs text-muted-foreground">
                      <span>رقم: <b className="text-foreground">ED047745</b></span>
                      <span>ترخيص: <b className="text-foreground">1000862200</b></span>
                    </div>
                  </div>
                </div>
                <a href="/docs/registration-decree.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="gradient-gold" size="sm" className="rounded-full gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    تحميل
                  </Button>
                </a>
              </div>
              <div className="bg-muted/30">
                <iframe
                  src="/docs/registration-decree.pdf"
                  className="w-full border-0"
                  style={{ height: 500 }}
                  title="قرار التسجيل"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
