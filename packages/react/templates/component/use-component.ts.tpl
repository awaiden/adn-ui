import { useContext } from "react";

import { {{Pascal}}Context } from "./{{kebab}}.context";

export const use{{Pascal}}Variants = () => {
    const context = useContext({{Pascal}}Context);

    if (!context) {
        throw new Error("use{{Pascal}} must be used within a {{Pascal}}Provider")
    }

    return context;
}