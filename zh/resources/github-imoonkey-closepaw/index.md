---
title: "ClosePaw · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-imoonkey-closepaw/
updated: 2026-10-19
type: agent
lang: zh-CN
---

# ClosePaw

本地运行的 Android 智能体应用读取无障碍树，可选用截图，通过无障碍节点操作或手势点击执行任务，也可在后台的 Shizuku 虚拟显示屏上运行。

- 目录页面：https://awesomecua.com/zh/resources/github-imoonkey-closepaw/
- English：https://awesomecua.com/resources/github-imoonkey-closepaw/index.md
- 原始来源：https://github.com/imoonkey/closepaw
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、人机协作、记忆
- 证据核查日期：2026-10-19T07:04:42Z
- ID：github:imoonkey/closepaw

## 范围记录

Kotlin app for Android 12 or later with an on-device ReAct loop, subagent delegation, todo and scratchpad tools, markdown memory files and per-app skills. Perception defaults to the accessibility tree; screenshot-only and hybrid modes are options (perception/PerceptionConfig.kt). Clicks try an accessibility ACTION_CLICK on the resolved node and fall back to a dispatched gesture tap (tool/action/ClickExecutor.kt, platform/NodeActionPerformer.kt, platform/AccessibilityGestureInjector.kt). Optional power tools use Shizuku for a background virtual display, Termux for a Linux shell, and Chrome DevTools Protocol scripting of Chrome. A bundled tier list blocks banking, payment, crypto-wallet, password-manager and authenticator packages (assets/security/app_tiers.json), and other apps need per-app approval. Models are reached through OpenAI-compatible endpoints or a ChatGPT/Codex sign-in. The eval/ harness drives AndroidWorld task setup and scoring and launches the app over ADB.

- 完整记录 JSON：https://awesomecua.com/resources/github-imoonkey-closepaw/record.json

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/imoonkey/closepaw/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/imoonkey/closepaw/HEAD/README.md（获取于 2026-10-19T07:04:42Z；SHA-256：41a533cff3abaee6addc153398a8db33ebe6e6e2b7fec9092243c9730df53e55）
- https://api.github.com/repos/imoonkey/closepaw/git/trees/75dae2653f5a6b25d5df51ee7008b0f830de1536?recursive=1（获取于 2026-10-19T06:39:32Z；SHA-256：900c5617c4f771568d99e7f702ee4a9f9eaf7459f0803ef394aba462025df86e）
- https://raw.githubusercontent.com/imoonkey/closepaw/75dae2653f5a6b25d5df51ee7008b0f830de1536/app/src/main/kotlin/ai/closepaw/perception/PerceptionConfig.kt（获取于 2026-10-18T16:01:41Z；SHA-256：26459b14b5b300f356844e84872ed9a82766c20e564deda6d3efbfc8aad70ca0）
- https://raw.githubusercontent.com/imoonkey/closepaw/75dae2653f5a6b25d5df51ee7008b0f830de1536/app/src/main/kotlin/ai/closepaw/tool/action/ClickExecutor.kt（获取于 2026-10-18T16:01:41Z；SHA-256：d924fa0ddde2861ca8c5e46d1d426e14c67af5f1c0c0183f3054c2849045b67e）
- https://raw.githubusercontent.com/imoonkey/closepaw/75dae2653f5a6b25d5df51ee7008b0f830de1536/app/src/main/kotlin/ai/closepaw/platform/NodeActionPerformer.kt（获取于 2026-10-18T16:01:42Z；SHA-256：95af03f4bdf3f19995a72426e4f4efb1de148b053118984d3c867fe8a57aa924）
- https://raw.githubusercontent.com/imoonkey/closepaw/75dae2653f5a6b25d5df51ee7008b0f830de1536/app/src/main/kotlin/ai/closepaw/platform/AccessibilityGestureInjector.kt（获取于 2026-10-18T16:01:42Z；SHA-256：12bdfa64d0cf3760e81ba1a2a1d760d7e2d413931233b1bb44b223deb9fb959c）
- https://raw.githubusercontent.com/imoonkey/closepaw/75dae2653f5a6b25d5df51ee7008b0f830de1536/app/src/main/assets/security/app_tiers.json（获取于 2026-10-18T16:01:42Z；SHA-256：b6cbb1be45965c2974cf0e62552a19328aab13ade48a7e3423d186d1e311397c）
- https://raw.githubusercontent.com/imoonkey/closepaw/75dae2653f5a6b25d5df51ee7008b0f830de1536/eval/README.md（获取于 2026-10-18T16:01:42Z；SHA-256：cc68103c4aaeb05920fec8535e630af659e65351c0f1adeda5a609ae6be13179）
- https://raw.githubusercontent.com/imoonkey/closepaw/75dae2653f5a6b25d5df51ee7008b0f830de1536/LICENSE（获取于 2026-10-18T16:01:42Z；SHA-256：34caf3ddbf7945ee22c3fde1d5783762110f54cb42edf2cca0b8b8cf2a4dd746）
- https://github.com/imoonkey/closepaw/releases/expanded_assets/v0.1.0（获取于 2026-10-18T16:01:42Z；SHA-256：cc5356ed6ff45de157a7441af39a2439e37bbe55478e4140b97444e2e39ad381）
- https://raw.githubusercontent.com/imoonkey/closepaw/HEAD/LICENSE（获取于 2026-10-19T07:04:46Z；SHA-256：34caf3ddbf7945ee22c3fde1d5783762110f54cb42edf2cca0b8b8cf2a4dd746）
