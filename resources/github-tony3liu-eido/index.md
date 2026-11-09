# Eido

macOS coding workspace built on Zed and the pi agent, adding experimental browser use via an included agent that picks indexed page elements and acts over CDP, and computer use via a bundled Cua Driver MCP server.

- Catalog URL: https://awesomecua.com/resources/github-tony3liu-eido/
- Original source: https://github.com/tony3liu/eido
- Kind: agent
- Review: curated
- Scope: adjacent
- Environments: desktop, macos, web
- Topics: web-navigation, tool-integration, human-in-the-loop
- Evidence checked: 2026-10-20T08:34:39Z
- ID: github:tony3liu/eido

## Limitations

Coding is the primary purpose: the README frames release v0.0.1 (Apple Silicon, macOS 13 or later, locally signed and not notarized) around a describe, investigate, edit, review and verify loop, and calls browser and desktop automation experimental. server.mjs runs an eido-browser MCP server with browser_* tools. Its default Ultrafast engine, adapted in TypeScript from browser-use/jev-ultrafast, launches Playwright Chromium, injects snapshot.js to list up to 250 visible interactive elements with roles and labels plus visible page text, has a decision model choose one click, fill, select, scroll or wait step at a time, and dispatches mouse and key events over the DevTools protocol (browser.ts); per server.mjs, screenshots serve recording and the inspector rather than model input. config.mjs points decision requests at the hosted TypeSafe API (model jev-latest) by default and, unless overridden, generates typed text with the user's main model. A Legacy engine uses the jev-browser npm dependency. computer.mjs registers the bundled or a user-installed cua-driver as the eido_computer MCP server, which needs macOS Accessibility and Screen Recording permission; native/cua/upstream.json pins trycua/cua tag cua-driver-rs-v0.34.0, and per NOTICE the native/cua/overlay patches add session-owned background focus, exact-window keyboard guards and window capture validation. NOTICE licenses Eido-original code GPL-3.0-or-later, while Zed components marked Apache-2.0, the Cua Driver and jev-ultrafast-derived code (MIT), pi (MIT) and upstream pi-acp adapter code (Apache-2.0) keep their own terms. Code was read, not run.

- Record JSON: https://awesomecua.com/resources/github-tony3liu-eido/record.json

## License declarations

- code: GPL-3.0-or-later — https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/NOTICE
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: NOTICE explicitly declares GPL-3.0-or-later for Eido-original code. It does not relicense incorporated upstream code: Zed components marked Apache-2.0, the MIT Cua Driver and jev-ultrafast-derived code, MIT pi and the Apache-2.0 pi-acp adapter keep their own terms.
  Sources: https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/NOTICE, https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/LICENSE

## Primary evidence

- https://raw.githubusercontent.com/tony3liu/eido/HEAD/README.md (retrieved 2026-10-20T08:34:39Z; SHA-256 4b55d2ab57f54c04a317198bd5882c12b336d0200f7dce33738aaa513b47c387)
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/README.md (retrieved 2026-10-20T08:32:00Z; SHA-256 4b55d2ab57f54c04a317198bd5882c12b336d0200f7dce33738aaa513b47c387)
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/packages/runtime/src/browser/server.mjs (retrieved 2026-10-20T08:32:14Z; SHA-256 81598be20f7a809750a8d0f362709da48bd569fa11e4499da7b54ba477592c77)
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/packages/runtime/src/browser/ultrafast/browser.ts (retrieved 2026-10-20T08:32:15Z; SHA-256 91422cdeebcfe6ff50ed467192302cee34aab009e62219f89b5732b72c8fca1f)
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/packages/runtime/src/browser/ultrafast/snapshot.js (retrieved 2026-10-20T08:32:24Z; SHA-256 e50473501c8fb8e70f3b21866d987393e3f2315c639d638bd477d170e81ed78d)
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/packages/runtime/src/browser/config.mjs (retrieved 2026-10-20T08:32:28Z; SHA-256 fc86171dade649839cde8495a1b1d1e4a3347a1f4ec559ee3123c8fd927581f2)
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/packages/runtime/src/computer.mjs (retrieved 2026-10-20T08:32:43Z; SHA-256 cbf5b5f57ccebc9a7df9112186b3e82aac73af10aa0d8143d5b75f4b9c72a2f9)
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/native/cua/upstream.json (retrieved 2026-10-20T08:32:48Z; SHA-256 981b09f24e3d4410c04c93843589754a8ed03df55b20945338c5f746dbfe3d37)
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/NOTICE (retrieved 2026-10-20T08:32:56Z; SHA-256 b7cd7358d6a9cbcc2901e2b1f0beb0698dbd2b99735dcc659a338c079e9b88af)
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/LICENSE (retrieved 2026-10-20T08:33:01Z; SHA-256 0aa0322ea494da441088e4d9144c6720bf99d9e2e1eefcd29d1f58b19b5c4246)
