---
title: "WONDERBREAD · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-hazyresearch-wonderbread/
updated: 2026-10-17
type: benchmark
lang: zh-CN
---

# WONDERBREAD

WONDERBREAD 是用于评估工作流程文档编写、质量评估和知识迁移的离线基准，使用人类网页导航演示、操作轨迹和书面流程。

- 目录页面：https://awesomecua.com/zh/resources/github-hazyresearch-wonderbread/
- English：https://awesomecua.com/resources/github-hazyresearch-wonderbread/index.md
- 原始来源：https://github.com/HazyResearch/wonderbread
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、工作流、视频、界面理解
- 证据核查日期：2026-10-17T09:12:11Z
- ID：github:hazyresearch/wonderbread

## 范围记录

The repository contains evaluation and collection code; the linked Zenodo release exposes the full, gold and debug demonstration archives and metadata. This measures workflow understanding. Zenodo declares CC-BY-4.0 for that dataset; no repository-level code license was found.

- 完整记录 JSON：https://awesomecua.com/resources/github-hazyresearch-wonderbread/record.json

## 结构化规格

- 动作 / 输出：generate procedures, segment demonstrations, answer workflow questions, validate and rank procedures
- 评测方式：Task-specific scripts evaluate six workflow-understanding task types.
- 侧重：workflow documentation, workflow quality assessment, workflow knowledge transfer
- 观测：screen recordings, action traces, screenshots, written standard operating procedures
- 任务设置：离线

### 数量记录

- 6 种任务类型 — WONDERBREAD BPM benchmark（来源报告；来源：https://raw.githubusercontent.com/HazyResearch/wonderbread/HEAD/README.md）
- 2,928 条人工演示 — full dataset release 14094162（来源报告；来源：https://zenodo.org/api/records/14094162）
- 598 个网页导航工作流 — full dataset release 14094162（来源报告；来源：https://zenodo.org/api/records/14094162）
- 724 条人工演示 — gold subset used for the original paper evaluations（来源报告；来源：https://zenodo.org/api/records/14094162）

Counts are publisher-reported. The gold subset covers 162 workflows and differs from the full collection; scores require the exact task and subset.

## 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://zenodo.org/api/records/14094162
- 文档：未记录
- 权重：未记录

- 数据审核：The linked Zenodo dataset release declares CC-BY-4.0.
  来源：https://zenodo.org/api/records/14094162

## 一手证据

- https://raw.githubusercontent.com/HazyResearch/wonderbread/HEAD/README.md（获取于 2026-10-17T09:12:11Z；SHA-256：1e4308d59a22b39543c28b745a58d3d7c47be1ab9df9a4c5c0fe868a810350b2）
- https://api.github.com/repos/HazyResearch/wonderbread（获取于 2026-10-17T09:12:11Z；SHA-256：5ba27e24455b36b52bf65b3c9f589e760f97a576bb01d622d89836c5bb53b38c）
- https://api.github.com/repos/HazyResearch/wonderbread/git/trees/main?recursive=1（获取于 2026-10-17T09:14:04Z；SHA-256：accb518a5362948cf96e9f0b684fb6fcc9b26e43a691016ae70a3283c0e1e2c2）
- https://zenodo.org/api/records/14094162（获取于 2026-10-17T09:15:34Z；SHA-256：68b4b952c1ab90484d457b392de1d0c95a24f6cc1674c82125a6bd26f1cb1016）
