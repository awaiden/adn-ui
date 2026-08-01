"use client";

import "./drawer.css";

import React from "react";

import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import { cn } from "tailwind-variants";

import { DrawerContext, useDrawerContext } from "./drawer.context";
import { drawerVariants, type DrawerVariants } from "./drawer.variants";

export type DrawerProviderProps = React.ComponentProps<typeof BaseDrawer.Provider>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerProvider = (props: DrawerProviderProps) => {
  return <BaseDrawer.Provider {...props} />;
};

export type DrawerIndentBackgroundProps = React.ComponentProps<typeof BaseDrawer.IndentBackground>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerIndentBackground = (props: DrawerIndentBackgroundProps) => {
  return <BaseDrawer.IndentBackground {...props} />;
};

export type DrawerIndentProps = React.ComponentProps<typeof BaseDrawer.Indent>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerIndent = (props: DrawerIndentProps) => {
  return <BaseDrawer.Indent {...props} />;
};

const SIDE_TO_SWIPE_DIRECTION: Record<
  NonNullable<DrawerVariants["side"]>,
  React.ComponentProps<typeof BaseDrawer.Root>["swipeDirection"]
> = {
  bottom: "down",
  top: "up",
  left: "left",
  right: "right",
};

export type DrawerProps = DrawerVariants & React.ComponentProps<typeof BaseDrawer.Root>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerRoot = ({
  children,
  side = "bottom",
  swipeDirection,
  ...props
}: DrawerProps) => {
  const slots = drawerVariants({ side });
  const resolvedSwipeDirection = swipeDirection ?? (side ? SIDE_TO_SWIPE_DIRECTION[side] : "down");

  return (
    <DrawerContext.Provider value={{ slots }}>
      <BaseDrawer.Root swipeDirection={resolvedSwipeDirection} {...props}>
        {children}
      </BaseDrawer.Root>
    </DrawerContext.Provider>
  );
};

export type DrawerTriggerProps = React.ComponentProps<typeof BaseDrawer.Trigger> & {
  render?: React.ReactElement;
  asChild?: boolean;
};

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerTrigger = ({
  className,
  children,
  render,
  asChild: _asChild,
  ...props
}: DrawerTriggerProps) => {
  const { slots } = useDrawerContext();
  const renderElement = render ?? (React.isValidElement(children) ? children : undefined);
  return (
    <BaseDrawer.Trigger
      className={cn(slots.trigger(), className)}
      {...props}
      {...(renderElement ? { render: renderElement } : { children })}
    />
  );
};

export type DrawerSwipeAreaProps = React.ComponentProps<typeof BaseDrawer.SwipeArea>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerSwipeArea = (props: DrawerSwipeAreaProps) => {
  return <BaseDrawer.SwipeArea {...props} />;
};

export type DrawerPortalProps = React.ComponentProps<typeof BaseDrawer.Portal>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerPortal = (props: DrawerPortalProps) => {
  return <BaseDrawer.Portal {...props} />;
};

export type DrawerBackdropProps = React.ComponentProps<typeof BaseDrawer.Backdrop>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerBackdrop = ({ className, ...props }: DrawerBackdropProps) => {
  const { slots } = useDrawerContext();
  return <BaseDrawer.Backdrop className={cn(slots.backdrop(), className)} {...props} />;
};

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerOverlay = DrawerBackdrop;
export type DrawerOverlayProps = DrawerBackdropProps;

export type DrawerViewportProps = DrawerVariants & React.ComponentProps<typeof BaseDrawer.Viewport>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerViewport = ({ className, side, ...props }: DrawerViewportProps) => {
  const { slots } = useDrawerContext();
  const viewportClass = side ? drawerVariants({ side }).viewport() : slots.viewport();
  return <BaseDrawer.Viewport className={cn(viewportClass, className)} {...props} />;
};

export type DrawerPopupProps = DrawerVariants & React.ComponentProps<typeof BaseDrawer.Popup>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerPopup = ({ className, side, ...props }: DrawerPopupProps) => {
  const { slots } = useDrawerContext();
  const popupClass = side ? drawerVariants({ side }).popup() : slots.popup();
  return <BaseDrawer.Popup className={cn(popupClass, className)} {...props} />;
};

export type DrawerContentProps = React.ComponentProps<typeof BaseDrawer.Content>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerContent = ({ className, ...props }: DrawerContentProps) => {
  const { slots } = useDrawerContext();
  return <BaseDrawer.Content className={cn(slots.content(), className)} {...props} />;
};

export type DrawerTitleProps = React.ComponentProps<typeof BaseDrawer.Title>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerTitle = ({ className, ...props }: DrawerTitleProps) => {
  const { slots } = useDrawerContext();
  return <BaseDrawer.Title className={cn(slots.title(), className)} {...props} />;
};

export type DrawerDescriptionProps = React.ComponentProps<typeof BaseDrawer.Description>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerDescription = ({ className, ...props }: DrawerDescriptionProps) => {
  const { slots } = useDrawerContext();
  return <BaseDrawer.Description className={cn(slots.description(), className)} {...props} />;
};

export type DrawerCloseProps = React.ComponentProps<typeof BaseDrawer.Close> & {
  render?: React.ReactElement;
  asChild?: boolean;
};

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/drawer/content.md
 */
export const DrawerClose = ({
  className,
  children,
  render,
  asChild: _asChild,
  ...props
}: DrawerCloseProps) => {
  const { slots } = useDrawerContext();
  const renderElement = render ?? (React.isValidElement(children) ? children : undefined);
  return (
    <BaseDrawer.Close
      className={cn(slots.close(), className)}
      {...props}
      {...(renderElement ? { render: renderElement } : { children })}
    />
  );
};
