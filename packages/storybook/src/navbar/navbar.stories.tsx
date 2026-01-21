import type { Meta, StoryObj } from "@storybook/react";

import { Button, Link, Navbar } from "@adn-ui/react";
import { useState } from "react";

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
        <Navbar.Content className='justify-start'>
          <Navbar.Toggle />
          Navbar Content
        </Navbar.Content>
        <Navbar.Content className='hidden justify-center md:flex'>
          {items.map((item) => (
            <Navbar.Item key={item}>
              <Link href='#'>{item}</Link>
            </Navbar.Item>
          ))}
        </Navbar.Content>
        <Navbar.Content className='justify-end'>
          <Button variant='secondary'>Log In</Button>
          <Button
            className='hidden md:inline-flex'
            variant='primary'
          >
            Sign Up
          </Button>
        </Navbar.Content>
      </Navbar.Container>
      <Navbar.Menu position='bottom'>
        <Navbar.MenuContent>
          <div className='flex items-center justify-between px-3 py-2'>
            <span className='text-lg font-semibold'>Menu</span>
          </div>
          <ul>
            {items.map((item) => (
              <li
                key={item}
                className='border-t px-3 py-2'
              >
                <Link href='#'>{item}</Link>
              </li>
            ))}
          </ul>
        </Navbar.MenuContent>
      </Navbar.Menu>
    </Navbar>
  ),
};

export const Controlled: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Navbar
        {...args}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <Navbar.Container>
          <Navbar.Content className='justify-start'>
            <Navbar.Toggle />
            Navbar Content
          </Navbar.Content>
        </Navbar.Container>
        <Navbar.Menu position='bottom'>
          <Navbar.MenuContent>
            <div className='flex items-center justify-between px-3 py-2'>
              <span className='text-lg font-semibold'>Menu</span>
            </div>
            <ul>
              {items.map((item) => (
                <li
                  key={item}
                  className='border-t px-3 py-2'
                >
                  <Link href='#'>{item}</Link>
                </li>
              ))}
            </ul>
          </Navbar.MenuContent>
        </Navbar.Menu>
      </Navbar>
    );
  },
};

const items = ["Home", "About", "Contact"];
