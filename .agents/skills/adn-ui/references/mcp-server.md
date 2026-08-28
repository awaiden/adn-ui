# MCP Server & Integration Detailed Reference Guide

The **adn-ui** Model Context Protocol (MCP) server provides a direct API for AI coding assistants (Antigravity, Cursor, Claude Code, Windsurf) to query components, read docs, fetch registry JSON manifests, and integrate components into projects.

---

## 🛠️ Detailed MCP Tool Specifications

### 1. `init_adn_ui`
- **Description**: Returns step-by-step setup instructions, `components.json` namespace registry configuration, and PostCSS/Vite auto-reference setup code.
- **Parameters**:
  - `framework` (`'nextjs' | 'vite' | 'all'`, default: `'all'`)
- **Example Response**:
  ```markdown
  # adn-ui Project Integration Guide
  ## Step 1: Initialize shadcn CLI
  npx shadcn@latest init
  ## Step 2: Add @adn-ui Namespace Registry in components.json
  { "registries": { "@adn-ui": "https://ui.awaiden.com/r/{name}.json" } }
  ```

---

### 2. `list_components`
- **Description**: Lists all available components in `src/components/ui/` along with their internal file structure (`.tsx`, `.css`, `.variants.ts`, `.context.ts`).
- **Parameters**: `{}`
- **Example Response**:
  ```json
  {
    "count": 35,
    "components": [
      { "name": "button", "files": ["button.tsx", "button.variants.ts", "button.css", "index.ts"] },
      { "name": "switch", "files": ["switch.tsx", "switch.variants.ts", "switch.css", "switch.context.ts", "index.ts"] }
    ]
  }
  ```

---

### 3. `get_component`
- **Description**: Fetches full source code, Tailwind CSS v4 styling, variants, and context for a specified component.
- **Parameters**:
  - `name` (`string`): Target component name (e.g. `'switch'`, `'combobox'`).

---

### 4. `search_components`
- **Description**: Searches component names for a given query keyword.
- **Parameters**:
  - `query` (`string`): Search keyword (e.g. `'select'`, `'menu'`, `'dialog'`).

---

### 5. `get_component_doc`
- **Description**: Retrieves full MDX documentation from `content/docs/components/<name>.mdx`.
- **Parameters**:
  - `name` (`string`): Component name.

---

### 6. `get_registry_item`
- **Description**: Returns the raw `shadcn` JSON registry manifest from `public/r/<name>.json`.
- **Parameters**:
  - `name` (`string`): Component name.

---

### 7. `add_component`
- **Description**: Returns installation CLI commands, direct registry URL, import specs, and step-by-step installation guidance for adding a component to a project.
- **Parameters**:
  - `name` (`string`): Component name.
- **Example Response**:
  ```json
  {
    "component": "switch",
    "cliCommand": "npx shadcn@latest add @adn-ui/switch",
    "directUrlCommand": "npx shadcn@latest add https://ui.awaiden.com/r/switch.json",
    "registryUrl": "https://ui.awaiden.com/r/switch.json",
    "importPath": "@/components/ui/switch",
    "manifest": { ... }
  }
  ```

---

## ⚙️ Client Connection Setup

### Cursor Integration
Under **Settings > Features > MCP**:
- **Type**: `sse`
- **Name**: `adn-ui`
- **Server URL**: `https://ui.awaiden.com/api/mcp/sse`

### Claude Code / Claude Desktop Integration
In `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "adn-ui": {
      "url": "https://ui.awaiden.com/api/mcp/sse"
    }
  }
}
```
