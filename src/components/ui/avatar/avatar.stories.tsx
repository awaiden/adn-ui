"use client";

import React from "react";
import { AvatarRoot, AvatarImage, AvatarFallback } from "./avatar";

export default {
  title: "Components/Avatar",
  component: AvatarRoot,
};

export const Default = () => (
  <AvatarRoot size="md">
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </AvatarRoot>
);

export const Sizes = () => (
  <div className="flex items-center gap-4">
    <AvatarRoot size="sm">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>SM</AvatarFallback>
    </AvatarRoot>
    <AvatarRoot size="md">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>MD</AvatarFallback>
    </AvatarRoot>
    <AvatarRoot size="lg">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>LG</AvatarFallback>
    </AvatarRoot>
  </div>
);

export const Fallback = () => (
  <AvatarRoot size="md">
    <AvatarFallback>HA</AvatarFallback>
  </AvatarRoot>
);
