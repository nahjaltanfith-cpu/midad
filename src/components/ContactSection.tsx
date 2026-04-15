import { useState } from "react";
import { Button } from "@/components/ui/button";
import midadLogo from "@/assets/midad-logo.jpeg";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">نحب نسمع منك</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">تواصل معنا</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="p-8 rounded-2xl bg-card shadow-card border border-border">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="peer w-full rounded-xl border border-input bg-background px-4 pt-6 pb-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder=" "
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <label htmlFor="name" className="absolute right-4 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
                  الاسم الكامل
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="peer w-full rounded-xl border border-input bg-background px-4 pt-6 pb-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder=" "
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <label htmlFor="email" className="absolute right-4 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
                  البريد الإلكتروني
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  className="peer w-full rounded-xl border border-input bg-background px-4 pt-6 pb-2 text-sm text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder=" "
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <label htmlFor="message" className="absolute right-4 top-2 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
                  رسالتك
                </label>
              </div>
              <Button variant="gradient" size="lg" className="w-full rounded-xl">
                إرسال الرسالة
              </Button>
            </form>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card border border-border min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60741.79652803654!2d42.468839!3d18.216324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb57b0e15e2725%3A0x1c8e3c6f64cf84b5!2sAbha%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع أبها"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="gradient-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <img src={midadLogo} alt="مداد" className="h-14 mb-3 brightness-0 invert" />
            <p className="text-sm text-white/70">مداد لتمكين الشباب</p>
            <p className="text-xs text-white/50 mt-1">التصنيف: الخدمات الاجتماعية - المجموعة الرابعة</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-white/70 mb-3">تابعنا على</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
          <div className="text-left md:text-left">
            <p className="text-sm text-white/70">رقم الترخيص: 1000862200</p>
            <p className="text-sm text-white/70">أبها، منطقة عسير</p>
            <p className="text-xs text-white/50 mt-3">© {new Date().getFullYear()} مداد لتمكين الشباب. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
