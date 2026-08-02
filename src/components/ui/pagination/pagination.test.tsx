import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import React from "react";

import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationRoot,
} from "./index";

describe("Pagination component", () => {
  it("renders navigation element and page links", () => {
    render(
      <PaginationRoot aria-label="pagination navigation">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </PaginationRoot>
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();

    const activeLink = screen.getByText("1");
    expect(activeLink).toHaveAttribute("aria-current", "page");
  });
});
