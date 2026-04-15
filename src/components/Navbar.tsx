import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import midadLogo from "@/assets/midad-logo.jpeg";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "الرئيسية", to: "/" },
  { label: "الرؤية والرسالة", to: "/vision" },
  { label: "عن الجمعية", to: "/about" },
  { label: "الحوكمة", to: "/governance" },
  { label: "التقارير", to: "/reports" },
  { label: "المستفيدون", to: "/beneficiaries" },
  { label: "تواصل معنا", to: "/contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-premium shadow-elegant py-2"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="group">
          <img
            src={midadLogo}
            alt="مداد"
            className="h-11 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300 rounded-full hover:bg-primary/5"
              activeProps={{
                className:
                  "relative px-4 py-2 text-sm font-bold text-primary bg-primary/8 rounded-full",
              }}
              activeOptions={{ exact: true }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact">
            <Button
              variant="gradient"
              size="sm"
              className="rounded-full px-7 font-bold gold-border-hover"
            >
              انضم إلينا
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-xl hover:bg-primary/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="القائمة"
        >
          <svg
            className="w-6 h-6 text-foreground transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            style={{ transform: mobileOpen ? "rotate(90deg)" : "rotate(0)" }}
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-premium mt-3 mx-4 rounded-2xl p-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 py-3 px-4 rounded-xl transition-all duration-300"
              activeProps={{
                className: "block text-sm font-bold text-primary bg-primary/8 py-3 px-4 rounded-xl",
              }}
              activeOptions={{ exact: true }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-border/50">
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button variant="gradient" size="sm" className="w-full rounded-full font-bold">
                انضم إلينا
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
