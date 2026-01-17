import { ListItem, ListRoot } from "./list";

export const List = Object.assign(ListRoot, {
  Item: ListItem,
  Root: ListRoot,
});

export * from "./list";

export type { ListVariants } from "./list.variants";
export { listVariants } from "./list.variants";
