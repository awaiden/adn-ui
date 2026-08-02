"use client";

import "./autocomplete.css";
import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import type React from "react";
import { cn } from "tailwind-variants";

import { AutocompleteContext, useAutocompleteContext } from "./autocomplete.context";
import { autocompleteVariants, type AutocompleteVariants } from "./autocomplete.variants";

export type AutocompleteProps = AutocompleteVariants &
  React.ComponentProps<typeof BaseAutocomplete.Root>;

export function AutocompleteRoot({ children, size, variant, ...props }: AutocompleteProps) {
  const slots = autocompleteVariants({ size, variant });

  return (
    <AutocompleteContext.Provider value={{ slots }}>
      <BaseAutocomplete.Root {...props}>{children}</BaseAutocomplete.Root>
    </AutocompleteContext.Provider>
  );
}

export type AutocompleteInputProps = React.ComponentProps<typeof BaseAutocomplete.Input>;

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

export const AutocompletePortal = (props: AutocompletePortalProps) => {
  return <BaseAutocomplete.Portal {...props} />;
};

export type AutocompletePositionerProps = React.ComponentProps<typeof BaseAutocomplete.Positioner>;

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

export const AutocompletePopup = ({ className, ...props }: AutocompletePopupProps) => {
  const { slots } = useAutocompleteContext();
  return <BaseAutocomplete.Popup className={cn(slots.popup(), className)} {...props} />;
};

export type AutocompleteListProps = React.ComponentProps<typeof BaseAutocomplete.List>;

export function AutocompleteList({ className, ...props }: AutocompleteListProps) {
  const { slots } = useAutocompleteContext();
  return <BaseAutocomplete.List className={cn(slots.list(), className)} {...props} />;
}

export type AutocompleteItemProps = React.ComponentProps<typeof BaseAutocomplete.Item>;

export function AutocompleteItem({ className, ...props }: AutocompleteItemProps) {
  const { slots } = useAutocompleteContext();
  return <BaseAutocomplete.Item className={cn(slots.item(), className)} {...props} />;
}

export type AutocompleteEmptyProps = React.ComponentProps<typeof BaseAutocomplete.Empty>;

export const AutocompleteEmpty = ({ className, ...props }: AutocompleteEmptyProps) => {
  const { slots } = useAutocompleteContext();
  return <BaseAutocomplete.Empty className={cn(slots.empty(), className)} {...props} />;
};

export type AutocompleteStatusProps = React.ComponentProps<typeof BaseAutocomplete.Status>;

export const AutocompleteStatus = ({ className, ...props }: AutocompleteStatusProps) => {
  const { slots } = useAutocompleteContext();
  return <BaseAutocomplete.Status className={cn(slots.status(), className)} {...props} />;
};
