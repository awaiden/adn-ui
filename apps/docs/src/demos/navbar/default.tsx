"use client";

import { Button, Link, Navbar } from "@adn-ui/react";

export default function Default() {
  return (
    <Navbar>
      <Navbar.Container>
        <Navbar.Content className="justify-start">
          <Navbar.Toggle />
          <div className="text-lg font-bold">My Brand</div>
        </Navbar.Content>
        <Navbar.Content className="hidden justify-center md:flex">
          <Navbar.List>
            <Navbar.ListItem>
              <Link href="#">Home</Link>
            </Navbar.ListItem>
            <Navbar.ListItem>
              <Link href="#">Features</Link>
            </Navbar.ListItem>
            <Navbar.ListItem>
              <Link href="#">Pricing</Link>
            </Navbar.ListItem>
          </Navbar.List>
        </Navbar.Content>
        <Navbar.Content className="justify-end">
          <Button className="mr-2" variant="secondary">
            Log In
          </Button>
          <Button className="hidden md:inline-flex" variant="primary">
            Sign Up
          </Button>
        </Navbar.Content>
      </Navbar.Container>
      <Navbar.Menu header="Menu">
        <Navbar.MenuItem>
          <Link href="#">Home</Link>
        </Navbar.MenuItem>
        <Navbar.MenuItem>
          <Link href="#">Features</Link>
        </Navbar.MenuItem>
        <Navbar.MenuItem>
          <Link href="#">Pricing</Link>
        </Navbar.MenuItem>
        <Navbar.MenuItem>
          <Button className="w-full" variant="secondary">
            Log In
          </Button>
        </Navbar.MenuItem>
        <Navbar.MenuItem>
          <Button className="w-full" variant="primary">
            Sign Up
          </Button>
        </Navbar.MenuItem>
      </Navbar.Menu>
    </Navbar>
  );
}
