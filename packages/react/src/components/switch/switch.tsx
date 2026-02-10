import { Switch as BaseSwitch } from "@base-ui/react";
import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { useFieldOptional } from "../field";
import { switchVariants, type SwitchVariants } from "./switch.variants";

export interface SwitchRootProps extends BaseSwitch.Root.Props, SwitchVariants {}

export const SwitchRoot = ({ ...props }: SwitchRootProps) => {
  const field = useFieldOptional();

  if (!field) {
    return <PureSwitchRoot {...props} />;
  }

  const { name, isRequired, error } = field;

  return (
    <PureSwitchRoot
      id={props.id ?? name}
      name={props.name ?? name}
      aria-invalid={Boolean(error)}
      aria-describedby={`${name}-error`}
      data-invalid={Boolean(error)}
      data-required={isRequired}
      required={props.required ?? isRequired}
      {...props}
    />
  );
};

export const PureSwitchRoot = ({ className, size, ...props }: SwitchRootProps) => {
  const slots = useMemo(() => switchVariants({ size }), [size]);

  return (
    <BaseSwitch.Root
      className={cn(slots.root(), className)}
      {...props}
    />
  );
};

export interface SwitchThumbProps extends BaseSwitch.Thumb.Props {}

export const SwitchThumb = ({ className, ...props }: SwitchThumbProps) => {
  const slots = switchVariants();

  return (
    <BaseSwitch.Thumb
      className={cn(slots.thumb(), className)}
      {...props}
    />
  );
};
