# Using Agent Skills via `npx skills`

This guide explains how developers and AI agents can install, update, and use the **adn-ui** skill package across projects using `npx skills`.

---

## 🚀 Quick Start: Installing `adn-ui` Skill

To equip your AI assistant (Antigravity, Cursor, Claude Code, Windsurf) with full knowledge of `adn-ui` component architecture, Base UI primitives, Tailwind v4 design tokens, and verification workflows, run:

```bash
npx skills add awaiden/adn-ui
```

Or specify the full repository URL:
```bash
npx skills add https://github.com/awaiden/adn-ui
```

This command automatically downloads the skill files into your project's `.agents/skills/adn-ui/` directory:
- `.agents/skills/adn-ui/SKILL.md`
- `.agents/skills/adn-ui/references/component-architecture.md`
- `.agents/skills/adn-ui/references/mcp-server.md`
- `.agents/skills/adn-ui/references/skills-cli.md`

---

## 🛠️ `npx skills` CLI Commands

| Command | Description |
| :--- | :--- |
| `npx skills add <owner/repo>` | Installs an agent skill into `.agents/skills/` in your workspace. |
| `npx skills list` | Lists all installed skills and their descriptions. |
| `npx skills update [skill-name]` | Updates installed skills to the latest commit/version from source. |
| `npx skills remove <skill-name>` | Removes a skill directory from your workspace. |

---

## 💡 How AI Coding Assistants Use the Installed Skill

Once installed via `npx skills add awaiden/adn-ui`:

1. **Automatic Discovery**: Antigravity, Cursor, and other agentic IDEs detect `.agents/skills/adn-ui/SKILL.md` when loading workspace context.
2. **On-Demand Activation**: The agent selectively reads component creation workflows, Base UI primitive state bindings, and icon styling rules when you ask it to generate or modify `adn-ui` components.
3. **Verification Integrity**: The agent automatically follows the verification checklist (`bun run test`, `bun run types:check`, `bun run build:registry`) before concluding tasks.
