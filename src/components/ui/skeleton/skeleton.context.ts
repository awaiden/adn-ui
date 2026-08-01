"use client";

import { createContext, useContext } from "react";

import { skeletonVariants } from "./skeleton.variants";

export type SkeletonContext = {
  slots: ReturnType<typeof skeletonVariants>;
};

export const SkeletonContext = createContext<SkeletonContext | null>(null);

export const useSkeletonContext = () => {
  const context = useContext(SkeletonContext);
  return context ?? { slots: skeletonVariants() };
};
