"use client";

import { createContext, useContext } from "react";

import { buttonGroupVariants } from "./button-group.variants";

export type ButtonGroupContext = {
  slots: ReturnType<typeof buttonGroupVariants>;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "destructive" | "outline" | "ghost";
};

export const ButtonGroupContext = createContext<ButtonGroupContext | null>(null);

export const useButtonGroupContext = () => {
  const context = useContext(ButtonGroupContext);
  return context ?? { slots: buttonGroupVariants() };
};
