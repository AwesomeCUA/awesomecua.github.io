---
title: "Windows Agent Arena · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-microsoft-windowsagentarena/
updated: 2026-10-20
type: benchmark
lang: zh-CN
---

# Windows Agent Arena

面向多模态桌面智能体的 Windows 11 基准，在可复现的虚拟机中本地运行或通过 Azure ML 并行运行；更难的模式要求智能体自行设置任务。

- 目录页面：https://awesomecua.com/zh/resources/github-microsoft-windowsagentarena/
- English：https://awesomecua.com/resources/github-microsoft-windowsagentarena/index.md
- 原始来源：https://github.com/microsoft/WindowsAgentArena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Windows、桌面
- 主题：评测
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:microsoft/windowsagentarena

- 完整记录 JSON：https://awesomecua.com/resources/github-microsoft-windowsagentarena/record.json

## 结构化规格

- 动作 / 输出：agent-defined Windows interactions
- 评测方式：Task configuration selects an evaluator and expected application or system outcome; evaluators return a reward for the resulting state.
- 侧重：Windows task completion, desktop workflows
- 观测：screenshots, accessibility information, screen-element detections
- 任务设置：交互式

### 数量记录

- 154 个任务定义 — evaluation_examples_windows/test_all.json（计算得出）（来源：https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_all.json）

Counted unique identifiers in the inspected manifest. Normal and hard modes differ in how much task setup the agent must perform. Record the difficulty and observation/backend configuration with each result; no VM was launched.

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：e481abd422a4cc8b819ad84b32684e4af641e18a7c0d277dd608cfd5d3c5e6ad）
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：e481abd422a4cc8b819ad84b32684e4af641e18a7c0d277dd608cfd5d3c5e6ad）
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/docs/Develop-Tasks.md（获取于 2026-10-17T02:06:30Z；SHA-256：c565dc02ab0049bf9710b87e2760dda8d7c92268ea78f0354952695ab59c0de3）
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_all.json（获取于 2026-10-17T02:06:30Z；SHA-256：902fb24cf0a9e146bf6c29288e74a7254fe40294e49dd47363e0b15d65608fef）
- https://raw.githubusercontent.com/microsoft/WindowsAgentArena/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：9906940f61b1f0b533fa7d99baf55178b2808fbe113ea51dfbfad8572ccd5f2b）
