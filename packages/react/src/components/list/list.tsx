"use client";

import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { ListContext } from "./list.context";
import { type ListVariants, listVariants } from "./list.variants";
import { useList } from "./use-list";

export interface ListProps extends ListVariants, React.ComponentProps<"ul"> {}

export const ListRoot = ({ className, ...props }: ListProps) => {
  const slots = useMemo(() => listVariants(), []);

  return (
    <ListContext.Provider value={{ slots }}>
      <ul className={cn(className, slots.root())} {...props} />
    </ListContext.Provider>
  );
};

export interface ListItemProps extends React.ComponentProps<"li"> {}

export const ListItem = ({ className, ...props }: ListItemProps) => {
  const { slots } = useList();

  return <li className={cn(className, slots.item())} {...props} />;
};
