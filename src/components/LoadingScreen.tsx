import { useState, useEffect } from "react";
import midadLogo from "@/assets/midad-logo.jpeg";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setFadeOut(true);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 25);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.5s ease-out",
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.45 0.08 200 / 6%) 0%, transparent 70%)",
        }}
      />

      <img
        src={midadLogo}
        alt="مداد لتمكين الشباب"
        className="w-40 mb-10 relative z-10"
        style={{ animation: "pulse-glow 2.5s ease-in-out infinite" }}
      />

      {/* Progress bar */}
      <div className="relative w-56">
        <div className="w-full h-[3px] rounded-full bg-border overflow-hidden">
          <div
            className="h-full rounded-full gradient-primary transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-[10px] text-muted-foreground mt-3 text-center tracking-[0.2em] font-medium uppercase">
          مداد لتمكين الشباب
        </p>
      </div>
    </div>
  );
}
