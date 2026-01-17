#!/usr/bin/env node

// @ts-check

import fs from "node:fs";
import path from "node:path";

const componentsDir = path.resolve("src/components");

const files = fs.readdirSync(componentsDir);

const imports = files
  .filter((file) => fs.statSync(path.join(componentsDir, file)).isDirectory())
  .map((file) => `export * from "~/components/${file}";`);

fs.writeFileSync(path.resolve("src/components/index.ts"), imports.join("\n"));

console.log("✅ TypeScript exports updated");
