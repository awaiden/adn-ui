"use client";

import "./spinner.css";
import type React from "react";
import { cn } from "tailwind-variants";

import { SpinnerContext } from "./spinner.context";
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
    <SpinnerContext.Provider value={{ slots }}>
      <svg
        role="status"
        aria-label="Loading"
        className={cn(slots.root(), className)}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </SpinnerContext.Provider>
  );
};

export const Spinner = SpinnerRoot;
