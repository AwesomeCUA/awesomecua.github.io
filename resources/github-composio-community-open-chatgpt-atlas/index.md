# Open ChatGPT Atlas

Chrome side-panel extension and Electron browser in which Gemini 2.5 Computer Use reads tab screenshots and returns clicks, typing, scrolling and navigation, with an optional Composio tool-router mode.

- Catalog URL: https://awesomecua.com/resources/github-composio-community-open-chatgpt-atlas/
- Original source: https://github.com/composio-community/open-chatgpt-atlas
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration
- Evidence checked: 2026-10-18T12:20:03Z
- ID: github:composio-community/open-chatgpt-atlas

## Limitations

The repository moved from ComposioHQ/open-chatgpt-atlas to composio-community (same GitHub repository ID 1080954405); the README star badge still links the former name. In Browser Tools mode the extension captures the visible tab (chrome.tabs.captureVisibleTab), sends it to gemini-2.5-computer-use-preview-10-2025 and executes the returned actions by dispatching synthetic DOM mouse and keyboard events at the given coordinates from its content script; the Electron app captures its view with webContents.capturePage and injects equivalent JavaScript. Model calls go directly from the client with a user-supplied Google API key; the Composio key for Tool Router mode is optional. There is no LICENSE file and GitHub reports no license, so the code license is unknown. No GitHub releases; the extension manifest is version 1.0.0.

- Record JSON: https://awesomecua.com/resources/github-composio-community-open-chatgpt-atlas/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/composio-community/open-chatgpt-atlas/HEAD/README.md (retrieved 2026-10-18T12:20:03Z; SHA-256 9e824c64f7b35b51d4c7d1760a1aa2b988f7c5b9c8cbf3316f58ad3ee889fcbe)
- https://api.github.com/repos/composio-community/open-chatgpt-atlas/git/commits/15a4261954a13322bc8af54ce1434d9b6f3d189d (retrieved 2026-10-18T12:20:04Z; SHA-256 eee36a8262eb0959155c6e5f85aec5b70e07bc846fa41da967a376067f961494)
- https://raw.githubusercontent.com/composio-community/open-chatgpt-atlas/15a4261954a13322bc8af54ce1434d9b6f3d189d/sidepanel.tsx (retrieved 2026-10-18T12:20:05Z; SHA-256 c1551a484ee4f460bf8e2422d67d8faa15bc469e488450e5cc2485ffaf703ac3)
- https://raw.githubusercontent.com/composio-community/open-chatgpt-atlas/15a4261954a13322bc8af54ce1434d9b6f3d189d/background.ts (retrieved 2026-10-18T12:20:05Z; SHA-256 846c28313d8aac2f674d3df0d6857f1e24f31dc3d801cddb89a44b9053fd90d1)
- https://raw.githubusercontent.com/composio-community/open-chatgpt-atlas/15a4261954a13322bc8af54ce1434d9b6f3d189d/content.ts (retrieved 2026-10-18T12:20:05Z; SHA-256 02790a0381841b265c056c276b932774a20ed6f55b82aa0d67716f2237477016)
- https://raw.githubusercontent.com/composio-community/open-chatgpt-atlas/15a4261954a13322bc8af54ce1434d9b6f3d189d/manifest.json (retrieved 2026-10-18T12:20:05Z; SHA-256 e9649e6d8e990bf533f33ea02e9c8d1ffc22ef42368f336016ce5590738fa5d9)
- https://raw.githubusercontent.com/composio-community/open-chatgpt-atlas/15a4261954a13322bc8af54ce1434d9b6f3d189d/electron-browser/src/main/computer-use-service.ts (retrieved 2026-10-18T12:20:12Z; SHA-256 f50e4d28c598cad5dc1c3629ab22d22da79043019e3181c182f3abadd529b770)
- https://api.github.com/repos/ComposioHQ/open-chatgpt-atlas (retrieved 2026-10-18T12:20:14Z; SHA-256 038bb8e2d9c9be78e5ef27b6b520c97eee966862fa001e88d062242645dde255)
- https://api.github.com/repos/composio-community/open-chatgpt-atlas (retrieved 2026-10-18T12:20:15Z; SHA-256 038bb8e2d9c9be78e5ef27b6b520c97eee966862fa001e88d062242645dde255)
