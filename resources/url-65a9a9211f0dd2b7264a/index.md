# Komos

Hosted automation platform whose task flows use a prompt-driven agent to navigate, click, type and extract on websites in a cloud Chromium sandbox or self-hosted runner, built from narrated screen recordings or chat.

- Catalog URL: https://awesomecua.com/resources/url-65a9a9211f0dd2b7264a/
- Original source: https://www.komos.ai
- Kind: product
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation, workflow, recording, tool-integration
- Evidence checked: 2026-10-20T04:24:37Z
- ID: url:65a9a9211f0dd2b7264a

## Limitations

The documentation describes a task as a reusable automation graph. Its Agent Action node handles browser steps (navigating, clicking, filling forms, scrolling, extracting) from a natural-language prompt, can also call integrations and inspect captured network requests, and accepts screenshots as visual references. A task can be trained from a narrated screen or tab recording of up to five minutes, which Komos turns into a plan, or built step by step in a visual builder. Runs use a fresh or persistent cloud Chromium sandbox on Daytona compute, or a self-hosted runner on a Windows or macOS host that can reuse SSO sessions; the Chrome extension path is retired. The built-in assistant Moss creates, schedules and debugs tasks from chat and is also reachable from coding agents through an MCP server. The model behind the agent is not stated. Pricing, availability and reliability were not independently tested.

- Record JSON: https://awesomecua.com/resources/url-65a9a9211f0dd2b7264a/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://docs.komos.ai/index.md (retrieved 2026-10-20T04:24:37Z; SHA-256 3511f7bbac1c17382aa9a80f702e10387174e8cbe5a514d2e9fe60d1ea86e44e)
- https://docs.komos.ai/agent-action.md (retrieved 2026-10-20T04:24:38Z; SHA-256 c0607a450032a9fdbe234e5075920e83cb3a4d2f39c3e447a85ce12676892368)
- https://docs.komos.ai/environments.md (retrieved 2026-10-20T04:24:39Z; SHA-256 01869935cbbc27b4f1941e6ae2d28bec0a5eae08bb04709ee043208acca0653d)
- https://docs.komos.ai/moss.md (retrieved 2026-10-20T04:24:39Z; SHA-256 aac2eb8923f9661f9c7c0294f19878975d6dc65bc5f0939f99d751a0f189b2a3)
- https://docs.komos.ai/automation-resources.md (retrieved 2026-10-20T04:25:18Z; SHA-256 f6799181ea3ebec58b3df9d31346f8ba062d80629c1fdfb7dad37f65ca8016e3)
