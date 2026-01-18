import type { Meta, StoryObj } from "@storybook/react";

import { Button, Link, Navbar } from "@adn-ui/react";

const meta: Meta<typeof Navbar> = {
  args: {
    children: "This is a navbar text.",
  },
  component: Navbar,
  title: "Components/Navbar",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Navbar {...args}>
      <Navbar.Container>
        <Navbar.Content className="justify-start">
          <Navbar.Toggle />
          Navbar Content
        </Navbar.Content>
        <Navbar.Content className="hidden justify-center md:flex">
          <Navbar.Item>
            <Link href="#">Home</Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link href="#">About</Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link href="#">Contact</Link>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content className="justify-end">
          <Button variant="secondary">Log In</Button>
          <Button className="hidden md:inline-flex" variant="primary">
            Sign Up
          </Button>
        </Navbar.Content>
      </Navbar.Container>
      <Navbar.Menu>
        <Navbar.MenuItem>
          <Link href="#">Home</Link>
        </Navbar.MenuItem>
        <Navbar.MenuItem>
          <Link href="#">About</Link>
        </Navbar.MenuItem>
        <Navbar.MenuItem>
          <Link href="#">Contact</Link>
        </Navbar.MenuItem>
      </Navbar.Menu>
    </Navbar>
  ),
};
