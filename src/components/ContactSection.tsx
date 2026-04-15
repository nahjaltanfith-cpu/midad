import { useState } from "react";
import { Button } from "@/components/ui/button";
import midadLogo from "@/assets/midad-logo.jpeg";
import { AnimateOnScroll } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-primary/3 blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-xs font-bold tracking-widest text-primary uppercase mb-3">نحب نسمع منك</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">تواصل معنا</h2>
            <div className="w-20 h-1 mx-auto rounded-full gradient-primary" />
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <AnimateOnScroll>
            <div className="p-10 rounded-3xl bg-card shadow-elegant border border-border">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="peer w-full rounded-2xl border border-input bg-background px-5 pt-7 pb-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder=" "
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <label htmlFor="name" className="absolute right-5 top-2.5 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-primary font-medium">
                    الاسم الكامل
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="peer w-full rounded-2xl border border-input bg-background px-5 pt-7 pb-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder=" "
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <label htmlFor="email" className="absolute right-5 top-2.5 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-primary font-medium">
                    البريد الإلكتروني
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={4}
                    className="peer w-full rounded-2xl border border-input bg-background px-5 pt-7 pb-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    placeholder=" "
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <label htmlFor="message" className="absolute right-5 top-2.5 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:text-xs peer-focus:text-primary font-medium">
                    رسالتك
                  </label>
                </div>
                <Button variant="gradient" size="lg" className="w-full rounded-2xl text-base font-bold">
                  إرسال الرسالة
                </Button>
              </form>
            </div>
          </AnimateOnScroll>

          {/* Map */}
          <AnimateOnScroll delay={0.15}>
            <div className="rounded-3xl overflow-hidden shadow-elegant border border-border min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60741.79652803654!2d42.468839!3d18.216324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb57b0e15e2725%3A0x1c8e3c6f64cf84b5!2sAbha%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع أبها"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Multi-layer gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d3d4a] via-[#1C6C81] to-[#1a5c6e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.55_0.1_200_/_20%)_0%,_transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-1 gradient-gold" />

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <img src={midadLogo} alt="مداد" className="h-16 mb-4 brightness-0 invert" />
            <p className="text-white/90 font-bold text-lg mb-1">مداد لتمكين الشباب</p>
            <p className="text-sm text-white/50">التصنيف: الخدمات الاجتماعية - المجموعة الرابعة</p>
          </div>

          <div className="text-center">
            <p className="text-sm text-white/70 mb-4 font-medium">تابعنا على</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300" aria-label="X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          <div className="text-left md:text-left">
            <div className="space-y-2 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
                رقم الترخيص: 1000862200
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                أبها، منطقة عسير
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40">© {new Date().getFullYear()} مداد لتمكين الشباب. جميع الحقوق محفوظة</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
