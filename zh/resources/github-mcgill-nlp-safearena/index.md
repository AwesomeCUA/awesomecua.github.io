---
title: "SafeArena · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-mcgill-nlp-safearena/
updated: 2026-10-16
type: benchmark
lang: zh-CN
---

# SafeArena

SafeArena 是将良性与有害任务配对、用于研究蓄意滥用风险的网页智能体基准。

- 目录页面：https://awesomecua.com/zh/resources/github-mcgill-nlp-safearena/
- English：https://awesomecua.com/resources/github-mcgill-nlp-safearena/index.md
- 原始来源：https://github.com/McGill-NLP/safearena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护、评测
- 证据核查日期：2026-10-16T09:36:33Z
- ID：github:mcgill-nlp/safearena

- 完整记录 JSON：https://awesomecua.com/resources/github-mcgill-nlp-safearena/record.json

## 结构化规格

- 动作 / 输出：web interactions
- 评测方式：Task outcomes and the Agent Risk Assessment categories evaluate agent behavior on benign and harmful requests.
- 侧重：web-agent safety, task completion
- 观测：未记录
- 任务设置：交互式

### 数量记录

- 250 个任务 — safe split（来源报告；来源：https://arxiv.org/abs/2503.04957）
- 250 个任务 — harmful split（来源报告；来源：https://arxiv.org/abs/2503.04957）

Use SafeArena-specific containers. The documented task splits require access approval.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/McGill-NLP/safearena/HEAD/README.md（获取于 2026-10-16T09:36:33Z；SHA-256：ae50121aa60ac26b32d8d6ad6f578f9091a81a3cb9ca28b98050bddee16c929a）
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending（获取于 2026-10-16T06:36:54Z；SHA-256：4953a8e0f029016aef668bce98cec4d2873a7ae49c1fe33c4311fa5eb8d24089）
