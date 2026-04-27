import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2, Save, Trash2, Plus } from "lucide-react";
import { toast } from "sonner";

export type Field = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number";
  dir?: "rtl" | "ltr";
  placeholder?: string;
};

export function BilingualListManager({
  table,
  title,
  description,
  fields,
  defaultValues,
}: {
  table: "board_members" | "assembly_members" | "goals" | "core_values" | "initiatives";
  title: string;
  description: string;
  fields: Field[];
  defaultValues: Record<string, any>;
}) {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  useEffect(() => { load(); }, []);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from(table).select("*").order("display_order", { ascending: true });
    if (error) toast.error(error.message);
    setItems(data || []);
    setLoading(false);
  };

  const update = (id: string, key: string, value: any) =>
    setItems((p) => p.map((i) => i.id === id ? { ...i, [key]: value } : i));

  const save = async (item: any) => {
    setSavingId(item.id);
    const { id, created_at, updated_at, ...payload } = item;
    const { error } = await supabase.from(table).update(payload).eq("id", id);
    setSavingId(null);
    if (error) toast.error(error.message); else toast.success("تم الحفظ");
  };

  const remove = async (id: string) => {
    if (!confirm("هل تريد الحذف؟")) return;
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("تم الحذف"); load(); }
  };

  const addNew = async () => {
    const order = (items[items.length - 1]?.display_order ?? -1) + 1;
    const { error } = await supabase.from(table).insert({ ...defaultValues, display_order: order } as any);
    if (error) toast.error(error.message);
    else { toast.success("أُضيف"); load(); }
  };

  if (loading) return <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  return (
    <div>
      <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>
        <Button onClick={addNew} className="gap-2 gradient-primary text-white">
          <Plus className="w-4 h-4" /> إضافة جديد
        </Button>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <Card key={item.id} className="p-5 border-border/50">
            <div className="flex justify-end mb-3">
              <Button size="sm" variant="ghost" onClick={() => remove(item.id)}>
                <Trash2 className="w-4 h-4 text-destructive" />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {fields.map((f) => (
                <div key={f.key} className={f.type === "textarea" ? "md:col-span-2" : ""}>
                  <Label className="text-xs">{f.label}</Label>
                  {f.type === "textarea" ? (
                    <Textarea
                      value={item[f.key] ?? ""}
                      onChange={(e) => update(item.id, f.key, e.target.value)}
                      dir={f.dir || "rtl"}
                      placeholder={f.placeholder}
                      rows={2}
                    />
                  ) : (
                    <Input
                      type={f.type === "number" ? "number" : "text"}
                      value={item[f.key] ?? ""}
                      onChange={(e) => update(item.id, f.key, f.type === "number" ? Number(e.target.value) : e.target.value)}
                      dir={f.dir || "rtl"}
                      placeholder={f.placeholder}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-end">
              <Button size="sm" onClick={() => save(item)} disabled={savingId === item.id} className="gap-2">
                {savingId === item.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3" />}
                حفظ
              </Button>
            </div>
          </Card>
        ))}
        {items.length === 0 && (
          <Card className="p-12 text-center text-muted-foreground border-border/50">
            لا توجد عناصر — اضغط "إضافة جديد"
          </Card>
        )}
      </div>
    </div>
  );
}
