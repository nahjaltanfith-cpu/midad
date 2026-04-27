import { createFileRoute } from "@tanstack/react-router";
import { BilingualListManager } from "@/components/admin/BilingualListManager";

export const Route = createFileRoute("/admin-2030/dashboard/goals")({
  component: () => (
    <BilingualListManager
      table="goals"
      title="الأهداف"
      description="أهداف الجمعية"
      defaultValues={{ title_ar: "هدف جديد", icon_path: "Target" }}
      fields={[
        { key: "title_ar", label: "العنوان (عربي)", dir: "rtl" },
        { key: "title_en", label: "Title (English)", dir: "ltr" },
        { key: "desc_ar", label: "الوصف (عربي)", type: "textarea", dir: "rtl" },
        { key: "desc_en", label: "Description (English)", type: "textarea", dir: "ltr" },
        { key: "icon_path", label: "Lucide icon name", dir: "ltr", placeholder: "Target" },
        { key: "display_order", label: "ترتيب العرض", type: "number" },
      ]}
    />
  ),
});
