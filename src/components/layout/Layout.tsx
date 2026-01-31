import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      
      {/* Floating Theme Toggle */}
      <div className="fixed right-4 bottom-20 z-50">
        <ThemeToggle />
      </div>
    </div>
  );
}
