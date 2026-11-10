---
title: "Ace | AwesomeCUA"
url: https://awesomecua.com/resources/url-7a35f44787f99834f13e/
updated: 2026-10-19
type: product
lang: en
---

# Ace

General Agents' desktop autopilot, trained on recorded expert behavior, that predicts clicks, keystrokes and other actions from screenshots; its API client ships a macOS controller that executes them.

- Catalog URL: https://awesomecua.com/resources/url-7a35f44787f99834f13e/
- Original source: https://generalagents.com/ace
- Kind: product
- Review: curated
- Scope: core
- Environments: desktop, macos
- Topics: automation, grounding, imitation-learning
- Evidence checked: 2026-10-19T06:24:22Z
- ID: url:7a35f44787f99834f13e

## Limitations

The Ace page describes a computer autopilot that uses the mouse and keyboard on the user's desktop, says it was trained by software specialists and domain experts on over a million tasks, and charts publisher figures for click-prediction accuracy for ace-control-medium and ace-control-small against Operator, Claude 3.7 Sonnet, UI-TARS-72B-SFT and other models, plus action latency. The About page says Ace learns from experts' screen recordings with mouse and keyboard logs, and that General Agents is developing video-language-action models. The official Python client (generalagents-python 0.1.1 at commit d36f6a8) posts a WebP screenshot, the instruction and recent actions to /v1/control/predict on api.generalagents.com; its macOS Computer class captures the screen with screencapture and performs clicks, drags, scrolls, key presses and typing through pyautogui. Apache-2.0 covers the client's code. At review time api.generalagents.com and docs.generalagents.com had DNS resolution failures; the reviewed pages leave pricing, download and sign-up paths unspecified, so current availability remains unknown.

- Record JSON: https://awesomecua.com/resources/url-7a35f44787f99834f13e/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://generalagents.com/ace (retrieved 2026-10-19T06:24:22Z; SHA-256 adecc8e6c94df3363de75630191eaed47ee82dff7ba675540b1a710c50a38de8)
- https://generalagents.com/about (retrieved 2026-10-19T06:24:05Z; SHA-256 d1025a19c3e0ca083dea325fb1025046e004d5588167b557039c594ee9bdd661)
- https://raw.githubusercontent.com/generalagents/generalagents-python/d36f6a858685fb1d7842b6f05c8af501130f8efc/README.md (retrieved 2026-10-19T06:24:05Z; SHA-256 4e48a9a8621540dfac3abc14bc889e633e8c1f61ba1907153bd91f7f19d97dbc)
- https://raw.githubusercontent.com/generalagents/generalagents-python/d36f6a858685fb1d7842b6f05c8af501130f8efc/src/generalagents/agent.py (retrieved 2026-10-19T06:24:05Z; SHA-256 7c1b9d4ba8723d83bcdd7f3193cc145f32f8244ad2e43d14ca32bb60b79a667d)
- https://raw.githubusercontent.com/generalagents/generalagents-python/d36f6a858685fb1d7842b6f05c8af501130f8efc/src/generalagents/macos/computer.py (retrieved 2026-10-19T06:24:05Z; SHA-256 154bf2204a1a519915fd0fb36053a3dfc9d58166d16e5e441d2e720e1954499d)
