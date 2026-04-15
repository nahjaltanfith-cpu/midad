import { AnimateOnScroll } from "@/hooks/useScrollAnimation";
import headerReports from "@/assets/header-reports.jpg";
import { useI18n } from "@/lib/i18n";

export default function ReportsSection() {
  const pdfUrl = "/docs/registration-decree.pdf";
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden">
      {/* Page Header */}
      <div className="relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${headerReports})` }} />
        <div className="absolute inset-0 bg-gradient-to-l from-[#071e25]/85 via-[#1C6C81]/70 to-[#2A8DA8]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.72_0.14_75_/_10%)_0%,_transparent_50%)]" />
        <div className="absolute top-10 right-10 w-48 h-48 rounded-full border border-white/[0.05] animate-[float_8s_ease-in-out_infinite]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimateOnScroll>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.1] backdrop-blur-sm text-xs font-bold tracking-[0.15em] text-white/90 uppercase mb-5">
              {t("reports.badge")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t("reports.title")}</h1>
            <div className="w-20 h-[3px] mx-auto rounded-full gradient-gold" />
          </AnimateOnScroll>
        </div>
      </div>

      <div className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 mb-4 flex-wrap justify-center">
                  <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shadow-gold transition-transform duration-300 hover:scale-105">
                    <svg className="w-[22px] h-[22px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v4a2 2 0 002 2h4" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m9 15 2 2 4-4" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{t("reports.docTitle")}</h2>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-4">{t("reports.docDesc")}</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <span>{t("reports.number")}: <b className="text-foreground">ED047745</b></span>
                  <span>{t("reports.license")}: <b className="text-foreground">1000862200</b></span>
                  <span>{t("reports.date")}: <b className="text-foreground">1447/09/24 هـ</b></span>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="rounded-[2rem] border border-border bg-card shadow-luxury overflow-hidden gold-border-hover">
                <div className="bg-muted/20 p-3 md:p-4">
                  <iframe
                    src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                    className="w-full h-[600px] md:h-[850px] rounded-2xl border-0 bg-white"
                    title="قرار التسجيل"
                    loading="lazy"
                    allow="autoplay; fullscreen"
                  />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="flex justify-center mt-8 flex-wrap gap-4">
                <a
                  href={pdfUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-gold text-white font-semibold shadow-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m7 10 5 5 5-5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V3" />
                  </svg>
                  {t("reports.download")}
                </a>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-semibold shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {t("reports.openNew")}
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
