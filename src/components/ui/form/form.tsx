"use client";

import "./form.css";

import type React from "react";

import { Form as BaseForm } from "@base-ui/react/form";
import { cn } from "tailwind-variants";

import { FormContext } from "./form.context";
import { formVariants, type FormVariants } from "./form.variants";

export type FormProps = FormVariants & React.ComponentProps<typeof BaseForm>;

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/form/content.md
 */
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
