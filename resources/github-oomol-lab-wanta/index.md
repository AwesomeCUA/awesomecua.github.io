---
title: "Wanta | AwesomeCUA"
url: https://awesomecua.com/resources/github-oomol-lab-wanta/
updated: 2026-10-18
type: agent
lang: en
---

# Wanta

Electron desktop host for work agents (built-in OpenCode agent plus Claude Code, Codex and Grok adapters) whose bundled integrated browser lets agent and user operate one visible page through ARIA-snapshot refs.

- Catalog URL: https://awesomecua.com/resources/github-oomol-lab-wanta/
- Original source: https://github.com/oomol-lab/wanta
- Kind: agent
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: web-navigation, human-in-the-loop, tool-integration
- Evidence checked: 2026-10-18T16:13:48Z
- ID: github:oomol-lab/wanta

## Limitations

Recorded as adjacent: Wanta is a general agent host whose local tools are files, shell, skills, knowledge and SaaS connectors (OpenConnector), and its only graphical executor is the integrated browser. The Electron main process owns a WebContentsView per task page, Playwright attaches through a custom CDP transport over webContents.debugger, and an authenticated loopback bridge serves seven OpenCode tools: browser_navigate, browser_read (title, URL, dialog state and a Playwright AI-mode ARIA snapshot with refs), browser_click and browser_type on refs or unique selectors, browser_scroll, browser_screenshot and browser_dialog. The user shares the page and completes logins and CAPTCHAs; in Default Access the agent is told to hand sensitive actions to the user, which the design document calls a behavioural policy rather than a system guarantee. External agents keep their own accounts; hosted models, connectors and team workspaces need an OOMOL account. Packages for macOS, Windows and Linux. Root LICENSE is Apache-2.0.

- Record JSON: https://awesomecua.com/resources/github-oomol-lab-wanta/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/oomol-lab/wanta/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/oomol-lab/wanta/HEAD/README.md (retrieved 2026-10-18T16:13:48Z; SHA-256 f9ea3b05f9492271ad49c57a818e59a95eeb6b8a8796f81835a6c55605a4bea2)
- https://raw.githubusercontent.com/oomol-lab/wanta/d568845ea03f6bae3b1cef2d80b19b5b32bc7952/docs/integrated-browser.md (retrieved 2026-10-18T16:13:16Z; SHA-256 0e390f6a2b44db16f6a62cc46c39077d830da577653041c9bb14a2cdb5d246d4)
- https://raw.githubusercontent.com/oomol-lab/wanta/d568845ea03f6bae3b1cef2d80b19b5b32bc7952/electron/browser/page.ts (retrieved 2026-10-18T16:13:21Z; SHA-256 1cf4ba22a7c24967103a2e4203682d22868f8b23a0e3622a564069f0c55717b3)
- https://raw.githubusercontent.com/oomol-lab/wanta/d568845ea03f6bae3b1cef2d80b19b5b32bc7952/electron/browser/control-server.ts (retrieved 2026-10-18T16:13:21Z; SHA-256 5bc88f248c47af8a1327963733a504ac5da11acac93f9182db60f979ef22aaf4)
- https://raw.githubusercontent.com/oomol-lab/wanta/d568845ea03f6bae3b1cef2d80b19b5b32bc7952/electron/agent/tool-sources.ts (retrieved 2026-10-18T16:13:21Z; SHA-256 68f53b75e7aa3b96367ff25ef4a8000443734b7afcb34f2ac61ad0f73ca982b8)
- https://raw.githubusercontent.com/oomol-lab/wanta/d568845ea03f6bae3b1cef2d80b19b5b32bc7952/package.json (retrieved 2026-10-18T16:13:21Z; SHA-256 0000c9f83ee180eaabe2925368adbac85dfb6b1cafa12ccf7d82ed2a542796e9)
- https://raw.githubusercontent.com/oomol-lab/wanta/HEAD/LICENSE (retrieved 2026-10-18T16:14:01Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
