import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

export function useAdminAuth(redirectIfUnauth = true) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;

    const checkRole = async (uid: string) => {
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", uid)
        .eq("role", "admin")
        .maybeSingle();
      return !!data;
    };

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setUser(session?.user ?? null);
      if (session?.user) {
        setTimeout(async () => {
          const ok = await checkRole(session.user.id);
          if (!mounted) return;
          setIsAdmin(ok);
          setLoading(false);
          if (!ok && redirectIfUnauth) {
            await supabase.auth.signOut();
            navigate({ to: "/admin-2030" });
          }
        }, 0);
      } else {
        setIsAdmin(false);
        setLoading(false);
        if (redirectIfUnauth) navigate({ to: "/admin-2030" });
      }
    });

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!mounted) return;
      setUser(session?.user ?? null);
      if (session?.user) {
        const ok = await checkRole(session.user.id);
        if (!mounted) return;
        setIsAdmin(ok);
        setLoading(false);
        if (!ok && redirectIfUnauth) {
          await supabase.auth.signOut();
          navigate({ to: "/admin-2030" });
        }
      } else {
        setLoading(false);
        if (redirectIfUnauth) navigate({ to: "/admin-2030" });
      }
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, [navigate, redirectIfUnauth]);

  return { user, isAdmin, loading };
}
