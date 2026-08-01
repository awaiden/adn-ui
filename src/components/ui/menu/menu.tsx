"use client";

import "./menu.css";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import type React from "react";
import { cn } from "tailwind-variants";

import { MenuContext, useMenuContext } from "./menu.context";
import { menuVariants, type MenuVariants } from "./menu.variants";

export type MenuProps = MenuVariants & React.ComponentProps<typeof BaseMenu.Root>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuRoot = ({ children, size, ...props }: MenuProps) => {
  const slots = menuVariants({ size });

  return (
    <MenuContext.Provider value={{ slots }}>
      <BaseMenu.Root {...props}>{children}</BaseMenu.Root>
    </MenuContext.Provider>
  );
};

export type MenuTriggerProps = React.ComponentProps<typeof BaseMenu.Trigger>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuTrigger = ({ className, ...props }: MenuTriggerProps) => {
  const { slots } = useMenuContext();
  return <BaseMenu.Trigger className={cn(slots.trigger(), className)} {...props} />;
};

export type MenuPortalProps = React.ComponentProps<typeof BaseMenu.Portal>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuPortal = (props: MenuPortalProps) => {
  return <BaseMenu.Portal {...props} />;
};

export type MenuPositionerProps = React.ComponentProps<typeof BaseMenu.Positioner>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuPositioner = ({ className, sideOffset = 4, ...props }: MenuPositionerProps) => {
  const { slots } = useMenuContext();
  return (
    <BaseMenu.Positioner
      className={cn(slots.positioner(), className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
};

export type MenuPopupProps = React.ComponentProps<typeof BaseMenu.Popup>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuPopup = ({ className, ...props }: MenuPopupProps) => {
  const { slots } = useMenuContext();
  return <BaseMenu.Popup className={cn(slots.popup(), className)} {...props} />;
};

export type MenuItemProps = React.ComponentProps<typeof BaseMenu.Item>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuItem = ({ className, ...props }: MenuItemProps) => {
  const { slots } = useMenuContext();
  return <BaseMenu.Item className={cn(slots.item(), className)} {...props} />;
};

export type MenuSeparatorProps = React.ComponentProps<typeof BaseMenu.Separator>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuSeparator = ({ className, ...props }: MenuSeparatorProps) => {
  const { slots } = useMenuContext();
  return <BaseMenu.Separator className={cn(slots.separator(), className)} {...props} />;
};

export type MenuSubmenuRootProps = React.ComponentProps<typeof BaseMenu.SubmenuRoot>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuSubmenuRoot = (props: MenuSubmenuRootProps) => {
  return <BaseMenu.SubmenuRoot {...props} />;
};

export type MenuSubmenuTriggerProps = React.ComponentProps<typeof BaseMenu.SubmenuTrigger>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuSubmenuTrigger = ({ children, className, ...props }: MenuSubmenuTriggerProps) => {
  const { slots } = useMenuContext();
  return (
    <BaseMenu.SubmenuTrigger className={cn(slots.submenuTrigger(), className)} {...props}>
      {children}
      <svg
        className="text-muted-foreground h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </BaseMenu.SubmenuTrigger>
  );
};

export type MenuGroupProps = React.ComponentProps<typeof BaseMenu.Group>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuGroup = ({ className, ...props }: MenuGroupProps) => {
  const { slots } = useMenuContext();
  return <BaseMenu.Group className={cn(slots.group(), className)} {...props} />;
};

export type MenuGroupLabelProps = React.ComponentProps<typeof BaseMenu.GroupLabel>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuGroupLabel = ({ className, ...props }: MenuGroupLabelProps) => {
  const { slots } = useMenuContext();
  return <BaseMenu.GroupLabel className={cn(slots.groupLabel(), className)} {...props} />;
};

export type MenuCheckboxItemProps = React.ComponentProps<typeof BaseMenu.CheckboxItem>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuCheckboxItem = ({ className, ...props }: MenuCheckboxItemProps) => {
  const { slots } = useMenuContext();
  return <BaseMenu.CheckboxItem className={cn(slots.checkboxItem(), className)} {...props} />;
};

export type MenuCheckboxItemIndicatorProps = React.ComponentProps<
  typeof BaseMenu.CheckboxItemIndicator
>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuCheckboxItemIndicator = ({
  children,
  className,
  ...props
}: MenuCheckboxItemIndicatorProps) => {
  const { slots } = useMenuContext();
  return (
    <BaseMenu.CheckboxItemIndicator
      className={cn(slots.checkboxItemIndicator(), className)}
      {...props}
    >
      {children ?? (
        <svg className="h-4 w-4 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </BaseMenu.CheckboxItemIndicator>
  );
};

export type MenuRadioGroupProps = React.ComponentProps<typeof BaseMenu.RadioGroup>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuRadioGroup = ({ className, ...props }: MenuRadioGroupProps) => {
  const { slots } = useMenuContext();
  return <BaseMenu.RadioGroup className={cn(slots.radioGroup(), className)} {...props} />;
};

export type MenuRadioItemProps = React.ComponentProps<typeof BaseMenu.RadioItem>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuRadioItem = ({ className, ...props }: MenuRadioItemProps) => {
  const { slots } = useMenuContext();
  return <BaseMenu.RadioItem className={cn(slots.radioItem(), className)} {...props} />;
};

export type MenuRadioItemIndicatorProps = React.ComponentProps<typeof BaseMenu.RadioItemIndicator>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/menu/content.md
 */
export const MenuRadioItemIndicator = ({
  children,
  className,
  ...props
}: MenuRadioItemIndicatorProps) => {
  const { slots } = useMenuContext();
  return (
    <BaseMenu.RadioItemIndicator className={cn(slots.radioItemIndicator(), className)} {...props}>
      {children ?? (
        <svg className="h-2 w-2 fill-current" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="4" />
        </svg>
      )}
    </BaseMenu.RadioItemIndicator>
  );
};
