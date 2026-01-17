import { Button } from "@adn-ui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="bg-primary/5 relative overflow-hidden rounded-3xl border px-6 py-16 text-center md:px-12 lg:px-24">
        <div className="bg-primary/10 absolute top-0 right-0 -mt-12 -mr-12 size-64 rounded-full blur-3xl" />
        <div className="bg-primary/10 absolute bottom-0 left-0 -mb-12 -ml-12 size-64 rounded-full blur-3xl" />

        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Ready to build your next project?
        </h2>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
          Join modules, start building with FeaUI today and experience the difference of a truly
          flexible component library.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/docs">
            <Button className="h-12 px-8 text-base" size="lg">
              Get Started Now <Icon className="ml-2 size-5" icon="mdi:arrow-right" />
            </Button>
          </Link>
          <Link href="https://github.com/aydinthefirst/adn-ui" target="_blank">
            <Button
              className="bg-background/50 hover:bg-background/80 h-12 px-8 text-base"
              size="lg"
              variant="outline"
            >
              <Icon className="mr-2 size-5" icon="mdi:github" /> Star on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
