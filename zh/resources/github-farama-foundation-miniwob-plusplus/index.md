---
title: "MiniWoB++ · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-farama-foundation-miniwob-plusplus/
updated: 2026-10-17
type: benchmark
lang: zh-CN
---

# MiniWoB++

扩展自 OpenAI MiniWoB 的 100 多个网页交互环境，可通过 Python 中的 Gymnasium API 使用 Selenium 控制浏览器。

- 目录页面：https://awesomecua.com/zh/resources/github-farama-foundation-miniwob-plusplus/
- English：https://awesomecua.com/resources/github-farama-foundation-miniwob-plusplus/index.md
- 原始来源：https://github.com/Farama-Foundation/miniwob-plusplus
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、强化学习
- 证据核查日期：2026-10-16T06:40:54Z
- ID：github:farama-foundation/miniwob-plusplus

## 范围记录

The maintainer README identifies MiniWoB++ as the extension introduced in the 2018 workflow-guided exploration paper. It separately links World of Bits as the source for the original MiniWoB predecessor. The current Farama interface, environment inventory, and maintenance status belong to the retained repository snapshot.

- 完整记录 JSON：https://awesomecua.com/resources/github-farama-foundation-miniwob-plusplus/record.json

## 结构化规格

- 动作 / 输出：configurable coordinate actions, element-reference actions, keyboard input
- 评测方式：未记录
- 侧重：small web interaction tasks
- 观测：task instructions, screenshots, visible DOM-element attributes
- 任务设置：交互式

### 数量记录

- > 100 个 Web 环境 — README collection size（来源报告；来源：https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/README.md）

The README gives a lower bound for the active-environment inventory. Action presets expose different capabilities, so comparisons must identify the preset. The repository is in maintenance mode.

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/README.md（获取于 2026-10-16T06:40:54Z；SHA-256：90499776fa1b23e08ac85190ad3be709caa9172ff4f2a0a106b0fa350568e86f）
- https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/README.md（获取于 2026-10-16T06:40:54Z；SHA-256：90499776fa1b23e08ac85190ad3be709caa9172ff4f2a0a106b0fa350568e86f）
- https://miniwob.farama.org/content/observation_space/（获取于 2026-10-17T02:03:23Z；SHA-256：511039e0e3c26b117e7e0a001746c26ec6d94a8ab8c467f0be0bc1a0b01e870a）
- https://miniwob.farama.org/content/action_space/（获取于 2026-10-17T02:03:23Z；SHA-256：ae7bf6a3b98b198b985d7ca7b41cb2bdab3cf48e6445467ad9a8d4a2c8df240f）
- https://raw.githubusercontent.com/Farama-Foundation/miniwob-plusplus/HEAD/LICENSE（获取于 2026-10-16T06:42:07Z；SHA-256：fd6529fb8f648d4130fd969e3d7fc740c9992a0bd94a1998f52555a873311511）
