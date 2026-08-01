"use client";

import React from "react";
import { FormRoot } from "./form";
import { FieldRoot, FieldLabel, FieldControl } from "../field";
import { InputRoot } from "../input";
import { Button } from "../button";

export default {
  title: "Components/Form",
  component: FormRoot,
};

export const Default = () => (
  <FormRoot className="space-y-4 max-w-sm">
    <FieldRoot className="space-y-1">
      <FieldLabel>Username</FieldLabel>
      <FieldControl>
        <InputRoot placeholder="johndoe" />
      </FieldControl>
    </FieldRoot>
    <Button variant="primary">Submit</Button>
  </FormRoot>
);
