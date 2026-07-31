"use client";

// @ts-nocheck
import { AvatarFallback, AvatarImage, AvatarRoot } from "./avatar";

export function AvatarDemo({
  fallback = "CN",
  shape = "circle",
  size = "md",
  src = "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80",
}: {
  fallback?: string;
  shape?: "circle" | "square" | "rounded";
  size?: "sm" | "md" | "lg" | "xl";
  src?: string;
}) {
  return (
    <AvatarRoot shape={shape} size={size}>
      <AvatarImage src={src} />
      <AvatarFallback delay={600}>{fallback}</AvatarFallback>
    </AvatarRoot>
  );
}
