"use client";

import { Button } from "@adn-ui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-border bg-background w-full border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">FeaUI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A lightweight, accessible React component library built on top of Base UI. Designed
              for flexibility and customization.
            </p>
            <div className="mt-2 flex gap-4">
              <Link
                className="link"
                href="https://github.com/aydinthefirst/adn-ui"
                rel="noreferrer"
                target="_blank"
              >
                <Icon className="size-5" icon="mdi:github" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                className="link"
                href="https://x.com/aydinthefirst"
                rel="noreferrer"
                target="_blank"
              >
                <Icon className="size-5" icon="mdi:twitter" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Product</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link className="link" href="/docs">
                Documentation
              </Link>
              <Link className="link" href="/docs/components/button">
                Components
              </Link>
              <Link className="link" href="/docs/colors">
                Theming
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Resources</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link className="link" href="https://base-ui.com" target="_blank">
                Base UI
              </Link>
              <Link className="link" href="https://tailwindcss.com" target="_blank">
                Tailwind CSS
              </Link>
              <Link
                className="link"
                href="https://github.com/aydinthefirst/adn-ui/releases"
                target="_blank"
              >
                Changelog
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Stay Connected</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for updates and tips.
            </p>
            <form
              className="flex w-full max-w-sm items-center space-x-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative w-full">
                <input
                  className="border-input placeholder:text-muted-foreground focus-visible:ring-ring h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none md:text-sm"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <Button className="shrink-0" size="sm" type="submit">
                <Icon className="size-4" icon="mdi:send" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>
        </div>

        <div className="text-muted-foreground mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center text-sm md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} FeaUI. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="hover:text-foreground" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-foreground" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
