import { useState, useEffect } from "react";
import midadLogo from "@/assets/midad-logo.jpeg";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      <img
        src={midadLogo}
        alt="مداد لتمكين الشباب"
        className="w-48 mb-8"
        style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
      />
      <div className="w-48 h-1 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full gradient-primary rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
