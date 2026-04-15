import { createFileRoute } from "@tanstack/react-router";
import GovernanceSection from "@/components/GovernanceSection";

export const Route = createFileRoute("/governance")({
  component: GovernancePage,
  head: () => ({
    meta: [
      { title: "الحوكمة والتقارير | مداد لتمكين الشباب" },
      { name: "description", content: "اللائحة الأساسية وقرار التسجيل والوثائق الرسمية لمنظمة مداد لتمكين الشباب" },
      { property: "og:title", content: "الحوكمة والتقارير | مداد لتمكين الشباب" },
      { property: "og:description", content: "الشفافية والمصداقية - الوثائق الرسمية لمنظمة مداد" },
    ],
  }),
});

function GovernancePage() {
  return (
    <div className="min-h-screen pt-20">
      <GovernanceSection />
    </div>
  );
}
