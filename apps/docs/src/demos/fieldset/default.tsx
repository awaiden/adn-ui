"use client";

import { Fieldset } from "@adn-ui/react";

export default function Default() {
  return (
    <Fieldset>
      <Fieldset.Legend>Fieldset Legend</Fieldset.Legend>
      <div className="text-muted-foreground mt-2 text-sm">
        This is an example of a fieldset component with a legend.
      </div>
    </Fieldset>
  );
}
