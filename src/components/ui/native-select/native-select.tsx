"use client";

import "./native-select.css";
import { ChevronsUpDown } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/cn";

import { NativeSelectContext, useNativeSelectContext } from "./native-select.context";
import { nativeSelectVariants, type NativeSelectVariants } from "./native-select.variants";

export type NativeSelectProps = NativeSelectVariants &
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
    children?: React.ReactNode;
    icon?: React.ReactNode;
  };

export const NativeSelectRoot = ({
  children,
  className,
  icon,
  size,
  variant,
  ...props
}: NativeSelectProps) => {
  const slots = nativeSelectVariants({ size, variant });

  return (
    <NativeSelectContext.Provider value={{ slots }}>
      <div className={slots.root()}>
        <select className={cn(slots.select(), className)} {...props}>
          {children}
        </select>
        <span className={slots.icon()}>
          {icon ?? <ChevronsUpDown />}
        </span>
      </div>
    </NativeSelectContext.Provider>
  );
};

export type NativeSelectOptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

export const NativeSelectOption = ({ className, ...props }: NativeSelectOptionProps) => {
  const { slots } = useNativeSelectContext();
  return <option className={cn(slots.option(), className)} {...props} />;
};

export type NativeSelectOptGroupProps = React.OptgroupHTMLAttributes<HTMLOptGroupElement>;

export const NativeSelectOptGroup = ({ className, ...props }: NativeSelectOptGroupProps) => {
  const { slots } = useNativeSelectContext();
  return <optgroup className={cn(slots.optgroup(), className)} {...props} />;
};

export const NativeSelect = NativeSelectRoot;
