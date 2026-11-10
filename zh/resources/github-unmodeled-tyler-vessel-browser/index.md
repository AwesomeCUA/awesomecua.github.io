---
title: "Vessel Browser · 基础设施 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-unmodeled-tyler-vessel-browser/
updated: 2026-10-18
type: infrastructure
lang: zh-CN
---

# Vessel Browser

基于 Electron/Chromium 的浏览器，为智能体提供可见运行环境；本地 MCP 服务器和内置助手将页面读取为带索引的元素，并执行点击、输入和导航，支持限定范围的审批、检查点与撤销。

- 目录页面：https://awesomecua.com/zh/resources/github-unmodeled-tyler-vessel-browser/
- English：https://awesomecua.com/resources/github-unmodeled-tyler-vessel-browser/index.md
- 原始来源：https://github.com/unmodeled-tyler/vessel-browser
- 类型：基础设施
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、人机协作、工具集成
- 证据核查日期：2026-10-18T15:50:50Z
- ID：github:unmodeled-tyler/vessel-browser

## 范围记录

Published under the Quanta Intellect name (repository homepage). Built on Electron 40 with SolidJS; Linux AppImage, Snap and npm installs are offered, and the README calls Linux the most mature target, with macOS packaging from source. The MCP server (default port 3100, bearer token in ~/.config/vessel/mcp-auth.json, vessel-browser-mcp --stdio proxy) is meant for harnesses such as Hermes Agent, OpenClaw or Codex; its interaction tools click, type and select by the element index from the page-content listing, with CSS selector or visible-text fallbacks. Page extraction numbers interactive elements and infers a page schema (page type, form fields, action buttons). The built-in sidebar assistant uses the same tools with Anthropic, OpenAI, Ollama, llama.cpp or other OpenAI-compatible providers. Supervisor controls cover approvals per action, run or domain, pausing, checkpoints, named sessions and undo of the last mutating action. Skills, screenshot analysis, the credential vault, Obsidian memory and parts of the Research Desk require a paid Premium subscription. Root LICENSE is MIT.

- 完整记录 JSON：https://awesomecua.com/resources/github-unmodeled-tyler-vessel-browser/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/unmodeled-tyler/vessel-browser/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/unmodeled-tyler/vessel-browser/HEAD/README.md（获取于 2026-10-18T15:50:50Z；SHA-256：9cd764a28b255f857958078722f4f290347770b80e4b039d513619124278e038）
- https://api.github.com/repos/unmodeled-tyler/vessel-browser/git/commits/5cb5e53f3823556428e6ad7bd1d73a9a5b6778d5（获取于 2026-10-18T15:50:24Z；SHA-256：7a25b0b39f8c13d7ebc59e5aed2c6922b3008761fd212eb12bee82b88bef2914）
- https://raw.githubusercontent.com/unmodeled-tyler/vessel-browser/5cb5e53f3823556428e6ad7bd1d73a9a5b6778d5/docs/mcp.md（获取于 2026-10-18T15:50:25Z；SHA-256：b1fd18c292b15025c157531a89505165fdae4a33b27163cd5aeb32c7a9a95a75）
- https://raw.githubusercontent.com/unmodeled-tyler/vessel-browser/5cb5e53f3823556428e6ad7bd1d73a9a5b6778d5/src/main/mcp/tools/interaction.ts（获取于 2026-10-18T15:50:25Z；SHA-256：b1e3a26e215e6cc741da7b194a7afbe47ab35cdab176251b5ab6ea8e8d1c3f10）
- https://raw.githubusercontent.com/unmodeled-tyler/vessel-browser/5cb5e53f3823556428e6ad7bd1d73a9a5b6778d5/src/main/content/extractor.ts（获取于 2026-10-18T15:50:25Z；SHA-256：d9405934564ed6dab17c3d567b21650c0648649a9a01d4d1788d362f6dc9488c）
- https://raw.githubusercontent.com/unmodeled-tyler/vessel-browser/HEAD/LICENSE（获取于 2026-10-18T15:50:51Z；SHA-256：1126322e2cc8d165adc4c792eeb195717de2bcc7b39be1ce77959d78e87ef685）
