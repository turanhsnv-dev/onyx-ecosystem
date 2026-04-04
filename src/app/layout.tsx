import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarLeft } from "@/components/layout/sidebar-left/sidebar-left";
import { SidebarRight } from "@/components/layout/sidebar-right/sidebar-right";
import { PageContainer } from "@/components/layout/page-container/page-container"; // 1. İMPORT EDİRİK

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Onyx Gaming Ecosystem",
  description: "Next generation gaming platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-text-main antialiased flex`}>
        <SidebarLeft />
        <PageContainer>
          {children}
        </PageContainer>
        <SidebarRight />
      </body>
    </html>
  );
}