import { createFileRoute } from "@tanstack/react-router";
import { BilingualListManager } from "@/components/admin/BilingualListManager";

export const Route = createFileRoute("/admin-2030/dashboard/assembly")({
  component: () => (
    <BilingualListManager
      table="assembly_members"
      title="الجمعية العمومية"
      description="إدارة أعضاء الجمعية العمومية"
      defaultValues={{ name_ar: "عضو جديد" }}
      fields={[
        { key: "name_ar", label: "الاسم (عربي)", dir: "rtl" },
        { key: "name_en", label: "Name (English)", dir: "ltr" },
        { key: "display_order", label: "ترتيب العرض", type: "number" },
      ]}
    />
  ),
});
