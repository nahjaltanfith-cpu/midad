import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

export default function ReportsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Page Header */}
      <div className="relative overflow-hidden py-28">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.72_0.14_75_/_8%)_0%,_transparent_50%)]" />
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full border border-white/[0.04] animate-[float_8s_ease-in-out_infinite]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.1] backdrop-blur-sm text-xs font-bold tracking-[0.15em] text-white/90 uppercase mb-5">
              الوثائق الرسمية
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">التقارير</h1>
            <div className="w-20 h-[3px] mx-auto rounded-full gradient-gold" />
          </AnimateOnScroll>
        </div>
      </div>

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll>
              <div className="rounded-[2rem] bg-card shadow-luxury border border-border overflow-hidden gold-border-hover">
                <div className="p-8 border-b border-border flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center shadow-lg shadow-gold/20 hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
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
                    <button className="rounded-full gap-2 px-6 py-2.5 text-sm font-bold text-white gradient-gold shadow-gold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      تحميل PDF
                    </button>
                  </a>
                </div>
                <div className="bg-muted/20 p-4">
                  <object
                    data="/docs/registration-decree.pdf"
                    type="application/pdf"
                    className="w-full rounded-xl"
                    style={{ height: 700 }}
                  >
                    <div className="text-center py-20">
                      <p className="text-muted-foreground mb-4">لا يمكن عرض الملف في المتصفح</p>
                      <a href="/docs/registration-decree.pdf" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
                        اضغط هنا لفتح الملف
                      </a>
                    </div>
                  </object>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
