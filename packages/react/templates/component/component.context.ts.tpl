import { createContext } from "react";

import type { {{camel}}Variants } from "./{{kebab}}.variants";

interface {{Pascal}}Context {
  slots: ReturnType<typeof {{camel}}Variants>
}

export const {{Pascal}}Context = createContext<{{Pascal}}Context | null>(null);