---
title: "Eido · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-tony3liu-eido/
updated: 2026-10-20
type: agent
lang: zh-CN
---

# Eido

基于 Zed 和 pi agent 的 macOS 编程工作空间，新增实验性浏览器操作能力：内置智能体选取编号页面元素并通过 CDP 操作；计算机使用则通过内置 Cua Driver MCP 服务器实现。

- 目录页面：https://awesomecua.com/zh/resources/github-tony3liu-eido/
- English：https://awesomecua.com/resources/github-tony3liu-eido/index.md
- 原始来源：https://github.com/tony3liu/eido
- 类型：智能体
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、macOS、网页
- 主题：网页导航、工具集成、人机协作
- 证据核查日期：2026-10-20T08:34:39Z
- ID：github:tony3liu/eido

## 范围记录

Coding is the primary purpose: the README frames release v0.0.1 (Apple Silicon, macOS 13 or later, locally signed and not notarized) around a describe, investigate, edit, review and verify loop, and calls browser and desktop automation experimental. server.mjs runs an eido-browser MCP server with browser_* tools. Its default Ultrafast engine, adapted in TypeScript from browser-use/jev-ultrafast, launches Playwright Chromium, injects snapshot.js to list up to 250 visible interactive elements with roles and labels plus visible page text, has a decision model choose one click, fill, select, scroll or wait step at a time, and dispatches mouse and key events over the DevTools protocol (browser.ts); per server.mjs, screenshots serve recording and the inspector, with model input drawn from the page listing. config.mjs points decision requests at the hosted TypeSafe API (model jev-latest) by default and, unless overridden, generates typed text with the user's main model. A Legacy engine uses the jev-browser npm dependency. computer.mjs registers the bundled or a user-installed cua-driver as the eido_computer MCP server, which needs macOS Accessibility and Screen Recording permission; native/cua/upstream.json pins trycua/cua tag cua-driver-rs-v0.34.0, and per NOTICE the native/cua/overlay patches add session-owned background focus, exact-window keyboard guards and window capture validation. NOTICE licenses Eido-original code GPL-3.0-or-later, while Zed components marked Apache-2.0, the Cua Driver and jev-ultrafast-derived code (MIT), pi (MIT) and upstream pi-acp adapter code (Apache-2.0) keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/github-tony3liu-eido/record.json

## 许可证信息

- 代码：GPL-3.0-or-later — https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/NOTICE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：NOTICE explicitly declares GPL-3.0-or-later for Eido-original code. It does not relicense incorporated upstream code: Zed components marked Apache-2.0, the MIT Cua Driver and jev-ultrafast-derived code, MIT pi and the Apache-2.0 pi-acp adapter keep their own terms.
  来源：https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/NOTICE, https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/LICENSE

## 一手证据

- https://raw.githubusercontent.com/tony3liu/eido/HEAD/README.md（获取于 2026-10-20T08:34:39Z；SHA-256：4b55d2ab57f54c04a317198bd5882c12b336d0200f7dce33738aaa513b47c387）
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/README.md（获取于 2026-10-20T08:32:00Z；SHA-256：4b55d2ab57f54c04a317198bd5882c12b336d0200f7dce33738aaa513b47c387）
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/packages/runtime/src/browser/server.mjs（获取于 2026-10-20T08:32:14Z；SHA-256：81598be20f7a809750a8d0f362709da48bd569fa11e4499da7b54ba477592c77）
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/packages/runtime/src/browser/ultrafast/browser.ts（获取于 2026-10-20T08:32:15Z；SHA-256：91422cdeebcfe6ff50ed467192302cee34aab009e62219f89b5732b72c8fca1f）
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/packages/runtime/src/browser/ultrafast/snapshot.js（获取于 2026-10-20T08:32:24Z；SHA-256：e50473501c8fb8e70f3b21866d987393e3f2315c639d638bd477d170e81ed78d）
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/packages/runtime/src/browser/config.mjs（获取于 2026-10-20T08:32:28Z；SHA-256：fc86171dade649839cde8495a1b1d1e4a3347a1f4ec559ee3123c8fd927581f2）
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/packages/runtime/src/computer.mjs（获取于 2026-10-20T08:32:43Z；SHA-256：cbf5b5f57ccebc9a7df9112186b3e82aac73af10aa0d8143d5b75f4b9c72a2f9）
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/native/cua/upstream.json（获取于 2026-10-20T08:32:48Z；SHA-256：981b09f24e3d4410c04c93843589754a8ed03df55b20945338c5f746dbfe3d37）
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/NOTICE（获取于 2026-10-20T08:32:56Z；SHA-256：b7cd7358d6a9cbcc2901e2b1f0beb0698dbd2b99735dcc659a338c079e9b88af）
- https://raw.githubusercontent.com/tony3liu/eido/b80cad273ae81d8d8f37f2073a41a0d5532ac702/LICENSE（获取于 2026-10-20T08:33:01Z；SHA-256：0aa0322ea494da441088e4d9144c6720bf99d9e2e1eefcd29d1f58b19b5c4246）
