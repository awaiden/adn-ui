"use client";

import "./spinner.css";
import { Loader2 } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/cn";

import { spinnerVariants, type SpinnerVariants } from "./spinner.variants";

export type SpinnerProps = SpinnerVariants & React.ComponentProps<"svg">;

export const SpinnerRoot = ({
  className,
  size,
  variant,
  ...props
}: SpinnerProps) => {
  const slots = spinnerVariants({ size, variant });

  return (
    <Loader2
      role="status"
      aria-label="Loading"
      className={cn(slots.root(), "animate-spin", className)}
      {...props}
    />
  );
};

export const Spinner = SpinnerRoot;
