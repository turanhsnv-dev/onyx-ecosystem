import type { Metadata } from "next";
import { SidebarLeft } from "@/components/layout/sidebar-left/sidebar-left";
import { SidebarRight } from "@/components/layout/sidebar-right/sidebar-right";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onyx Ecosystem",
  description: "Premium Gaming Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased flex min-h-screen">
        <SidebarLeft />
        <main className="flex-1 ml-[280px] mr-[320px] min-h-screen bg-surface/30 p-8">
          {children}
        </main>
        <SidebarRight />
      </body>
    </html>
  );
}