"use client";

import { Button } from "@adn-ui/react";

const Variants = () => (
  <div className="flex flex-wrap gap-4">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="destructive">Destructive</Button>
  </div>
);

const Sizes = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="icon">🔍</Button>
  </div>
);

const Disabled = () => (
  <div className="flex gap-4">
    <Button disabled>Disabled Button</Button>
  </div>
);

export const ButtonExample = {
  Disabled,
  Sizes,
  Variants,
};
