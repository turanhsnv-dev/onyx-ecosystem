import Link from "next/link";
import { ReactNode } from "react";

interface NavItemProps {
  href: string;
  icon: ReactNode;
  title: string;
  subtitle?: string;
  isActive?: boolean;
}

export const NavItem = ({ href, icon, title, subtitle, isActive }: NavItemProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group
        ${isActive
          ? "bg-surface border border-border"
          : "hover:bg-surface/50 border border-transparent"
        }`}
    >
      <div className={`${isActive ? "text-primary" : "text-text-muted group-hover:text-primary"} transition-colors`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className={`text-sm font-semibold ${isActive ? "text-primary" : "text-text-main"}`}>
          {title}
        </span>
        {subtitle && (
          <span className="text-xs text-text-muted">
            {subtitle}
          </span>
        )}
      </div>
    </Link>
  );
};