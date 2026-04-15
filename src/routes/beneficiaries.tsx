import { createFileRoute } from "@tanstack/react-router";
import BeneficiariesSection from "@/components/BeneficiariesSection";

export const Route = createFileRoute("/beneficiaries")({
  component: BeneficiariesPage,
  head: () => ({
    meta: [
      { title: "المستفيدون والمشاريع | مداد لتمكين الشباب" },
      { name: "description", content: "مبادرات ومشاريع مداد لتمكين الشباب وأثرها على المجتمع" },
      { property: "og:title", content: "المستفيدون والمشاريع | مداد لتمكين الشباب" },
      { property: "og:description", content: "أثرنا في تمكين الشباب وبناء المجتمع" },
    ],
  }),
});

function BeneficiariesPage() {
  return (
    <div className="min-h-screen pt-20">
      <BeneficiariesSection />
    </div>
  );
}
