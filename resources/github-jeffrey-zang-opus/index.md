# Opus

Electron app for macOS whose OpenAI Agents SDK loop operates apps through AppleScript, Accessibility-element clicks, key presses, shell commands and URIs, guided by element lists and screenshots.

- Catalog URL: https://awesomecua.com/resources/github-jeffrey-zang-opus/
- Original source: https://github.com/jeffrey-zang/opus
- Kind: agent
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: automation, tool-integration, screen-understanding
- Evidence checked: 2026-10-20T08:11:19Z
- ID: github:jeffrey-zang/opus

## Limitations

Not related to Anthropic's Claude Opus models. initAgents.ts defines an app-selection agent and an action agent, both configured with gpt-4.1-mini through the OpenAI Agents SDK, so an OpenAI API key is required. Each action step receives the target app's AppleScript dictionary, a list of clickable Accessibility elements (role, title, value, help and description) and, when captured, a screenshot (runAgents.ts). Swift helpers under app/swift read the Accessibility tree, click, send keys and move the app window to a separate virtual display so the agent can work in the background. The repository also contains the tryop.us landing site and a small server. Code was read, not run.

- Record JSON: https://awesomecua.com/resources/github-jeffrey-zang-opus/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/jeffrey-zang/opus/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/jeffrey-zang/opus/HEAD/README.md (retrieved 2026-10-20T08:11:19Z; SHA-256 e7d20d6325d5f3cc599abe8db897d414ef171d3940ba88a4e0d5e438c705c3fb)
- https://raw.githubusercontent.com/jeffrey-zang/opus/d3f4b7b3e54bab6cbb7bf4fa8b257f47500c6890/README.md (retrieved 2026-10-20T08:10:56Z; SHA-256 e7d20d6325d5f3cc599abe8db897d414ef171d3940ba88a4e0d5e438c705c3fb)
- https://raw.githubusercontent.com/jeffrey-zang/opus/d3f4b7b3e54bab6cbb7bf4fa8b257f47500c6890/app/electron/ai/initAgents.ts (retrieved 2026-10-20T08:10:57Z; SHA-256 19e7a4c6cc7dfc55e5bb912110c92c033741aa019c1517916021a12dee0fe3ef)
- https://raw.githubusercontent.com/jeffrey-zang/opus/d3f4b7b3e54bab6cbb7bf4fa8b257f47500c6890/app/electron/ai/runAgents.ts (retrieved 2026-10-20T08:10:57Z; SHA-256 707883082b60fd82d022dc7f63700f5a1bf578229554c8be571e1c693cda16f6)
- https://raw.githubusercontent.com/jeffrey-zang/opus/d3f4b7b3e54bab6cbb7bf4fa8b257f47500c6890/app/swift/moveToOpusDisplay.swift (retrieved 2026-10-20T08:10:57Z; SHA-256 0c491fe60b5cd1b14983866698c1ea9e3049d94e05d2df449ebbb798e5ffcdbb)
- https://raw.githubusercontent.com/jeffrey-zang/opus/d3f4b7b3e54bab6cbb7bf4fa8b257f47500c6890/LICENSE (retrieved 2026-10-20T08:10:57Z; SHA-256 8ea5c2587dca9af8c22500b816dbbae73c3bc214d690314261244d167463b4df)
- https://raw.githubusercontent.com/jeffrey-zang/opus/HEAD/LICENSE (retrieved 2026-10-20T08:11:21Z; SHA-256 8ea5c2587dca9af8c22500b816dbbae73c3bc214d690314261244d167463b4df)
