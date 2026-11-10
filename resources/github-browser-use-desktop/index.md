---
title: "Browser Use Desktop | AwesomeCUA"
url: https://awesomecua.com/resources/github-browser-use-desktop/
updated: 2026-10-19
type: agent
lang: en
---

# Browser Use Desktop

Electron app that runs Claude Code or Codex sessions as browser agents in a separate Chromium seeded with the user's imported cookies, started by hotkey or WhatsApp message and built on Browser Harness.

- Catalog URL: https://awesomecua.com/resources/github-browser-use-desktop/
- Original source: https://github.com/browser-use/desktop
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, tool-integration
- Evidence checked: 2026-10-19T06:18:38Z
- ID: github:browser-use/desktop

## Limitations

The README offers a macOS Apple Silicon DMG, a Windows installer and a Linux AppImage, with deb and rpm packages on the releases page. Engines are pluggable adapters in the main process (claude-code is the default; codex and browsercode adapters are also present), and the tree bundles a Browser Harness JavaScript SDK and domain-skill notes for 68 sites. Agent quality depends on the user's Anthropic or OpenAI subscription or API key. The latest non-prerelease is v0.0.31 (2026-05-09) while development continues on main.

- Record JSON: https://awesomecua.com/resources/github-browser-use-desktop/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/browser-use/desktop/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/browser-use/desktop/HEAD/README.md (retrieved 2026-10-19T06:18:38Z; SHA-256 12689a8cb05d9d4d48b0cc340bb4630d2a4c639d0f03acce072e4a9e1ea4fc5b)
- https://raw.githubusercontent.com/browser-use/desktop/f073b7574f7927185ebbebd87556391d5cb0cfd1/app/src/main/hl/engines/registry.ts (retrieved 2026-10-18T11:56:33Z; SHA-256 ba0a0d775e1724b72eeaa28e96fd6c711dee0d6bb0da7ca040b623a12c8fe22e)
- https://raw.githubusercontent.com/browser-use/desktop/f073b7574f7927185ebbebd87556391d5cb0cfd1/app/package.json (retrieved 2026-10-18T11:56:33Z; SHA-256 5150acdc01b1f3a61cc8bd1542bf5c948dab7840f9c1f725ce97ed22eaa98b43)
- https://raw.githubusercontent.com/browser-use/desktop/f073b7574f7927185ebbebd87556391d5cb0cfd1/LICENSE (retrieved 2026-10-18T11:56:32Z; SHA-256 5afa3d97bf1e6f998d587fa101e3fe0d0c416840b7fe77bcd6ae97690a334631)
- https://raw.githubusercontent.com/browser-use/desktop/HEAD/LICENSE (retrieved 2026-10-19T06:18:50Z; SHA-256 5afa3d97bf1e6f998d587fa101e3fe0d0c416840b7fe77bcd6ae97690a334631)
