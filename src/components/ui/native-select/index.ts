import {
  NativeSelect as NativeSelectRootComponent,
  NativeSelectOptGroup,
  NativeSelectOption,
  NativeSelectRoot,
} from "./native-select";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/native-select/content.md
 */
export const NativeSelect = Object.assign(NativeSelectRootComponent, {
  OptGroup: NativeSelectOptGroup,
  Option: NativeSelectOption,
  Root: NativeSelectRoot,
});

export {
  NativeSelectOptGroup,
  NativeSelectOption,
  NativeSelectRoot,
};

export type {
  NativeSelectOptGroupProps,
  NativeSelectOptionProps,
  NativeSelectProps,
} from "./native-select";
export { NativeSelectContext, useNativeSelectContext } from "./native-select.context";
export { type NativeSelectVariants, nativeSelectVariants } from "./native-select.variants";
