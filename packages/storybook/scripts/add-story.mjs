#!/usr/bin/env node
// @ts-check

import fs from "node:fs";
import path from "node:path";

/* ---------------- utils ---------------- */
/**
 *
 * @param {string} input
 * @returns {string}
 */
function normalize(input) {
  return input
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_\s]+/g, " ")
    .trim();
}

/**
 *
 * @param {string} input
 * @returns {string}
 */
function toKebabCase(input) {
  return normalize(input).replace(/\s+/g, "-").toLowerCase();
}

/**
 *
 * @param {string} input
 * @returns {string}
 */
function toCamelCase(input) {
  const words = normalize(input).split(" ");
  return (
    words[0].toLowerCase() +
    words
      .slice(1)
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join("")
  );
}
/**
 *
 * @param {string} input
 * @returns {string}
 */
function toPascalCase(input) {
  return normalize(input)
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");
}

/* ---------------- main ---------------- */

const rawName = process.argv[2];

if (!rawName) {
  console.error("❌ Component name required");
  process.exit(1);
}

const kebab = toKebabCase(rawName);
const camel = toCamelCase(rawName);
const pascal = toPascalCase(rawName);

const targetDir = path.resolve("src", kebab);
const templateDir = path.resolve("templates/story");

if (!fs.existsSync(templateDir)) {
  console.error("❌ Template directory not found:", templateDir);
  process.exit(1);
}

if (fs.existsSync(targetDir)) {
  console.error("❌ Component already exists:", kebab);
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });

const templateFiles = fs.readdirSync(templateDir);

for (const file of templateFiles) {
  const content = fs
    .readFileSync(path.join(templateDir, file), "utf8")
    .replace(/{{kebab}}/g, kebab)
    .replace(/{{camel}}/g, camel)
    .replace(/{{Pascal}}/g, pascal);

  const outName = file
    .replace("component", kebab)
    .replace("Component", pascal)
    .replace(/\.tpl$/, "");

  fs.writeFileSync(path.join(targetDir, outName), content);
}

console.log(`✅ Story created: ${pascal}`);
