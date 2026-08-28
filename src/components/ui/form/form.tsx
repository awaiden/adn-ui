"use client";

import "./form.css";
import { Form as BaseForm } from "@base-ui/react/form";
import type React from "react";
import { cn } from "@/lib/cn";

import { FormContext } from "./form.context";
import { formVariants, type FormVariants } from "./form.variants";

export type FormProps = FormVariants & React.ComponentProps<typeof BaseForm>;

export const FormRoot = ({ children, className, layout, ...props }: FormProps) => {
  const slots = formVariants({ layout });

  return (
    <FormContext.Provider value={{ slots }}>
      <BaseForm className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseForm>
    </FormContext.Provider>
  );
};
