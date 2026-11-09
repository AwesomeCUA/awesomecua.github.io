# Browserable

Self-hosted browser-agent platform with a JS SDK and REST API: a planner sets high-level steps, and a runner reads a screenshot and a numbered DOM chunk to pick Playwright actions in a local or hosted browser.

- Catalog URL: https://awesomecua.com/resources/github-browserable-browserable/
- Original source: https://github.com/browserable/browserable
- Kind: framework
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, planning
- Evidence checked: 2026-10-19T06:18:19Z
- ID: github:browserable/browserable

## Limitations

Inspected at commit a3af19a6 (27 August 2025). The README sets up a Docker Compose stack (UI server, tasks server, MongoDB, Redis and MinIO) in which the user supplies one LLM key (Gemini, OpenAI or Claude) and a Steel or Hyperbrowser key; tasks/services/browser.js also accepts Browserbase or the repository's own browser service, which launches Playwright Chromium. In tasks/agents/browserable.js the act-on-tab action calls simpleActionHelper, whose loop takes a plain page screenshot and the current chunk of DOM elements with XPaths, asks a planner for high-level steps (replanning after five steps), and asks a runner for a Playwright method, arguments and element number; the older DOM-only and vision act helpers are commented out at that call site. The repository also contains deep-research and generative agents. The README's 90.4% WebVoyager figure is publisher-reported and was not reproduced. The README names Stagehand among the open-source projects it builds on. No code was run.

- Record JSON: https://awesomecua.com/resources/github-browserable-browserable/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/browserable/browserable/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/browserable/browserable/HEAD/README.md (retrieved 2026-10-19T06:18:19Z; SHA-256 914573cc5d63cfea31b57c763cb0d299c056c731b26a2b2199f2fce2fbde8df4)
- https://raw.githubusercontent.com/browserable/browserable/a3af19a66560d8bc3ff2c4ed4f9570eb6a66649c/tasks/agents/browserable.js (retrieved 2026-10-19T06:18:20Z; SHA-256 5288ad8b3bfdf2d3c259fa49bce339000ed353df7ae64fb5e4c41972c58b2764)
- https://raw.githubusercontent.com/browserable/browserable/a3af19a66560d8bc3ff2c4ed4f9570eb6a66649c/tasks/services/browser.js (retrieved 2026-10-19T06:18:20Z; SHA-256 e715e291c4c411812edb857da0d5ce43cf9359cdce9defeff9c8bf2fe9ba2ff3)
- https://raw.githubusercontent.com/browserable/browserable/a3af19a66560d8bc3ff2c4ed4f9570eb6a66649c/browser/browser-manager.js (retrieved 2026-10-19T06:18:21Z; SHA-256 cf46dd448cc0bb8ae779bf97944a2646711715dff201698196ee0466ca649437)
- https://raw.githubusercontent.com/browserable/browserable/a3af19a66560d8bc3ff2c4ed4f9570eb6a66649c/ui/LICENSE (retrieved 2026-10-19T06:18:21Z; SHA-256 4ec10a44cdbffaa7f300c15fcfd8bc1577596f109e595318f6fc5ffad1f98219)
- https://raw.githubusercontent.com/browserable/browserable/HEAD/LICENSE (retrieved 2026-10-19T06:19:15Z; SHA-256 3fe6213874fe127c2b42e45d1bfc1d4c2611482077cf48c1f5b180293472109f)
