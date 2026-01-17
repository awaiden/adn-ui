import { Button } from "@adn-ui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center space-y-8 px-4 py-24 text-center md:py-32">
      {/* Background Gradients */}
      <div className="bg-primary/20 absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]" />

      <div className="space-y-4">
        <div className="border-primary/20 bg-primary/5 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md">
          <Icon className="size-5" icon="mdi:sparkles" />
          Beautiful by default. Customizable by design
        </div>
        <h1 className="from-foreground to-foreground/70 bg-linear-to-b bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Lightweight. Accessible. <br />
          <span className="text-primary">Unstyled.</span>
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed sm:text-xl">
          A React component library built on top of Base UI. Separating logic from styles for
          maximum flexibility and control.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link href="/docs">
          <Button size="lg">
            Get Started <Icon icon="mdi:arrow-right" />
          </Button>
        </Link>
        <Link href="https://github.com/aydinthefirst/adn-ui" rel="noreferrer" target="_blank">
          <Button size="lg" variant="outline">
            <Icon className="size-4" icon="mdi:github" /> GitHub
          </Button>
        </Link>
      </div>
    </section>
  );
}
