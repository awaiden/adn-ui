"use client";

import { Separator } from "@adn-ui/react";

const Horizontal = () => (
  <div className="w-full max-w-md">
    <div className="text-sm font-medium">Radix Primitives</div>
    <p className="text-sm text-neutral-500">An open-source UI component library.</p>
    <Separator className="my-4" />
    <div className="text-sm">More content below.</div>
  </div>
);

const Vertical = () => (
  <div className="flex h-5 items-center gap-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
);

export const SeparatorExample = {
  Horizontal,
  Vertical,
};
