"use client";

import "./scroll-area.css";

import type React from "react";

import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { cn } from "tailwind-variants";

import { ScrollAreaContext, useScrollAreaContext } from "./scroll-area.context";
import { scrollAreaVariants, type ScrollAreaVariants } from "./scroll-area.variants";

export type ScrollAreaProps = ScrollAreaVariants & React.ComponentProps<typeof BaseScrollArea.Root>;

export const ScrollAreaRoot = ({ children, className, size, ...props }: ScrollAreaProps) => {
  const slots = scrollAreaVariants({ size });

  return (
    <ScrollAreaContext.Provider value={{ slots }}>
      <BaseScrollArea.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseScrollArea.Root>
    </ScrollAreaContext.Provider>
  );
};

export type ScrollAreaViewportProps = React.ComponentProps<typeof BaseScrollArea.Viewport>;

export const ScrollAreaViewport = ({ className, ...props }: ScrollAreaViewportProps) => {
  const { slots } = useScrollAreaContext();
  return <BaseScrollArea.Viewport className={cn(slots.viewport(), className)} {...props} />;
};

export type ScrollAreaContentProps = React.ComponentProps<typeof BaseScrollArea.Content>;

export const ScrollAreaContent = ({ className, ...props }: ScrollAreaContentProps) => {
  const { slots } = useScrollAreaContext();
  return <BaseScrollArea.Content className={cn(slots.content(), className)} {...props} />;
};

export type ScrollAreaScrollbarProps = React.ComponentProps<typeof BaseScrollArea.Scrollbar>;

export const ScrollAreaScrollbar = ({ className, ...props }: ScrollAreaScrollbarProps) => {
  const { slots } = useScrollAreaContext();
  return <BaseScrollArea.Scrollbar className={cn(slots.scrollbar(), className)} {...props} />;
};

export type ScrollAreaThumbProps = React.ComponentProps<typeof BaseScrollArea.Thumb>;

export const ScrollAreaThumb = ({ className, ...props }: ScrollAreaThumbProps) => {
  const { slots } = useScrollAreaContext();
  return <BaseScrollArea.Thumb className={cn(slots.thumb(), className)} {...props} />;
};

export type ScrollAreaCornerProps = React.ComponentProps<typeof BaseScrollArea.Corner>;

export const ScrollAreaCorner = ({ className, ...props }: ScrollAreaCornerProps) => {
  const { slots } = useScrollAreaContext();
  return <BaseScrollArea.Corner className={cn(slots.corner(), className)} {...props} />;
};
