"use client";

import {
  ArrowRight,
  Check,
  Copy,
  Sparkles,
  Zap,
  ShieldCheck,
  Layout,
  Layers,
  ChevronRight,
  PanelBottom,
  PanelLeft,
  PanelRight,
  PanelTop,
  Sliders,
  Maximize2,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CardRoot,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import {
  DrawerRoot,
  DrawerPortal,
  DrawerBackdrop,
  DrawerViewport,
  DrawerPopup,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { SwitchRoot, SwitchThumb } from "@/components/ui/switch";
import { TabsRoot, TabsList, TabsTab, TabsPanel } from "@/components/ui/tabs";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(true);
  const [activeSide, setActiveSide] = useState<"bottom" | "right" | "left" | "top">("bottom");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const command = "bunx --bun shadcn@latest add @adn-ui/button";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openDrawerWithSide = (side: "bottom" | "right" | "left" | "top") => {
    setActiveSide(side);
    setDrawerOpen(true);
  };

  return (
    <div className="bg-background text-foreground relative flex min-h-screen flex-col overflow-x-hidden">
      {/* Background Gradients */}
      <div className="from-primary/10 via-primary/5 pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-full max-w-7xl -translate-x-1/2 bg-gradient-to-b to-transparent blur-3xl" />

      {/* Hero Section */}
      <section className="mx-auto flex max-w-5xl flex-col items-center px-4 pt-16 pb-20 text-center md:pt-24 md:pb-28">
        <div className="border-border bg-muted/50 hover:bg-muted mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium shadow-xs transition-colors">
          <Sparkles className="text-primary h-3.5 w-3.5" />
          <span>Crafted with Base UI & Tailwind CSS v4</span>
        </div>

        <h1 className="mb-6 max-w-4xl text-4xl leading-[1.1] font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Unstyled Primitives for{" "}
          <span className="from-primary via-primary/80 to-muted-foreground bg-gradient-to-r bg-clip-text text-transparent">
            Modern UI Components
          </span>
        </h1>

        <p className="text-muted-foreground mb-8 max-w-2xl text-base leading-relaxed md:text-xl">
          High-performance, fully accessible UI components built on top of{" "}
          <code className="text-foreground bg-muted rounded px-1.5 py-0.5 font-mono text-sm">
            @base-ui/react
          </code>
          . Styled with Tailwind v4, ready for production.
        </p>

        {/* Action Buttons */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <Link href="/docs">
            <Button
              size="lg"
              className="h-11 rounded-lg px-6 text-sm font-semibold shadow-md transition-all hover:scale-[1.02]"
            >
              Explore Documentation <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </Link>
          <a href="https://github.com/awaiden/adn-ui" target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="h-11 rounded-lg px-6 text-sm font-medium"
            >
              GitHub Repository
            </Button>
          </a>
        </div>

        {/* Copy Package Command */}
        <div className="bg-card border-border relative flex w-full max-w-lg items-center justify-between rounded-xl border px-4 py-3 font-mono text-xs shadow-sm md:text-sm">
          <div className="flex items-center gap-2 overflow-x-auto select-all">
            <span className="text-muted-foreground">$</span>
            <span>{command}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="hover:bg-muted ml-2 h-8 shrink-0 px-2.5 font-sans text-xs"
          >
            {copied ? (
              <>
                <Check className="mr-1 h-3.5 w-3.5 text-green-500" /> Copied!
              </>
            ) : (
              <>
                <Copy className="text-muted-foreground mr-1 h-3.5 w-3.5" /> Copy
              </>
            )}
          </Button>
        </div>
      </section>

      {/* Live Interactive Showcase Section */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="mb-12 text-center">
          <Badge className="mb-2">Interactive Showcase</Badge>
          <h2 className="text-3xl font-bold tracking-tight">Try ADN UI Components</h2>
          <p className="text-muted-foreground mx-auto mt-2 max-w-lg text-sm">
            Experience gestures, accessible dialogs, drawers, and form controls built with zero
            friction.
          </p>
        </div>

        {/* Showcase Container */}
        <div className="bg-card border-border rounded-2xl border p-6 shadow-xl md:p-8">
          <TabsRoot defaultValue="drawers">
            <TabsList className="border-border mb-6 flex gap-2 border-b pb-2">
              <TabsTab
                value="drawers"
                className="data-[selected]:bg-muted data-[selected]:text-foreground text-muted-foreground cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                Drawer Variants
              </TabsTab>
              <TabsTab
                value="dialogs"
                className="data-[selected]:bg-muted data-[selected]:text-foreground text-muted-foreground cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                Dialog & Modal
              </TabsTab>
              <TabsTab
                value="form"
                className="data-[selected]:bg-muted data-[selected]:text-foreground text-muted-foreground cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                Controls & Badges
              </TabsTab>
              <TabsTab
                value="accordion"
                className="data-[selected]:bg-muted data-[selected]:text-foreground text-muted-foreground cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                Accordion
              </TabsTab>
            </TabsList>

            {/* Tab 1: Drawer Demo */}
            <TabsPanel value="drawers" className="py-4">
              <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Multi-directional Drawers</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    Full swipe-to-dismiss gesture support for all screen edges (
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">bottom</code>,{" "}
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">right</code>,{" "}
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">left</code>,{" "}
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">top</code>).
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="justify-start gap-2"
                      onClick={() => openDrawerWithSide("bottom")}
                    >
                      <PanelBottom className="text-primary h-4 w-4" /> Bottom Drawer
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start gap-2"
                      onClick={() => openDrawerWithSide("right")}
                    >
                      <PanelRight className="text-primary h-4 w-4" /> Right Drawer
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start gap-2"
                      onClick={() => openDrawerWithSide("left")}
                    >
                      <PanelLeft className="text-primary h-4 w-4" /> Left Drawer
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start gap-2"
                      onClick={() => openDrawerWithSide("top")}
                    >
                      <PanelTop className="text-primary h-4 w-4" /> Top Drawer
                    </Button>
                  </div>
                </div>

                <div className="bg-muted/40 border-border/60 flex min-h-[220px] flex-col items-center justify-center rounded-xl border p-6 text-center">
                  <div className="bg-primary/10 text-primary mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                    <Sliders className="h-6 w-6" />
                  </div>
                  <h4 className="mb-1 text-sm font-semibold">
                    Active Side: <span className="text-primary capitalize">{activeSide}</span>
                  </h4>
                  <p className="text-muted-foreground mb-4 max-w-xs text-xs">
                    Click any drawer side above to launch a live demo with touch swipe interactions.
                  </p>
                  <Button size="sm" onClick={() => setDrawerOpen(true)}>
                    Trigger Demo ({activeSide})
                  </Button>
                </div>
              </div>
            </TabsPanel>

            {/* Tab 2: Dialog & Modal */}
            <TabsPanel value="dialogs" className="py-4">
              <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Accessible Dialogs</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    Focus trapping, backdrop blur overlay, escape key dismissal, and seamless
                    transitions.
                  </p>
                  <DialogRoot>
                    <DialogTrigger>
                      <Button className="gap-2">
                        <Maximize2 className="h-4 w-4" /> Open Dialog Modal
                      </Button>
                    </DialogTrigger>
                    <DialogPortal>
                      <DialogBackdrop />
                      <DialogPopup>
                        <DialogTitle>ADN UI Dialog</DialogTitle>
                        <DialogDescription>
                          This modal is fully accessible, traps focus automatically, and closes with
                          the Escape key or backdrop tap.
                        </DialogDescription>
                        <div className="mt-6 flex justify-end gap-2">
                          <DialogClose className="bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex h-9 items-center justify-center rounded-md px-4 text-xs font-medium">
                            Close Modal
                          </DialogClose>
                        </div>
                      </DialogPopup>
                    </DialogPortal>
                  </DialogRoot>
                </div>

                <div className="bg-muted/40 border-border/60 flex min-h-[220px] flex-col items-center justify-center rounded-xl border p-6 text-center">
                  <ShieldCheck className="text-primary mb-2 h-10 w-10" />
                  <h4 className="text-sm font-semibold">Base UI Primitive</h4>
                  <p className="text-muted-foreground mt-1 max-w-xs text-xs">
                    Powered by `@base-ui/react/dialog` with zero unnecessary dependencies.
                  </p>
                </div>
              </div>
            </TabsPanel>

            {/* Tab 3: Controls & Badges */}
            <TabsPanel value="form" className="py-4">
              <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 text-sm font-semibold">Interactive Switch</h4>
                    <div className="flex items-center gap-3">
                      <SwitchRoot checked={switchChecked} onCheckedChange={setSwitchChecked}>
                        <SwitchThumb />
                      </SwitchRoot>
                      <span className="text-muted-foreground text-sm">
                        Status:{" "}
                        <strong className="text-foreground">
                          {switchChecked ? "Enabled" : "Disabled"}
                        </strong>
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold">Status Badges</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/40 border-border/60 flex flex-col gap-3 rounded-xl border p-6">
                  <h4 className="mb-1 text-sm font-semibold">Button Variants</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Primary</Button>
                    <Button size="sm" variant="secondary">
                      Secondary
                    </Button>
                    <Button size="sm" variant="outline">
                      Outline
                    </Button>
                    <Button size="sm" variant="ghost">
                      Ghost
                    </Button>
                    <Button size="sm" variant="destructive">
                      Destructive
                    </Button>
                  </div>
                </div>
              </div>
            </TabsPanel>

            {/* Tab 4: Accordion */}
            <TabsPanel value="accordion" className="py-4">
              <div className="mx-auto max-w-2xl">
                <AccordionRoot defaultValue={["item-1"]} className="w-full">
                  <AccordionItem value="item-1" className="border-border border-b py-2">
                    <AccordionHeader>
                      <AccordionTrigger className="flex w-full justify-between py-2 text-left text-sm font-medium hover:underline">
                        What is ADN UI?
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionPanel className="text-muted-foreground pb-2 text-xs">
                      ADN UI is a collection of re-usable UI components built on `@base-ui/react`
                      and styled with Tailwind CSS v4.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-border border-b py-2">
                    <AccordionHeader>
                      <AccordionTrigger className="flex w-full justify-between py-2 text-left text-sm font-medium hover:underline">
                        Is it styled or unstyled?
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionPanel className="text-muted-foreground pb-2 text-xs">
                      The core logic uses unstyled Base UI primitives, wrapped with Tailwind CSS v4
                      design tokens for clean, responsive styling out of the box.
                    </AccordionPanel>
                  </AccordionItem>
                </AccordionRoot>
              </div>
            </TabsPanel>
          </TabsRoot>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Why Choose ADN UI?</h2>
          <p className="text-muted-foreground mx-auto mt-2 max-w-md text-sm">
            Everything you need to build accessible, elegant web applications rapidly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CardRoot className="border-border bg-card rounded-xl border p-6">
            <CardHeader className="mb-3 p-0">
              <Zap className="text-primary mb-2 h-8 w-8" />
              <CardTitle className="text-lg">Base UI Powered</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-sm">
                Built on top of W3C ARIA compliant Base UI primitives from the MUI team.
              </CardDescription>
            </CardContent>
          </CardRoot>

          <CardRoot className="border-border bg-card rounded-xl border p-6">
            <CardHeader className="mb-3 p-0">
              <Layout className="text-primary mb-2 h-8 w-8" />
              <CardTitle className="text-lg">Tailwind CSS v4</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-sm">
                Customized with standard Tailwind v4 theme variables for effortless light & dark
                mode styling.
              </CardDescription>
            </CardContent>
          </CardRoot>

          <CardRoot className="border-border bg-card rounded-xl border p-6">
            <CardHeader className="mb-3 p-0">
              <Sliders className="text-primary mb-2 h-8 w-8" />
              <CardTitle className="text-lg">Modular System</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-sm">
                Separates styles (<code className="bg-muted rounded px-1 text-xs">.css</code>,{" "}
                <code className="bg-muted rounded px-1 text-xs">.variants.ts</code>) from logic (
                <code className="bg-muted rounded px-1 text-xs">.tsx</code>) for effortless editing.
              </CardDescription>
            </CardContent>
          </CardRoot>

          <CardRoot className="border-border bg-card rounded-xl border p-6">
            <CardHeader className="mb-3 p-0">
              <Layers className="text-primary mb-2 h-8 w-8" />
              <CardTitle className="text-lg">Zero Lock-In</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-sm">
                All components live directly in your codebase under{" "}
                <code className="bg-muted rounded px-1 py-0.5 text-xs">src/components/ui</code>.
              </CardDescription>
            </CardContent>
          </CardRoot>
        </div>

        {/* Modular Architecture Breakdown */}
        <div className="border-border bg-card/60 mt-12 rounded-2xl border p-8 backdrop-blur-sm">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <h3 className="mb-2 text-2xl font-bold">Designed for Maximum Customizability</h3>
            <p className="text-muted-foreground text-sm">
              Unlike monolithic single-file registries, ADN UI isolates styling, slot variants,
              context, and React logic so you can modify design specs without touching primitive
              logic.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 text-left font-mono text-xs md:grid-cols-4">
            <div className="border-border/80 bg-muted/30 rounded-lg border p-4">
              <div className="text-primary mb-1 font-semibold">card.tsx</div>
              <div className="text-muted-foreground">
                React JSX structure & primitive component binding
              </div>
            </div>
            <div className="border-border/80 bg-muted/30 rounded-lg border p-4">
              <div className="text-primary mb-1 font-semibold">card.variants.ts</div>
              <div className="text-muted-foreground">
                Tailwind Variants slot specs & option definitions
              </div>
            </div>
            <div className="border-border/80 bg-muted/30 rounded-lg border p-4">
              <div className="text-primary mb-1 font-semibold">card.css</div>
              <div className="text-muted-foreground">Keyframes, transitions, and CSS variables</div>
            </div>
            <div className="border-border/80 bg-muted/30 rounded-lg border p-4">
              <div className="text-primary mb-1 font-semibold">card.context.ts</div>
              <div className="text-muted-foreground">React Context provider for slot specs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Component List CTA */}
      <section className="border-border bg-muted/20 border-t px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready to build your next app?</h2>
          <p className="text-muted-foreground mx-auto mb-6 max-w-xl text-sm">
            Browse our full catalog of over 35 components including Drawer, Dialog, Combobox,
            Autocomplete, Tooltip, and Table.
          </p>
          <Link href="/docs">
            <Button size="lg" className="h-11 rounded-lg px-8 font-semibold">
              Explore All Components <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Reusable Controlled Drawer for Interactive Demo */}
      <DrawerRoot side={activeSide} open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerPortal>
          <DrawerBackdrop />
          <DrawerViewport>
            <DrawerPopup>
              <DrawerContent className="p-4">
                <DrawerTitle className="capitalize">{activeSide} Drawer Demo</DrawerTitle>
                <DrawerDescription>
                  This panel smoothly slides in from the <strong>{activeSide}</strong> edge of the
                  screen. You can swipe towards the edge to dismiss.
                </DrawerDescription>
                <div className="mt-6 flex justify-end gap-2">
                  <DrawerClose className="bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex h-9 items-center justify-center rounded-md px-4 text-xs font-medium">
                    Close Demo
                  </DrawerClose>
                </div>
              </DrawerContent>
            </DrawerPopup>
          </DrawerViewport>
        </DrawerPortal>
      </DrawerRoot>
    </div>
  );
}
