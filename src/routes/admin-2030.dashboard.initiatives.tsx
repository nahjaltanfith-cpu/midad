import { createFileRoute } from "@tanstack/react-router";
import { BilingualListManager } from "@/components/admin/BilingualListManager";

export const Route = createFileRoute("/admin-2030/dashboard/initiatives")({
  component: () => (
    <BilingualListManager
      table="initiatives"
      title="المبادرات والمشاريع"
      description="مبادرات الجمعية"
      defaultValues={{ title_ar: "مبادرة جديدة", icon_path: "Sparkles", accent: "primary" }}
      fields={[
        { key: "title_ar", label: "العنوان (عربي)", dir: "rtl" },
        { key: "title_en", label: "Title (English)", dir: "ltr" },
        { key: "desc_ar", label: "الوصف (عربي)", type: "textarea", dir: "rtl" },
        { key: "desc_en", label: "Description (English)", type: "textarea", dir: "ltr" },
        { key: "icon_path", label: "Lucide icon / image URL", dir: "ltr", placeholder: "Sparkles" },
        { key: "accent", label: "Accent color", dir: "ltr", placeholder: "primary" },
        { key: "display_order", label: "ترتيب العرض", type: "number" },
      ]}
    />
  ),
});
