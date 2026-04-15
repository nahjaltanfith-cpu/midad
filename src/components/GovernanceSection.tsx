import { useState } from "react";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import headerGovernance from "@/assets/header-governance.jpg";
import { useI18n } from "@/lib/i18n";

export default function GovernanceSection() {
  const pdfUrl = "/docs/bylaws.pdf";
  const { t } = useI18n();
  
  // حالة للتحكم في تفعيل السكرول داخل الـ PDF
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="relative overflow-hidden">
      {/* Page Header */}
      <div className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${headerGovernance})` }} />
        <div className="absolute inset-0 bg-linear-to-l from-[#071e25]/85 via-[#1C6C81]/70 to-[#2A8DA8]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.72_0.14_75/10%)_0%,transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-xs font-bold tracking-[0.15em] text-white/90 uppercase mb-5">
              {t("governance.badge")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              {t("governance.title")}
            </h1>
            <div className="w-24 h-1 mx-auto rounded-full gradient-gold shadow-lg shadow-gold/20" />
          </AnimateOnScroll>
        </div>
      </div>

      <div className="py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center shadow-xl shadow-gold/20">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">{t("governance.docTitle")}</h2>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">{t("governance.docDesc")}</p>
              </div>
            </AnimateOnScroll>

            {/* PDF Viewer Container */}
            <AnimateOnScroll>
              <div 
                className={`relative rounded-[2.5rem] border-4 border-white shadow-luxury overflow-hidden transition-all duration-500 bg-card ${isFocused ? 'ring-4 ring-primary/10' : ''}`}
                onMouseLeave={() => setIsFocused(false)} // إلغاء التركيز عند خروج الماوس
              >
                {/* Overlay layer to capture scroll */}
                {!isFocused && (
                  <div 
                    className="absolute inset-0 z-20 bg-black/0 cursor-pointer flex items-center justify-center group"
                    onClick={() => setIsFocused(true)}
                  >
                    <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-2xl border border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-3">
                       <svg className="w-5 h-5 text-primary animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                       </svg>
                       <span className="text-sm font-bold text-primary">اضغط للتفاعل مع الملف</span>
                    </div>
                  </div>
                )}

                <div className="p-2 md:p-4 bg-slate-100/50">
                  <iframe
                    src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                    className={`w-full h-125 md:h-200 rounded-2xl border-0 bg-white transition-all duration-500 ${!isFocused ? 'pointer-events-none' : 'pointer-events-auto'}`}
                    title="اللائحة الأساسية"
                    loading="lazy"
                  />
                </div>

                {isFocused && (
                  <button 
                    onClick={() => setIsFocused(false)}
                    className="absolute top-6 right-6 z-30 bg-primary text-white px-4 py-2 rounded-lg text-xs font-bold shadow-xl hover:bg-primary/90 transition-colors"
                  >
                  </button>
                )}
              </div>
            </AnimateOnScroll>

            {/* Action Buttons */}
            <AnimateOnScroll delay={0.2}>
              <div className="flex justify-center mt-12 flex-wrap gap-5">
                <a
                  href={pdfUrl}
                  download
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl gradient-primary text-white font-bold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12L12 16.5m0 0L16.5 12M12 16.5V3" />
                  </svg>
                  {t("governance.download")}
                </a>
                
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-border bg-card text-foreground font-bold shadow-md hover:bg-muted/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  {t("governance.openNew")}
                </a>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </div>
    </section>
  );
}