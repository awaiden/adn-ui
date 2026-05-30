import { SheetContent } from "./sheet-content";
import { SheetDescription } from "./sheet-description";
import { SheetFooter } from "./sheet-footer";
import { SheetHeader } from "./sheet-header";
import { SheetRoot, SheetTrigger } from "./sheet-root";
import { SheetTitle } from "./sheet-title";

export const Sheet = {
  Content: SheetContent,
  Description: SheetDescription,
  Footer: SheetFooter,
  Header: SheetHeader,
  Root: SheetRoot,
  Title: SheetTitle,
  Trigger: SheetTrigger,
};

export {
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetRoot,
  SheetTitle,
  SheetTrigger,
};

export { SheetContext, useSheetContext } from "./sheet.context";

export { type SheetVariants, sheetVariants } from "./sheet.variants";
