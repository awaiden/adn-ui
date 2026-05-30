import { FormControl } from "./form-control";
import { FormField } from "./form-field";
import { FormLabel } from "./form-label";
import { FormMessage } from "./form-message";
import { FormRoot } from "./form-root";
import { FormSubmit } from "./form-submit";

export const Form = {
  Control: FormControl,
  Field: FormField,
  Label: FormLabel,
  Message: FormMessage,
  Root: FormRoot,
  Submit: FormSubmit,
};

export { FormControl, FormField, FormLabel, FormMessage, FormRoot, FormSubmit };

export { FormContext, useFormContext } from "./form.context";

export { type FormVariants, formVariants } from "./form.variants";
