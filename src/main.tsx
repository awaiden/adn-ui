import "~/index.css";

import { useState } from "react";
import { createRoot } from "react-dom/client";

import { Accordion } from "~/components/ui/accordion";
import { Avatar } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import { Progress } from "~/components/ui/progress";
import { Separator } from "~/components/ui/separator";
import { Slider } from "~/components/ui/slider";
import { Switch } from "~/components/ui/switch";
import { Tabs } from "~/components/ui/tabs";

function AccordionSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Accordion</h2>
      <p className="text-muted-foreground">
        Collapsible content sections for progressive disclosure.
      </p>
      <Accordion.Root collapsible type="single">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>
            What primitives does adn/ui use?
          </Accordion.Trigger>
          <Accordion.Content>
            All interactive components are built on Radix UI primitives,
            ensuring robust accessibility and keyboard navigation out of the
            box.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>How is styling handled?</Accordion.Trigger>
          <Accordion.Content>
            Styling uses Tailwind CSS v4 with tailwind-variants for variant
            logic. CSS custom properties define design tokens in oklch color
            space.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>Can I use this with shadcn/ui?</Accordion.Trigger>
          <Accordion.Content>
            adn/ui is a shadcn registry itself. Components are published as
            registry entries and can be consumed by other shadcn-compatible
            projects.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <Hero />
      <main className="mx-auto max-w-4xl space-y-16 px-6 pb-24">
        <ButtonsSection />
        <Separator.Root />
        <CardsSection />
        <Separator.Root />
        <TabsSection />
        <Separator.Root />
        <AccordionSection />
        <Separator.Root />
        <InputsSection />
        <Separator.Root />
        <AvatarSection />
      </main>
      <Footer />
    </div>
  );
}

function AvatarSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Avatar</h2>
      <p className="text-muted-foreground">
        User representation with image and fallback support.
      </p>
      <div className="flex items-center gap-4">
        <Avatar.Root>
          <Avatar.Image alt="User" src="https://github.com/shadcn.png" />
          <Avatar.Fallback>SC</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root>
          <Avatar.Fallback>HA</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root>
          <Avatar.Fallback>UI</Avatar.Fallback>
        </Avatar.Root>
      </div>
    </section>
  );
}

function ButtonsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Buttons</h2>
      <p className="text-muted-foreground">
        Five variants, three sizes. Composable with icons.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm" variant="primary">
          Small
        </Button>
        <Button size="md" variant="primary">
          Medium
        </Button>
        <Button size="lg" variant="primary">
          Large
        </Button>
      </div>
    </section>
  );
}

function CardsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Cards</h2>
      <p className="text-muted-foreground">
        Compound component with slots for header, title, description, and
        content.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            description:
              "Built from small, focused primitives you can combine freely.",
            title: "Composable",
          },
          {
            description:
              "Every interaction follows WAI-ARIA patterns via Radix.",
            title: "Accessible",
          },
          {
            description:
              "Design tokens in oklch make color manipulation predictable.",
            title: "Themeable",
          },
        ].map((card) => (
          <Card.Root key={card.title}>
            <Card.Header>
              <Card.Title>{card.title}</Card.Title>
              <Card.Description>{card.description}</Card.Description>
            </Card.Header>
          </Card.Root>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 text-center text-sm text-muted-foreground">
      <p>adn/ui — Built with Radix, Tailwind CSS v4, and tailwind-variants.</p>
    </footer>
  );
}

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_60%)] opacity-60" />
      <p className="mb-4 text-sm font-medium tracking-widest text-muted-foreground uppercase">
        Component Library
      </p>
      <h1 className="max-w-3xl text-5xl leading-tight font-bold tracking-tight text-foreground sm:text-7xl">
        adn<span className="text-muted-foreground">/</span>ui
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        A minimal, composable component system built on Radix primitives,
        Tailwind CSS v4, and tailwind-variants.
      </p>
      <div className="mt-10 flex gap-3">
        <Button size="lg" variant="primary">
          Get Started
        </Button>
        <Button size="lg" variant="outline">
          Browse Components
        </Button>
      </div>
    </section>
  );
}

function InputsSection() {
  const [progress, setProgress] = useState(65);
  const [checked, setChecked] = useState(true);
  const [switchOn, setSwitchOn] = useState(true);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">
        Inputs &amp; Controls
      </h2>
      <p className="text-muted-foreground">
        Form primitives for building interactive interfaces.
      </p>
      <div className="grid gap-8 sm:grid-cols-2">
        <Card.Root>
          <Card.Header>
            <Card.Title>Slider</Card.Title>
          </Card.Header>
          <Card.Content>
            <Slider.Root
              defaultValue={[progress]}
              max={100}
              onValueChange={(v: number[]) => setProgress(v[0])}
              step={1}
            />
            <p className="mt-3 text-sm text-muted-foreground">
              Value: {progress}
            </p>
          </Card.Content>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Card.Title>Progress</Card.Title>
          </Card.Header>
          <Card.Content>
            <Progress.Root value={progress} />
            <p className="mt-3 text-sm text-muted-foreground">
              {progress}% complete
            </p>
          </Card.Content>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Card.Title>Checkbox &amp; Label</Card.Title>
          </Card.Header>
          <Card.Content>
            <div className="flex items-center gap-3">
              <Checkbox.Root
                checked={checked}
                id="terms"
                onCheckedChange={(v: boolean) => setChecked(v)}
              />
              <Label.Root htmlFor="terms">
                Accept terms and conditions
              </Label.Root>
            </div>
          </Card.Content>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Card.Title>Switch</Card.Title>
          </Card.Header>
          <Card.Content>
            <div className="flex items-center gap-3">
              <Switch.Root
                checked={switchOn}
                id="notifications"
                onCheckedChange={(v: boolean) => setSwitchOn(v)}
              />
              <Label.Root htmlFor="notifications">
                Enable notifications
              </Label.Root>
            </div>
          </Card.Content>
        </Card.Root>
      </div>
    </section>
  );
}

function TabsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Tabs</h2>
      <p className="text-muted-foreground">
        Organize content into switchable panels.
      </p>
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="usage">Usage</Tabs.Trigger>
          <Tabs.Trigger value="api">API</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview">
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">
              Tabs provide a way to switch between different views within the
              same context. They keep the interface clean while maintaining
              quick access to related content.
            </p>
          </div>
        </Tabs.Content>
        <Tabs.Content value="usage">
          <div className="rounded-lg border border-border bg-card p-6">
            <pre className="text-sm text-muted-foreground">
              {`<Tabs.Root defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">...</Tabs.Content>
</Tabs.Root>`}
            </pre>
          </div>
        </Tabs.Content>
        <Tabs.Content value="api">
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">
              Built on Radix Tabs. Supports controlled and uncontrolled modes,
              keyboard navigation, and automatic activation.
            </p>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <button
      className="fixed top-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-accent"
      onClick={() => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
      }}
    >
      {dark ? (
        <svg
          fill="none"
          height="18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="18"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" x2="12" y1="1" y2="3" />
          <line x1="12" x2="12" y1="21" y2="23" />
          <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
          <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
          <line x1="1" x2="3" y1="12" y2="12" />
          <line x1="21" x2="23" y1="12" y2="12" />
          <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
          <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
        </svg>
      ) : (
        <svg
          fill="none"
          height="18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="18"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
