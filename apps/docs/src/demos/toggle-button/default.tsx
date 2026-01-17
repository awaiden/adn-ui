"use client";

import { ToggleButton } from "@adn-ui/react";
import { Bold } from "lucide-react";

export default function Default() {
  return (
    <ToggleButton aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </ToggleButton>
  );
}
