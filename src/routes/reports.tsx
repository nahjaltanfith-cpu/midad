import { createFileRoute } from "@tanstack/react-router";
import ReportsSection from "@/components/ReportsSection";

export const Route = createFileRoute("/reports")({
  component: ReportsPage,
  head: () => ({
    meta: [
      { title: "التقارير | مداد لتمكين الشباب" },
      { name: "description", content: "قرار التسجيل والوثائق الرسمية لجمعية مداد لتمكين الشباب" },
      { property: "og:title", content: "التقارير | مداد لتمكين الشباب" },
      { property: "og:description", content: "الوثائق الرسمية لمنظمة مداد لتمكين الشباب" },
    ],
  }),
});

function ReportsPage() {
  return (
    <div className="min-h-screen pt-20">
      <ReportsSection />
    </div>
  );
}
