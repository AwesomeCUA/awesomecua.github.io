---
title: "native-devtools-mcp · 工具 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-vectora-foundry-native-devtools-mcp/
updated: 2026-10-20
type: tool
lang: zh-CN
---

# native-devtools-mcp

本地 Rust MCP 服务器，可操作 macOS 和 Windows 应用、通过 CDP 操作 Chrome 或 Electron 页面，并通过 ADB 操作 Android 设备，支持截图、OCR、无障碍查询、输入和模板匹配。

- 目录页面：https://awesomecua.com/zh/resources/github-vectora-foundry-native-devtools-mcp/
- English：https://awesomecua.com/resources/github-vectora-foundry-native-devtools-mcp/index.md
- 原始来源：https://github.com/vectora-foundry/native-devtools-mcp
- 类型：工具
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS、Windows、Android、网页
- 主题：工具集成、自动化、界面理解、录制
- 证据核查日期：2026-10-20T08:00:27Z
- ID：github:vectora-foundry/native-devtools-mcp

## 范围记录

Distributed through npm (npx native-devtools-mcp; version 0.10.1 in npm/package.json and Cargo.toml at the inspected commit) and as a signed macOS app for Claude Desktop. On macOS it can walk the Accessibility tree and dispatch AXPress, value and selection changes without moving the cursor (src/macos/ax.rs), besides CGEvent input and Vision OCR; Windows uses SendInput, UI Automation and Windows Media OCR. Chrome and Electron pages are driven through the Chrome DevTools Protocol with chromiumoxide (src/cdp/mod.rs), and Android through adb shell input and uiautomator (src/android/input.rs). Optional start_recording captures window frames and hover tracking reports dwell-filtered pointer positions with the element under them (src/tools/hover_tracker.rs). The README limits support to platforms other than Linux and iOS. The server contains no model or agent loop; an MCP client supplies the agent.

- 完整记录 JSON：https://awesomecua.com/resources/github-vectora-foundry-native-devtools-mcp/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/HEAD/README.md（获取于 2026-10-20T08:00:27Z；SHA-256：98a05a45218d4643999df366eaf07fa1128a31ecf0611bebfebc872fb10f1010）
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/README.md（获取于 2026-10-20T07:59:57Z；SHA-256：98a05a45218d4643999df366eaf07fa1128a31ecf0611bebfebc872fb10f1010）
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/npm/package.json（获取于 2026-10-20T07:59:58Z；SHA-256：a8650625acf7a0665e98aca042884f9f48cd08da2963b7aef963fd119bb1138e）
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/Cargo.toml（获取于 2026-10-20T07:59:58Z；SHA-256：760450540ed7ce983d0bee6716a010c5758a09c592fc8c8d78529769df08cb40）
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/src/macos/ax.rs（获取于 2026-10-20T07:59:58Z；SHA-256：244a9b287ef5bce86bd0578b54ce065f72a837025f083677a7df76e6ddbd0318）
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/src/cdp/mod.rs（获取于 2026-10-20T08:00:00Z；SHA-256：ca0ec9d8b32336cca7ed726a883e70bbbca368ce2547efce247af2e2c5a9c998）
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/src/android/input.rs（获取于 2026-10-20T07:59:59Z；SHA-256：1e0814adeb0adeb45e76d0d6c613b04e63dc3e4a186b0fd4ff0e76996b1ced36）
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/src/tools/hover_tracker.rs（获取于 2026-10-20T08:00:00Z；SHA-256：2c1ab7c72d82a40829aa07870d446175fd52eebb0f95376cc3c50ebbc9bfe33e）
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/cf346e05df02eaf9cd1d2228233fe52b4cfa9213/LICENSE（获取于 2026-10-20T08:00:00Z；SHA-256：1813232deb7c18ae02acefcfa7bf01d4753798c2707d61a35ba954ee471e2513）
- https://raw.githubusercontent.com/vectora-foundry/native-devtools-mcp/HEAD/LICENSE（获取于 2026-10-20T08:00:30Z；SHA-256：1813232deb7c18ae02acefcfa7bf01d4753798c2707d61a35ba954ee471e2513）
