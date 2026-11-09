# invisible_playwright_mcp

MCP server and local web UI that let an LLM drive an anti-detect Firefox build with moving-pointer and key-press input, seeded browser identities, optional proxies and persistent profiles.

- Catalog URL: https://awesomecua.com/resources/github-feder-cr-invisible-playwright-mcp/
- Original source: https://github.com/feder-cr/invisible_playwright_mcp
- Kind: tool
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration, automation
- Evidence checked: 2026-10-18T11:33:13Z
- ID: github:feder-cr/invisible_playwright_mcp

## Limitations

Installs as a plugin or extension for Claude Code, Codex and Gemini CLI; the standalone web UI calls OpenRouter with the user's key. The tree contains the Python package (MCP server, agent loop, web UI) and an MCP test suite; the browser engine library and fingerprint core are separate repositories, and the engine binary is downloaded from a GitHub release on first start. Its claim of avoiding anti-bot detection and captchas was not tested, and the README asks users to respect site terms. The repository LICENSE is MIT; the README says releases before 2 September 2026 were AGPL-3.0.

- Record JSON: https://awesomecua.com/resources/github-feder-cr-invisible-playwright-mcp/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/feder-cr/invisible_playwright_mcp/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/feder-cr/invisible_playwright_mcp/HEAD/README.md (retrieved 2026-10-18T11:33:13Z; SHA-256 87fc13a4a612123e423ab29547620fc1cbeab9ec92c8b49657a8f59bca6bfbf3)
- https://api.github.com/repos/feder-cr/invisible_playwright_mcp (retrieved 2026-10-18T11:33:13Z; SHA-256 6abd57046814e38bc1c46a5ab24a49aa071571a87d1b9106674516712218f1c9)
- https://api.github.com/repos/feder-cr/invisible_playwright_mcp/git/trees/main?recursive=1 (retrieved 2026-10-18T11:33:14Z; SHA-256 a93e69036a32deab6a1918034c8ed37e534360938546e8d4352e89f362fed2bf)
- https://raw.githubusercontent.com/feder-cr/invisible_playwright_mcp/HEAD/LICENSE (retrieved 2026-10-18T11:33:16Z; SHA-256 7bd49adceb91947129a3ad60d2131884b60775c54e47b3ef1740a110904a1d8b)
- https://raw.githubusercontent.com/feder-cr/invisible_playwright_mcp/HEAD/LICENSE (retrieved 2026-10-18T11:33:16Z; SHA-256 7bd49adceb91947129a3ad60d2131884b60775c54e47b3ef1740a110904a1d8b)
