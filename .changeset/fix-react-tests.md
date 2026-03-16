---
"@adn-ui/react": patch
---

fix(react): resolve test failures and typescript errors in setup

- Add ResizeObserver, IntersectionObserver, and PointerEvent polyfills to vitest.setup.ts
- Fix hydration warning in Card component by changing CardHeader to a div
- Improve Avatar and Dialog tests for stability
- Resolve TypeScript errors in vitest.setup.ts
