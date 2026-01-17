import fs from "fs/promises";
import path from "path";

function toCamelCase(str: string) {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

async function main() {
  const demosDir = path.resolve("apps/docs/src/demos");
  const entries = await fs.readdir(demosDir, { withFileTypes: true });

  const componentDirs: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      componentDirs.push(entry.name);
    }
  }

  const exportStatements: string[] = [];
  const spreadStatements: string[] = [];

  for (const component of componentDirs) {
    const componentDir = path.join(demosDir, component);
    const files = await fs.readdir(componentDir);
    const demoFiles = files.filter((f) => f.endsWith(".tsx"));

    if (demoFiles.length === 0) continue;

    // Generate index.ts for the component
    const camelCaseName = toCamelCase(component);
    const varName = `${camelCaseName}Demos`;

    // Sort files to ensure stable output, defaulting 'default.tsx' first if possible
    demoFiles.sort((a, b) => {
      if (a === "default.tsx") return -1;
      if (b === "default.tsx") return 1;
      return a.localeCompare(b);
    });

    const imports: string[] = [];
    const mappingLines: string[] = [];

    // Special handling for imports:
    // We need unique names for imports inside the index.ts
    // e.g. import Default from "./default"; import Variants from "./variants";

    for (const file of demoFiles) {
      const basename = path.basename(file, ".tsx");
      // Capitalize for component import name
      const importName = basename
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join("");

      imports.push(`import ${importName} from "./${basename}";`);

      // Key generation logic
      // default.tsx -> component
      // other.tsx -> component-other
      let key = component;
      if (basename !== "default") {
        key = `${component}-${basename}`;
      }

      mappingLines.push(`\t"${key}": {`);
      mappingLines.push(`\t\tcomponent: ${importName},`);
      mappingLines.push(`\t\tfile: "${component}/${basename}.tsx",`);
      mappingLines.push(`\t},`);
    }

    const indexContent = `import type { DemoItem } from "..";
${imports.join("\n")}

export const ${varName}: Record<string, DemoItem> = {
${mappingLines.join("\n")}
};
`;

    await fs.writeFile(path.join(componentDir, "index.ts"), indexContent, "utf-8");
    console.log(`Generated ${component}/index.ts`);

    exportStatements.push(`import { ${varName} } from "./${component}";`);
    spreadStatements.push(`\t...${varName},`);
  }

  // Regenerate main index.tsx
  const mainIndexContent = `import type { ComponentType } from "react";
${exportStatements.join("\n")}

export interface DemoItem {
\tcomponent: ComponentType;
\tfile: string;
}

export const demos: Record<string, DemoItem> = {
${spreadStatements.join("\n")}
};
`;

  await fs.writeFile(path.join(demosDir, "index.tsx"), mainIndexContent, "utf-8");
  console.log("Updated demos/index.tsx");
}

main().catch(console.error);
