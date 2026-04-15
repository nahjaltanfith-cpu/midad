import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import midadLogo from "@/assets/midad-logo.png";

const navLinks = [
  { label: "الرئيسية", labelEn: "Home", to: "/", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { label: "عن الجمعية", labelEn: "About", to: "/about", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "الحوكمة", labelEn: "Governance", to: "/governance", icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" },
  { label: "التقارير", labelEn: "Reports", to: "/reports", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  { label: "المستفيدون", labelEn: "Beneficiaries", to: "/beneficiaries", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
  { label: "تواصل معنا", labelEn: "Contact", to: "/contact", icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop/Tablet Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 hidden md:block ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_oklch(0_0_0/6%)] py-2"
            : "bg-white/90 backdrop-blur-sm shadow-[0_1px_8px_oklch(0_0_0/4%)] py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="group">
            <img
              src={midadLogo}
              alt="مداد"
              className="h-12 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-all duration-300 rounded-full hover:bg-primary/5"
                activeProps={{
                  className:
                    "relative px-4 py-2 text-sm font-bold text-primary bg-primary/10 rounded-full",
                }}
                activeOptions={{ exact: true }}
              >
                {lang === "ar" ? link.label : link.labelEn}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="rounded-full px-4 py-2 text-xs font-bold border border-border text-foreground/70 hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </button>
            <Link to="/contact">
              <button className="rounded-full px-7 py-2.5 text-sm font-bold text-white gradient-primary shadow-elegant hover:shadow-luxury hover:scale-105 transition-all duration-300 gold-border-hover">
                {lang === "ar" ? "انضم إلينا" : "Join Us"}
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-luxury px-2 py-2 flex items-center justify-around border border-border/50">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-primary/12 text-primary scale-105"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={isActive ? 2.5 : 1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                </svg>
                <span className={`text-[10px] font-bold leading-none ${isActive ? "" : "opacity-70"}`}>
                  {lang === "ar" ? link.label : link.labelEn}
                </span>
                {isActive && (
                  <div className="w-1 h-1 rounded-full bg-primary mt-0.5" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
