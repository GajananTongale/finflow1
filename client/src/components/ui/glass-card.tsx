import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-morphism-dark rounded-2xl p-6",
        hover && "glow-effect",
        className
      )}
    >
      {children}
    </div>
  );
}
