import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import midadLogo from "@/assets/midad-logo.jpeg";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "الرئيسية", to: "/" },
  { label: "الرؤية", to: "/vision" },
  { label: "من نحن", to: "/about" },
  { label: "الحوكمة", to: "/governance" },
  { label: "المستفيدون", to: "/beneficiaries" },
  { label: "تواصل معنا", to: "/contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-elegant py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <img src={midadLogo} alt="مداد" className="h-12" />
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-sm font-bold text-primary" }}
              activeOptions={{ exact: true }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/contact">
          <Button variant="gradient" size="sm" className="hidden md:inline-flex rounded-full px-6">
            انضم إلينا
          </Button>
        </Link>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="القائمة"
        >
          <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-sm font-medium text-foreground/80 hover:text-primary py-2"
              activeProps={{ className: "block text-sm font-bold text-primary py-2" }}
              activeOptions={{ exact: true }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <Button variant="gradient" size="sm" className="w-full rounded-full">
              انضم إلينا
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
