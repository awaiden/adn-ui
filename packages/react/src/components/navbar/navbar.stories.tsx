import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";

import { Button } from "../button";
import { Navbar } from "./index";

const meta: Meta<typeof Navbar.Root> = {
  title: "Components/Navbar",
  component: Navbar.Root,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Navbar.Root>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Navbar.Root border sticky isOpen={isOpen}>
        <Navbar.Content>
          <Navbar.Brand>ADN UI</Navbar.Brand>
        </Navbar.Content>

        <Navbar.Content>
          <Navbar.Menu>
            <Navbar.MenuItem href="#">Home</Navbar.MenuItem>
            <Navbar.MenuItem href="#">Features</Navbar.MenuItem>
            <Navbar.MenuItem href="#">Pricing</Navbar.MenuItem>
          </Navbar.Menu>
        </Navbar.Content>

        <Navbar.Content>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost">Log in</Button>
            <Button>Sign up</Button>
          </div>
          <Navbar.Toggle onClick={() => setIsOpen(!isOpen)} />
        </Navbar.Content>
      </Navbar.Root>
    );
  },
};

export const TwoContents: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Navbar.Root border isOpen={isOpen}>
        <Navbar.Content>
          <Navbar.Brand>ADN UI</Navbar.Brand>
          <Navbar.Menu>
            <Navbar.MenuItem href="#">Home</Navbar.MenuItem>
            <Navbar.MenuItem href="#">Features</Navbar.MenuItem>
          </Navbar.Menu>
        </Navbar.Content>

        <Navbar.Content>
          <Button variant="ghost" className="hidden md:flex">
            Log in
          </Button>
          <Navbar.Toggle onClick={() => setIsOpen(!isOpen)} />
        </Navbar.Content>
      </Navbar.Root>
    );
  },
};
