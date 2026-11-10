---
title: "Opus · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-jeffrey-zang-opus/
updated: 2026-10-20
type: agent
lang: zh-CN
---

# Opus

macOS Electron 应用，其 OpenAI Agents SDK 循环依据元素列表和截图，通过 AppleScript、无障碍元素点击、按键、shell 命令及 URI 操作应用。

- 目录页面：https://awesomecua.com/zh/resources/github-jeffrey-zang-opus/
- English：https://awesomecua.com/resources/github-jeffrey-zang-opus/index.md
- 原始来源：https://github.com/jeffrey-zang/opus
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：自动化、工具集成、界面理解
- 证据核查日期：2026-10-20T08:11:19Z
- ID：github:jeffrey-zang/opus

## 范围记录

initAgents.ts defines an app-selection agent and an action agent, both configured with gpt-4.1-mini through the OpenAI Agents SDK; the name is unrelated to Anthropic's Claude Opus models, and an OpenAI API key is required. Each action step receives the target app's AppleScript dictionary, a list of clickable Accessibility elements (role, title, value, help and description) and, when captured, a screenshot (runAgents.ts). Swift helpers under app/swift read the Accessibility tree, click, send keys and move the app window to a separate virtual display so the agent can work in the background. The repository also contains the tryop.us landing site and a small server.

- 完整记录 JSON：https://awesomecua.com/resources/github-jeffrey-zang-opus/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/jeffrey-zang/opus/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/jeffrey-zang/opus/HEAD/README.md（获取于 2026-10-20T08:11:19Z；SHA-256：e7d20d6325d5f3cc599abe8db897d414ef171d3940ba88a4e0d5e438c705c3fb）
- https://raw.githubusercontent.com/jeffrey-zang/opus/d3f4b7b3e54bab6cbb7bf4fa8b257f47500c6890/README.md（获取于 2026-10-20T08:10:56Z；SHA-256：e7d20d6325d5f3cc599abe8db897d414ef171d3940ba88a4e0d5e438c705c3fb）
- https://raw.githubusercontent.com/jeffrey-zang/opus/d3f4b7b3e54bab6cbb7bf4fa8b257f47500c6890/app/electron/ai/initAgents.ts（获取于 2026-10-20T08:10:57Z；SHA-256：19e7a4c6cc7dfc55e5bb912110c92c033741aa019c1517916021a12dee0fe3ef）
- https://raw.githubusercontent.com/jeffrey-zang/opus/d3f4b7b3e54bab6cbb7bf4fa8b257f47500c6890/app/electron/ai/runAgents.ts（获取于 2026-10-20T08:10:57Z；SHA-256：707883082b60fd82d022dc7f63700f5a1bf578229554c8be571e1c693cda16f6）
- https://raw.githubusercontent.com/jeffrey-zang/opus/d3f4b7b3e54bab6cbb7bf4fa8b257f47500c6890/app/swift/moveToOpusDisplay.swift（获取于 2026-10-20T08:10:57Z；SHA-256：0c491fe60b5cd1b14983866698c1ea9e3049d94e05d2df449ebbb798e5ffcdbb）
- https://raw.githubusercontent.com/jeffrey-zang/opus/d3f4b7b3e54bab6cbb7bf4fa8b257f47500c6890/LICENSE（获取于 2026-10-20T08:10:57Z；SHA-256：8ea5c2587dca9af8c22500b816dbbae73c3bc214d690314261244d167463b4df）
- https://raw.githubusercontent.com/jeffrey-zang/opus/HEAD/LICENSE（获取于 2026-10-20T08:11:21Z；SHA-256：8ea5c2587dca9af8c22500b816dbbae73c3bc214d690314261244d167463b4df）
