import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

export default function GovernanceSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Page Header */}
      <div className="relative overflow-hidden py-28">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.72_0.14_75_/_8%)_0%,_transparent_50%)]" />
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/[0.04] animate-[float_10s_ease-in-out_infinite]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.1] backdrop-blur-sm text-xs font-bold tracking-[0.15em] text-white/90 uppercase mb-5">
              الشفافية والمصداقية
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">الحوكمة</h1>
            <div className="w-20 h-[3px] mx-auto rounded-full gradient-gold" />
          </AnimateOnScroll>
        </div>
      </div>

      <div className="py-20 bg-background">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/[0.03] blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll>
              <div className="rounded-[2rem] bg-card shadow-luxury border border-border overflow-hidden gold-border-hover">
                <div className="p-8 border-b border-border flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/15 hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">اللائحة الأساسية</h3>
                      <p className="text-sm text-muted-foreground">المركز الوطني لتنمية القطاع غير الربحي</p>
                    </div>
                  </div>
                  <a href="/docs/bylaws.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="rounded-full gap-2 px-6 py-2.5 text-sm font-bold text-white gradient-primary shadow-elegant hover:shadow-luxury hover:scale-105 transition-all duration-300 inline-flex items-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                      تحميل PDF
                    </button>
                  </a>
                </div>
                <div className="bg-muted/20 p-4">
                  <object
                    data="/docs/bylaws.pdf"
                    type="application/pdf"
                    className="w-full rounded-xl"
                    style={{ height: 700 }}
                  >
                    <div className="text-center py-20">
                      <p className="text-muted-foreground mb-4">لا يمكن عرض الملف في المتصفح</p>
                      <a href="/docs/bylaws.pdf" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
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
