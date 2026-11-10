---
title: "FluidUse · 框架 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-fluidinference-fluiduse/
updated: 2026-10-20
type: framework
lang: zh-CN
---

# FluidUse

面向 Apple silicon 本地计算机使用的 Swift 包，通过无障碍 API 读取运行中的 Mac 应用或浏览器表单，并使用设备端 Core ML 决策模型填写。

- 目录页面：https://awesomecua.com/zh/resources/github-fluidinference-fluiduse/
- English：https://awesomecua.com/resources/github-fluidinference-fluiduse/index.md
- 原始来源：https://github.com/FluidInference/FluidUse
- 类型：框架
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS、网页
- 主题：动作预测、自动化、效率
- 证据核查日期：2026-10-20T08:08:40Z
- ID：github:fluidinference/fluiduse

## 范围记录

Published by FluidInference; the package targets macOS 14 or later. AccessibilityFormDriver snapshots the focused window of another running app through the macOS Accessibility API into form elements addressed by tokens, writes values through AXValue and presses buttons and checkboxes with AXPress; for Safari, Chrome, Edge, Brave, Arc, Firefox and similar browsers it sends real key events instead, because those apply AXValue writes to the focused field. WebFormDriver does the same for an embedded WKWebView through an injected script. FormSchema renders each field's context and a fixed option list (fill Label: value for each document entity, check, click, skip) for a model to score, and decodes the chosen option into an action. The README's form model is CUA-S1-FORMS, a 706K-parameter form specialist from Cua converted to Core ML; its manager (CuaS1FormsManager) comes from the FluidAudio package dependency. Most of the package consists of on-device Core ML runtimes for general typed-decision, classification, embedding and OCR models (laya, GLiNER 2.5, Kev, Clef, Intern-Decision, SigLIP2 and others) and demos such as Tetris and 2048 players; their scope lies outside GUI operation. Latency and accuracy figures in the README are publisher measurements. Root LICENSE is Apache-2.0; the latest release, v0.3.0, predates the inspected commit.

- 完整记录 JSON：https://awesomecua.com/resources/github-fluidinference-fluiduse/record.json

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/FluidInference/FluidUse/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/FluidInference/FluidUse/HEAD/README.md（获取于 2026-10-20T08:08:40Z；SHA-256：0c3b0771185fe6e1d5678216114c0f486569fec847bd2139532a5b08576d00ad）
- https://api.github.com/repos/FluidInference/FluidUse/git/trees/cfba4d3fa4b996d0b680549416caf7aba6be770c?recursive=1（获取于 2026-10-20T08:08:00Z；SHA-256：6fb00b46f7bf8d56fd2c705149c9bb28ed28fcc8813c35fe66dbc0a1ae808624）
- https://raw.githubusercontent.com/FluidInference/FluidUse/cfba4d3fa4b996d0b680549416caf7aba6be770c/LICENSE（获取于 2026-10-20T08:08:03Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）
- https://raw.githubusercontent.com/FluidInference/FluidUse/cfba4d3fa4b996d0b680549416caf7aba6be770c/Package.swift（获取于 2026-10-20T08:08:04Z；SHA-256：91ce043b9db73c08b74fb52c08b1d04609e6878314133e7b9e187d5572761d8e）
- https://raw.githubusercontent.com/FluidInference/FluidUse/cfba4d3fa4b996d0b680549416caf7aba6be770c/Sources/FluidUse/AccessibilityFormDriver.swift（获取于 2026-10-20T08:08:04Z；SHA-256：d6d1c1dc060787a10c4c0a3b94dfc5db4c2a4abebac01cbf2d2702056072c3e6）
- https://raw.githubusercontent.com/FluidInference/FluidUse/cfba4d3fa4b996d0b680549416caf7aba6be770c/Sources/FluidUse/WebFormDriver.swift（获取于 2026-10-20T08:08:05Z；SHA-256：4b8ca4c8b1d8dd44ba58ce7643baf01889ff4c1169dcab5093785cceaad5031d）
- https://raw.githubusercontent.com/FluidInference/FluidUse/cfba4d3fa4b996d0b680549416caf7aba6be770c/Sources/FluidUse/FormSchema.swift（获取于 2026-10-20T08:08:05Z；SHA-256：198047cfd5ce0e5f409c0ba4018f075cdff091eb13502cd1fafdcade9a53485b）
- https://raw.githubusercontent.com/FluidInference/FluidUse/HEAD/LICENSE（获取于 2026-10-20T08:08:49Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）
