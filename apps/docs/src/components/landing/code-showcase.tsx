import { Icon } from "@iconify/react";

export function CodeShowcase() {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="bg-muted/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
            <Icon className="size-4" icon="mdi:code-braces" />
            <span>Developer Experience</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">Code that makes sense.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Stop fighting with complex APIs. FeaUI provides a clean, intuitive interface that just
            works. Built with TypeScript for excellent autocomplete and type safety.
          </p>
          <div className="flex flex-col gap-2 pt-4">
            <FeatureItem text="Fully typed components" />
            <FeatureItem text="Zero configuration required" />
            <FeatureItem text="Customizable via Tailwind classes" />
          </div>
        </div>
        <div className="bg-muted/50 relative overflow-hidden rounded-xl border shadow-2xl">
          <div className="bg-background/50 flex items-center gap-2 border-b px-4 py-3">
            <div className="size-3 rounded-full bg-red-500/20" />
            <div className="size-3 rounded-full bg-yellow-500/20" />
            <div className="size-3 rounded-full bg-green-500/20" />
          </div>
          <div className="overflow-x-auto p-4">
            <pre className="font-mono text-sm leading-relaxed">
              <code className="text-foreground">
                <span className="text-purple-400">import</span> {"{"} Button {"}"}{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-green-400">"@adn-ui/react"</span>;{"\n\n"}
                <span className="text-purple-400">export default function</span>{" "}
                <span className="text-blue-400">App</span>() {"{"}
                {"\n"}
                {"  "}
                <span className="text-purple-400">return</span> ({"\n"}
                {"    "}
                <span className="text-blue-200">&lt;Button</span>
                {"\n"}
                {"      "}
                <span className="text-sky-300">variant</span>=
                <span className="text-green-400">"primary"</span>
                {"\n"}
                {"      "}
                <span className="text-sky-300">size</span>=
                <span className="text-green-400">"lg"</span>
                {"\n"}
                {"      "}
                <span className="text-sky-300">onPress</span>={"{"}(){" "}
                <span className="text-purple-400">=&gt;</span> console.
                <span className="text-blue-400">log</span>(
                <span className="text-green-400">"Clicked!"</span>){"}"}
                {"\n"}
                {"    "}
                <span className="text-blue-200">&gt;</span>
                {"\n"}
                {"      "}Click Me{"\n"}
                {"    "}
                <span className="text-blue-200">&lt;/Button&gt;</span>
                {"\n"}
                {"  "});{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="text-muted-foreground flex items-center gap-2">
      <Icon className="text-primary size-5" icon="mdi:check-circle" />
      <span>{text}</span>
    </div>
  );
}
