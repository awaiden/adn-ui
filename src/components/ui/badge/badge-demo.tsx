"use client";

// @ts-nocheck
import { BadgeRoot } from "./badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <BadgeRoot variant="default">Default</BadgeRoot>
      <BadgeRoot variant="secondary">Secondary</BadgeRoot>
      <BadgeRoot variant="destructive">Destructive</BadgeRoot>
      <BadgeRoot variant="outline">Outline</BadgeRoot>
    </div>
  );
}
