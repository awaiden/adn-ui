import fs from "node:fs";
import path from "node:path";

const packagesDir = path.join(process.cwd(), "packages");
const packageNames = fs.readdirSync(packagesDir);

const versionMap = {};
for (const pkg of packageNames) {
  const pkgJsonPath = path.join(packagesDir, pkg, "package.json");
  if (fs.existsSync(pkgJsonPath)) {
    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
    versionMap[pkgJson.name] = pkgJson.version;
  }
}

console.log("🚀 Version Map:", versionMap);

for (const pkg of packageNames) {
  const pkgJsonPath = path.join(packagesDir, pkg, "package.json");
  if (fs.existsSync(pkgJsonPath)) {
    let content = fs.readFileSync(pkgJsonPath, "utf-8");

    Object.entries(versionMap).forEach(([name, version]) => {
      const regex = new RegExp(`"${name}":\\s*"workspace:[^"]*"`, "g");
      content = content.replace(regex, `"${name}": "${version}"`);
    });

    fs.writeFileSync(pkgJsonPath, content);
    console.log(`✅ Updated ${pkg}/package.json`);
  }
}
