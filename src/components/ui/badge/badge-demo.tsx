"use client";

// @ts-nocheck
import { BadgeRoot } from "./badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <BadgeRoot variant="default">Default</BadgeRoot>
      <BadgeRoot variant="secondary">Secondary</BadgeRoot>
      <BadgeRoot variant="destructive">Destructive</BadgeRoot>
      <BadgeRoot variant="outline">Outline</BadgeRoot>
    </div>
  );
}
