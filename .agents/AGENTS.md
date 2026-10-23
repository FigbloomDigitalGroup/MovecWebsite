# Workspace Rules for MovecWebsite

- **Changelog Maintenance**: Always update `CHANGELOG.md` under the `## [Unreleased]` section whenever making code, accessibility, component, or configuration changes to the project.

## Security: Mandatory Malware Pre-Flight Check

> [!IMPORTANT]
> On 2026-08-27/28, a self-propagating obfuscated payload was found injected into auto-loaded build config files (`tailwind.config.js`, `postcss.config.mjs`, `eslint.config.js`) across multiple repos in this org, including this one's `eslint.config.js`. It executes automatically the instant `npm run dev`/`build`/`lint`/`vite` runs — no separate execution step needed.

**Every AI agent working in this repo MUST run this check before either of the following, every time, no exceptions:**

1. Running any build/dev/lint tooling (`npm run dev`, `npm run build`, `npm run lint`, `vite`, etc.)
2. Creating a git commit

**How to check** — scan every auto-loaded JS/TS config file in the working tree (`eslint.config.*`, `vite.config.*`, `tailwind.config.*`, `postcss.config.*`, and anything else Node loads automatically at build/dev time) for:

- The obfuscation signature: `grep -c '_0x' <file>` — any non-zero result is a red flag.
- Known indicator strings: `app-vscode-eval`, `verify-human`.
- Abnormal file size — these files are normally well under 5KB; tens of KB warrants inspection even with no `_0x` match.
- An unexplained change to `.gitignore` that removes or weakens the `.env`/`.env.*` exclusion.

**If anything matches:** stop immediately. Do not run the build/dev/lint command. Do not silently clean or overwrite the file — a naive full-file revert can destroy real legitimate config content mixed in with the payload. Tell the user exactly what you found (file, match, size) and wait for direction.
