"use client";

import "./autocomplete.css";

import type React from "react";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { cn } from "tailwind-variants";

import { AutocompleteContext, useAutocompleteContext } from "./autocomplete.context";
import { autocompleteVariants, type AutocompleteVariants } from "./autocomplete.variants";

export type AutocompleteProps = AutocompleteVariants &
  React.ComponentProps<typeof BaseAutocomplete.Root>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/autocomplete/content.md
 */
export function AutocompleteRoot({ children, size, variant, ...props }: AutocompleteProps) {
  const slots = autocompleteVariants({ size, variant });

  return (
    <AutocompleteContext.Provider value={{ slots }}>
      <BaseAutocomplete.Root {...props}>{children}</BaseAutocomplete.Root>
    </AutocompleteContext.Provider>
  );
}

export type AutocompleteInputProps = React.ComponentProps<typeof BaseAutocomplete.Input>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/autocomplete/content.md
 */
export const AutocompleteInput = ({
  className,
  children: _children,
  dangerouslySetInnerHTML: _dangerouslySetInnerHTML,
  ...props
}: AutocompleteInputProps & { children?: React.ReactNode; dangerouslySetInnerHTML?: any }) => {
  const { slots } = useAutocompleteContext();
  return <BaseAutocomplete.Input className={cn(slots.input(), className)} {...props} />;
};

export type AutocompletePortalProps = React.ComponentProps<typeof BaseAutocomplete.Portal>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/autocomplete/content.md
 */
export const AutocompletePortal = (props: AutocompletePortalProps) => {
  return <BaseAutocomplete.Portal {...props} />;
};

export type AutocompletePositionerProps = React.ComponentProps<typeof BaseAutocomplete.Positioner>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/autocomplete/content.md
 */
export const AutocompletePositioner = ({
  className,
  sideOffset = 4,
  ...props
}: AutocompletePositionerProps) => {
  const { slots } = useAutocompleteContext();
  return (
    <BaseAutocomplete.Positioner
      className={cn(slots.positioner(), className)}
      sideOffset={sideOffset}
      {...props}
    />
  );
};

export type AutocompletePopupProps = React.ComponentProps<typeof BaseAutocomplete.Popup>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/autocomplete/content.md
 */
export const AutocompletePopup = ({ className, ...props }: AutocompletePopupProps) => {
  const { slots } = useAutocompleteContext();
  return <BaseAutocomplete.Popup className={cn(slots.popup(), className)} {...props} />;
};

export type AutocompleteListProps = React.ComponentProps<typeof BaseAutocomplete.List>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/autocomplete/content.md
 */
export function AutocompleteList({ className, ...props }: AutocompleteListProps) {
  const { slots } = useAutocompleteContext();
  return <BaseAutocomplete.List className={cn(slots.list(), className)} {...props} />;
}

export type AutocompleteItemProps = React.ComponentProps<typeof BaseAutocomplete.Item>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/autocomplete/content.md
 */
export function AutocompleteItem({ className, ...props }: AutocompleteItemProps) {
  const { slots } = useAutocompleteContext();
  return <BaseAutocomplete.Item className={cn(slots.item(), className)} {...props} />;
}

export type AutocompleteEmptyProps = React.ComponentProps<typeof BaseAutocomplete.Empty>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/autocomplete/content.md
 */
export const AutocompleteEmpty = ({ className, ...props }: AutocompleteEmptyProps) => {
  const { slots } = useAutocompleteContext();
  return <BaseAutocomplete.Empty className={cn(slots.empty(), className)} {...props} />;
};

export type AutocompleteStatusProps = React.ComponentProps<typeof BaseAutocomplete.Status>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/autocomplete/content.md
 */
export const AutocompleteStatus = ({ className, ...props }: AutocompleteStatusProps) => {
  const { slots } = useAutocompleteContext();
  return <BaseAutocomplete.Status className={cn(slots.status(), className)} {...props} />;
};
