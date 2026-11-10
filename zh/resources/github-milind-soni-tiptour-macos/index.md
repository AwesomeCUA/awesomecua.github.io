---
title: "TipTour · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-milind-soni-tiptour-macos/
updated: 2026-10-19
type: agent
lang: zh-CN
---

# TipTour

macOS 菜单栏智能体结合本地 Core ML 控件检测器与辅助功能树定位点击，由 TypeSafe 的 JEV 文本循环或 Gemini 实时语音驱动，并提供供其他智能体使用的本地主机接口。

- 目录页面：https://awesomecua.com/zh/resources/github-milind-soni-tiptour-macos/
- English：https://awesomecua.com/resources/github-milind-soni-tiptour-macos/index.md
- 原始来源：https://github.com/milind-soni/tiptour-macos
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：GUI 定位、界面理解、人机协作
- 证据核查日期：2026-10-19T06:14:20Z
- ID：github:milind-soni/tiptour-macos

## 范围记录

JEV mode sends the typed task, locally detected labels and positions, and action history to TypeSafe's hosted jev-latest model (api.typesafe.ai); it performs only clicks and stops after 12 actions. Gemini mode receives microphone audio and, when enabled, screenshots. Video tours are built by the Elorian service and only point at controls. The localhost harness on 127.0.0.1:19474 exposes observe, ground-target and act endpoints. Requires macOS 14.2+ and an Xcode build; the repository has no releases. The MIT LICENSE also credits Farza's Clicky, the upstream fork source; bundled Neko sprites carry a BSD-2-Clause file.

- 完整记录 JSON：https://awesomecua.com/resources/github-milind-soni-tiptour-macos/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/milind-soni/tiptour-macos/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/milind-soni/tiptour-macos/HEAD/README.md（获取于 2026-10-19T06:14:20Z；SHA-256：6e2270a3363dc72464ba5470036a4ae281e246b5d2cac1d30b0fe8c184512d12）
- https://raw.githubusercontent.com/milind-soni/tiptour-macos/c1d2731766ba21160b9b9f7d5178c3ad3bb5e055/docs/tiptour-agent-contract.md（获取于 2026-10-18T11:57:48Z；SHA-256：b2e40abe98520eb948e07f7b3f01c5a1f33c50c988bcb447ce1708519299ba76）
- https://raw.githubusercontent.com/milind-soni/tiptour-macos/c1d2731766ba21160b9b9f7d5178c3ad3bb5e055/TipTour/Jev/JevClient.swift（获取于 2026-10-18T11:57:48Z；SHA-256：0739dc4d312a7d8e9d217c499a7ab3ee11e1b538f14edd6419f18508ecbcad08）
- https://raw.githubusercontent.com/milind-soni/tiptour-macos/c1d2731766ba21160b9b9f7d5178c3ad3bb5e055/LICENSE（获取于 2026-10-18T11:57:47Z；SHA-256：edcf5cfca262f2e2cf30a2e7564c11e147492d175b5c5ad2175cd350cf853ad6）
- https://raw.githubusercontent.com/milind-soni/tiptour-macos/HEAD/LICENSE（获取于 2026-10-19T06:14:21Z；SHA-256：edcf5cfca262f2e2cf30a2e7564c11e147492d175b5c5ad2175cd350cf853ad6）
