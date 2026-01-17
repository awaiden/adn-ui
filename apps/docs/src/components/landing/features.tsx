import { Icon } from "@iconify/react";

export function Features() {
  return (
    <section className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-3 lg:gap-12">
      <FeatureCard
        description="Built on Base UI to ensure robust accessibility (WAI-ARIA compliant) for all users."
        icon={<Icon className="text-primary size-8" icon="mdi:cog" />}
        title="Accessible by Default"
      />
      <FeatureCard
        description="Ship with no default styles. You have complete control using CSS or Tailwind."
        icon={<Icon className="text-primary size-8" icon="mdi:palette" />}
        title="Fully Customizable"
      />
      <FeatureCard
        description="Built with TypeScript for a first-class developer experience and autocomplete."
        icon={<Icon className="text-primary size-8" icon="mdi:console" />}
        title="Type Safe"
      />
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group bg-background/50 hover:border-primary/50 hover:shadow-primary/5 relative overflow-hidden rounded-2xl border p-8 transition-all hover:shadow-lg">
      <div className="bg-primary/10 ring-primary/20 group-hover:bg-primary/20 mb-4 inline-block rounded-lg p-3 ring-1 transition-colors">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
