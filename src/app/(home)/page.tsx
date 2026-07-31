"use client";

import React, { useState } from "react";
import Link from "next/link";
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

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardRoot, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SwitchRoot, SwitchThumb } from "@/components/ui/switch";
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
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/ui/accordion";
import {
  TabsRoot,
  TabsList,
  TabsTab,
  TabsPanel,
} from "@/components/ui/tabs";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(true);
  const [activeSide, setActiveSide] = useState<"bottom" | "right" | "left" | "top">("bottom");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const command = "bun add @base-ui/react cnfast tailwind-variants";

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
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="px-4 pt-16 pb-20 md:pt-24 md:pb-28 text-center max-w-5xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 text-xs font-medium mb-6 shadow-xs transition-colors hover:bg-muted">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Crafted with Base UI & Tailwind CSS v4</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1] mb-6">
          Unstyled Primitives for <span className="bg-gradient-to-r from-primary via-primary/80 to-muted-foreground bg-clip-text text-transparent">Modern UI Components</span>
        </h1>

        <p className="text-base md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          High-performance, fully accessible UI components built on top of <code className="text-foreground font-mono text-sm px-1.5 py-0.5 rounded bg-muted">@base-ui/react</code>. Styled with Tailwind v4, ready for production.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link href="/docs">
            <Button size="lg" className="h-11 px-6 text-sm font-semibold rounded-lg shadow-md transition-all hover:scale-[1.02]">
              Explore Documentation <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </Link>
          <a href="https://github.com/awaiden/adn-ui" target="_blank" rel="noreferrer">
            <Button variant="outline" size="lg" className="h-11 px-6 text-sm font-medium rounded-lg">
              GitHub Repository
            </Button>
          </a>
        </div>

        {/* Copy Package Command */}
        <div className="relative flex items-center justify-between w-full max-w-lg bg-card border border-border rounded-xl px-4 py-3 shadow-sm font-mono text-xs md:text-sm">
          <div className="flex items-center gap-2 overflow-x-auto select-all">
            <span className="text-muted-foreground">$</span>
            <span>{command}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 px-2.5 ml-2 text-xs hover:bg-muted font-sans shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-500 mr-1" /> Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-muted-foreground mr-1" /> Copy
              </>
            )}
          </Button>
        </div>
      </section>

      {/* Live Interactive Showcase Section */}
      <section className="px-4 py-16 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <Badge className="mb-2">Interactive Showcase</Badge>
          <h2 className="text-3xl font-bold tracking-tight">Try ADN UI Components</h2>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto text-sm">
            Experience gestures, accessible dialogs, drawers, and form controls built with zero friction.
          </p>
        </div>

        {/* Showcase Container */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl">
          <TabsRoot defaultValue="drawers">
            <TabsList className="flex border-b border-border mb-6 gap-2 pb-2">
              <TabsTab value="drawers" className="px-4 py-2 text-sm font-medium rounded-md data-[selected]:bg-muted data-[selected]:text-foreground text-muted-foreground transition-colors cursor-pointer">
                Drawer Variants
              </TabsTab>
              <TabsTab value="dialogs" className="px-4 py-2 text-sm font-medium rounded-md data-[selected]:bg-muted data-[selected]:text-foreground text-muted-foreground transition-colors cursor-pointer">
                Dialog & Modal
              </TabsTab>
              <TabsTab value="form" className="px-4 py-2 text-sm font-medium rounded-md data-[selected]:bg-muted data-[selected]:text-foreground text-muted-foreground transition-colors cursor-pointer">
                Controls & Badges
              </TabsTab>
              <TabsTab value="accordion" className="px-4 py-2 text-sm font-medium rounded-md data-[selected]:bg-muted data-[selected]:text-foreground text-muted-foreground transition-colors cursor-pointer">
                Accordion
              </TabsTab>
            </TabsList>

            {/* Tab 1: Drawer Demo */}
            <TabsPanel value="drawers" className="py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multi-directional Drawers</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Full swipe-to-dismiss gesture support for all screen edges (<code className="text-xs bg-muted px-1 py-0.5 rounded">bottom</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">right</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">left</code>, <code className="text-xs bg-muted px-1 py-0.5 rounded">top</code>).
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="justify-start gap-2"
                      onClick={() => openDrawerWithSide("bottom")}
                    >
                      <PanelBottom className="w-4 h-4 text-primary" /> Bottom Drawer
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start gap-2"
                      onClick={() => openDrawerWithSide("right")}
                    >
                      <PanelRight className="w-4 h-4 text-primary" /> Right Drawer
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start gap-2"
                      onClick={() => openDrawerWithSide("left")}
                    >
                      <PanelLeft className="w-4 h-4 text-primary" /> Left Drawer
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start gap-2"
                      onClick={() => openDrawerWithSide("top")}
                    >
                      <PanelTop className="w-4 h-4 text-primary" /> Top Drawer
                    </Button>
                  </div>
                </div>

                <div className="bg-muted/40 border border-border/60 rounded-xl p-6 flex flex-col items-center justify-center min-h-[220px] text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                    <Sliders className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1">Active Side: <span className="capitalize text-primary">{activeSide}</span></h4>
                  <p className="text-xs text-muted-foreground max-w-xs mb-4">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Accessible Dialogs</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Focus trapping, backdrop blur overlay, escape key dismissal, and seamless transitions.
                  </p>
                  <DialogRoot>
                    <DialogTrigger>
                      <Button className="gap-2">
                        <Maximize2 className="w-4 h-4" /> Open Dialog Modal
                      </Button>
                    </DialogTrigger>
                    <DialogPortal>
                      <DialogBackdrop />
                      <DialogPopup>
                        <DialogTitle>ADN UI Dialog</DialogTitle>
                        <DialogDescription>
                          This modal is fully accessible, traps focus automatically, and closes with the Escape key or backdrop tap.
                        </DialogDescription>
                        <div className="flex justify-end gap-2 mt-6">
                          <DialogClose className="inline-flex h-9 px-4 items-center justify-center rounded-md bg-secondary text-secondary-foreground text-xs font-medium hover:bg-secondary/80">
                            Close Modal
                          </DialogClose>
                        </div>
                      </DialogPopup>
                    </DialogPortal>
                  </DialogRoot>
                </div>

                <div className="bg-muted/40 border border-border/60 rounded-xl p-6 flex flex-col items-center justify-center min-h-[220px] text-center">
                  <ShieldCheck className="w-10 h-10 text-primary mb-2" />
                  <h4 className="font-semibold text-sm">Base UI Primitive</h4>
                  <p className="text-xs text-muted-foreground max-w-xs mt-1">
                    Powered by `@base-ui/react/dialog` with zero unnecessary dependencies.
                  </p>
                </div>
              </div>
            </TabsPanel>

            {/* Tab 3: Controls & Badges */}
            <TabsPanel value="form" className="py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-3">Interactive Switch</h4>
                    <div className="flex items-center gap-3">
                      <SwitchRoot checked={switchChecked} onCheckedChange={setSwitchChecked}>
                        <SwitchThumb />
                      </SwitchRoot>
                      <span className="text-sm text-muted-foreground">
                        Status: <strong className="text-foreground">{switchChecked ? "Enabled" : "Disabled"}</strong>
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-3">Status Badges</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/40 border border-border/60 rounded-xl p-6 flex flex-col gap-3">
                  <h4 className="text-sm font-semibold mb-1">Button Variants</h4>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Primary</Button>
                    <Button size="sm" variant="secondary">Secondary</Button>
                    <Button size="sm" variant="outline">Outline</Button>
                    <Button size="sm" variant="ghost">Ghost</Button>
                    <Button size="sm" variant="destructive">Destructive</Button>
                  </div>
                </div>
              </div>
            </TabsPanel>

            {/* Tab 4: Accordion */}
            <TabsPanel value="accordion" className="py-4">
              <div className="max-w-2xl mx-auto">
                <AccordionRoot defaultValue={["item-1"]} className="w-full">
                  <AccordionItem value="item-1" className="border-b border-border py-2">
                    <AccordionHeader>
                      <AccordionTrigger className="flex justify-between w-full font-medium text-sm py-2 hover:underline text-left">
                        What is ADN UI?
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionPanel className="text-xs text-muted-foreground pb-2">
                      ADN UI is a collection of re-usable UI components built on `@base-ui/react` and styled with Tailwind CSS v4.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b border-border py-2">
                    <AccordionHeader>
                      <AccordionTrigger className="flex justify-between w-full font-medium text-sm py-2 hover:underline text-left">
                        Is it styled or unstyled?
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionPanel className="text-xs text-muted-foreground pb-2">
                      The core logic uses unstyled Base UI primitives, wrapped with Tailwind CSS v4 design tokens for clean, responsive styling out of the box.
                    </AccordionPanel>
                  </AccordionItem>
                </AccordionRoot>
              </div>
            </TabsPanel>
          </TabsRoot>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="px-4 py-16 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Why Choose ADN UI?</h2>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto text-sm">
            Everything you need to build accessible, elegant web applications rapidly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardRoot className="p-6 border border-border rounded-xl bg-card">
            <CardHeader className="p-0 mb-3">
              <Zap className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">Base UI Powered</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-sm">
                Built on top of W3C ARIA compliant Base UI primitives from the MUI team.
              </CardDescription>
            </CardContent>
          </CardRoot>

          <CardRoot className="p-6 border border-border rounded-xl bg-card">
            <CardHeader className="p-0 mb-3">
              <Layout className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">Tailwind CSS v4</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-sm">
                Customized with standard Tailwind v4 theme variables for effortless light & dark mode styling.
              </CardDescription>
            </CardContent>
          </CardRoot>

          <CardRoot className="p-6 border border-border rounded-xl bg-card">
            <CardHeader className="p-0 mb-3">
              <Sliders className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">Modular System</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-sm">
                Separates styles (<code className="text-xs bg-muted px-1 rounded">.css</code>, <code className="text-xs bg-muted px-1 rounded">.variants.ts</code>) from logic (<code className="text-xs bg-muted px-1 rounded">.tsx</code>) for effortless editing.
              </CardDescription>
            </CardContent>
          </CardRoot>

          <CardRoot className="p-6 border border-border rounded-xl bg-card">
            <CardHeader className="p-0 mb-3">
              <Layers className="w-8 h-8 text-primary mb-2" />
              <CardTitle className="text-lg">Zero Lock-In</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-sm">
                All components live directly in your codebase under <code className="text-xs bg-muted px-1 py-0.5 rounded">src/components/ui</code>.
              </CardDescription>
            </CardContent>
          </CardRoot>
        </div>

        {/* Modular Architecture Breakdown */}
        <div className="mt-12 p-8 border border-border rounded-2xl bg-card/60 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Designed for Maximum Customizability</h3>
            <p className="text-muted-foreground text-sm">
              Unlike monolithic single-file registries, ADN UI isolates styling, slot variants, context, and React logic so you can modify design specs without touching primitive logic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left text-xs font-mono">
            <div className="p-4 rounded-lg border border-border/80 bg-muted/30">
              <div className="font-semibold text-primary mb-1">card.tsx</div>
              <div className="text-muted-foreground">React JSX structure & primitive component binding</div>
            </div>
            <div className="p-4 rounded-lg border border-border/80 bg-muted/30">
              <div className="font-semibold text-primary mb-1">card.variants.ts</div>
              <div className="text-muted-foreground">Tailwind Variants slot specs & option definitions</div>
            </div>
            <div className="p-4 rounded-lg border border-border/80 bg-muted/30">
              <div className="font-semibold text-primary mb-1">card.css</div>
              <div className="text-muted-foreground">Keyframes, transitions, and CSS variables</div>
            </div>
            <div className="p-4 rounded-lg border border-border/80 bg-muted/30">
              <div className="font-semibold text-primary mb-1">card.context.ts</div>
              <div className="text-muted-foreground">React Context provider for slot specs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Component List CTA */}
      <section className="px-4 py-16 border-t border-border bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to build your next app?</h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto mb-6">
            Browse our full catalog of over 35 components including Drawer, Dialog, Combobox, Autocomplete, Tooltip, and Table.
          </p>
          <Link href="/docs">
            <Button size="lg" className="h-11 px-8 font-semibold rounded-lg">
              Explore All Components <ChevronRight className="w-4 h-4 ml-1" />
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
                  This panel smoothly slides in from the <strong>{activeSide}</strong> edge of the screen. You can swipe towards the edge to dismiss.
                </DrawerDescription>
                <div className="flex justify-end gap-2 mt-6">
                  <DrawerClose className="inline-flex h-9 px-4 items-center justify-center rounded-md bg-secondary text-secondary-foreground text-xs font-medium hover:bg-secondary/80">
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
