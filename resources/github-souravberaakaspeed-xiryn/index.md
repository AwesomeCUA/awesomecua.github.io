---
title: "Xiryn | AwesomeCUA"
url: https://awesomecua.com/resources/github-souravberaakaspeed-xiryn/
updated: 2026-10-20
type: agent
lang: en
---

# Xiryn

Self-hosted personal agent app that gives each agent its own Docker Linux desktop with Chromium, operated through screenshots and xdotool clicks and keys, with live take-over, memory, a vault and Telegram control.

- Catalog URL: https://awesomecua.com/resources/github-souravberaakaspeed-xiryn/
- Original source: https://github.com/SouravBeraAkaSpeed/xiryn
- Kind: agent
- Review: curated
- Scope: core
- Environments: desktop, linux, web
- Topics: automation, web-navigation, human-in-the-loop, memory, tool-integration
- Evidence checked: 2026-10-20T08:14:45Z
- ID: github:souravberaakaspeed/xiryn

## Limitations

Next.js app run locally (version 0.4.1 in package.json; tag v0.4.1 points at b8016b5, and the inspected commit 489e9c4 is later). Each agent's workstation is a Docker container built from workstation/: Debian (trixie-slim) with Xvfb, xfwm4 and a panel, Chromium, x11vnc and noVNC, xdotool and scrot, a persistent home volume, and an inactivity watchdog. lib/agent/tools.ts defines the tool belt for the Vercel AI SDK streamText loop: shell and fs_* through docker exec; screen_capture and screen_share (scrot JPEG through xiryn-shot); pointer_click, pointer_move, pointer_drag, pointer_scroll, key_type and key_press (xdotool in lib/workstation.ts), each returning a fresh screenshot; request_takeover; vault_list, vault_fill, request_payment_approval and request_secret; memory_write and memory_forget; web_search and web_fetch through Firecrawl; and delegate for squads. Observation is plain screenshots of a 1280x800 display with pixel coordinates; there is no accessibility tree or element annotation. Before each step the runtime keeps only the two most recent screenshots in full (docs/architecture.md). The vault fills saved logins and cards into fields without the model seeing them, and cards only after the owner approves the payment. The user can watch and take over the desktop, and the agent hands over at logins, payments, one-time codes or CAPTCHAs, with a Telegram notice when paired. Models come from the owner's keys for OpenAI, Anthropic, Google, xAI, Groq, Mistral, DeepSeek, OpenRouter, Ollama, LM Studio or any OpenAI-compatible endpoint. The README's comparison with hosted agents is the author's own. Root LICENSE is MIT.

- Record JSON: https://awesomecua.com/resources/github-souravberaakaspeed-xiryn/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/SouravBeraAkaSpeed/xiryn/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/SouravBeraAkaSpeed/xiryn/HEAD/README.md (retrieved 2026-10-20T08:14:45Z; SHA-256 71b4c54e1c81f6a48dfbdc0824169bc67bbc630511ab78ebfa0cd7aaaa8cb858)
- https://raw.githubusercontent.com/SouravBeraAkaSpeed/xiryn/489e9c4fa4c3705c4ff87d1f90e7d8b616837c14/docs/architecture.md (retrieved 2026-10-20T08:13:57Z; SHA-256 a981aa1295fe450f358a8fdbaebf6e347ddd30655327c20d368f3a205b77a45e)
- https://raw.githubusercontent.com/SouravBeraAkaSpeed/xiryn/489e9c4fa4c3705c4ff87d1f90e7d8b616837c14/lib/agent/tools.ts (retrieved 2026-10-20T08:14:00Z; SHA-256 3dfffee7f38880d93c3cc0063cee4d0fe0a1c32304ac34bc3363b9877063f18e)
- https://raw.githubusercontent.com/SouravBeraAkaSpeed/xiryn/489e9c4fa4c3705c4ff87d1f90e7d8b616837c14/lib/workstation.ts (retrieved 2026-10-20T08:14:02Z; SHA-256 a57b7a6d23c0175b5f6d39e65265baae6b8572d90056da9b71b1dbc0c01243f2)
- https://raw.githubusercontent.com/SouravBeraAkaSpeed/xiryn/489e9c4fa4c3705c4ff87d1f90e7d8b616837c14/workstation/Dockerfile (retrieved 2026-10-20T08:14:04Z; SHA-256 d2ab9ab4c377755984d128c7655619f7fb114e2fd58f4a51c1dc175316abd65b)
- https://raw.githubusercontent.com/SouravBeraAkaSpeed/xiryn/489e9c4fa4c3705c4ff87d1f90e7d8b616837c14/workstation/rootfs/usr/local/bin/xiryn-shot (retrieved 2026-10-20T08:14:05Z; SHA-256 365ea5c5baa1d65666948557d755a8e1c2180589d8095871f3701f8b0bd582d1)
- https://raw.githubusercontent.com/SouravBeraAkaSpeed/xiryn/489e9c4fa4c3705c4ff87d1f90e7d8b616837c14/package.json (retrieved 2026-10-20T08:14:06Z; SHA-256 427f984809cb545bbcc4d2f64c51d0b9ef932447401c1856762d737829205cb9)
- https://raw.githubusercontent.com/SouravBeraAkaSpeed/xiryn/489e9c4fa4c3705c4ff87d1f90e7d8b616837c14/LICENSE (retrieved 2026-10-20T08:14:07Z; SHA-256 64cd47199151b05cb1ccc1866cb31fff39b16be5627b3c347c9da604237da33e)
- https://raw.githubusercontent.com/SouravBeraAkaSpeed/xiryn/HEAD/LICENSE (retrieved 2026-10-20T08:14:47Z; SHA-256 64cd47199151b05cb1ccc1866cb31fff39b16be5627b3c347c9da604237da33e)
