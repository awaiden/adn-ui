"use client";

import { NavigationMenu } from "@adn-ui/react";

export default function Default() {
  return (
    <NavigationMenu className="w-full max-w-md justify-center">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Getting started</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="grid gap-3 p-6 md:w-100 lg:w-100 lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenu.Link
                  className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                  href="/"
                >
                  <div className="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
                  <p className="text-muted-foreground text-sm leading-tight">
                    Beautifully designed components built with Radix UI and Tailwind CSS.
                  </p>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link
                  className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  href="/docs"
                >
                  <div className="text-sm leading-none font-medium">Introduction</div>
                  <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </p>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link
                  className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  href="/docs/installation"
                >
                  <div className="text-sm leading-none font-medium">Installation</div>
                  <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    How to install dependencies and structure your app.
                  </p>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul className="grid w-100 gap-3 p-4 md:w-100 md:grid-cols-2 lg:w-100">
              {[
                {
                  description:
                    "A modal dialog that interrupts the user with important content and expects a response.",
                  href: "/docs/primitives/alert-dialog",
                  title: "Alert Dialog",
                },
                {
                  description: "For sighted users to preview content available behind a link.",
                  href: "/docs/primitives/hover-card",
                  title: "Hover Card",
                },
              ].map((component) => (
                <li key={component.title}>
                  <NavigationMenu.Link
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                    href={component.href}
                  >
                    <div className="text-sm leading-none font-medium">{component.title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      {component.description}
                    </p>
                  </NavigationMenu.Link>
                </li>
              ))}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent/50 data-active:bg-accent/50 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
            href="/docs"
          >
            Documentation
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <div className="absolute top-full left-0 flex justify-center">
        <NavigationMenu.Viewport />
      </div>
    </NavigationMenu>
  );
}
