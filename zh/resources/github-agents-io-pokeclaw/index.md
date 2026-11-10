---
title: "PokeClaw · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-agents-io-pokeclaw/
updated: 2026-10-18
type: agent
lang: zh-CN
---

# PokeClaw

Android 应用在设备端运行手机控制智能体，通过 Accessibility 服务读取 UI 树，并用设备端 Gemma 4 或可选云端模型执行点击、滑动和输入。

- 目录页面：https://awesomecua.com/zh/resources/github-agents-io-pokeclaw/
- English：https://awesomecua.com/resources/github-agents-io-pokeclaw/index.md
- 原始来源：https://github.com/agents-io/PokeClaw
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、自动化
- 证据核查日期：2026-10-18T11:54:35Z
- ID：github:agents-io/pokeclaw

## 范围记录

Also called PocketClaw. The task loop runs inside the installed APK; ADB control from a host is outside this architecture. Local mode runs Gemma 4 through LiteRT-LM after a model download of about 2.6 GB; Cloud mode calls a hosted model. The tool registry also has notification, clipboard, call, file and knowledge-base tools, plus a separate D-pad tool set for Android TV devices. The README reports pass rates, for example 18 of 20 cloud tasks on a Pixel 8 Pro, from the author's trials.

- 完整记录 JSON：https://awesomecua.com/resources/github-agents-io-pokeclaw/record.json

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/agents-io/PokeClaw/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/agents-io/PokeClaw/HEAD/README.md（获取于 2026-10-18T11:54:35Z；SHA-256：2aa506fd4870c06d311d6c1f4f00eaa5367705ee903491e034b5cdd2842408fc）
- https://raw.githubusercontent.com/agents-io/PokeClaw/936eca3ef7881e37908b5f183bf948ccaf1615e4/app/src/main/java/io/agents/pokeclaw/tool/ToolRegistry.kt（获取于 2026-10-18T11:54:10Z；SHA-256：d38651fb47b4a9b8b83200b60ee8160d13728477b48a04a4881b31b74ddf501c）
- https://raw.githubusercontent.com/agents-io/PokeClaw/936eca3ef7881e37908b5f183bf948ccaf1615e4/app/src/main/java/io/agents/pokeclaw/service/ClawAccessibilityService.java（获取于 2026-10-18T11:54:11Z；SHA-256：3c7d43e9fa6ed01b04ebf90fc25ddb2191a4db9f5501e52dd020bf00b8ec6b1d）
- https://raw.githubusercontent.com/agents-io/PokeClaw/936eca3ef7881e37908b5f183bf948ccaf1615e4/LICENSE（获取于 2026-10-18T11:54:11Z；SHA-256：4387763272c00e188bf8a111b9f99babfa7bf877ed56e774ed6a02a4856512ac）
- https://raw.githubusercontent.com/agents-io/PokeClaw/HEAD/LICENSE（获取于 2026-10-18T11:54:51Z；SHA-256：4387763272c00e188bf8a111b9f99babfa7bf877ed56e774ed6a02a4856512ac）
