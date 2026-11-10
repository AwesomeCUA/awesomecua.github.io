---
title: "Bops · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-orgoai-bops/
updated: 2026-10-20
type: agent
lang: zh-CN
---

# Bops

面向业务运营机器人团队的 Mac 应用，在 Orgo 云端 Linux 桌面上通过 OpenAI 计算机工具工作，执行 xdotool 操作，并结合 Playwright 页面脚本、应用连接器、批准机制和实时接管。

- 目录页面：https://awesomecua.com/zh/resources/github-orgoai-bops/
- English：https://awesomecua.com/resources/github-orgoai-bops/index.md
- 原始来源：https://github.com/OrgoAI/bops
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux、macOS、网页
- 主题：自动化、工作流、人机协作、工具集成、网页导航
- 证据核查日期：2026-10-20T08:17:25Z
- ID：github:orgoai/bops

## 范围记录

Electron app (desktop/) that starts a local Next.js server (app/, lib/server/) on port 3210; version 0.0.28 in package.json, matching release tag v0.0.28 at 92ec73d, and the inspected commit 62c7f98 is later. Bots' tasks run on Orgo cloud computers launched from the bops-base template that orgo/bops-base.mjs builds from vm/ (Codex, the screen MCP and per-screen Chrome helpers). By default lib/server/computer-task.ts runs each thread on OpenAI's Responses API computer tool: Orgo's API returns a screenshot of the bot's screen, and every click, double-click, drag, scroll, typing or key press the model asks for is executed as xdotool commands through Orgo's bash endpoint, with the result screen sent back; the same loop offers a page_script tool that runs a short Playwright script on the screen's Chrome over CDP, a Linux shell, web search, a password vault and app, data and CRM tools. With BOPS_COMPUTER_TOOL=0 threads use OpenAI's Agents API with Codex and vm/screen_mcp.py, which exposes one screen's screenshot and input actions over MCP. Tasks on the user's own Mac run in a bot-owned Chrome; with Full access they also get a shell and the user's apps through Cua Driver behind vm/mac-ui-mcp.mjs, which hides sensitive apps, sends input only in the background and blocks quitting, copying and pasting (lib/server/local.ts). Per the README, reading runs at once while sending, creating and paying wait for the user's approval, and any screen can be watched live and taken over. Self-hosting requires an Orgo account and two OpenAI API keys, with Honcho, Composio, treg, AgentMail, AgentPhone and TypeSafe recommended or optional; signing in with Orgo instead routes provider calls through Orgo's hosted Bops Cloud (cloud/). Licensed FSL-1.1-ALv2 (fair source; competing products and hosted services are excluded, and each version becomes Apache-2.0 two years after release); components/message-ui/ is adapted from MIT-licensed code.

- 完整记录 JSON：https://awesomecua.com/resources/github-orgoai-bops/record.json

## 许可证信息

- 代码：FSL-1.1-ALv2 — https://raw.githubusercontent.com/OrgoAI/bops/62c7f98d8873707cf792ee518e06868d4f622cde/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The LICENSE file is the Functional Source License 1.1, ALv2 Future License, which enrich does not recognize as a standard open-source text. It permits uses other than competing products or services and grants Apache-2.0 for each version two years after it is made available.
  来源：https://raw.githubusercontent.com/OrgoAI/bops/62c7f98d8873707cf792ee518e06868d4f622cde/LICENSE

## 一手证据

- https://raw.githubusercontent.com/OrgoAI/bops/HEAD/README.md（获取于 2026-10-20T08:17:25Z；SHA-256：0d17b7e8fbee9ac443909fe5686805e6fd6816b2c3b2d7d43688655d2d5ccba7）
- https://raw.githubusercontent.com/OrgoAI/bops/62c7f98d8873707cf792ee518e06868d4f622cde/lib/server/computer-task.ts（获取于 2026-10-20T08:16:38Z；SHA-256：283f1262fb8d9b04953fd6318a67785ba4f9f24b8a2d460b3f29139ffe18222d）
- https://raw.githubusercontent.com/OrgoAI/bops/62c7f98d8873707cf792ee518e06868d4f622cde/vm/screen_mcp.py（获取于 2026-10-20T08:16:38Z；SHA-256：57e636b7792c540b96010b4378a88d5280f7fc09ce9cf92f76560bbbdf4536c1）
- https://raw.githubusercontent.com/OrgoAI/bops/62c7f98d8873707cf792ee518e06868d4f622cde/vm/mac-ui-mcp.mjs（获取于 2026-10-20T08:16:39Z；SHA-256：f2233f4443f8abc20a12511647d97f92d7f875fa55cde6ca996efb05e2d2f09d）
- https://raw.githubusercontent.com/OrgoAI/bops/62c7f98d8873707cf792ee518e06868d4f622cde/lib/server/local.ts（获取于 2026-10-20T08:16:39Z；SHA-256：b5de93eda6a88a84f9c6356da8b4976a20b123eea1a8fc84cc3d9df05c429343）
- https://raw.githubusercontent.com/OrgoAI/bops/62c7f98d8873707cf792ee518e06868d4f622cde/orgo/bops-base.mjs（获取于 2026-10-20T08:16:39Z；SHA-256：74e93b0e63db604bb2cf06bf65c4b7a51b78f0805dc27192847283f10461e59c）
- https://raw.githubusercontent.com/OrgoAI/bops/62c7f98d8873707cf792ee518e06868d4f622cde/package.json（获取于 2026-10-20T08:16:40Z；SHA-256：4a7ea0a7b7fb17c72ec7d5fe398f854233c4188594352942ae0dfa2187f57a2c）
- https://raw.githubusercontent.com/OrgoAI/bops/62c7f98d8873707cf792ee518e06868d4f622cde/LICENSE（获取于 2026-10-20T08:16:40Z；SHA-256：80fc5e9f40bdfa8d453fefb71f5304e812687e0fcfb1d3c126635b2285090816）
