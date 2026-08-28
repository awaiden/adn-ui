"use client";

import React from "react";

import { InputRoot } from "../input";
import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldPrefix,
  FieldRoot,
  FieldSuffix,
} from "./field";

export default {
  title: "Components/Field",
  component: FieldRoot,
};

export const Default = () => (
  <FieldRoot className="w-full max-w-sm space-y-1.5">
    <FieldLabel>Email address</FieldLabel>
    <FieldControl render={<InputRoot type="email" placeholder="you@example.com" />} />
    <FieldDescription>We'll never share your email with anyone else.</FieldDescription>
  </FieldRoot>
);

export const WithError = () => (
  <FieldRoot invalid className="w-full max-w-sm space-y-1.5">
    <FieldLabel>Username</FieldLabel>
    <FieldControl render={<InputRoot placeholder="johndoe" />} />
    <FieldError>Username is already taken.</FieldError>
  </FieldRoot>
);

export const WithGroup = () => (
  <FieldRoot className="w-full max-w-sm space-y-1.5">
    <FieldLabel>Website</FieldLabel>
    <FieldGroup>
      <FieldPrefix>https://</FieldPrefix>
      <FieldControl placeholder="example" />
      <FieldSuffix>.com</FieldSuffix>
    </FieldGroup>
    <FieldDescription>Enter your website domain.</FieldDescription>
  </FieldRoot>
);
