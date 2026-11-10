---
title: "OS AI Computer Use · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-777genius-os-ai-computer-use/
updated: 2026-10-18
type: agent
lang: zh-CN
---

# OS AI Computer Use

本地桌面智能体，将纯截图发送给 OpenAI 或 Anthropic 的计算机使用工具，并通过基于 PyAutoGUI 的驱动在 macOS、Windows 和 Linux 上执行返回的点击、拖拽、滚动和按键操作。

- 目录页面：https://awesomecua.com/zh/resources/github-777genius-os-ai-computer-use/
- English：https://awesomecua.com/resources/github-777genius-os-ai-computer-use/index.md
- 原始来源：https://github.com/777genius/os-ai-computer-use
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS、Windows、Linux
- 主题：自动化、跨应用
- 证据核查日期：2026-10-18T15:38:22Z
- ID：github:777genius/os-ai-computer-use

## 范围记录

Provider adapters call the OpenAI Responses API with its computer tool (batched actions) or Anthropic's computer-use tool (single actions with zoom); packages/core/src/os_ai_core/tools/computer.py captures the screen and executes actions through per-OS driver ports. macOS uses PyAutoGUI with a Quartz event path for Enter and an AppKit overlay; Windows and Linux (X11 or XWayland) use PyAutoGUI. A Flutter client (macOS, Windows, Linux, web) talks to a local backend; the CLI runs tasks directly. The README headline of 75.0% on OSWorld is a model-provider figure. The repository was formerly iliyaZelenko/os-ai-computer-use (same GitHub repository ID).

- 完整记录 JSON：https://awesomecua.com/resources/github-777genius-os-ai-computer-use/record.json

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/777genius/os-ai-computer-use/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/777genius/os-ai-computer-use/HEAD/README.md（获取于 2026-10-18T15:38:22Z；SHA-256：c2536b1182e7ee2e0e25a6676457a599be9d16e7ccdab47e08f7780dab56f6fe）
- https://raw.githubusercontent.com/777genius/os-ai-computer-use/0356f418d61d7cace737eaa48f3d3a014e4ea249/packages/core/src/os_ai_core/tools/computer.py（获取于 2026-10-18T15:37:56Z；SHA-256：6da904ac0b6c1fe6b1b51d4bd87fc73f8d2a61516f38b1d908672a7c5581f267）
- https://raw.githubusercontent.com/777genius/os-ai-computer-use/0356f418d61d7cace737eaa48f3d3a014e4ea249/packages/llm_openai/src/os_ai_llm_openai/adapters_openai.py（获取于 2026-10-18T15:37:56Z；SHA-256：cc18ce96fa9d01148d93e6efd99b3f24011f37a93e8ff3f8265494d874946630）
- https://raw.githubusercontent.com/777genius/os-ai-computer-use/0356f418d61d7cace737eaa48f3d3a014e4ea249/packages/llm_anthropic/src/os_ai_llm_anthropic/adapters_anthropic.py（获取于 2026-10-18T15:37:57Z；SHA-256：5979aafe65529b9abdc1f2a61b6f5c8f4d5ad0cacadca28d3823cf9070a9ee6b）
- https://raw.githubusercontent.com/777genius/os-ai-computer-use/0356f418d61d7cace737eaa48f3d3a014e4ea249/packages/os/src/os_ai_os/defaults.py（获取于 2026-10-18T15:37:57Z；SHA-256：645c009659bc53740cf1c7e4076c161b8dd8956d2abf5b43678880a53d0433a0）
- https://raw.githubusercontent.com/777genius/os-ai-computer-use/0356f418d61d7cace737eaa48f3d3a014e4ea249/packages/os-macos/src/os_ai_os_macos/drivers.py（获取于 2026-10-18T15:37:58Z；SHA-256：6573d50e6d79153bb7c944d9ba87a74e6e0dcf8dc16c04d4e39366b365a119e7）
- https://raw.githubusercontent.com/777genius/os-ai-computer-use/0356f418d61d7cace737eaa48f3d3a014e4ea249/LICENSE（获取于 2026-10-18T15:37:58Z；SHA-256：4297658ee10a19e840fe1c2411541d4c1654df6e47767a82af2a1b209fcac749）
- https://raw.githubusercontent.com/777genius/os-ai-computer-use/HEAD/LICENSE（获取于 2026-10-18T15:38:32Z；SHA-256：4297658ee10a19e840fe1c2411541d4c1654df6e47767a82af2a1b209fcac749）
- https://api.github.com/repos/iliyaZelenko/os-ai-computer-use（获取于 2026-10-18T15:37:45Z；SHA-256：95b963db22daa46036d65c4bda413c3f1e839660d4f93d09049dc2882ba7e653）
- https://api.github.com/repos/777genius/os-ai-computer-use（获取于 2026-10-18T15:37:46Z；SHA-256：95b963db22daa46036d65c4bda413c3f1e839660d4f93d09049dc2882ba7e653）
