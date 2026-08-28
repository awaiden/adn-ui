"use client";

import "./aspect-ratio.css";
import type React from "react";
import { cn } from "@/lib/cn";
import { aspectRatioVariants, type AspectRatioVariants } from "./aspect-ratio.variants";

export type AspectRatioProps = {
  /**
   * The desired aspect ratio (width / height).
   * @default 16 / 9
   */
  ratio?: number;
} & AspectRatioVariants & React.ComponentProps<"div">;

export const AspectRatioRoot = ({
  children,
  className,
  ratio = 16 / 9,
  style,
  ...props
}: AspectRatioProps) => {
  const slots = aspectRatioVariants();

  return (
    <div
      className={cn(slots.root(), className)}
      style={{ aspectRatio: `${ratio}`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export const AspectRatio = AspectRatioRoot;
