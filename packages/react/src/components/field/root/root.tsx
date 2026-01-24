"use client";

import { useId, useMemo } from "react";
import { cn } from "tailwind-variants";

import { type FieldValue, FieldContext } from "../context";
import { rootVariants } from "./root.variants";

export interface RootProps extends React.ComponentProps<"div"> {
  name?: string;
  isRequired?: boolean;
}

export const Root = ({ className, name, isRequired, ...props }: RootProps) => {
  const id = useId();
  const styles = rootVariants();

  const value = useMemo<FieldValue>(
    () => ({
      name: name ?? id,
      isRequired,
    }),
    [name, id, isRequired],
  );

  return (
    <FieldContext value={value}>
      <div
        className={cn(styles, className)}
        data-required={isRequired}
        {...props}
      />
    </FieldContext>
  );
};
