---
title: "System1-Agents | AwesomeCUA"
url: https://awesomecua.com/resources/github-thinkflowlab-system1-agents/
updated: 2026-10-18
type: framework
lang: en
---

# System1-Agents

Framework that puts System 1 decision models such as Jev, Laya or Cua-S1 in openJiuwen agents to pick one typed option per step; ships browser, desktop-app, game, ALFWorld and ticket-routing agents.

- Catalog URL: https://awesomecua.com/resources/github-thinkflowlab-system1-agents/
- Original source: https://github.com/ThinkFlowLab/system1-agents
- Kind: framework
- Review: curated
- Scope: adjacent
- Environments: web, desktop, windows, macos
- Topics: efficiency, action-prediction, web-navigation
- Evidence checked: 2026-10-18T15:37:54Z
- ID: github:thinkflowlab/system1-agents

## Limitations

Adjacent because browser and desktop control are two of several shipped domains; the package (s1a) is equally aimed at games, ALFWorld, ticket routing and an injection-guard rail. On a decision turn the System 1 model answers typed choice questions while a chat model keeps planning, typed values and the final answer. The browser front runs a stock openJiuwen browser subagent (pinned ThinkFlowLab fork of agent-core) over @playwright/mcp; its in-page probe numbers the visible controls of the top document's light DOM, and the decision model chooses an element plus an operation head (CLICK, TYPE_TEXT, PRESS_ENTER, SELECT, scrolling). OmniJev instead receives a page screenshot. The desktop agent drives a Windows or macOS app window through the external Cua Driver over MCP, clicking accessibility elements bound to a window snapshot. Decision models are reached through TypeSafe, OpenRouter or served endpoints; Cua-S1 Nano runs in process from a pinned trycua/cua subdirectory. Speed and cost tables in the README are the publisher's single-episode comparisons. The browser files carry Huawei copyright notices with ThinkFlowLab modifications under Apache-2.0.

- Record JSON: https://awesomecua.com/resources/github-thinkflowlab-system1-agents/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/HEAD/README.md (retrieved 2026-10-18T15:37:54Z; SHA-256 a5836edea1115fdb9d280e0958f528f99db9f454e0270c408a15579922d3bbb7)
- https://api.github.com/repos/ThinkFlowLab/system1-agents/git/commits/0fe20f5044d455126c81f668ac9d28d706e6d3c0 (retrieved 2026-10-18T15:37:20Z; SHA-256 5e0ee2406487549dc9bccfac9d667afd9f366b124aa4ffffd6233f5b20b6b1a1)
- https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/0fe20f5044d455126c81f668ac9d28d706e6d3c0/s1a/browser/action_space.py (retrieved 2026-10-18T15:37:21Z; SHA-256 694eaff77c20180021cc6bb3d621792c57ebfb7515acf6373916b62a5e0b06d1)
- https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/0fe20f5044d455126c81f668ac9d28d706e6d3c0/s1a/browser/probe_js.py (retrieved 2026-10-18T15:37:22Z; SHA-256 dc1dc042d2b38dadfb982ddd5d0737ed300d8d6ab6fbd4653f0134bb5b59585b)
- https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/0fe20f5044d455126c81f668ac9d28d706e6d3c0/s1a/agents/desktop.py (retrieved 2026-10-18T15:37:23Z; SHA-256 a9a53f1fdaf89ed105531bea0775051c7b5dc3ce1acb6075379742c7b9eaac92)
- https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/0fe20f5044d455126c81f668ac9d28d706e6d3c0/s1a/desktop/driver.py (retrieved 2026-10-18T15:37:23Z; SHA-256 74168a625f08243655f17632046a6aedfee7b2f1efb13694a390307cc6e04c62)
- https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/0fe20f5044d455126c81f668ac9d28d706e6d3c0/pyproject.toml (retrieved 2026-10-18T15:37:23Z; SHA-256 00d4864efa51b7e312ac279d246abafc45f93a5b9e887affff23f48ad72c569b)
- https://raw.githubusercontent.com/ThinkFlowLab/system1-agents/HEAD/LICENSE (retrieved 2026-10-18T15:37:56Z; SHA-256 58d1e17ffe5109a7ae296caafcadfdbe6a7d176f0bc4ab01e12a689b0499d8bd)
