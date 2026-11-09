# VibeSurf

Browser assistant with a Chrome-extension UI that runs parallel Browser Use agents across tabs and Langflow-based drag-and-drop browser workflows for logins, data collection and research, using local or hosted LLMs.

- Catalog URL: https://awesomecua.com/resources/github-vibesurf-ai-vibesurf/
- Original source: https://github.com/vibesurf-ai/VibeSurf
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, workflow
- Evidence checked: 2026-10-19T06:20:04Z
- ID: github:vibesurf-ai/vibesurf

## Limitations

pyproject.toml pins browser-use 0.9.5; the README also credits LangGraph and Langflow, and the tree vendors a langflow directory. It installs as a uv tool, a Windows installer or a Docker image with noVNC; from Chrome 142 the extension must be loaded manually. Integrations include Composio and site APIs for Xiaohongshu, Douyin, Weibo and YouTube. The README's token-saving and speed claims were not tested. The LICENSE is a 'VibeSurf Open Source License' that adds multi-tenant, SaaS, frontend-logo and contributor conditions to Apache-2.0, while pyproject.toml declares plain Apache-2.0, so the code license is left unknown. Latest release 0.5.18 (2026-01-17). Code was read, not run.

- Record JSON: https://awesomecua.com/resources/github-vibesurf-ai-vibesurf/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The LICENSE is a custom 'VibeSurf Open Source License' (Apache-2.0 plus multi-tenant, SaaS, frontend-logo and contributor conditions), which conflicts with the plain Apache-2.0 declared in pyproject.toml; no standard identifier applies, so the code license stays unknown.
  Sources: https://raw.githubusercontent.com/vibesurf-ai/VibeSurf/cd6e519d507cdd4d63061300bf60fb176e1f57e0/LICENSE, https://raw.githubusercontent.com/vibesurf-ai/VibeSurf/cd6e519d507cdd4d63061300bf60fb176e1f57e0/pyproject.toml

## Primary evidence

- https://raw.githubusercontent.com/vibesurf-ai/VibeSurf/HEAD/README.md (retrieved 2026-10-19T06:20:04Z; SHA-256 7b114b2c218e8555f36f5eeabd6a3c90d6c700cb74b175f0019d08b277d3ed9e)
- https://raw.githubusercontent.com/vibesurf-ai/VibeSurf/cd6e519d507cdd4d63061300bf60fb176e1f57e0/pyproject.toml (retrieved 2026-10-18T12:06:28Z; SHA-256 97b5d7bf51bf343eaced126fd67164a5642e56c2a206a41020a70367b68a6f6a)
- https://raw.githubusercontent.com/vibesurf-ai/VibeSurf/cd6e519d507cdd4d63061300bf60fb176e1f57e0/LICENSE (retrieved 2026-10-18T12:06:27Z; SHA-256 ca7712f8e100ee3f6ee6316c8fad4be37dfeb0b1e88be27631ec04259ae1b9d7)
