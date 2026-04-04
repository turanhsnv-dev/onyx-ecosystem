"use client";

import { usePathname } from "next/navigation";
export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return (
    <main className={`flex-1 min-h-screen ml-[280px] mr-[320px] ${isHome ? "pb-8" : "p-8"}`}>
      {children}
    </main>
  );
};