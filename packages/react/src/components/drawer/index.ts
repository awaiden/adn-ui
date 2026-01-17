import {
  DrawerBackdrop,
  DrawerClose,
  DrawerDescription,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  DrawerViewport,
} from "./drawer";

export const Drawer = Object.assign(DrawerRoot, {
  Backdrop: DrawerBackdrop,
  Close: DrawerClose,
  Description: DrawerDescription,
  Popup: DrawerPopup,
  Portal: DrawerPortal,
  Root: DrawerRoot,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
  Viewport: DrawerViewport,
});

export * from "./drawer";

export type { DrawerVariants } from "./drawer.variants";
export { drawerVariants } from "./drawer.variants";
