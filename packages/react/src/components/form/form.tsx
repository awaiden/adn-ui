import React, { useMemo } from "react";
import { cn } from "tailwind-variants";

import { type FormVariants, formVariants } from "./form.variants";

export interface FormProps extends FormVariants, React.ComponentProps<"form"> {}

export const Form = ({ spacing, variant, className, ...props }: FormProps) => {
  const styles = useMemo(() => formVariants({ variant, spacing }), [variant, spacing]);

  return (
    <form
      className={cn(styles, className)}
      {...props}
    />
  );
};
