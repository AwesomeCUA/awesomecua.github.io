---
title: "EverFern | AwesomeCUA"
url: https://awesomecua.com/resources/github-everfern-ai-everfern/
updated: 2026-10-20
type: agent
lang: en
---

# EverFern

Electron desktop agent whose LangGraph orchestrator runs a screenshot-driven computer-use loop with robotjs mouse and keyboard input, a Navis browser agent and shell tools, with local or cloud models.

- Catalog URL: https://awesomecua.com/resources/github-everfern-ai-everfern/
- Original source: https://github.com/Everfern-AI/Everfern
- Kind: agent
- Review: curated
- Scope: core
- Environments: desktop, windows, macos, linux, web
- Topics: automation, web-navigation, tool-integration, planning
- Evidence checked: 2026-10-20T08:15:50Z
- ID: github:everfern-ai/everfern

## Limitations

package.json at the inspected commit names the app desktop, version 1.3.0, MIT. computer-use.ts captures the screen through Electron, downscales screenshots to 1280 px wide, asks a configurable vision model for the next action (its class defaults name bytedance/ui-tars-1.5-7b as the action model), maps the returned normalized coordinates to the screen and executes mouse and keyboard input with @jitsi/robotjs. The Navis browser agent has an extension mode, whose companion extension is published in a separate repository, and a Playwright mode (browser-control-adapter.ts). The README lists Ollama, LM Studio and cloud providers, and describes runtime tool synthesis behind human approval, saved skills, peer-agent debate and shell commands run in an isolated Linux VM.

- Record JSON: https://awesomecua.com/resources/github-everfern-ai-everfern/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/Everfern-AI/Everfern/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/Everfern-AI/Everfern/HEAD/README.md (retrieved 2026-10-20T08:15:50Z; SHA-256 54c91b8ec07faf4c82dbe010f7f72e73d05e720e676537241ffebefc9f30ac08)
- https://raw.githubusercontent.com/Everfern-AI/Everfern/75558f731fb14638239f98ce54859fc31633ffb3/README.md (retrieved 2026-10-20T08:15:21Z; SHA-256 54c91b8ec07faf4c82dbe010f7f72e73d05e720e676537241ffebefc9f30ac08)
- https://raw.githubusercontent.com/Everfern-AI/Everfern/75558f731fb14638239f98ce54859fc31633ffb3/package.json (retrieved 2026-10-20T08:15:21Z; SHA-256 5413a64f18d943da654658caff7caf6bb1ba4905fc895a6153f5aca598f58a29)
- https://raw.githubusercontent.com/Everfern-AI/Everfern/75558f731fb14638239f98ce54859fc31633ffb3/main/agent/tools/computer-use.ts (retrieved 2026-10-20T08:15:21Z; SHA-256 7edcbc79282c93bc71749359b2ded7aa0a3abeac426db3af05e63b954b1df4f1)
- https://raw.githubusercontent.com/Everfern-AI/Everfern/75558f731fb14638239f98ce54859fc31633ffb3/main/agent/tools/navis/browser-control-adapter.ts (retrieved 2026-10-20T08:15:22Z; SHA-256 fcfd61525d5c565f1534ed6a3fb7c1b374b7c5ccbe25157ec8bf4ebbf15281ad)
- https://raw.githubusercontent.com/Everfern-AI/Everfern/75558f731fb14638239f98ce54859fc31633ffb3/LICENSE (retrieved 2026-10-20T08:15:23Z; SHA-256 723a3798b23fa997e4e7a04f0e3fb142d0743b44110183ecd23cd3c77e5e9566)
- https://raw.githubusercontent.com/Everfern-AI/Everfern/HEAD/LICENSE (retrieved 2026-10-20T08:15:55Z; SHA-256 723a3798b23fa997e4e7a04f0e3fb142d0743b44110183ecd23cd3c77e5e9566)
