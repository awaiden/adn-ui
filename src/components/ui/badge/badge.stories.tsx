"use client";

import React from "react";
import { BadgeRoot } from "./badge";

export default {
  title: "Components/Badge",
  component: BadgeRoot,
};

export const Variants = () => (
  <div className="flex flex-wrap items-center gap-3">
    <BadgeRoot variant="default">Default</BadgeRoot>
    <BadgeRoot variant="secondary">Secondary</BadgeRoot>
    <BadgeRoot variant="outline">Outline</BadgeRoot>
    <BadgeRoot variant="destructive">Destructive</BadgeRoot>
  </div>
);

export const Sizes = () => (
  <div className="flex items-center gap-3">
    <BadgeRoot size="sm">Small</BadgeRoot>
    <BadgeRoot size="md">Medium</BadgeRoot>
  </div>
);

export const Default = () => <BadgeRoot variant="default">Badge</BadgeRoot>;
