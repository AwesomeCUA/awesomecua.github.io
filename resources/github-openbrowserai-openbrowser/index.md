---
title: "OpenBrowser (OpenBrowserAI) | AwesomeCUA"
url: https://awesomecua.com/resources/github-openbrowserai-openbrowser/
updated: 2026-10-18
type: agent
lang: en
---

# OpenBrowser (OpenBrowserAI)

Chromium patch set with a built-in assistant extension whose browser agent sees indexed page elements and a screenshot with numbered boxes, then clicks and types by element index, scrolls and switches tabs.

- Catalog URL: https://awesomecua.com/resources/github-openbrowserai-openbrowser/
- Original source: https://github.com/OpenBrowserAI/openbrowser
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, planning, tool-integration
- Evidence checked: 2026-10-18T16:11:41Z
- ID: github:openbrowserai/openbrowser

## Limitations

Three parts: chromium/ holds a patch list and scripts that rebrand a separately checked-out Chromium source tree with the root branding_assets/ and load the assistant as a built-in component extension in a side panel (no prebuilt browser is released); chromium-extension/ is that assistant (sidebar chat, options, background agent); packages/core is the TypeScript agent library with planning, replanning, a chat agent, MCP clients, memory compression and web search. Its browser agent injects a DOM-tree script that indexes clickable elements as pseudo-HTML and, in the default normal mode with draw marking, sends a viewport capture with the indexed boxes drawn on it; tools navigate, click, type, scroll, hover, select options, extract page content and switch tabs, and the extension executes them through chrome.tabs, chrome.scripting and chrome.debugger. Models are configured with the user's own API keys. Root LICENSE is MIT.

- Record JSON: https://awesomecua.com/resources/github-openbrowserai-openbrowser/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/OpenBrowserAI/openbrowser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/OpenBrowserAI/openbrowser/HEAD/README.md (retrieved 2026-10-18T16:11:41Z; SHA-256 1ff317f1fcd1e1855cb24d82a8454879655205961df92bbeb90e82d54b2f2743)
- https://raw.githubusercontent.com/OpenBrowserAI/openbrowser/b04fcf631fe67ddf7ab6d54f6388635d16f468f9/packages/core/src/agent/browser/browser-labels.ts (retrieved 2026-10-18T16:11:13Z; SHA-256 e617f612ba914a7033110b812298c889a2f0e9441503cbb2881622526cedaf73)
- https://raw.githubusercontent.com/OpenBrowserAI/openbrowser/b04fcf631fe67ddf7ab6d54f6388635d16f468f9/packages/core/src/config/index.ts (retrieved 2026-10-18T16:11:13Z; SHA-256 93268dc2f00d1223ab181ccd9f4d3f479c4690a0d083aa6298b19967140222b9)
- https://raw.githubusercontent.com/OpenBrowserAI/openbrowser/b04fcf631fe67ddf7ab6d54f6388635d16f468f9/packages/extension/src/browser.ts (retrieved 2026-10-18T16:11:15Z; SHA-256 a632380626b5a5bbbe46137a8772a994310180523b178fda54ef9ca4c2376bb0)
- https://raw.githubusercontent.com/OpenBrowserAI/openbrowser/b04fcf631fe67ddf7ab6d54f6388635d16f468f9/chromium/config/patches.list (retrieved 2026-10-18T16:11:19Z; SHA-256 cf876dcee3a2974b2c488439985652acca81eff9b4f84491dc9ad06e6ba79286)
- https://raw.githubusercontent.com/OpenBrowserAI/openbrowser/b04fcf631fe67ddf7ab6d54f6388635d16f468f9/chromium/contributing.md (retrieved 2026-10-18T16:11:20Z; SHA-256 9f5b2df5342eda87546dcf3f17e2b8598683fce34dee038a7a8c3bb8ca5f944e)
- https://raw.githubusercontent.com/OpenBrowserAI/openbrowser/HEAD/LICENSE (retrieved 2026-10-18T16:11:50Z; SHA-256 4898d0c434a561a78e693001a5894d2acacd88ef1445a4966e1a0b35a0cebfcd)
