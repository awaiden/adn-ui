"use client";

import "./select.css";
import { Select as BaseSelect } from "@base-ui/react/select";
import type React from "react";
import { cn } from "tailwind-variants";

import { SelectContext, useSelectContext } from "./select.context";
import { selectVariants, type SelectVariants } from "./select.variants";

export type SelectProps = SelectVariants & React.ComponentProps<typeof BaseSelect.Root>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectRoot = ({ children, size, ...props }: SelectProps) => {
  const slots = selectVariants({ size });

  return (
    <SelectContext.Provider value={{ slots }}>
      <BaseSelect.Root {...props}>{children}</BaseSelect.Root>
    </SelectContext.Provider>
  );
};

export type SelectLabelProps = React.ComponentProps<typeof BaseSelect.Label>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectLabel = ({ className, ...props }: SelectLabelProps) => {
  const { slots } = useSelectContext();
  return <BaseSelect.Label className={cn(slots.label(), className)} {...props} />;
};

export type SelectTriggerProps = React.ComponentProps<typeof BaseSelect.Trigger>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectTrigger = ({ className, ...props }: SelectTriggerProps) => {
  const { slots } = useSelectContext();
  return <BaseSelect.Trigger className={cn(slots.trigger(), className)} {...props} />;
};

export type SelectValueProps = React.ComponentProps<typeof BaseSelect.Value>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectValue = ({ className, ...props }: SelectValueProps) => {
  const { slots } = useSelectContext();
  return <BaseSelect.Value className={cn(slots.value(), className)} {...props} />;
};

export type SelectIconProps = React.ComponentProps<typeof BaseSelect.Icon>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectIcon = ({ children, className, ...props }: SelectIconProps) => {
  const { slots } = useSelectContext();
  return (
    <BaseSelect.Icon className={cn(slots.icon(), className)} {...props}>
      {children ?? (
        <svg className="h-4 w-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5" />
        </svg>
      )}
    </BaseSelect.Icon>
  );
};

export type SelectPortalProps = React.ComponentProps<typeof BaseSelect.Portal>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectPortal = (props: SelectPortalProps) => {
  return <BaseSelect.Portal {...props} />;
};

export type SelectBackdropProps = React.ComponentProps<typeof BaseSelect.Backdrop>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectBackdrop = ({ className, ...props }: SelectBackdropProps) => {
  const { slots } = useSelectContext();
  return <BaseSelect.Backdrop className={cn(slots.backdrop(), className)} {...props} />;
};

export type SelectPositionerProps = React.ComponentProps<typeof BaseSelect.Positioner>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectPositioner = ({
  className,
  sideOffset = 4,
  ...props
}: SelectPositionerProps) => {
  const { slots } = useSelectContext();
  return (
    <BaseSelect.Positioner
      className={cn(slots.positioner(), className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
};

export type SelectPopupProps = React.ComponentProps<typeof BaseSelect.Popup>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectPopup = ({ className, ...props }: SelectPopupProps) => {
  const { slots } = useSelectContext();
  return <BaseSelect.Popup className={cn(slots.popup(), className)} {...props} />;
};

export type SelectListProps = React.ComponentProps<typeof BaseSelect.List>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectList = ({ className, ...props }: SelectListProps) => {
  const { slots } = useSelectContext();
  return <BaseSelect.List className={cn(slots.list(), className)} {...props} />;
};

export type SelectItemProps = React.ComponentProps<typeof BaseSelect.Item>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectItem = ({ className, ...props }: SelectItemProps) => {
  const { slots } = useSelectContext();
  return <BaseSelect.Item className={cn(slots.item(), className)} {...props} />;
};

export type SelectItemTextProps = React.ComponentProps<typeof BaseSelect.ItemText>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectItemText = ({ className, ...props }: SelectItemTextProps) => {
  const { slots } = useSelectContext();
  return <BaseSelect.ItemText className={cn(slots.itemText(), className)} {...props} />;
};

export type SelectItemIndicatorProps = React.ComponentProps<typeof BaseSelect.ItemIndicator>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectItemIndicator = ({
  children,
  className,
  ...props
}: SelectItemIndicatorProps) => {
  const { slots } = useSelectContext();
  return (
    <BaseSelect.ItemIndicator className={cn(slots.itemIndicator(), className)} {...props}>
      {children ?? (
        <svg className="h-4 w-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </BaseSelect.ItemIndicator>
  );
};

export type SelectScrollUpArrowProps = React.ComponentProps<typeof BaseSelect.ScrollUpArrow>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectScrollUpArrow = ({
  children,
  className,
  ...props
}: SelectScrollUpArrowProps) => {
  const { slots } = useSelectContext();
  return (
    <BaseSelect.ScrollUpArrow className={cn(slots.scrollUpArrow(), className)} {...props}>
      {children ?? (
        <svg className="h-3 w-3 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      )}
    </BaseSelect.ScrollUpArrow>
  );
};

export type SelectScrollDownArrowProps = React.ComponentProps<typeof BaseSelect.ScrollDownArrow>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectScrollDownArrow = ({
  children,
  className,
  ...props
}: SelectScrollDownArrowProps) => {
  const { slots } = useSelectContext();
  return (
    <BaseSelect.ScrollDownArrow className={cn(slots.scrollDownArrow(), className)} {...props}>
      {children ?? (
        <svg className="h-3 w-3 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M6 9l6 6 6-6" />
        </svg>
      )}
    </BaseSelect.ScrollDownArrow>
  );
};

export type SelectGroupProps = React.ComponentProps<typeof BaseSelect.Group>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectGroup = ({ className, ...props }: SelectGroupProps) => {
  const { slots } = useSelectContext();
  return <BaseSelect.Group className={cn(slots.group(), className)} {...props} />;
};

export type SelectGroupLabelProps = React.ComponentProps<typeof BaseSelect.GroupLabel>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectGroupLabel = ({ className, ...props }: SelectGroupLabelProps) => {
  const { slots } = useSelectContext();
  return <BaseSelect.GroupLabel className={cn(slots.groupLabel(), className)} {...props} />;
};

export type SelectSeparatorProps = React.ComponentProps<typeof BaseSelect.Separator>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectSeparator = ({ className, ...props }: SelectSeparatorProps) => {
  const { slots } = useSelectContext();
  return <BaseSelect.Separator className={cn(slots.separator(), className)} {...props} />;
};

export type SelectArrowProps = React.ComponentProps<typeof BaseSelect.Arrow>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/select/content.md
 */
export const SelectArrow = ({ className, ...props }: SelectArrowProps) => {
  const { slots } = useSelectContext();
  return <BaseSelect.Arrow className={cn(slots.arrow(), className)} {...props} />;
};
