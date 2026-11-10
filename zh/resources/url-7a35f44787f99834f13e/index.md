---
title: "Ace · 产品 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-7a35f44787f99834f13e/
updated: 2026-10-19
type: product
lang: zh-CN
---

# Ace

General Agents 的桌面自动驾驶工具根据录制的专家行为训练，从截图预测点击、按键及其他动作；其 API 客户端附带执行动作的 macOS 控制器。

- 目录页面：https://awesomecua.com/zh/resources/url-7a35f44787f99834f13e/
- English：https://awesomecua.com/resources/url-7a35f44787f99834f13e/index.md
- 原始来源：https://generalagents.com/ace
- 类型：产品
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：自动化、GUI 定位、模仿学习
- 证据核查日期：2026-10-19T06:24:22Z
- ID：url:7a35f44787f99834f13e

## 范围记录

The Ace page describes a computer autopilot that uses the mouse and keyboard on the user's desktop, says it was trained by software specialists and domain experts on over a million tasks, and charts publisher figures for click-prediction accuracy for ace-control-medium and ace-control-small against Operator, Claude 3.7 Sonnet, UI-TARS-72B-SFT and other models, plus action latency. The About page says Ace learns from experts' screen recordings with mouse and keyboard logs, and that General Agents is developing video-language-action models. The official Python client (generalagents-python 0.1.1 at commit d36f6a8) posts a WebP screenshot, the instruction and recent actions to /v1/control/predict on api.generalagents.com; its macOS Computer class captures the screen with screencapture and performs clicks, drags, scrolls, key presses and typing through pyautogui. Apache-2.0 covers the client's code. At review time api.generalagents.com and docs.generalagents.com had DNS resolution failures; the reviewed pages leave pricing, download and sign-up paths unspecified, so current availability remains unknown.

- 完整记录 JSON：https://awesomecua.com/resources/url-7a35f44787f99834f13e/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://generalagents.com/ace（获取于 2026-10-19T06:24:22Z；SHA-256：adecc8e6c94df3363de75630191eaed47ee82dff7ba675540b1a710c50a38de8）
- https://generalagents.com/about（获取于 2026-10-19T06:24:05Z；SHA-256：d1025a19c3e0ca083dea325fb1025046e004d5588167b557039c594ee9bdd661）
- https://raw.githubusercontent.com/generalagents/generalagents-python/d36f6a858685fb1d7842b6f05c8af501130f8efc/README.md（获取于 2026-10-19T06:24:05Z；SHA-256：4e48a9a8621540dfac3abc14bc889e633e8c1f61ba1907153bd91f7f19d97dbc）
- https://raw.githubusercontent.com/generalagents/generalagents-python/d36f6a858685fb1d7842b6f05c8af501130f8efc/src/generalagents/agent.py（获取于 2026-10-19T06:24:05Z；SHA-256：7c1b9d4ba8723d83bcdd7f3193cc145f32f8244ad2e43d14ca32bb60b79a667d）
- https://raw.githubusercontent.com/generalagents/generalagents-python/d36f6a858685fb1d7842b6f05c8af501130f8efc/src/generalagents/macos/computer.py（获取于 2026-10-19T06:24:05Z；SHA-256：154bf2204a1a519915fd0fb36053a3dfc9d58166d16e5e441d2e720e1954499d）
