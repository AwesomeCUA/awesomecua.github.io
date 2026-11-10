---
title: "Cetus | AwesomeCUA"
url: https://awesomecua.com/resources/github-drewnekota-cetus/
updated: 2026-10-18
type: agent
lang: en
---

# Cetus

macOS client for running and reviewing coding-agent runtimes; its built-in runtime bundles a computer-use helper that acts on the frontmost app's numbered Accessibility elements, plus Chrome control.

- Catalog URL: https://awesomecua.com/resources/github-drewnekota-cetus/
- Original source: https://github.com/drewnekota/cetus
- Kind: agent
- Review: curated
- Scope: adjacent
- Environments: desktop, macos, web
- Topics: automation, human-in-the-loop
- Evidence checked: 2026-10-18T15:39:54Z
- ID: github:drewnekota/cetus

## Limitations

Adjacent: Cetus is mainly a review board and launcher for Claude Code, Codex, DeepSeek Harness, OpenCode, Grok Build, Kimi CLI and its own runtime (a bundled pi agent), with scheduled runs, per-run git worktrees and on-device screen-history OCR and meeting transcription. GUI control lives in two opt-in plugins of the built-in runtime. The computer-use plugin tunnels requests through the Rust host to a long-lived Swift helper (src-tauri/cua/cetus-cua-helper.swift) that dumps the frontmost or named app's Accessibility tree as numbered elements; computer_act presses or sets values by index and falls back to synthetic CGEvent clicks and keystrokes, asking for confirmation before the first consequential action and before destructive or sensitive ones, and computer_verify re-observes. The browser-use plugin attaches the external chrome-devtools-mcp to Chrome on port 9222. Apple Silicon only, macOS 13+ (Tauri build) or 15+ (Swift beta). Root LICENSE is MIT.

- Record JSON: https://awesomecua.com/resources/github-drewnekota-cetus/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/drewnekota/cetus/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/drewnekota/cetus/HEAD/README.md (retrieved 2026-10-18T15:39:54Z; SHA-256 57a7e8522eefee5eeb0ee71ce50242aad6ff4910b0d04e18dd14c3cb7216337b)
- https://api.github.com/repos/drewnekota/cetus/git/commits/2f1ab95d1bc2ecd6d05ae99dd88ec61ec5860a5a (retrieved 2026-10-18T15:39:26Z; SHA-256 5cf2cad9d813c36a226c107819cb2d0019587c1fdf6b9c41b9eea9b263d24957)
- https://raw.githubusercontent.com/drewnekota/cetus/2f1ab95d1bc2ecd6d05ae99dd88ec61ec5860a5a/src-tauri/cetus-plugins/computer-use/extensions/computer-use.ts (retrieved 2026-10-18T15:39:27Z; SHA-256 e6ac7ed162414474532d4b92da142ccba86d375e2f5f18a6485fd35135d2710d)
- https://raw.githubusercontent.com/drewnekota/cetus/2f1ab95d1bc2ecd6d05ae99dd88ec61ec5860a5a/src-tauri/cua/cetus-cua-helper.swift (retrieved 2026-10-18T15:39:27Z; SHA-256 e2ede2d1ff0374d06c30f990513160e24d2f7fe7938bb7c854874d9b24acc50e)
- https://raw.githubusercontent.com/drewnekota/cetus/2f1ab95d1bc2ecd6d05ae99dd88ec61ec5860a5a/src-tauri/cetus-plugins/browser-use/.mcp.json (retrieved 2026-10-18T15:39:27Z; SHA-256 bbe459ac55792664ecb1b6cf1d73b1be283126b3d8a957b990ac31b9aab8f594)
- https://raw.githubusercontent.com/drewnekota/cetus/HEAD/LICENSE (retrieved 2026-10-18T15:39:55Z; SHA-256 02e8a50516622ae2f3b7d8819ffef997fe808e2f9f082876be409ff590d2ee41)
