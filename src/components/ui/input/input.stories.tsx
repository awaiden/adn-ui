"use client";

import React from "react";

import { InputRoot } from "./input";

export default {
  title: "Components/Input",
  component: InputRoot,
};

export const Default = () => <InputRoot placeholder="e.g. Colm Tuite" className="max-w-xs" />;

export const Sizes = () => (
  <div className="flex max-w-xs flex-col gap-3">
    <InputRoot size="sm" placeholder="Small size..." />
    <InputRoot size="md" placeholder="Medium size..." />
    <InputRoot size="lg" placeholder="Large size..." />
  </div>
);

export const Disabled = () => <InputRoot disabled placeholder="Disabled..." className="max-w-xs" />;
