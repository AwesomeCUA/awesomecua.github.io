# Buddy

Android 应用通过无障碍服务提供本地 MCP 手机工具服务器，使设备端 proot Linux 中运行的 Claude Code、Codex 或 OpenCode 能读取屏幕、点击、输入和打开应用。

- 目录页面：https://awesomecua.com/zh/resources/github-ghorbelhamdi-buddy-android/
- English：https://awesomecua.com/resources/github-ghorbelhamdi-buddy-android/index.md
- 原始来源：https://github.com/ghorbelhamdi/buddy-android
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、人机协作、安全与防护、工具集成
- 证据核查日期：2026-10-20T08:13:05Z
- ID：github:ghorbelhamdi/buddy-android

## 范围记录

Requires a 64-bit Android 11+ phone; the README says it was tested on one OnePlus 12 and uses no adb, PC or root. Tools.java registers the phone tools; read_screen walks the accessibility node tree of the visible windows into a numbered list, and tap acts on those nodes or their clickable ancestors, with a separate screenshot tool. The agents (Claude Code, Codex or OpenCode) are installed into an Alpine Linux that Buddy runs under proot and use the user's own plan or OpenCode's free models; no model is bundled. Actions that send, post, buy, delete or change settings go through confirm cards, and per-app Trust, Hard or Smart rules are enforced by the app; the README names prompt injection from on-screen text as the main risk. benchmark/ reports a small timing comparison of seven model and agent pairs on five phone tasks, two runs each, checked by hand on one phone.

- 完整记录 JSON：https://awesomecua.com/resources/github-ghorbelhamdi-buddy-android/record.json

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/ghorbelhamdi/buddy-android/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/ghorbelhamdi/buddy-android/HEAD/README.md（获取于 2026-10-20T08:13:05Z；SHA-256：ac9b961b7cdbdc0760407e7ed53f444495d619e85e4f9057696a0258de19a124）
- https://raw.githubusercontent.com/ghorbelhamdi/buddy-android/522cb600ba35c092fb10a4054881087e4168e07c/README.md（获取于 2026-10-20T08:12:42Z；SHA-256：ac9b961b7cdbdc0760407e7ed53f444495d619e85e4f9057696a0258de19a124）
- https://raw.githubusercontent.com/ghorbelhamdi/buddy-android/522cb600ba35c092fb10a4054881087e4168e07c/app/src/main/java/app/buddy/assistant/Tools.java（获取于 2026-10-20T08:12:43Z；SHA-256：0e27239e987811fe386bd23f96f3dce6b3ef99ba20f5b1d99d356104c1e9e00d）
- https://raw.githubusercontent.com/ghorbelhamdi/buddy-android/522cb600ba35c092fb10a4054881087e4168e07c/benchmark/README.md（获取于 2026-10-20T08:12:44Z；SHA-256：51030ac156f1a36d4756266240b404d26918cda290ba3a05dd345ad6544191a5）
- https://raw.githubusercontent.com/ghorbelhamdi/buddy-android/522cb600ba35c092fb10a4054881087e4168e07c/LICENSE（获取于 2026-10-20T08:12:44Z；SHA-256：c95bae1d1ce0235ecccd3560b772ec1efb97f348a79f0fbe0a634f0c2ccefe2c）
- https://raw.githubusercontent.com/ghorbelhamdi/buddy-android/HEAD/LICENSE（获取于 2026-10-20T08:13:08Z；SHA-256：c95bae1d1ce0235ecccd3560b772ec1efb97f348a79f0fbe0a634f0c2ccefe2c）
