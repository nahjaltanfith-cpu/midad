import { createFileRoute, Outlet, Link, useNavigate, useLocation } from "@tanstack/react-router";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Loader2, LayoutDashboard, FileText, Image, Users, FolderOpen, FileBarChart, Mail, Target, Sparkles, LogOut, Shield, Heart } from "lucide-react";

export const Route = createFileRoute("/admin-2030/dashboard")({
  head: () => ({ meta: [{ title: "لوحة التحكم — مداد" }, { name: "robots", content: "noindex, nofollow" }] }),
  component: DashboardLayout,
});

const navItems = [
  { to: "/admin-2030/dashboard", label: "نظرة عامة", icon: LayoutDashboard, exact: true },
  { to: "/admin-2030/dashboard/content", label: "نصوص الموقع", icon: FileText },
  { to: "/admin-2030/dashboard/images", label: "صور الموقع", icon: Image },
  { to: "/admin-2030/dashboard/board", label: "مجلس الإدارة", icon: Users },
  { to: "/admin-2030/dashboard/assembly", label: "الجمعية العمومية", icon: Users },
  { to: "/admin-2030/dashboard/goals", label: "الأهداف", icon: Target },
  { to: "/admin-2030/dashboard/values", label: "القيم", icon: Heart },
  { to: "/admin-2030/dashboard/initiatives", label: "المبادرات", icon: Sparkles },
  { to: "/admin-2030/dashboard/reports", label: "التقارير والملفات", icon: FileBarChart },
  { to: "/admin-2030/dashboard/messages", label: "رسائل التواصل", icon: Mail },
];

function DashboardLayout() {
  const { loading, isAdmin, user } = useAdminAuth(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/admin-2030" });
  };

  if (loading || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-muted/20" dir="rtl">
      <aside className="w-64 bg-card border-l border-border flex flex-col fixed inset-y-0 right-0 z-30">
        <div className="p-5 border-b border-border flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-bold text-sm text-foreground">لوحة التحكم</div>
            <div className="text-xs text-muted-foreground">مداد</div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = item.exact
              ? location.pathname === item.to
              : location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                  active
                    ? "gradient-primary text-white shadow-elegant"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-border space-y-2">
          <div className="px-3 py-2 text-xs text-muted-foreground truncate">{user?.email}</div>
          <Button onClick={handleLogout} variant="outline" size="sm" className="w-full gap-2">
            <LogOut className="w-4 h-4" />
            تسجيل الخروج
          </Button>
        </div>
      </aside>

      <main className="flex-1 mr-64 p-6 lg:p-8 max-w-full overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
