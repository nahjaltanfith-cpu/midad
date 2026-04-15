import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "مداد لتمكين الشباب | الرئيسية" },
      { name: "description", content: "جمعية أهلية تُعنى بتمكين الشباب وبناء قدراتهم ليكونوا قادة التغيير الإيجابي في مجتمعاتهم - أبها، منطقة عسير" },
      { property: "og:title", content: "مداد لتمكين الشباب" },
      { property: "og:description", content: "نسعى لبناء قدرات الشباب وتعزيز دورهم في التنمية المجتمعية" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
    </div>
  );
}
