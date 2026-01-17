"use client";

import { ScrollArea as BaseScrollArea } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { ScrollAreaContext } from "./scroll-area.context";
import { type ScrollAreaVariants, scrollAreaVariants } from "./scroll-area.variants";
import { useScrollArea } from "./use-scroll-area";

// Root
export interface ScrollAreaProps extends ScrollAreaVariants, BaseScrollArea.Root.Props {}

export const ScrollAreaRoot = ({ className, ...props }: ScrollAreaProps) => {
  const slots = useMemo(() => scrollAreaVariants(), []);

  return (
    <ScrollAreaContext.Provider value={{ slots }}>
      <BaseScrollArea.Root className={cn(className, slots.root())} {...props} />
    </ScrollAreaContext.Provider>
  );
};

// Viewport
export interface ScrollAreaViewportProps extends BaseScrollArea.Viewport.Props {}

export const ScrollAreaViewport = ({ className, ...props }: ScrollAreaViewportProps) => {
  const { slots } = useScrollArea();
  return <BaseScrollArea.Viewport className={cn(slots.viewport(), className)} {...props} />;
};

// Content
export interface ScrollAreaContentProps extends BaseScrollArea.Content.Props {}

export const ScrollAreaContent = ({ className, ...props }: ScrollAreaContentProps) => {
  const { slots } = useScrollArea();
  return <BaseScrollArea.Content className={cn(slots.content(), className)} {...props} />;
};

// Scrollbar
export interface ScrollAreaScrollbarProps extends BaseScrollArea.Scrollbar.Props {}

export const ScrollAreaScrollbar = ({ className, ...props }: ScrollAreaScrollbarProps) => {
  const { slots } = useScrollArea();
  return <BaseScrollArea.Scrollbar className={cn(slots.scrollbar(), className)} {...props} />;
};

// Thumb
export interface ScrollAreaThumbProps extends BaseScrollArea.Thumb.Props {}

export const ScrollAreaThumb = ({ className, ...props }: ScrollAreaThumbProps) => {
  const { slots } = useScrollArea();
  return <BaseScrollArea.Thumb className={cn(slots.thumb(), className)} {...props} />;
};
