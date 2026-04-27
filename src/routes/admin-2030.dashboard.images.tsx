import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2, Upload, Save, Trash2, Plus } from "lucide-react";
import { toast } from "sonner";
import { uploadAsset } from "@/lib/storage";

export const Route = createFileRoute("/admin-2030/dashboard/images")({
  component: ImagesManager,
});

interface Img {
  id: string;
  key: string;
  url: string;
  alt_ar: string | null;
  alt_en: string | null;
}

function ImagesManager() {
  const [items, setItems] = useState<Img[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [uploadingId, setUploadingId] = useState<string | null>(null);
  const [newKey, setNewKey] = useState("");

  useEffect(() => { load(); }, []);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("site_images").select("*").order("key");
    setItems(data || []);
    setLoading(false);
  };

  const update = (id: string, field: keyof Img, value: string) =>
    setItems((p) => p.map((i) => i.id === id ? { ...i, [field]: value } : i));

  const save = async (img: Img) => {
    setSavingId(img.id);
    const { error } = await supabase.from("site_images")
      .update({ url: img.url, alt_ar: img.alt_ar, alt_en: img.alt_en, key: img.key })
      .eq("id", img.id);
    setSavingId(null);
    if (error) toast.error(error.message); else toast.success("تم الحفظ");
  };

  const remove = async (id: string) => {
    if (!confirm("هل تريد حذف هذه الصورة؟")) return;
    const { error } = await supabase.from("site_images").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("تم الحذف"); load(); }
  };

  const handleUpload = async (id: string, file: File) => {
    setUploadingId(id);
    try {
      const url = await uploadAsset(file, "images");
      update(id, "url", url);
      await supabase.from("site_images").update({ url }).eq("id", id);
      toast.success("تم رفع الصورة");
    } catch (e: any) { toast.error(e.message); }
    setUploadingId(null);
  };

  const addNew = async () => {
    if (!newKey.trim()) return toast.error("أدخل مفتاح الصورة");
    const { error } = await supabase.from("site_images").insert({ key: newKey, url: "" });
    if (error) toast.error(error.message);
    else { setNewKey(""); toast.success("أُضيفت"); load(); }
  };

  if (loading) return <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">صور الموقع</h1>
        <p className="text-muted-foreground mt-2">ارفع وعدّل كل صور الموقع</p>
      </div>

      <Card className="p-4 mb-6 border-border/50 flex gap-2">
        <Input value={newKey} onChange={(e) => setNewKey(e.target.value)} placeholder="مفتاح صورة جديدة (مثال: hero_banner)" />
        <Button onClick={addNew} className="gap-2"><Plus className="w-4 h-4" /> إضافة</Button>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((img) => (
          <Card key={img.id} className="p-4 border-border/50 space-y-3">
            <div className="flex items-center justify-between">
              <Input value={img.key} onChange={(e) => update(img.id, "key", e.target.value)} className="font-mono text-xs max-w-[60%]" />
              <Button size="sm" variant="ghost" onClick={() => remove(img.id)}>
                <Trash2 className="w-4 h-4 text-destructive" />
              </Button>
            </div>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
              {img.url ? (
                <img src={img.url} alt={img.alt_ar || ""} className="w-full h-full object-cover" />
              ) : (
                <span className="text-muted-foreground text-sm">لا توجد صورة</span>
              )}
            </div>

            <div>
              <Label className="text-xs">رفع صورة جديدة</Label>
              <label className="mt-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition">
                {uploadingId === img.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                <span className="text-sm">{uploadingId === img.id ? "جاري الرفع..." : "اختر ملف"}</span>
                <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && handleUpload(img.id, e.target.files[0])} />
              </label>
            </div>

            <Input value={img.url} onChange={(e) => update(img.id, "url", e.target.value)} placeholder="رابط الصورة" dir="ltr" className="text-xs" />
            <Input value={img.alt_ar || ""} onChange={(e) => update(img.id, "alt_ar", e.target.value)} placeholder="وصف الصورة (عربي)" dir="rtl" />
            <Input value={img.alt_en || ""} onChange={(e) => update(img.id, "alt_en", e.target.value)} placeholder="Image alt (English)" dir="ltr" />

            <Button size="sm" onClick={() => save(img)} disabled={savingId === img.id} className="w-full gap-2">
              {savingId === img.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3" />}
              حفظ التعديلات
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
