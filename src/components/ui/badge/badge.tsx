"use client";

import "./badge.css";
import type React from "react";
import { cn } from "@/lib/cn";

import { badgeVariants, type BadgeVariants } from "./badge.variants";

export type BadgeProps = BadgeVariants & React.HTMLAttributes<HTMLDivElement>;

export const BadgeRoot = ({ children, className, variant, size, ...props }: BadgeProps) => {
  const slots = badgeVariants({ variant, size });

  return (
    <div className={cn(slots.root(), className)} {...props}>
      {children}
    </div>
  );
};

export const Badge = BadgeRoot;
