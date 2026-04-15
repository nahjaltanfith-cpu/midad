import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
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
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  if (loading) {
    return <LoadingScreen onComplete={handleComplete} />;
  }

  return (
    <div className="min-h-screen">
      <HeroSection />
    </div>
  );
}
