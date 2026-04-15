import { useState, useEffect } from "react";
import midadLogo from "@/assets/midad-logo.png";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"spin" | "zoom" | "done">("spin");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("zoom"), 1800);
    const t2 = setTimeout(() => onComplete(), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      style={{
        opacity: phase === "done" ? 0 : 1,
        transition: "opacity 0.5s ease-out",
      }}
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.45 0.08 200 / 6%) 0%, transparent 70%)",
        }}
      />

      <img
        src={midadLogo}
        alt="مداد لتمكين الشباب"
        className="w-40 relative z-10"
        style={{
          animation: phase === "spin"
            ? "logoSpin 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards"
            : "logoZoomOut 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      />

      <p
        className="absolute bottom-[30%] text-[10px] text-muted-foreground tracking-[0.25em] font-medium uppercase"
        style={{ opacity: phase === "spin" ? 1 : 0, transition: "opacity 0.4s" }}
      >
        مداد لتمكين الشباب
      </p>
    </div>
  );
}
