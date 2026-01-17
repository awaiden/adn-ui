// @ts-check
import fs from "node:fs";
import path from "node:path";

// Reads files in src/components and writes @import statements to src/components/index.css

const componentsDir = path.join(process.cwd(), "src", "components");
const indexFile = path.join(componentsDir, "index.css");

const files = fs.readdirSync(componentsDir);

const importStatements = `${files
  .filter((file) => file !== "index.css" && path.extname(file) === ".css")
  .map((file) => `@import "./${file}";`)
  .join("\n")}\n`;

fs.writeFileSync(indexFile, importStatements, "utf8");

console.log(`Generated ${indexFile} with imports for ${files.length - 1} components.`);
