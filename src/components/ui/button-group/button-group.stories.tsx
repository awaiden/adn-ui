"use client";

import React from "react";

import { ButtonGroup, ButtonGroupItem } from "./button-group";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
};

export const Default = () => (
  <ButtonGroup variant="outline">
    <ButtonGroupItem>Years</ButtonGroupItem>
    <ButtonGroupItem>Months</ButtonGroupItem>
    <ButtonGroupItem>Days</ButtonGroupItem>
  </ButtonGroup>
);

export const Vertical = () => (
  <ButtonGroup orientation="vertical" variant="outline">
    <ButtonGroupItem>Top</ButtonGroupItem>
    <ButtonGroupItem>Middle</ButtonGroupItem>
    <ButtonGroupItem>Bottom</ButtonGroupItem>
  </ButtonGroup>
);
