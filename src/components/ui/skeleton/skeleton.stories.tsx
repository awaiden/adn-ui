"use client";

import React from "react";

import {
  SkeletonAvatar,
  SkeletonButton,
  SkeletonCard,
  SkeletonRoot,
  SkeletonText,
} from "./skeleton";

export default {
  title: "Components/Skeleton",
  component: SkeletonRoot,
};

export const Shapes = () => (
  <div className="flex items-center gap-4">
    <SkeletonRoot shape="circle" className="h-12 w-12" />
    <SkeletonRoot shape="rounded" className="h-12 w-24" />
    <SkeletonRoot shape="pill" className="h-8 w-20" />
    <SkeletonRoot shape="square" className="h-12 w-12" />
  </div>
);

export const Animations = () => (
  <div className="max-w-sm space-y-4">
    <div>
      <span className="text-muted-foreground text-xs font-medium">Pulse</span>
      <SkeletonRoot animation="pulse" className="mt-1 h-8 w-full" />
    </div>
    <div>
      <span className="text-muted-foreground text-xs font-medium">Shimmer</span>
      <SkeletonRoot animation="shimmer" className="mt-1 h-8 w-full" />
    </div>
    <div>
      <span className="text-muted-foreground text-xs font-medium">None</span>
      <SkeletonRoot animation="none" className="mt-1 h-8 w-full" />
    </div>
  </div>
);

export const Presets = () => (
  <div className="max-w-md space-y-6">
    <div>
      <h4 className="mb-2 text-sm font-semibold">SkeletonAvatar</h4>
      <div className="flex items-center gap-2">
        <SkeletonAvatar size="sm" />
        <SkeletonAvatar size="md" />
        <SkeletonAvatar size="lg" />
        <SkeletonAvatar size="xl" />
      </div>
    </div>

    <div>
      <h4 className="mb-2 text-sm font-semibold">SkeletonButton</h4>
      <div className="flex items-center gap-2">
        <SkeletonButton size="sm" />
        <SkeletonButton size="md" />
        <SkeletonButton size="lg" />
      </div>
    </div>

    <div>
      <h4 className="mb-2 text-sm font-semibold">SkeletonText</h4>
      <SkeletonText lines={4} lastLineWidth="40%" />
    </div>

    <div>
      <h4 className="mb-2 text-sm font-semibold">SkeletonCard</h4>
      <SkeletonCard animation="shimmer" />
    </div>
  </div>
);

export const Default = () => <SkeletonRoot className="h-6 w-48" />;
