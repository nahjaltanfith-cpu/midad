import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

export default function ReportsSection() {
  return (
    <section className="py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-primary/[0.02] blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/8 text-xs font-bold tracking-[0.15em] text-gold uppercase mb-4">
              الوثائق الرسمية
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">التقارير</h2>
            <div className="w-20 h-[3px] mx-auto rounded-full gradient-gold" />
          </div>
        </AnimateOnScroll>

        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="rounded-[2rem] bg-card shadow-luxury border border-border overflow-hidden gold-border-hover">
              <div className="p-8 border-b border-border flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center shadow-lg shadow-gold/20">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">قرار التسجيل</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                      <span>رقم: <b className="text-foreground">ED047745</b></span>
                      <span>ترخيص: <b className="text-foreground">1000862200</b></span>
                      <span>تاريخ: <b className="text-foreground">1447/09/24 هـ</b></span>
                    </div>
                  </div>
                </div>
                <a href="/docs/registration-decree.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="gradient-gold" size="sm" className="rounded-full gap-2 px-6">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    تحميل PDF
                  </Button>
                </a>
              </div>
              <div className="bg-muted/20">
                <iframe
                  src="/docs/registration-decree.pdf"
                  className="w-full border-0"
                  style={{ height: 600 }}
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
