"use client";

import React from "react";

import { InputRoot } from "../input";
import { Label, LabelRoot } from "./index";

export default {
  title: "Components/Label",
  component: LabelRoot,
};

export const Default = () => (
  <div className="flex flex-col gap-2 w-64">
    <LabelRoot htmlFor="email">Email address</LabelRoot>
    <InputRoot id="email" type="email" placeholder="you@example.com" />
  </div>
);

export const Sizes = () => (
  <div className="flex flex-col gap-4 w-64">
    <Label size="sm" htmlFor="sm">Small Label</Label>
    <Label size="md" htmlFor="md">Medium Label</Label>
    <Label size="lg" htmlFor="lg">Large Label</Label>
  </div>
);
