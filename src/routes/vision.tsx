import { createFileRoute } from "@tanstack/react-router";
import VisionSection from "@/components/VisionSection";

export const Route = createFileRoute("/vision")({
  component: VisionPage,
  head: () => ({
    meta: [
      { title: "الرؤية والرسالة | مداد لتمكين الشباب" },
      { name: "description", content: "رؤيتنا: شباب ممكّن يقود التنمية. رسالتنا: بناء جيل واعٍ من خلال برامج ومبادرات نوعية" },
      { property: "og:title", content: "الرؤية والرسالة | مداد لتمكين الشباب" },
      { property: "og:description", content: "شباب ممكّن يقود التنمية من خلال برامج ومبادرات نوعية" },
    ],
  }),
});

function VisionPage() {
  return (
    <div className="min-h-screen pt-20">
      <VisionSection />
    </div>
  );
}
