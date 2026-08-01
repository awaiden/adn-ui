"use client";

import React from "react";

import { Button } from "./button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = () => <Button variant="primary">Button</Button>;

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="destructive">Destructive</Button>
  </div>
);

export const VisualVariants = Variants;

export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);

export const IconOnly = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Button isIconOnly size="sm">
      🚀
    </Button>
    <Button isIconOnly size="md">
      🚀
    </Button>
    <Button isIconOnly size="lg">
      🚀
    </Button>
  </div>
);

export const Disabled = () => <Button disabled>Disabled</Button>;
