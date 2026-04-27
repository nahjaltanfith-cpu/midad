import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Loader2, Save, Trash2, Plus, Upload, FileText, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { uploadAsset } from "@/lib/storage";

export const Route = createFileRoute("/admin-2030/dashboard/reports")({
  component: ReportsManager,
});

interface Report {
  id: string;
  title_ar: string;
  title_en: string | null;
  description_ar: string | null;
  description_en: string | null;
  file_url: string;
  category: string;
  is_published: boolean;
  display_order: number;
}

function ReportsManager() {
  const [items, setItems] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [uploadingId, setUploadingId] = useState<string | null>(null);

  useEffect(() => { load(); }, []);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("site_reports").select("*").order("display_order");
    setItems((data as Report[]) || []);
    setLoading(false);
  };

  const update = (id: string, key: keyof Report, value: any) =>
    setItems((p) => p.map((i) => i.id === id ? { ...i, [key]: value } : i));

  const save = async (item: Report) => {
    setSavingId(item.id);
    const { id, ...payload } = item;
    const { error } = await supabase.from("site_reports").update(payload).eq("id", id);
    setSavingId(null);
    if (error) toast.error(error.message); else toast.success("تم الحفظ");
  };

  const remove = async (id: string) => {
    if (!confirm("حذف هذا الملف؟")) return;
    const { error } = await supabase.from("site_reports").delete().eq("id", id);
    if (error) toast.error(error.message); else { toast.success("تم الحذف"); load(); }
  };

  const addNew = async () => {
    const order = (items[items.length - 1]?.display_order ?? -1) + 1;
    const { error } = await supabase.from("site_reports").insert({
      title_ar: "ملف جديد", file_url: "", category: "reports", display_order: order,
    });
    if (error) toast.error(error.message); else { toast.success("أُضيف"); load(); }
  };

  const handleUpload = async (id: string, file: File) => {
    setUploadingId(id);
    try {
      const url = await uploadAsset(file, "reports");
      update(id, "file_url", url);
      await supabase.from("site_reports").update({ file_url: url }).eq("id", id);
      toast.success("تم الرفع");
    } catch (e: any) { toast.error(e.message); }
    setUploadingId(null);
  };

  if (loading) return <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  return (
    <div>
      <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-bold text-foreground">التقارير والملفات</h1>
          <p className="text-muted-foreground mt-2">ارفع PDF وملفات أخرى</p>
        </div>
        <Button onClick={addNew} className="gap-2 gradient-primary text-white">
          <Plus className="w-4 h-4" /> ملف جديد
        </Button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <Card key={item.id} className="p-5 border-border/50">
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded">{item.category}</span>
                {item.file_url && (
                  <a href={item.file_url} target="_blank" rel="noopener" className="text-xs text-primary hover:underline flex items-center gap-1">
                    عرض الملف <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Label className="text-xs">منشور</Label>
                  <Switch checked={item.is_published} onCheckedChange={(v) => update(item.id, "is_published", v)} />
                </div>
                <Button size="sm" variant="ghost" onClick={() => remove(item.id)}>
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <Input value={item.title_ar} onChange={(e) => update(item.id, "title_ar", e.target.value)} placeholder="العنوان (عربي)" dir="rtl" />
              <Input value={item.title_en || ""} onChange={(e) => update(item.id, "title_en", e.target.value)} placeholder="Title (English)" dir="ltr" />
              <Textarea value={item.description_ar || ""} onChange={(e) => update(item.id, "description_ar", e.target.value)} placeholder="الوصف (عربي)" dir="rtl" rows={2} />
              <Textarea value={item.description_en || ""} onChange={(e) => update(item.id, "description_en", e.target.value)} placeholder="Description (English)" dir="ltr" rows={2} />
              <Input value={item.category} onChange={(e) => update(item.id, "category", e.target.value)} placeholder="التصنيف (reports / brochures / forms)" dir="ltr" />
              <Input type="number" value={item.display_order} onChange={(e) => update(item.id, "display_order", Number(e.target.value))} placeholder="ترتيب" />
            </div>

            <div className="mt-3 flex items-center gap-2 flex-wrap">
              <label className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition text-sm">
                {uploadingId === item.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                {uploadingId === item.id ? "جاري الرفع..." : "رفع ملف PDF"}
                <input type="file" accept=".pdf,.doc,.docx,application/pdf" className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleUpload(item.id, e.target.files[0])} />
              </label>
              <Input value={item.file_url} onChange={(e) => update(item.id, "file_url", e.target.value)} placeholder="رابط الملف" dir="ltr" className="flex-1 text-xs" />
              <Button size="sm" onClick={() => save(item)} disabled={savingId === item.id} className="gap-2">
                {savingId === item.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3" />}
                حفظ
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
