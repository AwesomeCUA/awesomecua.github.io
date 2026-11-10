---
title: "qz-browser-agent · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-alibaba-qz-browser-agent/
updated: 2026-10-18
type: agent
lang: zh-CN
---

# qz-browser-agent

Chrome 扩展智能体读取页面 DOM 和无障碍树，跨标签页操作带索引的元素或截图坐标，并通过内置 CLI 和 MCP 桥接接收委派任务。

- 目录页面：https://awesomecua.com/zh/resources/github-alibaba-qz-browser-agent/
- English：https://awesomecua.com/resources/github-alibaba-qz-browser-agent/index.md
- 原始来源：https://github.com/alibaba/qz-browser-agent
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、自动化、工具集成
- 证据核查日期：2026-10-18T16:02:16Z
- ID：github:alibaba/qz-browser-agent

## 范围记录

Published under the alibaba GitHub organization as a Manifest V3 Chrome extension (Chrome Web Store, and a v0.1.2 extension ZIP as the latest GitHub release at review time). Page tools read the DOM (read_dom, find_elements) and act on indexed element targets (act_on_element); get_ax_tree takes a compact accessibility-tree snapshot through the Chrome debugger; the screenshot tool captures the tab through Chrome DevTools Protocol with a captureVisibleTab fallback, and act_on_screen clicks, drags, scrolls or types at screenshot coordinates. services/mcp-bridge is the npm package qz-browser-agent, a local CLI and MCP service that passes tasks to the paired extension. Models come from providers the user configures; docs/benchmarks.md measures side-panel rendering, a separate measure from task success.

- 完整记录 JSON：https://awesomecua.com/resources/github-alibaba-qz-browser-agent/record.json

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/alibaba/qz-browser-agent/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/alibaba/qz-browser-agent/HEAD/README.md（获取于 2026-10-18T16:02:16Z；SHA-256：241b2fb92489b1a51f47c6fe981193f41875c90cc41bd7ff952c965c13d80f58）
- https://raw.githubusercontent.com/alibaba/qz-browser-agent/d95c96b6370cc7936d2d8fdd82fbf58f7a11c466/src/capabilities/page/tools.ts（获取于 2026-10-18T16:01:37Z；SHA-256：0bd08320ed7ca7c052c02d6b43c5de869e4dacee9a2edf5d49d1892118613de7）
- https://raw.githubusercontent.com/alibaba/qz-browser-agent/d95c96b6370cc7936d2d8fdd82fbf58f7a11c466/src/capabilities/accessibility/tools.ts（获取于 2026-10-18T16:01:37Z；SHA-256：0468956371539aeb37bc6a2410df68ef1326d1d8d09b6da410fff8e3dcba36fb）
- https://raw.githubusercontent.com/alibaba/qz-browser-agent/d95c96b6370cc7936d2d8fdd82fbf58f7a11c466/src/capabilities/media/tools.ts（获取于 2026-10-18T16:01:38Z；SHA-256：0a6ddeabc83ee849e33ca7adf55587f9ad1e697e345fe890919f4ebe6bc98fc2）
- https://raw.githubusercontent.com/alibaba/qz-browser-agent/d95c96b6370cc7936d2d8fdd82fbf58f7a11c466/services/mcp-bridge/README.md（获取于 2026-10-18T16:01:38Z；SHA-256：f86e8c793187c2b8ac1122846f9277cba984c0897455c2ff3c05ffa478754032）
- https://raw.githubusercontent.com/alibaba/qz-browser-agent/d95c96b6370cc7936d2d8fdd82fbf58f7a11c466/LICENSE（获取于 2026-10-18T16:01:38Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）
- https://raw.githubusercontent.com/alibaba/qz-browser-agent/HEAD/LICENSE（获取于 2026-10-18T16:02:27Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）
