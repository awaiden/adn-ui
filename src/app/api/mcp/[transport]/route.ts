import fs from "node:fs/promises";
import path from "node:path";

import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

const getComponentsDir = () => path.join(process.cwd(), "src", "components", "ui");
const getDocsDir = () => path.join(process.cwd(), "content", "docs", "components");
const getRegistryDir = () => path.join(process.cwd(), "public", "r");

const handler = createMcpHandler(
  (server) => {
    // Tool 1: list_components
    server.registerTool(
      "list_components",
      {
        description:
          "List all UI components available in the adn-ui component library along with their file structures.",
      },
      async () => {
        try {
          const componentsDir = getComponentsDir();
          const entries = await fs.readdir(componentsDir, { withFileTypes: true });
          const directories = entries.filter((e) => e.isDirectory()).map((e) => e.name);

          const components = await Promise.all(
            directories.map(async (name) => {
              const compDir = path.join(componentsDir, name);
              const files = await fs.readdir(compDir);
              return { name, files };
            }),
          );

          return {
            content: [
              {
                type: "text",
                text: JSON.stringify({ count: components.length, components }, null, 2),
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `Error listing components: ${(error as Error).message}`,
              },
            ],
            isError: true,
          };
        }
      },
    );

    // Tool 2: get_component
    server.registerTool(
      "get_component",
      {
        description:
          "Get the complete source code, CSS styling, variants, and definitions for a specific adn-ui component.",
        inputSchema: z.object({
          name: z
            .string()
            .describe("The name of the component (e.g. 'button', 'switch', 'combobox', 'dialog')"),
        }),
      },
      async ({ name }) => {
        try {
          const compDir = path.join(getComponentsDir(), name);
          const files = await fs.readdir(compDir);

          const fileContents: Record<string, string> = {};
          for (const file of files) {
            const filePath = path.join(compDir, file);
            const content = await fs.readFile(filePath, "utf-8");
            fileContents[file] = content;
          }

          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(
                  { component: name, filesCount: files.length, files: fileContents },
                  null,
                  2,
                ),
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `Error fetching component '${name}': ${(error as Error).message}`,
              },
            ],
            isError: true,
          };
        }
      },
    );

    // Tool 3: search_components
    server.registerTool(
      "search_components",
      {
        description: "Search for adn-ui components matching a query string.",
        inputSchema: z.object({
          query: z.string().describe("Keyword or component name to search for"),
        }),
      },
      async ({ query }) => {
        try {
          const componentsDir = getComponentsDir();
          const entries = await fs.readdir(componentsDir, { withFileTypes: true });
          const directories = entries.filter((e) => e.isDirectory()).map((e) => e.name);

          const q = query.toLowerCase();
          const matches = directories.filter((dir) => dir.toLowerCase().includes(q));

          return {
            content: [
              {
                type: "text",
                text: JSON.stringify({ query, matchCount: matches.length, matches }, null, 2),
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `Error searching components: ${(error as Error).message}`,
              },
            ],
            isError: true,
          };
        }
      },
    );

    // Tool 4: get_component_doc
    server.registerTool(
      "get_component_doc",
      {
        description: "Get MDX documentation and usage guidelines for a specific adn-ui component.",
        inputSchema: z.object({
          name: z.string().describe("The component name (e.g. 'button', 'switch', 'data-table')"),
        }),
      },
      async ({ name }) => {
        try {
          const docPath = path.join(getDocsDir(), `${name}.mdx`);
          const content = await fs.readFile(docPath, "utf-8");

          return {
            content: [
              {
                type: "text",
                text: content,
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `Error fetching documentation for '${name}': ${(error as Error).message}`,
              },
            ],
            isError: true,
          };
        }
      },
    );

    // Tool 5: get_registry_item
    server.registerTool(
      "get_registry_item",
      {
        description:
          "Get the shadcn-compatible JSON registry manifest for installing a component via shadcn CLI.",
        inputSchema: z.object({
          name: z.string().describe("The component name (e.g. 'button', 'switch')"),
        }),
      },
      async ({ name }) => {
        try {
          const regPath = path.join(getRegistryDir(), `${name}.json`);
          const content = await fs.readFile(regPath, "utf-8");

          return {
            content: [
              {
                type: "text",
                text: content,
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: "text",
                text: `Error fetching registry manifest for '${name}': ${(error as Error).message}`,
              },
            ],
            isError: true,
          };
        }
      },
    );
  },
  {
    serverInfo: {
      name: "adn-ui-mcp",
      version: "0.1.0",
    },
  },
);

export const GET = handler;
export const POST = handler;
