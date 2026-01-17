"use client";

import { Button } from "@adn-ui/react";

export default function Variants() {
  const variants = ["primary", "secondary", "outline", "ghost", "danger"] as const;

  return (
    <div className="flex gap-4">
      {variants.map((variant) => (
        <Button key={variant} variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
        </Button>
      ))}
    </div>
  );
}
