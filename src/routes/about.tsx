import { createFileRoute } from "@tanstack/react-router";
import AboutSection from "@/components/AboutSection";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "من نحن | مداد لتمكين الشباب" },
      { name: "description", content: "تعرف على أهداف ومجلس إدارة وأعضاء الجمعية العمومية لجمعية مداد لتمكين الشباب في أبها" },
      { property: "og:title", content: "من نحن | مداد لتمكين الشباب" },
      { property: "og:description", content: "جمعية أهلية مقرها أبها بمنطقة عسير تُعنى بتمكين الشباب" },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <AboutSection />
    </div>
  );
}
