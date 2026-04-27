import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type TableName =
  | "board_members"
  | "assembly_members"
  | "goals"
  | "core_values"
  | "initiatives"
  | "site_reports";

export function useDbList<T = any>(table: TableName, opts?: { orderBy?: string; ascending?: boolean }): { rows: T[]; loaded: boolean } {
  const [rows, setRows] = useState<T[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let alive = true;
    const orderBy = opts?.orderBy || "display_order";
    const ascending = opts?.ascending ?? true;

    const load = async () => {
      const { data } = await supabase.from(table).select("*").order(orderBy, { ascending });
      if (alive && data) setRows(data as T[]);
      if (alive) setLoaded(true);
    };
    load();

    const ch = supabase
      .channel(`live-${table}`)
      .on("postgres_changes", { event: "*", schema: "public", table }, () => load())
      .subscribe();

    return () => {
      alive = false;
      supabase.removeChannel(ch);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table]);

  return { rows, loaded };
}
