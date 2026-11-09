# pebkac

Self-hosted web co-browser in which a smolagents code agent on a local llama.cpp model writes Python that drives Chrome through Zendriver: navigation, CSS-selector clicks and typing, Trafilatura text extraction and tabs.

- Catalog URL: https://awesomecua.com/resources/github-michaelsoftmd-pebkac-chrome/
- Original source: https://github.com/michaelsoftmd/pebkac-chrome
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, memory, efficiency
- Evidence checked: 2026-10-18T16:09:40Z
- ID: github:michaelsoftmd/pebkac-chrome

## Limitations

Containerized stack (Podman or Docker Compose): a FastAPI service wraps a Zendriver-controlled Chrome, and a SafeCodeAgent subclass of the smolagents CodeAgent calls it through tools for navigation, CSS-selector clicks, typing, key presses, Trafilatura content extraction, DuckDuckGo search, background tabs, API-response capture and a Cloudflare challenge handler, within a configurable step limit (default 10). The model reads page text and selectors; the screenshot tool only saves files, and the README lists vision assist as under consideration. Redis and DuckDB cache extracted content, per-site working selectors persist, and runs are logged to SQLite. The user watches and shares the browser over noVNC from a localhost control panel. The README markets anti-bot evasion and says the project is on hold. Root LICENSE is AGPL-3.0.

- Record JSON: https://awesomecua.com/resources/github-michaelsoftmd-pebkac-chrome/record.json

## License declarations

- code: AGPL-3.0 — https://raw.githubusercontent.com/michaelsoftmd/pebkac-chrome/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/michaelsoftmd/pebkac-chrome/HEAD/README.md (retrieved 2026-10-18T16:09:40Z; SHA-256 ca84c62eefe55c42b2c46d7f4c3fb1f62211c9d1ac96dc68e7a78e1cd6a7cc1e)
- https://raw.githubusercontent.com/michaelsoftmd/pebkac-chrome/fd86e97157b8b784dc26c55f1a599c4e40db9e18/zendriver-docker/app/services/agent_manager.py (retrieved 2026-10-18T16:09:15Z; SHA-256 ca84f46247a0f0e3984ef2d105ad07df04c1704564a5f8d4dbdf82d12f2e686f)
- https://raw.githubusercontent.com/michaelsoftmd/pebkac-chrome/fd86e97157b8b784dc26c55f1a599c4e40db9e18/zendriver-docker/app/services/safe_code_agent.py (retrieved 2026-10-18T16:09:16Z; SHA-256 cdae1f7baee973deacf114ea4f33fd9e705bbeb96b761a0e2fd8637c2af19315)
- https://raw.githubusercontent.com/michaelsoftmd/pebkac-chrome/fd86e97157b8b784dc26c55f1a599c4e40db9e18/zendriver-docker/app/tools/browser_tools.py (retrieved 2026-10-18T16:09:16Z; SHA-256 f370372913265d49e7a26be2b19bb348dedd02b4f6785b119377fe69e5ad72ba)
- https://raw.githubusercontent.com/michaelsoftmd/pebkac-chrome/fd86e97157b8b784dc26c55f1a599c4e40db9e18/zendriver-docker/app/tools/extraction_tools.py (retrieved 2026-10-18T16:09:16Z; SHA-256 7918678557279caab2ba6280332b9c097255cf3b4a6a3aed1dbc1e3fd3c5e464)
- https://raw.githubusercontent.com/michaelsoftmd/pebkac-chrome/fd86e97157b8b784dc26c55f1a599c4e40db9e18/zendriver-docker/app/tools/utility_tools.py (retrieved 2026-10-18T16:09:16Z; SHA-256 6a44b755223c468230bae5db13102ff77b449ca12e383885f1e1243ab658e34c)
- https://raw.githubusercontent.com/michaelsoftmd/pebkac-chrome/HEAD/LICENSE (retrieved 2026-10-18T16:09:51Z; SHA-256 4c07b14947925c5c3d125ca8d7f1fadbf604a6df626edbb0b78cefa26b9bb8f6)
