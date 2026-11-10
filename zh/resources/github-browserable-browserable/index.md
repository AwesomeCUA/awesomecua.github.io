---
title: "Browserable · 框架 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-browserable-browserable/
updated: 2026-10-19
type: framework
lang: zh-CN
---

# Browserable

自托管浏览器智能体平台，提供 JS SDK 和 REST API：规划器设定高层步骤，执行器读取截图与编号 DOM 片段，在本地或托管浏览器中选择 Playwright 动作。

- 目录页面：https://awesomecua.com/zh/resources/github-browserable-browserable/
- English：https://awesomecua.com/resources/github-browserable-browserable/index.md
- 原始来源：https://github.com/browserable/browserable
- 类型：框架
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、自动化、规划
- 证据核查日期：2026-10-19T06:18:19Z
- ID：github:browserable/browserable

## 范围记录

Inspected at commit a3af19a6 (27 August 2025). The README sets up a Docker Compose stack (UI server, tasks server, MongoDB, Redis and MinIO) in which the user supplies one LLM key (Gemini, OpenAI or Claude) and a Steel or Hyperbrowser key; tasks/services/browser.js also accepts Browserbase or the repository's own browser service, which launches Playwright Chromium. In tasks/agents/browserable.js the act-on-tab action calls simpleActionHelper, whose loop takes a plain page screenshot and the current chunk of DOM elements with XPaths, asks a planner for high-level steps (replanning after five steps), and asks a runner for a Playwright method, arguments and element number; the older DOM-only and vision act helpers are commented out at that call site. The repository also contains deep-research and generative agents. The README's 90.4% WebVoyager figure is publisher-reported. The README names Stagehand among the open-source projects it builds on. No code was run.

- 完整记录 JSON：https://awesomecua.com/resources/github-browserable-browserable/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/browserable/browserable/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/browserable/browserable/HEAD/README.md（获取于 2026-10-19T06:18:19Z；SHA-256：914573cc5d63cfea31b57c763cb0d299c056c731b26a2b2199f2fce2fbde8df4）
- https://raw.githubusercontent.com/browserable/browserable/a3af19a66560d8bc3ff2c4ed4f9570eb6a66649c/tasks/agents/browserable.js（获取于 2026-10-19T06:18:20Z；SHA-256：5288ad8b3bfdf2d3c259fa49bce339000ed353df7ae64fb5e4c41972c58b2764）
- https://raw.githubusercontent.com/browserable/browserable/a3af19a66560d8bc3ff2c4ed4f9570eb6a66649c/tasks/services/browser.js（获取于 2026-10-19T06:18:20Z；SHA-256：e715e291c4c411812edb857da0d5ce43cf9359cdce9defeff9c8bf2fe9ba2ff3）
- https://raw.githubusercontent.com/browserable/browserable/a3af19a66560d8bc3ff2c4ed4f9570eb6a66649c/browser/browser-manager.js（获取于 2026-10-19T06:18:21Z；SHA-256：cf46dd448cc0bb8ae779bf97944a2646711715dff201698196ee0466ca649437）
- https://raw.githubusercontent.com/browserable/browserable/a3af19a66560d8bc3ff2c4ed4f9570eb6a66649c/ui/LICENSE（获取于 2026-10-19T06:18:21Z；SHA-256：4ec10a44cdbffaa7f300c15fcfd8bc1577596f109e595318f6fc5ffad1f98219）
- https://raw.githubusercontent.com/browserable/browserable/HEAD/LICENSE（获取于 2026-10-19T06:19:15Z；SHA-256：3fe6213874fe127c2b42e45d1bfc1d4c2611482077cf48c1f5b180293472109f）
