"use client";

import { createContext, useContext } from "react";

import { commandVariants } from "./command.variants";

export type CommandContextType = {
  slots: ReturnType<typeof commandVariants>;
  search: string;
  setSearch: (search: string) => void;
};

export const CommandContext = createContext<CommandContextType | null>(null);

export const useCommandContext = () => {
  const context = useContext(CommandContext);
  return context ?? { slots: commandVariants(), search: "", setSearch: () => {} };
};
