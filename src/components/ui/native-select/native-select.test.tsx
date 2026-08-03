import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import { NativeSelect, NativeSelectOption, NativeSelectRoot } from "./index";

describe("NativeSelect component", () => {
  it("renders select element with options", () => {
    render(
      <NativeSelectRoot defaultValue="us">
        <NativeSelectOption value="us">United States</NativeSelectOption>
        <NativeSelectOption value="ca">Canada</NativeSelectOption>
      </NativeSelectRoot>
    );

    const select = screen.getByRole("combobox") as HTMLSelectElement;
    expect(select).toBeInTheDocument();
    expect(select.value).toBe("us");
    expect(screen.getByText("United States")).toBeInTheDocument();
    expect(screen.getByText("Canada")).toBeInTheDocument();
  });

  it("renders using NativeSelect object dot syntax", () => {
    render(
      <NativeSelect defaultValue="fr">
        <NativeSelect.Option value="fr">France</NativeSelect.Option>
        <NativeSelect.Option value="de">Germany</NativeSelect.Option>
      </NativeSelect>
    );

    const select = screen.getByRole("combobox") as HTMLSelectElement;
    expect(select).toBeInTheDocument();
    expect(select.value).toBe("fr");
  });
});
