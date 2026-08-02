"use client";

import "./badge.css";
import type React from "react";
import { cn } from "tailwind-variants";

import { BadgeContext } from "./badge.context";
import { badgeVariants, type BadgeVariants } from "./badge.variants";

export type BadgeProps = BadgeVariants & React.HTMLAttributes<HTMLDivElement>;

export const BadgeRoot = ({ children, className, variant, size, ...props }: BadgeProps) => {
  const slots = badgeVariants({ variant, size });

  return (
    <BadgeContext.Provider value={{ slots }}>
      <div className={cn(slots.root(), className)} {...props}>
        {children}
      </div>
    </BadgeContext.Provider>
  );
};

export const Badge = BadgeRoot;
