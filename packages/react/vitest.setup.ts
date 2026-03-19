import * as matchers from "@testing-library/jest-dom/matchers";
import { expect, vi } from "vite-plus/test";

expect.extend(matchers);

// matchMedia polyfill
vi.stubGlobal("matchMedia", (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

// ResizeObserver polyfill
vi.stubGlobal(
  "ResizeObserver",
  class ResizeObserver {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
  },
);

// IntersectionObserver polyfill
vi.stubGlobal(
  "IntersectionObserver",
  class IntersectionObserver {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
    root = null;
    rootMargin = "";
    thresholds = [];
    takeRecords = vi.fn();
  },
);

// PointerEvent polyfill (Radix UI needs this)
if (!global.PointerEvent) {
  class PointerEvent extends MouseEvent {
    constructor(type: string, params: any = {}) {
      super(type, params);
    }
  }
  vi.stubGlobal("PointerEvent", PointerEvent);
}
