"use client";

import { FieldControl, FieldLabel, FieldRoot } from "../field";
import { FieldsetLegend, FieldsetRoot } from "./fieldset";

export function FieldsetDemo({ legend = "Billing Details" }: { legend?: string }) {
  return (
    <div className="w-80">
      <FieldsetRoot>
        <FieldsetLegend>{legend}</FieldsetLegend>
        <FieldRoot>
          <FieldLabel>Company Name</FieldLabel>
          <FieldControl placeholder="Acme Inc." />
        </FieldRoot>
        <FieldRoot>
          <FieldLabel>Tax ID</FieldLabel>
          <FieldControl placeholder="US-123456789" />
        </FieldRoot>
      </FieldsetRoot>
    </div>
  );
}
