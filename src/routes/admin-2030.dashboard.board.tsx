import { createFileRoute } from "@tanstack/react-router";
import { BilingualListManager } from "@/components/admin/BilingualListManager";

export const Route = createFileRoute("/admin-2030/dashboard/board")({
  component: () => (
    <BilingualListManager
      table="board_members"
      title="مجلس الإدارة"
      description="إدارة أعضاء مجلس الإدارة"
      defaultValues={{ name_ar: "عضو جديد", role_ar: "عضو" }}
      fields={[
        { key: "name_ar", label: "الاسم (عربي)", dir: "rtl" },
        { key: "name_en", label: "Name (English)", dir: "ltr" },
        { key: "role_ar", label: "المنصب (عربي)", dir: "rtl" },
        { key: "role_en", label: "Role (English)", dir: "ltr" },
        { key: "color_class", label: "Tailwind color class", dir: "ltr", placeholder: "from-[#1C6C81] to-[#2A8DA8]" },
        { key: "display_order", label: "ترتيب العرض", type: "number" },
      ]}
    />
  ),
});
