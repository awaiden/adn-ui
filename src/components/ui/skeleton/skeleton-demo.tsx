"use client";

import {
  SkeletonAvatar,
  SkeletonButton,
  SkeletonCard,
  SkeletonRoot,
  SkeletonText,
} from "./skeleton";

export function SkeletonDemo() {
  return (
    <div className="space-y-8">
      {/* Basic shapes */}
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-semibold tracking-wider uppercase">
          Shapes & Basic Skeletons
        </h4>
        <div className="flex flex-wrap items-center gap-4">
          <SkeletonRoot shape="circle" className="h-12 w-12" />
          <SkeletonRoot shape="rounded" className="h-12 w-24" />
          <SkeletonRoot shape="pill" className="h-8 w-20" />
          <SkeletonRoot shape="square" className="h-12 w-12" />
        </div>
      </div>

      {/* Animation variants */}
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-semibold tracking-wider uppercase">
          Animation Variants (Pulse vs Shimmer)
        </h4>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="border-border bg-card rounded-lg border p-4">
            <span className="mb-2 block text-xs font-medium">Pulse (Default)</span>
            <div className="flex items-center gap-3">
              <SkeletonAvatar animation="pulse" size="md" />
              <div className="w-full space-y-2">
                <SkeletonRoot animation="pulse" size="sm" className="w-3/4" />
                <SkeletonRoot animation="pulse" size="xs" className="w-1/2" />
              </div>
            </div>
          </div>
          <div className="border-border bg-card rounded-lg border p-4">
            <span className="mb-2 block text-xs font-medium">Shimmer Effect</span>
            <div className="flex items-center gap-3">
              <SkeletonAvatar animation="shimmer" size="md" />
              <div className="w-full space-y-2">
                <SkeletonRoot animation="shimmer" size="sm" className="w-3/4" />
                <SkeletonRoot animation="shimmer" size="xs" className="w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preset Building Blocks */}
      <div>
        <h4 className="text-muted-foreground mb-3 text-xs font-semibold tracking-wider uppercase">
          Preset Helpers (Text, Button, Card)
        </h4>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <span className="mb-1.5 block text-xs font-medium">Multi-line SkeletonText</span>
              <SkeletonText lines={3} lastLineWidth="50%" />
            </div>
            <div>
              <span className="mb-1.5 block text-xs font-medium">SkeletonButtons</span>
              <div className="flex items-center gap-2">
                <SkeletonButton size="sm" />
                <SkeletonButton size="md" />
                <SkeletonButton size="lg" />
              </div>
            </div>
          </div>

          <div>
            <span className="mb-1.5 block text-xs font-medium">SkeletonCard</span>
            <SkeletonCard animation="shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}
