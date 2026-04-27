import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, Trash2, Check, MailOpen } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin-2030/dashboard/messages")({
  component: MessagesManager,
});

interface Msg {
  id: string;
  name: string;
  email: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

function MessagesManager() {
  const [items, setItems] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { load(); }, []);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
    setItems((data as Msg[]) || []);
    setLoading(false);
  };

  const markRead = async (id: string, read: boolean) => {
    const { error } = await supabase.from("contact_messages").update({ is_read: read }).eq("id", id);
    if (error) toast.error(error.message);
    else { setItems((p) => p.map((i) => i.id === id ? { ...i, is_read: read } : i)); }
  };

  const remove = async (id: string) => {
    if (!confirm("حذف هذه الرسالة؟")) return;
    const { error } = await supabase.from("contact_messages").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("تم الحذف"); setItems((p) => p.filter((i) => i.id !== id)); }
  };

  if (loading) return <div className="flex justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  const unread = items.filter((i) => !i.is_read).length;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">رسائل التواصل</h1>
        <p className="text-muted-foreground mt-2">{items.length} رسالة — {unread} غير مقروءة</p>
      </div>

      <div className="space-y-3">
        {items.map((m) => (
          <Card key={m.id} className={`p-5 border-border/50 ${!m.is_read ? "border-r-4 border-r-primary bg-primary/5" : ""}`}>
            <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${m.is_read ? "bg-muted" : "gradient-primary"}`}>
                  {m.is_read ? <MailOpen className="w-5 h-5 text-muted-foreground" /> : <Mail className="w-5 h-5 text-white" />}
                </div>
                <div>
                  <div className="font-bold text-foreground">{m.name}</div>
                  <a href={`mailto:${m.email}`} className="text-sm text-primary hover:underline" dir="ltr">{m.email}</a>
                  <div className="text-xs text-muted-foreground mt-1">
                    {new Date(m.created_at).toLocaleString("ar-SA")}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => markRead(m.id, !m.is_read)} className="gap-2">
                  <Check className="w-3 h-3" /> {m.is_read ? "وضع كغير مقروء" : "وضع كمقروء"}
                </Button>
                <Button size="sm" variant="ghost" onClick={() => remove(m.id)}>
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </div>
            <div className="text-sm text-foreground whitespace-pre-wrap bg-muted/30 rounded-lg p-4">
              {m.message}
            </div>
          </Card>
        ))}
        {items.length === 0 && (
          <Card className="p-12 text-center text-muted-foreground border-border/50">لا توجد رسائل بعد</Card>
        )}
      </div>
    </div>
  );
}
