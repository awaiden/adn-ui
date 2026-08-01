"use client";

import React from "react";

import { Button } from "../button";
import { FieldRoot, FieldLabel, FieldControl } from "../field";
import { InputRoot } from "../input";
import { FormRoot } from "./form";

export default {
  title: "Components/Form",
  component: FormRoot,
};

export const Default = () => (
  <FormRoot className="max-w-sm space-y-4">
    <FieldRoot className="space-y-1">
      <FieldLabel>Username</FieldLabel>
      <FieldControl>
        <InputRoot placeholder="johndoe" />
      </FieldControl>
    </FieldRoot>
    <Button variant="primary">Submit</Button>
  </FormRoot>
);
