---
title: "AI SDK Computer Use · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-vercel-labs-ai-sdk-computer-use/
updated: 2026-10-20
type: agent
lang: zh-CN
---

# AI SDK Computer Use

Vercel Labs 的 Next.js 聊天应用，让 Claude 的计算机和 bash 工具在 Vercel Sandbox 中操作 Linux 桌面，通过 xdotool 点击和输入，并经 noVNC 将屏幕实时传至页面。

- 目录页面：https://awesomecua.com/zh/resources/github-vercel-labs-ai-sdk-computer-use/
- English：https://awesomecua.com/resources/github-vercel-labs-ai-sdk-computer-use/index.md
- 原始来源：https://github.com/vercel-labs/ai-sdk-computer-use
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：沙箱、工具集成
- 证据核查日期：2026-10-20T04:02:46Z
- ID：github:vercel-labs/ai-sdk-computer-use

## 范围记录

Published by the vercel-labs GitHub organization. At commit ed103da the chat route calls claude-sonnet-4-5-20250929 through the AI SDK with Anthropic's computer_20250124 and bash_20250124 tools. lib/sandbox/tool.ts executes clicks, drags, typing, key presses and scrolling with xdotool on display :99 at 1024x768 and captures plain full-screen screenshots with ImageMagick import. lib/sandbox/create-snapshot.ts installs Xvnc, openbox, Google Chrome, noVNC and websockify and builds xdotool from source. The Vercel template page vercel.com/templates/next.js/ai-sdk-computer-use republishes the README. No code was run.

- 完整记录 JSON：https://awesomecua.com/resources/github-vercel-labs-ai-sdk-computer-use/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The non-truncated tree at commit ed103da has no license file and package.json declares no license field. The README calls the app open-source but names no license terms, so the code license stays unknown.
  来源：https://api.github.com/repos/vercel-labs/ai-sdk-computer-use/git/trees/ed103da5ebe75112850fbba39872206dd3c439de?recursive=1, https://raw.githubusercontent.com/vercel-labs/ai-sdk-computer-use/ed103da5ebe75112850fbba39872206dd3c439de/package.json

## 一手证据

- https://raw.githubusercontent.com/vercel-labs/ai-sdk-computer-use/HEAD/README.md（获取于 2026-10-20T04:02:46Z；SHA-256：bf14dc93389403c0102558bb0d30bc0fa9fb04d70af51fddb45dcd486176cd27）
- https://api.github.com/repos/vercel-labs/ai-sdk-computer-use/git/trees/ed103da5ebe75112850fbba39872206dd3c439de?recursive=1（获取于 2026-10-20T04:02:48Z；SHA-256：d820d0368722f2d78fc8aded5d5b6d995eefb7cad22d2e4bfbcfa7dac837ec09）
- https://raw.githubusercontent.com/vercel-labs/ai-sdk-computer-use/ed103da5ebe75112850fbba39872206dd3c439de/lib/sandbox/tool.ts（获取于 2026-10-20T04:02:46Z；SHA-256：d6f787b28ef509b505c1f28fc21896afc6e34a97c654019b05737f48422d8ac6）
- https://raw.githubusercontent.com/vercel-labs/ai-sdk-computer-use/ed103da5ebe75112850fbba39872206dd3c439de/app/api/chat/route.ts（获取于 2026-10-20T04:02:47Z；SHA-256：f3e618a4c7e18148e5c75338bbea119685dd22cae329fa3bf96f5c3c36d5d5fd）
- https://raw.githubusercontent.com/vercel-labs/ai-sdk-computer-use/ed103da5ebe75112850fbba39872206dd3c439de/lib/sandbox/create-snapshot.ts（获取于 2026-10-20T04:02:47Z；SHA-256：e2cf41d19674d92889128821fd47ff8c45b4cbc50da2ca34c72d53de145cad9e）
- https://raw.githubusercontent.com/vercel-labs/ai-sdk-computer-use/ed103da5ebe75112850fbba39872206dd3c439de/package.json（获取于 2026-10-20T04:02:48Z；SHA-256：929b7ea91ff77b7c9a14e15b3d6561c85b6c3e19c5c799215485e3df58d80b31）
