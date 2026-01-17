import { CodeShowcase } from "@/components/landing/code-showcase";
import { CTASection } from "@/components/landing/cta-section";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";

export default function HomePage() {
  return (
    <main className="bg-background flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <Features />
      <CodeShowcase />
      <CTASection />
    </main>
  );
}
