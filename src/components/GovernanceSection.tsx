import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

export default function GovernanceSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/[0.03] blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/[0.02] blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/8 text-xs font-bold tracking-[0.15em] text-primary uppercase mb-4">
              الشفافية والمصداقية
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">الحوكمة</h2>
            <div className="w-20 h-[3px] mx-auto rounded-full gradient-primary" />
          </div>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="rounded-[2rem] bg-card shadow-luxury border border-border overflow-hidden gold-border-hover">
              <div className="p-8 border-b border-border flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/15">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">اللائحة الأساسية</h3>
                    <p className="text-sm text-muted-foreground">المركز الوطني لتنمية القطاع غير الربحي</p>
                  </div>
                </div>
                <a href="/docs/bylaws.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="gradient" size="sm" className="rounded-full gap-2 px-6">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    تحميل PDF
                  </Button>
                </a>
              </div>
              <div className="bg-muted/20">
                <iframe
                  src="/docs/bylaws.pdf"
                  className="w-full border-0"
                  style={{ height: 600 }}
                  title="اللائحة الأساسية"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
