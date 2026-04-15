import { useLocation } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [stage, setStage] = useState<"enter" | "exit">("enter");

  useEffect(() => {
    if (children !== displayChildren) {
      setStage("exit");
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setStage("enter");
        window.scrollTo({ top: 0 });
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [children, location.pathname]);

  return (
    <div
      className={`transition-all duration-300 ease-out ${
        stage === "enter"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3"
      }`}
    >
      {displayChildren}
    </div>
  );
}