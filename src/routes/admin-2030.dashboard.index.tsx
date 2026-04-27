import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { FileText, Image, Users, FolderOpen, FileBarChart, Mail } from "lucide-react";

export const Route = createFileRoute("/admin-2030/dashboard/")({
  component: DashboardOverview,
});

function DashboardOverview() {
  const [stats, setStats] = useState({
    content: 0, images: 0, board: 0, assembly: 0, reports: 0, messages: 0, unreadMessages: 0,
  });

  useEffect(() => {
    const load = async () => {
      const [c, i, b, a, r, m, um] = await Promise.all([
        supabase.from("site_content").select("*", { count: "exact", head: true }),
        supabase.from("site_images").select("*", { count: "exact", head: true }),
        supabase.from("board_members").select("*", { count: "exact", head: true }),
        supabase.from("assembly_members").select("*", { count: "exact", head: true }),
        supabase.from("site_reports").select("*", { count: "exact", head: true }),
        supabase.from("contact_messages").select("*", { count: "exact", head: true }),
        supabase.from("contact_messages").select("*", { count: "exact", head: true }).eq("is_read", false),
      ]);
      setStats({
        content: c.count || 0, images: i.count || 0, board: b.count || 0,
        assembly: a.count || 0, reports: r.count || 0,
        messages: m.count || 0, unreadMessages: um.count || 0,
      });
    };
    load();
  }, []);

  const cards = [
    { label: "نصوص الموقع", value: stats.content, icon: FileText, color: "from-blue-500 to-cyan-500" },
    { label: "الصور", value: stats.images, icon: Image, color: "from-purple-500 to-pink-500" },
    { label: "مجلس الإدارة", value: stats.board, icon: Users, color: "from-orange-500 to-red-500" },
    { label: "الجمعية العمومية", value: stats.assembly, icon: Users, color: "from-teal-500 to-emerald-500" },
    { label: "التقارير والملفات", value: stats.reports, icon: FileBarChart, color: "from-amber-500 to-yellow-500" },
    { label: `الرسائل (${stats.unreadMessages} جديدة)`, value: stats.messages, icon: Mail, color: "from-rose-500 to-pink-500" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">مرحباً بك 👋</h1>
        <p className="text-muted-foreground mt-2">إدارة كاملة لمحتوى الموقع — كل تعديل يظهر فوراً للزوار</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <Card key={c.label} className="p-6 border-border/50 hover:shadow-elegant transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">{c.label}</div>
                  <div className="text-3xl font-bold text-foreground mt-2">{c.value}</div>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="mt-8 p-6 border-border/50">
        <h2 className="text-lg font-bold text-foreground mb-2">💡 كيف تستخدم اللوحة؟</h2>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc pr-5">
          <li>اختر القسم اللي عايز تعدله من القائمة الجانبية</li>
          <li>كل تعديل بيتحفظ مباشرة في قاعدة البيانات وبيظهر فوراً في الموقع</li>
          <li>الصور والملفات بترفعها مباشرة من جهازك</li>
          <li>الرسائل من نموذج التواصل بتظهر هنا في قسم "رسائل التواصل"</li>
        </ul>
      </Card>
    </div>
  );
}
