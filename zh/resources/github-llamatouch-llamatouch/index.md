---
title: "LlamaTouch · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-llamatouch-llamatouch/
updated: 2026-10-17
type: benchmark
lang: zh-CN
---

# LlamaTouch

LlamaTouch 利用应用状态信息评估移动端 UI 任务。

- 目录页面：https://awesomecua.com/zh/resources/github-llamatouch-llamatouch/
- English：https://awesomecua.com/resources/github-llamatouch-llamatouch/index.md
- 原始来源：https://github.com/LlamaTouch/LlamaTouch
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:llamatouch/llamatouch

- 完整记录 JSON：https://awesomecua.com/resources/github-llamatouch-llamatouch/record.json

## 结构化规格

- 动作 / 输出：device actions through AgentEnv
- 评测方式：Checks whether the recorded execution visits all annotated essential states.
- 侧重：mobile task completion, essential-state evaluation
- 观测：screenshots, view hierarchies, Android activity names
- 任务设置：交互式

### 数量记录

- 495 个任务 — complete task collection（来源报告；来源：https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md）
- 102 个任务 — AITW-derived subset（来源报告；来源：https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md）
- 393 个任务 — self-constructed subset（来源报告；来源：https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md）
- 46 个 Android 应用 — self-constructed subset（来源报告；来源：https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md）

Application coverage refers to the self-constructed subset. Task execution and essential-state annotation are separate components; counts are publisher-reported.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：4c4fe0fa92961f7286b6553b13117b2942e8482a48b7120a79e57dce2f8d42b9）
- https://raw.githubusercontent.com/LlamaTouch/LlamaTouch/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：4c4fe0fa92961f7286b6553b13117b2942e8482a48b7120a79e57dce2f8d42b9）
