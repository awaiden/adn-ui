"use client";

import "./button-group.css";
import type React from "react";
import { cn } from "@/lib/cn";

import { Button, type ButtonProps } from "../button";
import { ButtonGroupContext, useButtonGroupContext } from "./button-group.context";
import { buttonGroupVariants, type ButtonGroupVariants } from "./button-group.variants";

export type ButtonGroupProps = {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "destructive" | "outline" | "ghost";
} & ButtonGroupVariants & React.ComponentProps<"div">;

export const ButtonGroupRoot = ({
  children,
  className,
  orientation = "horizontal",
  size,
  variant,
  ...props
}: ButtonGroupProps) => {
  const slots = buttonGroupVariants({ orientation });

  return (
    <ButtonGroupContext.Provider value={{ slots, size, variant }}>
      <div
        role="group"
        className={cn(slots.root(), className)}
        {...props}
      >
        {children}
      </div>
    </ButtonGroupContext.Provider>
  );
};

export const ButtonGroupItem = ({ size, variant, ...props }: ButtonProps) => {
  const context = useButtonGroupContext();
  return (
    <Button
      size={size ?? context.size}
      variant={variant ?? context.variant}
      {...props}
    />
  );
};

export const ButtonGroup = ButtonGroupRoot;
