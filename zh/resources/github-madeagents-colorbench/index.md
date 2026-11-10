---
title: "ColorBench · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-madeagents-colorbench/
updated: 2026-10-17
type: benchmark
lang: zh-CN
---

# ColorBench

ColorBench 是基于图的移动 GUI 基准，通过截图状态及多种有效或错误的状态转移评估长任务，涵盖反思、重新规划和回退。

- 目录页面：https://awesomecua.com/zh/resources/github-madeagents-colorbench/
- English：https://awesomecua.com/resources/github-madeagents-colorbench/index.md
- 原始来源：https://github.com/MadeAgents/ColorBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作、长任务、跨应用
- 证据核查日期：2026-10-17T11:18:16Z
- ID：github:madeagents/colorbench

## 范围记录

The source tree contains graph and task JSON files plus construction/evaluation code; the linked ungated Hub provides the screenshot archive. The environment is static, interactive and graph-based. Counts are publisher-reported task/app inventories. Apache-2.0 declarations for repository code and the Hub dataset are separately retained; third-party application visuals are not granted additional rights by this catalog.

- 完整记录 JSON：https://awesomecua.com/resources/github-madeagents-colorbench/record.json

## 结构化规格

- 动作 / 输出：mobile GUI operations along graph transitions
- 评测方式：The publisher reports success rate, completion rate and atomic-capability diagnostics using graph-based evaluation.
- 侧重：long-horizon mobile task completion, multi-path graph interaction
- 观测：mobile screenshots represented as graph states
- 任务设置：交互式

### 数量记录

- 175 个任务 — reported ColorBench benchmark（来源报告；来源：https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md）
- 101 个跨应用任务 — reported ColorBench benchmark（来源报告；来源：https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md）
- 74 个单应用任务 — reported ColorBench benchmark（来源报告；来源：https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md）
- 21 个移动应用 — reported ColorBench benchmark（来源报告；来源：https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md）

The interaction environment replays graph states. The 101 and 74 subsets partition the reported 175 tasks.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/LICENSE
- 数据：apache-2.0 — https://huggingface.co/datasets/Norsheep/ColorBench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 代码审核：Repository source LICENSE.
  来源：https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/LICENSE

- 数据审核：Publisher metadata for the separately hosted screenshot archive; underlying third-party content retains applicable rights.
  来源：https://huggingface.co/datasets/Norsheep/ColorBench/raw/main/README.md

## 一手证据

- https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/README.md（获取于 2026-10-17T11:18:16Z；SHA-256：5c0190fffb68b91c1855a408f6a5e252871d94000b95fa258504a3c100600cec）
- https://api.github.com/repos/MadeAgents/ColorBench（获取于 2026-10-17T11:18:16Z；SHA-256：2f6940503cc0d6cb97bdf142d6b8c6ab116de82227f2fa6d97fd56d7e5aebec0）
- https://api.github.com/repos/MadeAgents/ColorBench/git/trees/main?recursive=1（获取于 2026-10-17T11:22:54Z；SHA-256：6a00c093a6794ec4a172d30b70fdabc17400584a9e25a157a47a7661dbdd20fa）
- https://huggingface.co/api/datasets/Norsheep/ColorBench（获取于 2026-10-17T11:23:06Z；SHA-256：c0c3286b5150e128e55034ba0393ef85f7fcf73e4b73f4276389a04c9bcec919）
- https://huggingface.co/datasets/Norsheep/ColorBench/raw/main/README.md（获取于 2026-10-17T11:23:06Z；SHA-256：4bcf87ecfbbb8e07a01b21415a970c8b53a5283bf6872b657040d3f45c9241f7）
- https://raw.githubusercontent.com/MadeAgents/ColorBench/HEAD/LICENSE（获取于 2026-10-17T11:22:54Z；SHA-256：130976c026bcafa9dcc479697fe6595dbefb73cdb375fc47b8478acc16e6ea73）
