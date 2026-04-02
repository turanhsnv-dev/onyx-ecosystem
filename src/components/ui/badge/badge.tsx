import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "live" | "glass";
  className?: string;
}

export const Badge = ({ children, variant = "default", className = "" }: BadgeProps) => {
  const variants = {
    default: "bg-surface border border-border text-text-muted",
    live: "bg-red-500 text-white font-bold tracking-wider",
    glass: "bg-black/50 backdrop-blur-md text-white border border-white/10"
  };

  return (
    <span className={`px-2.5 py-1 rounded-md text-xs flex items-center gap-1.5 ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};