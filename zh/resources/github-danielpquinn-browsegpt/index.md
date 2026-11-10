---
title: "BrowseGPT · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-danielpquinn-browsegpt/
updated: 2026-10-19
type: agent
lang: zh-CN
---

# BrowseGPT

Chrome 扩展配合本地 Node.js 服务器，将可见页面的链接、按钮和输入框列为编号大纲，并向 OpenAI gpt-3.5-turbo 询问下一步 CLICK、ENTER_TEXT 或 NAVIGATE 操作以完成目标。

- 目录页面：https://awesomecua.com/zh/resources/github-danielpquinn-browsegpt/
- English：https://awesomecua.com/resources/github-danielpquinn-browsegpt/index.md
- 原始来源：https://github.com/danielpquinn/browsegpt
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、自动化
- 证据核查日期：2026-10-19T07:16:33Z
- ID：github:danielpquinn/browsegpt

## 范围记录

Inspected at commit c86c148e (23 July 2024), the latest commit on the default branch. The content script assigns IDs to visible, in-viewport elements and sends the first 100 outline lines with the goal, URL and up to five previous steps to the server, whose few-shot prompt asks gpt-3.5-turbo for one JSON command with a reason; the extension then calls click(), enters text or changes the location. Each submission runs one step, and elements already acted on are left out of later outlines. The Manifest V3 extension is labelled version 2.0. The browsegpt.ai site and its llms.txt describe Claude Haiku 4.5 as the default model with OpenAI GPT as an option; the public repository's server calls only the OpenAI API. The Chrome Web Store build remains uninspected. The repository has no license file, so the code license is unknown. No code was run.

- 完整记录 JSON：https://awesomecua.com/resources/github-danielpquinn-browsegpt/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/danielpquinn/browsegpt/HEAD/README.md（获取于 2026-10-19T07:16:33Z；SHA-256：b9fb78e90668bcdf178ed8370837dff0359b2841e659e3b977c8125cfcf50b74）
- https://api.github.com/repos/danielpquinn/browsegpt/git/trees/c86c148ec7862f971fe827e1270684b9c8c41016?recursive=1（获取于 2026-10-19T07:16:32Z；SHA-256：c62774e401dfeeb8345bceb4bce0bbe78bae756ee25617813401828f8052ac29）
- https://raw.githubusercontent.com/danielpquinn/browsegpt/c86c148ec7862f971fe827e1270684b9c8c41016/extension/content.js（获取于 2026-10-19T06:15:41Z；SHA-256：3dbf1c8225ca5bdc2d3ab7c5c7678a564ab105d6bda589285aedfe6658fa9ad7）
- https://raw.githubusercontent.com/danielpquinn/browsegpt/c86c148ec7862f971fe827e1270684b9c8c41016/extension/main-vue.js（获取于 2026-10-19T06:15:41Z；SHA-256：a64ba7f0038e262163f378df4e320371fc1231a80600883102810abf14c24a3e）
- https://raw.githubusercontent.com/danielpquinn/browsegpt/c86c148ec7862f971fe827e1270684b9c8c41016/server/lib.js（获取于 2026-10-19T06:15:41Z；SHA-256：27446dfeb7b4e3f333360b2ec2a9869d258f1c4a2f91a89d054ea4da09dd461c）
- https://raw.githubusercontent.com/danielpquinn/browsegpt/c86c148ec7862f971fe827e1270684b9c8c41016/extension/manifest.json（获取于 2026-10-19T06:15:41Z；SHA-256：ecb5c03ffde657405ed8ab4098430e4a9f33df21b5ded6be56c843d2940f8f80）
- https://browsegpt.ai/llms.txt（获取于 2026-10-19T06:15:41Z；SHA-256：38cff1cc93e9fc68fa63038d9594027848d741111749cbaa47e18f98cb3c0995）
