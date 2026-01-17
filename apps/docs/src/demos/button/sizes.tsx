"use client";

import { Button } from "@adn-ui/react";

export default function Sizes() {
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="flex gap-4">
      {sizes.map((size) => (
        <Button key={size} size={size}>
          {size.toUpperCase()} Button
        </Button>
      ))}
    </div>
  );
}
