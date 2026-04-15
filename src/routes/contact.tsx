import { createFileRoute } from "@tanstack/react-router";
import ContactSection, { Footer } from "@/components/ContactSection";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "تواصل معنا | مداد لتمكين الشباب" },
      { name: "description", content: "تواصل مع جمعية مداد لتمكين الشباب في أبها، منطقة عسير" },
      { property: "og:title", content: "تواصل معنا | مداد لتمكين الشباب" },
      { property: "og:description", content: "نحب نسمع منك - تواصل معنا الآن" },
    ],
  }),
});

function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <ContactSection />
      <Footer />
    </div>
  );
}
