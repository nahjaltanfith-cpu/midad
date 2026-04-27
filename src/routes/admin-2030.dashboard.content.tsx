import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2, Save, Search } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin-2030/dashboard/content")({
  component: ContentManager,
});

interface Item {
  id: string;
  section: string;
  key: string;
  value_ar: string | null;
  value_en: string | null;
}

function ContentManager() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [filterSection, setFilterSection] = useState<string>("");

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("site_content")
      .select("*")
      .order("section")
      .order("key");
    if (error) toast.error(error.message);
    setItems(data || []);
    setLoading(false);
  };

  const update = (id: string, field: "value_ar" | "value_en", value: string) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, [field]: value } : it)));
  };

  const save = async (item: Item) => {
    setSaving(item.id);
    const { error } = await supabase
      .from("site_content")
      .update({ value_ar: item.value_ar, value_en: item.value_en })
      .eq("id", item.id);
    setSaving(null);
    if (error) toast.error(error.message);
    else toast.success("تم الحفظ");
  };

  const sections = Array.from(new Set(items.map((i) => i.section)));
  const filtered = items.filter((i) => {
    const matchesSearch = !search ||
      i.key.toLowerCase().includes(search.toLowerCase()) ||
      (i.value_ar || "").toLowerCase().includes(search.toLowerCase());
    const matchesSection = !filterSection || i.section === filterSection;
    return matchesSearch && matchesSection;
  });

  if (loading) return <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">نصوص الموقع</h1>
        <p className="text-muted-foreground mt-2">عدّل كل نصوص الموقع — العربية والإنجليزية</p>
      </div>

      <Card className="p-4 mb-6 border-border/50 flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="ابحث في النصوص..." className="pr-10" />
        </div>
        <select
          value={filterSection}
          onChange={(e) => setFilterSection(e.target.value)}
          className="px-4 py-2 rounded-md border border-border bg-background text-foreground text-sm"
        >
          <option value="">كل الأقسام</option>
          {sections.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </Card>

      <div className="space-y-3">
        {filtered.map((item) => (
          <Card key={item.id} className="p-5 border-border/50">
            <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
              <div>
                <span className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium">{item.section}</span>
                <span className="text-xs text-muted-foreground mr-2 font-mono">{item.key}</span>
              </div>
              <Button size="sm" onClick={() => save(item)} disabled={saving === item.id} className="gap-2">
                {saving === item.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3" />}
                حفظ
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <Label className="text-xs">عربي</Label>
                <Textarea value={item.value_ar || ""} onChange={(e) => update(item.id, "value_ar", e.target.value)} dir="rtl" rows={2} />
              </div>
              <div>
                <Label className="text-xs">English</Label>
                <Textarea value={item.value_en || ""} onChange={(e) => update(item.id, "value_en", e.target.value)} dir="ltr" rows={2} />
              </div>
            </div>
          </Card>
        ))}
        {filtered.length === 0 && (
          <Card className="p-12 text-center text-muted-foreground border-border/50">لا توجد نتائج</Card>
        )}
      </div>
    </div>
  );
}
