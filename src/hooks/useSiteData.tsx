import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";

type ContentMap = Record<string, { ar: string; en: string }>; // key = `${section}.${key}`
type ImagesMap = Record<string, { url: string; alt_ar: string | null; alt_en: string | null }>;

interface SiteDataCtx {
  content: ContentMap;
  images: ImagesMap;
  loaded: boolean;
}

const Ctx = createContext<SiteDataCtx>({ content: {}, images: {}, loaded: false });

export function useSiteData() {
  return useContext(Ctx);
}

export function useSiteImage(key: string, fallback?: string) {
  const { images } = useSiteData();
  return images[key]?.url || fallback || "";
}

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ContentMap>({});
  const [images, setImages] = useState<ImagesMap>({});
  const [loaded, setLoaded] = useState(false);

  const loadContent = async () => {
    const { data } = await supabase.from("site_content").select("section,key,value_ar,value_en");
    if (data) {
      const map: ContentMap = {};
      for (const r of data) {
        map[`${r.section}.${r.key}`] = { ar: r.value_ar || "", en: r.value_en || "" };
      }
      setContent(map);
    }
  };

  const loadImages = async () => {
    const { data } = await supabase.from("site_images").select("key,url,alt_ar,alt_en");
    if (data) {
      const map: ImagesMap = {};
      for (const r of data) {
        if (r.url) map[r.key] = { url: r.url, alt_ar: r.alt_ar, alt_en: r.alt_en };
      }
      setImages(map);
    }
  };

  useEffect(() => {
    let alive = true;
    Promise.all([loadContent(), loadImages()]).finally(() => alive && setLoaded(true));

    const ch = supabase
      .channel("site-data-live")
      .on("postgres_changes", { event: "*", schema: "public", table: "site_content" }, () => loadContent())
      .on("postgres_changes", { event: "*", schema: "public", table: "site_images" }, () => loadImages())
      .subscribe();

    return () => {
      alive = false;
      supabase.removeChannel(ch);
    };
  }, []);

  return <Ctx.Provider value={{ content, images, loaded }}>{children}</Ctx.Provider>;
}
