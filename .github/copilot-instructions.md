# Copilot Commit Message Style Guide

Generate commit messages in **Conventional Commit** format:

Types allowed:

- feat: a new feature
- fix: a bug fix
- docs: documentation only changes
- style: formatting, missing semicolons, no code change
- refactor: code change that neither fixes a bug nor adds a feature
- test: adding or updating tests
- chore: tooling, deps, CI changes

## Format

<type>(<scope>): <short summary>

## Rules

- Use lowercase type
- Scope is the feature, package or component name (optional but recommended)
- Do NOT end the subject line with a period
- Keep the subject under 72 characters
- Write imperative, present tense ("add", not "added" or "adds")
- Use package names or component names as scope when applicable
- Separate multiple changes with a semicolon if needed
- Ignore the changes in examples folder

## Examples

feat(button): add loading spinner state to button
fix(modal): close modal on escape key press
docs(readme): improve installation instructions
refactor(utils): extract form validation into helper
