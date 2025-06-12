"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { Features } from "@/components/ui/features";
import { Footer } from "@/components/ui/footer";
import { useMobileDetector } from "@/hooks/use-mobile";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMobileDetector();

  useEffect(() => {
    setMounted(true);
  }, []);

  //anda

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
