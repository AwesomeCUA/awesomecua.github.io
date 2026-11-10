---
title: "OS AI Computer Use | AwesomeCUA"
url: https://awesomecua.com/resources/github-777genius-os-ai-computer-use/
updated: 2026-10-18
type: agent
lang: en
---

# OS AI Computer Use

Local desktop agent that sends plain screenshots to OpenAI's or Anthropic's computer-use tool and performs the returned clicks, drags, scrolls and keystrokes through PyAutoGUI-based drivers on macOS, Windows and Linux.

- Catalog URL: https://awesomecua.com/resources/github-777genius-os-ai-computer-use/
- Original source: https://github.com/777genius/os-ai-computer-use
- Kind: agent
- Review: curated
- Scope: core
- Environments: desktop, macos, windows, linux
- Topics: automation, cross-app
- Evidence checked: 2026-10-18T15:38:22Z
- ID: github:777genius/os-ai-computer-use

## Limitations

Provider adapters call the OpenAI Responses API with its computer tool (batched actions) or Anthropic's computer-use tool (single actions with zoom); packages/core/src/os_ai_core/tools/computer.py captures the screen and executes actions through per-OS driver ports. macOS uses PyAutoGUI with a Quartz event path for Enter and an AppKit overlay; Windows and Linux (X11 or XWayland) use PyAutoGUI. A Flutter client (macOS, Windows, Linux, web) talks to a local backend; the CLI runs tasks directly. The README headline of 75.0% on OSWorld is a model-provider figure. The repository was formerly iliyaZelenko/os-ai-computer-use (same GitHub repository ID).

- Record JSON: https://awesomecua.com/resources/github-777genius-os-ai-computer-use/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/777genius/os-ai-computer-use/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/777genius/os-ai-computer-use/HEAD/README.md (retrieved 2026-10-18T15:38:22Z; SHA-256 c2536b1182e7ee2e0e25a6676457a599be9d16e7ccdab47e08f7780dab56f6fe)
- https://raw.githubusercontent.com/777genius/os-ai-computer-use/0356f418d61d7cace737eaa48f3d3a014e4ea249/packages/core/src/os_ai_core/tools/computer.py (retrieved 2026-10-18T15:37:56Z; SHA-256 6da904ac0b6c1fe6b1b51d4bd87fc73f8d2a61516f38b1d908672a7c5581f267)
- https://raw.githubusercontent.com/777genius/os-ai-computer-use/0356f418d61d7cace737eaa48f3d3a014e4ea249/packages/llm_openai/src/os_ai_llm_openai/adapters_openai.py (retrieved 2026-10-18T15:37:56Z; SHA-256 cc18ce96fa9d01148d93e6efd99b3f24011f37a93e8ff3f8265494d874946630)
- https://raw.githubusercontent.com/777genius/os-ai-computer-use/0356f418d61d7cace737eaa48f3d3a014e4ea249/packages/llm_anthropic/src/os_ai_llm_anthropic/adapters_anthropic.py (retrieved 2026-10-18T15:37:57Z; SHA-256 5979aafe65529b9abdc1f2a61b6f5c8f4d5ad0cacadca28d3823cf9070a9ee6b)
- https://raw.githubusercontent.com/777genius/os-ai-computer-use/0356f418d61d7cace737eaa48f3d3a014e4ea249/packages/os/src/os_ai_os/defaults.py (retrieved 2026-10-18T15:37:57Z; SHA-256 645c009659bc53740cf1c7e4076c161b8dd8956d2abf5b43678880a53d0433a0)
- https://raw.githubusercontent.com/777genius/os-ai-computer-use/0356f418d61d7cace737eaa48f3d3a014e4ea249/packages/os-macos/src/os_ai_os_macos/drivers.py (retrieved 2026-10-18T15:37:58Z; SHA-256 6573d50e6d79153bb7c944d9ba87a74e6e0dcf8dc16c04d4e39366b365a119e7)
- https://raw.githubusercontent.com/777genius/os-ai-computer-use/0356f418d61d7cace737eaa48f3d3a014e4ea249/LICENSE (retrieved 2026-10-18T15:37:58Z; SHA-256 4297658ee10a19e840fe1c2411541d4c1654df6e47767a82af2a1b209fcac749)
- https://raw.githubusercontent.com/777genius/os-ai-computer-use/HEAD/LICENSE (retrieved 2026-10-18T15:38:32Z; SHA-256 4297658ee10a19e840fe1c2411541d4c1654df6e47767a82af2a1b209fcac749)
- https://api.github.com/repos/iliyaZelenko/os-ai-computer-use (retrieved 2026-10-18T15:37:45Z; SHA-256 95b963db22daa46036d65c4bda413c3f1e839660d4f93d09049dc2882ba7e653)
- https://api.github.com/repos/777genius/os-ai-computer-use (retrieved 2026-10-18T15:37:46Z; SHA-256 95b963db22daa46036d65c4bda413c3f1e839660d4f93d09049dc2882ba7e653)
