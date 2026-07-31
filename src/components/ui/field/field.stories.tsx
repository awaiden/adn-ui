"use client";

import React from "react";
import { FieldRoot, FieldLabel, FieldControl, FieldDescription, FieldError } from "./field";
import { InputRoot } from "../input";

export default {
  title: "Components/Field",
  component: FieldRoot,
};

export const Default = () => (
  <FieldRoot className="w-full max-w-sm space-y-1.5">
    <FieldLabel>Email address</FieldLabel>
    <FieldControl>
      <InputRoot type="email" placeholder="you@example.com" />
    </FieldControl>
    <FieldDescription>We'll never share your email with anyone else.</FieldDescription>
  </FieldRoot>
);

export const WithError = () => (
  <FieldRoot invalid className="w-full max-w-sm space-y-1.5">
    <FieldLabel>Username</FieldLabel>
    <FieldControl>
      <InputRoot placeholder="johndoe" />
    </FieldControl>
    <FieldError>Username is already taken.</FieldError>
  </FieldRoot>
);
